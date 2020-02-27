const puppeteer = require('puppeteer');
const fs = require('fs');

console.log('Generating airline data...');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/List_of_airline_codes');

  try {
    const airlines = await page.evaluate(() => {
      const trs = document.querySelectorAll('table tbody tr');

      const airlines = [];
      const idCache = [];

      trs.forEach(tr => {
        const tds = tr.querySelectorAll('td');
        if (!tds[0]) return;
        const iata = tds[0].textContent.trim();
        if (!iata || !tds[2]) return;
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

    if (airlines.length === 0) {
      console.log('No airline data to generate.');
      await browser.close();
      return;
    }

    fs.writeFile(
      'public/airlines.json',
      JSON.stringify(airlines),
      'utf8',
      async () => {
        console.log(`Generated ${airlines.length} airline data!`);
        await browser.close();
      }
    );

    fs.writeFile(
      'functions/airlines.json',
      JSON.stringify(airlines),
      'utf8',
      async () => {
        console.log(`Generated ${airlines.length} airline data (functions)!`);
        await browser.close();
      }
    );
  } catch (error) {
    console.error('Error generating airline data', error);
    await browser.close();
    return;
  }
})();
