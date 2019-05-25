const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/List_of_airline_codes');

  const airlines = await page.evaluate(() => {
    const trs = document.querySelectorAll('table tbody tr');

    const airlines = [];
    const idCache = [];

    trs.forEach(tr => {
      const tds = tr.querySelectorAll('td');
      const iata = tds[0].textContent.trim();
      if (!iata) return;
      const airline = tds[2].textContent.trim();
      const id = `${iata}_${airline.toLowerCase()}`;
      if (idCache.indexOf(id) !== -1) {
        return;
      }
      idCache.push(id);
      airlines.push({ id, iata, airline });
    });

    return airlines;
  });

  fs.writeFile(
    'src/airlines.json',
    JSON.stringify(airlines),
    'utf8',
    async () => {
      await browser.close();
    }
  );
})();
