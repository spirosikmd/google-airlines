export interface AirlineData {
  id: string;
  iata: string;
  airline: string;
}

const AIRLINES: AirlineData[] = [
  {
    id: '1T_hitit computer services',
    iata: '1T',
    airline: 'Hitit Computer Services'
  },
  { id: 'Q5_40-mile air', iata: 'Q5', airline: '40-Mile Air' },
  { id: '4R_star east airline', iata: '4R', airline: 'Star East Airline' },
  { id: '4O_interjet', iata: '4O', airline: 'Interjet' },
  { id: '7A_express air cargo', iata: '7A', airline: 'Express Air Cargo' },
  { id: '7C_jeju air', iata: '7C', airline: 'Jeju Air' },
  {
    id: 'JY_intercaribbean airways',
    iata: 'JY',
    airline: 'InterCaribbean Airways'
  },
  { id: 'JU_air serbia', iata: 'JU', airline: 'Air Serbia' },
  { id: 'QH_air kyrgyzstan', iata: 'QH', airline: 'Air Kyrgyzstan' },
  { id: 'XK_air corsica', iata: 'XK', airline: 'Air Corsica' },
  { id: 'EI_aer lingus', iata: 'EI', airline: 'Aer Lingus' },
  { id: 'A8_aerolink uganda', iata: 'A8', airline: 'Aerolink Uganda' },
  { id: 'RV_air canada rouge', iata: 'RV', airline: 'Air Canada Rouge' },
  {
    id: '7A_aztec worldwide airlines',
    iata: '7A',
    airline: 'Aztec Worldwide Airlines'
  },
  {
    id: '1B_abacus international',
    iata: '1B',
    airline: 'Abacus International'
  },
  { id: 'W9_abelag aviation', iata: 'W9', airline: 'Abelag Aviation' },
  { id: '6U_air cargo germany', iata: '6U', airline: 'Air Cargo Germany' },
  {
    id: 'E4_aero asia international',
    iata: 'E4',
    airline: 'Aero Asia International'
  },
  { id: 'ZI_aigle azur', iata: 'ZI', airline: 'Aigle Azur' },
  { id: 'AE_air ceylon', iata: 'AE', airline: 'Air Ceylon' },
  { id: 'OZ_asiana airlines', iata: 'OZ', airline: 'Asiana Airlines' },
  { id: '4K*_askari aviation', iata: '4K*', airline: 'Askari Aviation' },
  { id: '8U_afriqiyah airways', iata: '8U', airline: 'Afriqiyah Airways' },
  {
    id: 'Q9_afrinat international airlines',
    iata: 'Q9',
    airline: 'Afrinat International Airlines'
  },
  { id: 'KI_air atlantique', iata: 'KI', airline: 'Air Atlantique' },
  { id: 'QB_air alma', iata: 'QB', airline: 'Air Alma' },
  { id: 'LD_air hong kong', iata: 'LD', airline: 'Air Hong Kong' },
  { id: 'UX_air europa', iata: 'UX', airline: 'Air Europa' },
  { id: 'IG_air italy', iata: 'IG', airline: 'Air Italy' },
  { id: 'NX_air macau', iata: 'NX', airline: 'Air Macau' },
  { id: 'ZV_air midwest', iata: 'ZV', airline: 'Air Midwest' },
  { id: 'HM_air seychelles', iata: 'HM', airline: 'Air Seychelles' },
  { id: 'AF_air france', iata: 'AF', airline: 'Air France' },
  {
    id: 'SB_air caledonie international',
    iata: 'SB',
    airline: 'Air Caledonie International'
  },
  {
    id: 'EH_air nippon network co. ltd.',
    iata: 'EH',
    airline: 'Air Nippon Network Co. Ltd.'
  },
  { id: 'ZW_air wisconsin', iata: 'ZW', airline: 'Air Wisconsin' },
  { id: 'GN_air gabon', iata: 'GN', airline: 'Air Gabon' },
  { id: 'NQ_air japan', iata: 'NQ', airline: 'Air Japan' },
  { id: 'VD_air liberté', iata: 'VD', airline: 'Air Liberté' },
  { id: 'TT_air lithuania', iata: 'TT', airline: 'Air Lithuania' },
  {
    id: '4N_air north charter - canada',
    iata: '4N',
    airline: 'Air North Charter - Canada'
  },
  { id: 'NZ\nTE_air new zealand', iata: 'NZ\nTE', airline: 'Air New Zealand' },
  { id: 'QM_air malawi', iata: 'QM', airline: 'Air Malawi' },
  { id: 'ML_air mediterranee', iata: 'ML', airline: 'Air Mediterranee' },
  { id: 'P8_air mekong', iata: 'P8', airline: 'Air Mekong' },
  { id: 'BM_air sicilia', iata: 'BM', airline: 'Air Sicilia' },
  { id: 'ZX_air bc', iata: 'ZX', airline: 'Air BC' },
  { id: 'G8_air service gabon', iata: 'G8', airline: 'Air Service Gabon' },
  { id: '7T_air glaciers', iata: '7T', airline: 'Air Glaciers' },
  { id: '6V_air vegas', iata: '6V', airline: 'Air Vegas' },
  { id: 'NH_all nippon airways', iata: 'NH', airline: 'All Nippon Airways' },
  { id: 'TZ_air-taxi europe', iata: 'TZ', airline: 'air-taxi Europe' },
  { id: '2Q_air cargo carriers', iata: '2Q', airline: 'Air Cargo Carriers' },
  {
    id: 'V7_air senegal international',
    iata: 'V7',
    airline: 'Air Senegal International'
  },
  { id: 'AB_air berlin', iata: 'AB', airline: 'Air Berlin' },
  { id: '4D_air sinai', iata: '4D', airline: 'Air Sinai' },
  { id: 'QN_air armenia', iata: 'QN', airline: 'Air Armenia' },
  { id: 'AI_air india limited', iata: 'AI', airline: 'Air India Limited' },
  { id: 'PJ_air saint pierre', iata: 'PJ', airline: 'Air Saint Pierre' },
  { id: 'SZ_air southwest', iata: 'SZ', airline: 'Air Southwest' },
  {
    id: '8C_air transport international',
    iata: '8C',
    airline: 'Air Transport International'
  },
  { id: 'NF_air vanuatu', iata: 'NF', airline: 'Air Vanuatu' },
  { id: 'ZB_air bourbon', iata: 'ZB', airline: 'Air Bourbon' },
  {
    id: 'CC_air atlanta icelandic',
    iata: 'CC',
    airline: 'Air Atlanta Icelandic'
  },
  { id: 'RB_air srpska', iata: 'RB', airline: 'Air Srpska' },
  { id: 'TN_air tahiti nui', iata: 'TN', airline: 'Air Tahiti Nui' },
  { id: 'SW_air namibia', iata: 'SW', airline: 'Air Namibia' },
  {
    id: 'AW_africa world airlines',
    iata: 'AW',
    airline: 'Africa World Airlines'
  },
  { id: 'PE_air europe italy', iata: 'PE', airline: 'Air Europe Italy' },
  { id: 'JM_air jamaica', iata: 'JM', airline: 'Air Jamaica' },
  { id: '6G_air wales', iata: '6G', airline: 'Air Wales' },
  { id: 'TX_air caraïbes', iata: 'TX', airline: 'Air Caraïbes' },
  { id: 'IX_air india express', iata: 'IX', airline: 'Air India Express' },
  { id: 'BT_air baltic', iata: 'BT', airline: 'Air Baltic' },
  { id: 'EL_air nippon', iata: 'EL', airline: 'Air Nippon' },
  { id: 'YW_air nostrum', iata: 'YW', airline: 'Air Nostrum' },
  { id: 'PX_air niugini', iata: 'PX', airline: 'Air Niugini' },
  { id: 'G9_air arabia', iata: 'G9', airline: 'Air Arabia' },
  { id: 'AC_air canada', iata: 'AC', airline: 'Air Canada' },
  { id: 'AP_albastar', iata: 'AP', airline: 'AlbaStar' },
  { id: 'XT_air exel', iata: 'XT', airline: 'Air Exel' },
  { id: 'UM_air zimbabwe', iata: 'UM', airline: 'Air Zimbabwe' },
  { id: 'S2_air sahara', iata: 'S2', airline: 'Air Sahara' },
  { id: 'TC_air tanzania', iata: 'TC', airline: 'Air Tanzania' },
  { id: '2J_air burkina', iata: '2J', airline: 'Air Burkina' },
  { id: 'KM_air malta', iata: 'KM', airline: 'Air Malta' },
  { id: 'YT_air togo', iata: 'YT', airline: 'Air Togo' },
  { id: 'G4_allegiant air', iata: 'G4', airline: 'Allegiant Air' },
  { id: 'M3_absa cargo', iata: 'M3', airline: 'ABSA Cargo' },
  { id: 'O4_antrak air', iata: 'O4', airline: 'Antrak Air' },
  { id: 'GB_airborne express', iata: 'GB', airline: 'Airborne Express' },
  { id: 'GB_abx air', iata: 'GB', airline: 'ABX Air' },
  { id: '8V_astral aviation', iata: '8V', airline: 'Astral Aviation' },
  {
    id: '4G*_advance leasing company',
    iata: '4G*',
    airline: 'Advance Leasing Company'
  },
  { id: '8T_air tindi', iata: '8T', airline: 'Air Tindi' },
  { id: 'Z7*_adc airlines', iata: 'Z7*', airline: 'ADC Airlines' },
  { id: 'JP_adria airways', iata: 'JP', airline: 'Adria Airways' },
  { id: 'EM*_aero benin', iata: 'EM*', airline: 'Aero Benin' },
  { id: 'A3_aegean airlines', iata: 'A3', airline: 'Aegean Airlines' },
  { id: '2K_aerogal', iata: '2K', airline: 'Aerogal' },
  { id: 'KD_air enterprise', iata: 'KD', airline: 'Air Enterprise' },
  {
    id: 'KO_alaska central express',
    iata: 'KO',
    airline: 'Alaska Central Express'
  },
  { id: 'VX_aces colombia', iata: 'VX', airline: 'ACES Colombia' },
  { id: 'KH_aloha air cargo', iata: 'KH', airline: 'Aloha Air Cargo' },
  { id: 'AA_american airlines', iata: 'AA', airline: 'American Airlines' },
  {
    id: 'AX_americanconnection[5]',
    iata: 'AX',
    airline: 'AmericanConnection[5]'
  },
  { id: 'AN_ansett australia', iata: 'AN', airline: 'Ansett Australia' },
  { id: '5W_astraeus', iata: '5W', airline: 'Astraeus' },
  { id: 'VV_aerosvit airlines', iata: 'VV', airline: 'Aerosvit Airlines' },
  { id: 'WK_american falcon', iata: 'WK', airline: 'American Falcon' },
  { id: 'QQ_alliance airlines', iata: 'QQ', airline: 'Alliance Airlines' },
  {
    id: 'FG_ariana afghan airlines',
    iata: 'FG',
    airline: 'Ariana Afghan Airlines'
  },
  { id: 'RV*_africaone', iata: 'RV*', airline: 'Africaone' },
  { id: 'Y2_alliance air', iata: 'Y2', airline: 'Alliance Air' },
  {
    id: 'SU_aeroflot russian airlines',
    iata: 'SU',
    airline: 'Aeroflot Russian Airlines'
  },
  { id: '5Z_airfreight express', iata: '5Z', airline: 'Airfreight Express' },
  { id: '5D_aeroméxico connect', iata: '5D', airline: 'Aeroméxico Connect' },
  { id: '1A_amadeus it group', iata: '1A', airline: 'Amadeus IT Group' },
  { id: 'JJ_aviogenex', iata: 'JJ', airline: 'Aviogenex' },
  { id: 'PL_aeroperú', iata: 'PL', airline: 'Aeroperú' },
  { id: '8A_atlas blue', iata: '8A', airline: 'Atlas Blue' },
  { id: 'GD_air alpha greenland', iata: 'GD', airline: 'Air Alpha Greenland' },
  { id: 'HT_aeromist-kharkiv', iata: 'HT', airline: 'Aeromist-Kharkiv' },
  { id: 'J2_azerbaijan airlines', iata: 'J2', airline: 'Azerbaijan Airlines' },
  { id: 'U3_avies', iata: 'U3', airline: 'Avies' },
  { id: '4Y_airbus industrie', iata: '4Y', airline: 'Airbus Industrie' },
  { id: '5A_alpine air express', iata: '5A', airline: 'Alpine Air Express' },
  { id: 'ED*_airblue', iata: 'ED*', airline: 'Airblue' },
  {
    id: 'W4_aero services executive',
    iata: 'W4',
    airline: 'Aero Services Executive'
  },
  {
    id: 'IZ_arkia israel airlines',
    iata: 'IZ',
    airline: 'Arkia Israel Airlines'
  },
  {
    id: 'M6_amerijet international',
    iata: 'M6',
    airline: 'Amerijet International'
  },
  { id: '4A_air kiribati', iata: '4A', airline: 'Air Kiribati' },
  {
    id: 'EV_atlantic southeast airlines',
    iata: 'EV',
    airline: 'Atlantic Southeast Airlines'
  },
  {
    id: 'HP_america west airlines',
    iata: 'HP',
    airline: 'America West Airlines'
  },
  {
    id: 'VH_aeropostal alas de venezuela',
    iata: 'VH',
    airline: 'Aeropostal Alas de Venezuela'
  },
  { id: 'TZ_ata airlines', iata: 'TZ', airline: 'ATA Airlines' },
  { id: 'AM_aeroméxico', iata: 'AM', airline: 'Aeroméxico' },
  { id: 'TL_airnorth', iata: 'TL', airline: 'Airnorth' },
  { id: 'OY_andes líneas aéreas', iata: 'OY', airline: 'Andes Líneas Aéreas' },
  { id: 'IW_aom french airlines', iata: 'IW', airline: 'AOM French Airlines' },
  { id: 'J6_avcom', iata: 'J6', airline: 'AVCOM' },
  { id: '2D_aero vip', iata: '2D', airline: 'Aero VIP' },
  {
    id: 'VB_aeroenlaces nacionales',
    iata: 'VB',
    airline: 'Aeroenlaces Nacionales'
  },
  {
    id: 'OE_asia overnight express',
    iata: 'OE',
    airline: 'Asia Overnight Express'
  },
  { id: 'GV_aero flight', iata: 'GV', airline: 'Aero Flight' },
  { id: 'JW_arrow air', iata: 'JW', airline: 'Arrow Air' },
  { id: '2B_albawings', iata: '2B', airline: 'Albawings' },
  {
    id: '4C_aires, aerovías de integración regional, s.a.',
    iata: '4C',
    airline: 'Aires, Aerovías de Integración Regional, S.A.'
  },
  {
    id: 'AR_aerolíneas argentinas',
    iata: 'AR',
    airline: 'Aerolíneas Argentinas'
  },
  {
    id: 'AS_alaska airlines, inc.',
    iata: 'AS',
    airline: 'Alaska Airlines, Inc.'
  },
  { id: 'PL_airstars', iata: 'PL', airline: 'Airstars' },
  { id: 'OB_astrakhan airlines', iata: 'OB', airline: 'Astrakhan Airlines' },
  {
    id: 'HC_aero-tropics air services',
    iata: 'HC',
    airline: 'Aero-Tropics Air Services'
  },
  {
    id: 'FO_airlines of tasmania',
    iata: 'FO',
    airline: 'Airlines of Tasmania'
  },
  { id: 'OS_austrian airlines', iata: 'OS', airline: 'Austrian Airlines' },
  { id: 'IQ_augsburg airways', iata: 'IQ', airline: 'Augsburg Airways' },
  { id: 'RU_airbridge cargo', iata: 'RU', airline: 'AirBridge Cargo' },
  {
    id: 'MO_abu dhabi amiri flight',
    iata: 'MO',
    airline: 'Abu Dhabi Amiri Flight'
  },
  {
    id: 'GR_aurigny air services',
    iata: 'GR',
    airline: 'Aurigny Air Services'
  },
  { id: 'NO_aus-air', iata: 'NO', airline: 'Aus-Air' },
  {
    id: 'AU_austral líneas aéreas',
    iata: 'AU',
    airline: 'Austral Líneas Aéreas'
  },
  { id: 'AO_australian airlines', iata: 'AO', airline: 'Australian Airlines' },
  { id: 'AV_avianca', iata: 'AV', airline: 'Avianca' },
  { id: 'A0_avianca argentina', iata: 'A0', airline: 'Avianca Argentina' },
  { id: 'O6_avianca brazil', iata: 'O6', airline: 'Avianca Brazil' },
  { id: 'K8_airlink zambia', iata: 'K8', airline: 'Airlink Zambia' },
  {
    id: '4Y_airbus transport international',
    iata: '4Y',
    airline: 'Airbus Transport International'
  },
  { id: 'B9_air bangladesh', iata: 'B9', airline: 'Air Bangladesh' },
  {
    id: 'HJ_asian express airlines',
    iata: 'HJ',
    airline: 'Asian Express Airlines'
  },
  { id: 'AK_airasia', iata: 'AK', airline: 'AirAsia' },
  { id: 'D7_airasia x', iata: 'D7', airline: 'AirAsia X' },
  { id: 'DJ_airasia japan', iata: 'DJ', airline: 'AirAsia Japan' },
  { id: 'I5_airasia india', iata: 'I5', airline: 'AirAsia India' },
  { id: '6V_axis airways', iata: '6V', airline: 'Axis Airways' },
  { id: 'EX_atlantic airlines', iata: 'EX', airline: 'Atlantic Airlines' },
  {
    id: '3G_atlant-soyuz airlines',
    iata: '3G',
    airline: 'Atlant-Soyuz Airlines'
  },
  { id: 'AZ_alitalia', iata: 'AZ', airline: 'Alitalia' },
  { id: 'ZE_arcus-air logistic', iata: 'ZE', airline: 'Arcus-Air Logistic' },
  { id: 'A2_astra airlines', iata: 'A2', airline: 'Astra Airlines' },
  { id: 'R7_aserca airlines', iata: 'R7', airline: 'Aserca Airlines' },
  { id: 'RX_aviaexpress', iata: 'RX', airline: 'Aviaexpress' },
  {
    id: 'MQ_american eagle airlines',
    iata: 'MQ',
    airline: 'American Eagle Airlines'
  },
  { id: 'ZS_azzurra air', iata: 'ZS', airline: 'Azzurra Air' },
  { id: 'FF_airshop', iata: 'FF', airline: 'Airshop' },
  {
    id: 'ML_african transport trading and investment company',
    iata: 'ML',
    airline: 'African Transport Trading and Investment Company'
  },
  { id: 'VU_air ivoire', iata: 'VU', airline: 'Air Ivoire' },
  { id: 'BP_air botswana', iata: 'BP', airline: 'Air Botswana' },
  { id: 'GS_air foyle', iata: 'GS', airline: 'Air Foyle' },
  { id: 'VT_air tahiti', iata: 'VT', airline: 'Air Tahiti' },
  { id: '3N_air urga', iata: '3N', airline: 'Air Urga' },
  { id: 'VL_air via', iata: 'VL', airline: 'Air VIA' },
  { id: 'FK_africa west', iata: 'FK', airline: 'Africa West' },
  { id: 'G2_avirex', iata: 'G2', airline: 'Avirex' },
  {
    id: 'V8_atran cargo airlines',
    iata: 'V8',
    airline: 'ATRAN Cargo Airlines'
  },
  { id: 'K6_angkor air', iata: 'K6', airline: 'Angkor Air' },
  { id: 'VE_avensa', iata: 'VE', airline: 'Avensa' },
  { id: 'V5_avolar aerolíneas', iata: 'V5', airline: 'Avolar Aerolíneas' },
  { id: 'CA_air china', iata: 'CA', airline: 'Air China' },
  { id: 'Q6_aero condor peru', iata: 'Q6', airline: 'Aero Condor Peru' },
  {
    id: '5F_arctic circle air service',
    iata: '5F',
    airline: 'Arctic Circle Air Service'
  },
  { id: 'QC_air corridor', iata: 'QC', airline: 'Air Corridor' },
  { id: 'NV_air central', iata: 'NV', airline: 'Air Central' },
  { id: 'CV_air chathams', iata: 'CV', airline: 'Air Chathams' },
  {
    id: 'CW_air marshall islands',
    iata: 'CW',
    airline: 'Air Marshall Islands'
  },
  { id: 'ZA_accessair', iata: 'ZA', airline: 'AccessAir' },
  { id: 'AH_air algérie', iata: 'AH', airline: 'Air Algérie' },
  { id: 'KI_adam air', iata: 'KI', airline: 'Adam Air' },
  { id: 'ER_astar air cargo', iata: 'ER', airline: 'Astar Air Cargo' },
  { id: 'HO_antinea airlines', iata: 'HO', airline: 'Antinea Airlines' },
  { id: 'EN_air dolomiti', iata: 'EN', airline: 'Air Dolomiti' },
  { id: 'NM_air madrid', iata: 'NM', airline: 'Air Madrid' },
  { id: 'EE_aero airlines', iata: 'EE', airline: 'Aero Airlines' },
  { id: '4F_air city', iata: '4F', airline: 'Air City' },
  { id: 'E8_alpi eagles', iata: 'E8', airline: 'Alpi Eagles' },
  {
    id: 'KY_air são tomé and príncipe',
    iata: 'KY',
    airline: 'Air São Tomé and Príncipe'
  },
  { id: 'PC_air fiji', iata: 'PC', airline: 'Air Fiji' },
  { id: 'OF_air finland', iata: 'OF', airline: 'Air Finland' },
  { id: 'FJ_fiji airways', iata: 'FJ', airline: 'Fiji Airways' },
  { id: 'RC_atlantic airways', iata: 'RC', airline: 'Atlantic Airways' },
  { id: 'QH_aero leasing', iata: 'QH', airline: 'Aero Leasing' },
  { id: 'NY_air iceland', iata: 'NY', airline: 'Air Iceland' },
  { id: '2P_air philippines', iata: '2P', airline: 'Air Philippines' },
  { id: 'ZX_air georgian', iata: 'ZX', airline: 'Air Georgian' },
  { id: '2U_air guinee express', iata: '2U', airline: 'Air Guinee Express' },
  { id: '0A_amber air', iata: '0A', airline: 'Amber Air' },
  { id: 'DA_air georgia', iata: 'DA', airline: 'Air Georgia' },
  { id: 'GL_air greenland', iata: 'GL', airline: 'Air Greenland' },
  { id: 'LL_allegro', iata: 'LL', airline: 'Allegro' },
  { id: '5Y_atlas air', iata: '5Y', airline: 'Atlas Air' },
  { id: 'GG_air guyane', iata: 'GG', airline: 'Air Guyane' },
  { id: "H9_air d'ayiti", iata: 'H9', airline: "Air d'Ayiti" },
  {
    id: 'GG_air comores international',
    iata: 'GG',
    airline: 'Air Comores International'
  },
  { id: 'HD_air holland', iata: 'HD', airline: 'Air Holland' },
  { id: '8C_air horizon', iata: '8C', airline: 'Air Horizon' },
  { id: 'W9_air bagan', iata: 'W9', airline: 'Air Bagan' },
  { id: 'IP_atyrau air ways', iata: 'IP', airline: 'Atyrau Air Ways' },
  { id: 'QK_air canada jazz', iata: 'QK', airline: 'Air Canada Jazz' },
  { id: 'KK_atlasjet', iata: 'KK', airline: 'Atlasjet' },
  { id: 'JS_air koryo', iata: 'JS', airline: 'Air Koryo' },
  { id: 'KC_air astana', iata: 'KC', airline: 'Air Astana' },
  { id: 'LV_albanian airlines', iata: 'LV', airline: 'Albanian Airlines' },
  { id: '3S_aerologic', iata: '3S', airline: 'Aerologic' },
  { id: 'D4_alidaunia', iata: 'D4', airline: 'Alidaunia' },
  { id: '9I_alliance air', iata: '9I', airline: 'Alliance Air' },
  { id: 'XL_aerolane', iata: 'XL', airline: 'Aerolane' },
  { id: 'A6_air alps aviation', iata: 'A6', airline: 'Air Alps Aviation' },
  {
    id: 'TD_atlantis european airways',
    iata: 'TD',
    airline: 'Atlantis European Airways'
  },
  { id: 'L8_air luxor gb', iata: 'L8', airline: 'Air Luxor GB' },
  { id: 'LK_air luxor', iata: 'LK', airline: 'Air Luxor' },
  { id: 'MK_air mauritius', iata: 'MK', airline: 'Air Mauritius' },
  { id: 'MD_air madagascar', iata: 'MD', airline: 'Air Madagascar' },
  { id: '9U_air moldova', iata: '9U', airline: 'Air Moldova' },
  { id: 'L9_air mali', iata: 'L9', airline: 'Air Mali' },
  { id: 'A7_air plus comet', iata: 'A7', airline: 'Air Plus Comet' },
  { id: 'QO_aeromexpress', iata: 'QO', airline: 'Aeromexpress' },
  { id: 'MR_air mauritanie', iata: 'MR', airline: 'Air Mauritanie' },
  { id: '3S*_aeroland airways', iata: '3S*', airline: 'Aeroland Airways' },
  { id: '2V*_amtrak', iata: '2V*', airline: 'Amtrak' },
  { id: '8D*_astair', iata: '8D*', airline: 'Astair' },
  { id: 'F4_albarka air', iata: 'F4', airline: 'Albarka Air' },
  { id: 'AJ_aero contractors', iata: 'AJ', airline: 'Aero Contractors' },
  { id: '8Y_air burundi', iata: '8Y', airline: 'Air Burundi' },
  {
    id: 'OT_aeropelican air services',
    iata: 'OT',
    airline: 'Aeropelican Air Services'
  },
  {
    id: 'AD_air paradise international',
    iata: 'AD',
    airline: 'Air Paradise International'
  },
  {
    id: 'QD_air class líneas aéreas',
    iata: 'QD',
    airline: 'Air Class Líneas Aéreas'
  },
  {
    id: 'QS_african safari airways',
    iata: 'QS',
    airline: 'African Safari Airways'
  },
  { id: '4Y_airbus france', iata: '4Y', airline: 'Airbus France' },
  { id: 'AG_aruba airlines', iata: 'AG', airline: 'Aruba Airlines' },
  {
    id: 'MC_air mobility command',
    iata: 'MC',
    airline: 'Air Mobility Command'
  },
  { id: 'RE_aer arann', iata: 'RE', airline: 'Aer Arann' },
  { id: 'UU_air austral', iata: 'UU', airline: 'Air Austral' },
  { id: 'ZP_amaszonas paraguay', iata: 'ZP', airline: 'Amaszonas Paraguay' },
  { id: '6K_asian spirit', iata: '6K', airline: 'Asian Spirit' },
  { id: 'A5_airlinair', iata: 'A5', airline: 'Airlinair' },
  { id: 'QL_aero lanka', iata: 'QL', airline: 'Aero Lanka' },
  { id: 'R3_armenian airlines', iata: 'R3', airline: 'Armenian Airlines' },
  { id: 'MV_air mediterranean', iata: 'MV', airline: 'Air Mediterranean' },
  { id: '2O_air salone', iata: '2O', airline: 'Air Salone' },
  { id: 'U8_armavia', iata: 'U8', airline: 'Armavia' },
  {
    id: 'BQ_aeromar lineas aereas dominicanas',
    iata: 'BQ',
    airline: 'Aeromar Lineas Aereas Dominicanas'
  },
  { id: 'P5_aerorepública', iata: 'P5', airline: 'AeroRepública' },
  { id: 'BF_aero-service', iata: 'BF', airline: 'Aero-Service' },
  { id: '5L_aerosur', iata: '5L', airline: 'AeroSur' },
  { id: 'EX_air santo domingo', iata: 'EX', airline: 'Air Santo Domingo' },
  { id: 'JR_aero california', iata: 'JR', airline: 'Aero California' },
  { id: 'Z3_avient aviation', iata: 'Z3', airline: 'Avient Aviation' },
  { id: 'M3_air service', iata: 'M3', airline: 'Air Service' },
  { id: 'GM_air slovakia', iata: 'GM', airline: 'Air Slovakia' },
  { id: 'R3_aircompany yakutia', iata: 'R3', airline: 'Aircompany Yakutia' },
  { id: 'VW_aeromar', iata: 'VW', airline: 'Aeromar' },
  {
    id: 'JY_air turks and caicos',
    iata: 'JY',
    airline: 'Air Turks and Caicos'
  },
  { id: 'OR_arkefly', iata: 'OR', airline: 'Arkefly' },
  { id: 'CG_airlines png', iata: 'CG', airline: 'Airlines PNG' },
  { id: 'TY_air calédonie', iata: 'TY', airline: 'Air Calédonie' },
  { id: 'FL_airtran airways', iata: 'FL', airline: 'AirTran Airways' },
  { id: 'TS_air transat', iata: 'TS', airline: 'Air Transat' },
  {
    id: 'EC_avialeasing aviation company',
    iata: 'EC',
    airline: 'Avialeasing Aviation Company'
  },
  {
    id: 'DW_aero-charter ukraine',
    iata: 'DW',
    airline: 'Aero-Charter Ukraine'
  },
  { id: 'U7_air uganda', iata: 'U7', airline: 'Air Uganda' },
  { id: '6U_air ukraine', iata: '6U', airline: 'Air Ukraine' },
  { id: '6R_alrosa air company', iata: '6R', airline: 'Alrosa Air Company' },
  {
    id: 'AD_azul linhas aéreas brasileiras',
    iata: 'AD',
    airline: 'Azul Linhas Aéreas Brasileiras'
  },
  { id: '6A_aviacsa', iata: '6A', airline: 'Aviacsa' },
  { id: 'JZ_avia express', iata: 'JZ', airline: 'Avia Express' },
  { id: 'WD*_amsterdam airlines', iata: 'WD*', airline: 'Amsterdam Airlines' },
  { id: 'AQ_aloha airlines', iata: 'AQ', airline: 'Aloha Airlines' },
  { id: '3J_air alliance', iata: '3J', airline: 'Air Alliance' },
  {
    id: 'OB_austrian airtransport',
    iata: 'OB',
    airline: 'Austrian Airtransport'
  },
  { id: 'SM_aberdeen airways', iata: 'SM', airline: 'Aberdeen Airways' },
  { id: 'KJ_asian air', iata: 'KJ', airline: 'Asian Air' },
  { id: 'BX_air busan', iata: 'BX', airline: 'Air Busan' },
  { id: 'AK_air bridge carriers', iata: 'AK', airline: 'Air Bridge Carriers' },
  { id: 'YE_aryan cargo express', iata: 'YE', airline: 'Aryan Cargo Express' },
  { id: 'VJ_africa airways', iata: 'VJ', airline: 'Africa Airways' },
  { id: 'QH_air florida', iata: 'QH', airline: 'Air Florida' },
  { id: '3O_air arabia maroc', iata: '3O', airline: 'Air Arabia Maroc' },
  { id: 'HD_airdo', iata: 'HD', airline: 'AIRDO' },
  { id: 'X9_avion express', iata: 'X9', airline: 'Avion Express' },
  {
    id: 'UJ_al masria universal airlines',
    iata: 'UJ',
    airline: 'Al Masria Universal Airlines'
  },
  {
    id: 'JD_beijing capital airlines',
    iata: 'JD',
    airline: 'Beijing Capital Airlines'
  },
  { id: 'ID_batik air', iata: 'ID', airline: 'Batik Air' },
  { id: '8Q*_baker aviation', iata: '8Q*', airline: 'Baker Aviation' },
  { id: 'L9_belle air europe', iata: 'L9', airline: 'Belle Air Europe' },
  { id: 'BA_british airways', iata: 'BA', airline: 'British Airways' },
  {
    id: 'BG_biman bangladesh airlines',
    iata: 'BG',
    airline: 'Biman Bangladesh Airlines'
  },
  { id: 'BO_bluebird nordic', iata: 'BO', airline: 'Bluebird Nordic' },
  {
    id: 'B4_bach flugbetriebsges',
    iata: 'B4',
    airline: 'BACH Flugbetriebsges'
  },
  { id: 'WX_cityjet', iata: 'WX', airline: 'CityJet' },
  { id: 'BZ_blue dart aviation', iata: 'BZ', airline: 'Blue Dart Aviation' },
  { id: 'JA_b&h airlines', iata: 'JA', airline: 'B&H Airlines' },
  { id: 'J4_buffalo airways', iata: 'J4', airline: 'Buffalo Airways' },
  { id: '8H_bh air', iata: '8H', airline: 'BH Air' },
  { id: 'A8_benin golf air', iata: 'A8', airline: 'Benin Golf Air' },
  { id: '4T_belair airlines', iata: '4T', airline: 'Belair Airlines' },
  { id: 'UP_bahamasair', iata: 'UP', airline: 'Bahamasair' },
  {
    id: 'E6_bringer air cargo taxi aéreo',
    iata: 'E6',
    airline: 'Bringer Air Cargo Taxi Aéreo'
  },
  {
    id: 'LZ_balkan bulgarian airlines',
    iata: 'LZ',
    airline: 'Balkan Bulgarian Airlines'
  },
  { id: 'TH_ba connect', iata: 'TH', airline: 'BA Connect' },
  {
    id: 'BS_british international helicopters',
    iata: 'BS',
    airline: 'British International Helicopters'
  },
  { id: 'B4_bankair', iata: 'B4', airline: 'Bankair' },
  { id: 'PG_bangkok airways', iata: 'PG', airline: 'Bangkok Airways' },
  { id: 'KF_blue1', iata: 'KF', airline: 'Blue1' },
  {
    id: 'JV_bearskin lake air service',
    iata: 'JV',
    airline: 'Bearskin Lake Air Service'
  },
  { id: 'B3_bellview airlines', iata: 'B3', airline: 'Bellview Airlines' },
  { id: 'BD_bmi', iata: 'BD', airline: 'BMI' },
  { id: 'BM_bmi regional', iata: 'BM', airline: 'BMI Regional' },
  { id: 'WW_bmibaby', iata: 'WW', airline: 'Bmibaby' },
  { id: 'CH_bemidji airlines', iata: 'CH', airline: 'Bemidji Airlines' },
  { id: '5Z_bismillah airlines', iata: '5Z', airline: 'Bismillah Airlines' },
  {
    id: 'BO_bouraq indonesia airlines',
    iata: 'BO',
    airline: 'Bouraq Indonesia Airlines'
  },
  {
    id: 'BV_blue panorama airlines',
    iata: 'BV',
    airline: 'Blue Panorama Airlines'
  },
  {
    id: '7R_bra-transportes aéreos',
    iata: '7R',
    airline: 'BRA-Transportes Aéreos'
  },
  { id: '8E_bering air', iata: '8E', airline: 'Bering Air' },
  {
    id: 'B2_belavia belarusian airlines',
    iata: 'B2',
    airline: 'Belavia Belarusian Airlines'
  },
  {
    id: 'BN_braniff international airways',
    iata: 'BN',
    airline: 'Braniff International Airways'
  },
  { id: 'GQ_big sky airlines', iata: 'GQ', airline: 'Big Sky Airlines' },
  {
    id: 'V9_bal bashkirian airlines',
    iata: 'V9',
    airline: 'BAL Bashkirian Airlines'
  },
  { id: 'BQ_baltia air lines', iata: 'BQ', airline: 'Baltia Air Lines' },
  { id: 'Y6_batavia air', iata: 'Y6', airline: 'Batavia Air' },
  { id: 'L9_bristow u.s. llc', iata: 'L9', airline: 'Bristow U.S. LLC' },
  {
    id: '1T_bulgarian air charter',
    iata: '1T',
    airline: 'Bulgarian Air Charter'
  },
  {
    id: 'BU_buryat airlines aircompany',
    iata: 'BU',
    airline: 'Buryat Airlines Aircompany'
  },
  { id: 'J8_berjaya air', iata: 'J8', airline: 'Berjaya Air' },
  { id: 'QW_blue wings', iata: 'QW', airline: 'Blue Wings' },
  {
    id: 'SN_brussels international airlines',
    iata: 'SN',
    airline: 'Brussels International Airlines'
  },
  { id: '8W?_bax global', iata: '8W?', airline: 'BAX Global' },
  { id: 'DB_brit air', iata: 'DB', airline: 'Brit Air' },
  {
    id: 'E9_boston-maine airways',
    iata: 'E9',
    airline: 'Boston-Maine Airways'
  },
  { id: 'SN_brussels airlines', iata: 'SN', airline: 'Brussels Airlines' },
  { id: 'NT_binter canarias', iata: 'NT', airline: 'Binter Canarias' },
  { id: '0B_blue air', iata: '0B', airline: 'Blue Air' },
  {
    id: 'KJ_british mediterranean airways',
    iata: 'KJ',
    airline: 'British Mediterranean Airways'
  },
  { id: 'FB_bulgaria air', iata: 'FB', airline: 'Bulgaria Air' },
  { id: '8N_barents airlink', iata: '8N', airline: 'Barents AirLink' },
  { id: 'CJ_ba cityflyer', iata: 'CJ', airline: 'BA CityFlyer' },
  {
    id: 'OB_boliviana de aviación',
    iata: 'OB',
    airline: 'Boliviana de Aviación'
  },
  { id: 'YB_borajet', iata: 'YB', airline: 'Borajet' },
  { id: 'BW_caribbean airlines', iata: 'BW', airline: 'Caribbean Airlines' },
  { id: '7N_pawa dominicana', iata: '7N', airline: 'Pawa Dominicana' },
  { id: '5C_cal cargo air lines', iata: '5C', airline: 'CAL Cargo Air Lines' },
  { id: 'AW_chc airways', iata: 'AW', airline: 'CHC Airways' },
  { id: '3C_calima aviación', iata: '3C', airline: 'Calima Aviación' },
  { id: 'MO_calm air', iata: 'MO', airline: 'Calm Air' },
  { id: 'R9_camai air', iata: 'R9', airline: 'Camai Air' },
  { id: 'K6_cambodia angkor air', iata: 'K6', airline: 'Cambodia Angkor Air' },
  { id: 'UY_cameroon airlines', iata: 'UY', airline: 'Cameroon Airlines' },
  { id: 'C6_canjet', iata: 'C6', airline: 'CanJet' },
  { id: 'CP_canadian airlines', iata: 'CP', airline: 'Canadian Airlines' },
  { id: '5T_canadian north', iata: '5T', airline: 'Canadian North' },
  {
    id: 'CP_canadian pacific airlines',
    iata: 'CP',
    airline: 'Canadian Pacific Airlines'
  },
  {
    id: 'W2_canadian western airlines',
    iata: 'W2',
    airline: 'Canadian Western Airlines'
  },
  { id: '9K_cape air', iata: '9K', airline: 'Cape Air' },
  {
    id: 'PT_capital cargo international airlines',
    iata: 'PT',
    airline: 'Capital Cargo International Airlines'
  },
  { id: 'GG_cargo 360', iata: 'GG', airline: 'Cargo 360' },
  { id: '2G_cargoitalia', iata: '2G', airline: 'Cargoitalia' },
  { id: 'W8_cargojet airways', iata: 'W8', airline: 'Cargojet Airways' },
  { id: 'CV_cargolux', iata: 'CV', airline: 'Cargolux' },
  { id: 'C8_cargolux italia', iata: 'C8', airline: 'Cargolux Italia' },
  {
    id: '8B_caribbean star airlines',
    iata: '8B',
    airline: 'Caribbean Star Airlines'
  },
  { id: 'V3_carpatair', iata: 'V3', airline: 'Carpatair' },
  { id: 'RV_caspian airlines', iata: 'RV', airline: 'Caspian Airlines' },
  { id: 'KA_cathay dragon', iata: 'KA', airline: 'Cathay Dragon' },
  { id: 'CX_cathay pacific', iata: 'CX', airline: 'Cathay Pacific' },
  { id: 'KX_cayman airways', iata: 'KX', airline: 'Cayman Airways' },
  { id: '5J_cebu pacific', iata: '5J', airline: 'Cebu Pacific' },
  {
    id: '9M_central mountain air',
    iata: '9M',
    airline: 'Central Mountain Air'
  },
  { id: 'J7_centre-avia', iata: 'J7', airline: 'Centre-Avia' },
  { id: 'WE_centurion air cargo', iata: 'WE', airline: 'Centurion Air Cargo' },
  {
    id: "OP_chalk's international airlines",
    iata: 'OP',
    airline: "Chalk's International Airlines"
  },
  { id: 'MG_champion air', iata: 'MG', airline: 'Champion Air' },
  { id: '2Z_chang an airlines', iata: '2Z', airline: 'Chang An Airlines' },
  {
    id: 'S8_chari aviation services',
    iata: 'S8',
    airline: 'Chari Aviation Services'
  },
  {
    id: 'RP*_chautauqua airlines',
    iata: 'RP*',
    airline: 'Chautauqua Airlines'
  },
  {
    id: 'C8_chicago express airlines',
    iata: 'C8',
    airline: 'Chicago Express Airlines'
  },
  { id: 'CI_china airlines', iata: 'CI', airline: 'China Airlines' },
  {
    id: 'CK_china cargo airlines',
    iata: 'CK',
    airline: 'China Cargo Airlines'
  },
  {
    id: 'MU_china eastern airlines',
    iata: 'MU',
    airline: 'China Eastern Airlines'
  },
  {
    id: 'G5_china express airlines',
    iata: 'G5',
    airline: 'China Express Airlines'
  },
  {
    id: 'CJ_china northern airlines',
    iata: 'CJ',
    airline: 'China Northern Airlines'
  },
  {
    id: 'WH_china northwest airlines',
    iata: 'WH',
    airline: 'China Northwest Airlines'
  },
  {
    id: '8Y_china postal airlines',
    iata: '8Y',
    airline: 'China Postal Airlines'
  },
  {
    id: 'CZ_china southern airlines',
    iata: 'CZ',
    airline: 'China Southern Airlines'
  },
  {
    id: 'KN_china united airlines',
    iata: 'KN',
    airline: 'China United Airlines'
  },
  {
    id: 'XO_china xinhua airlines',
    iata: 'XO',
    airline: 'China Xinhua Airlines'
  },
  {
    id: '3Q_china yunnan airlines',
    iata: '3Q',
    airline: 'China Yunnan Airlines'
  },
  { id: 'X7_chitaavia', iata: 'X7', airline: 'Chitaavia' },
  { id: 'A2_cielos airlines', iata: 'A2', airline: 'Cielos Airlines' },
  { id: 'QI_cimber sterling', iata: 'QI', airline: 'Cimber Sterling' },
  { id: 'C7_cinnamon air', iata: 'C7', airline: 'Cinnamon Air' },
  { id: 'C9_cirrus airlines', iata: 'C9', airline: 'Cirrus Airlines' },
  { id: 'CF_city airline', iata: 'CF', airline: 'City Airline' },
  {
    id: 'G3_city connexion airlines',
    iata: 'G3',
    airline: 'City Connexion Airlines'
  },
  { id: 'CJ_cityflyer express', iata: 'CJ', airline: 'CityFlyer Express' },
  { id: 'CT_civil air transport', iata: 'CT', airline: 'Civil Air Transport' },
  { id: '6P_club air', iata: '6P', airline: 'Club Air' },
  { id: 'BX_coast air', iata: 'BX', airline: 'Coast Air' },
  { id: 'DQ_coastal air', iata: 'DQ', airline: 'Coastal Air' },
  { id: '9L_colgan air', iata: '9L', airline: 'Colgan Air' },
  {
    id: 'YD_cologne air transport gmbh',
    iata: 'YD',
    airline: 'Cologne Air Transport GmbH'
  },
  { id: 'OH_comair', iata: 'OH', airline: 'Comair' },
  { id: 'MN_comair', iata: 'MN', airline: 'Comair' },
  { id: 'C5_commutair', iata: 'C5', airline: 'CommutAir' },
  { id: 'KR_comores airlines', iata: 'KR', airline: 'Comores Airlines' },
  { id: 'GJ_compania mexicargo', iata: 'GJ', airline: 'Compania Mexicargo' },
  { id: 'CP_compass airlines', iata: 'CP', airline: 'Compass Airlines' },
  { id: 'DE_condor flugdienst', iata: 'DE', airline: 'Condor Flugdienst' },
  {
    id: 'CO_continental airlines',
    iata: 'CO',
    airline: 'Continental Airlines'
  },
  { id: 'PC_continental airways', iata: 'PC', airline: 'Continental Airways' },
  { id: 'CO_continental express', iata: 'CO', airline: 'Continental Express' },
  {
    id: 'CS_continental micronesia',
    iata: 'CS',
    airline: 'Continental Micronesia'
  },
  { id: 'V0_conviasa', iata: 'V0', airline: 'Conviasa' },
  { id: 'CM_copa airlines', iata: 'CM', airline: 'Copa Airlines' },
  { id: 'CQ_central charter', iata: 'CQ', airline: 'Central Charter' },
  { id: 'XC_corendon airlines', iata: 'XC', airline: 'Corendon Airlines' },
  {
    id: 'CD_corendon dutch airlines',
    iata: 'CD',
    airline: 'Corendon Dutch Airlines'
  },
  { id: 'SS_corsairfly', iata: 'SS', airline: 'Corsairfly' },
  { id: 'XK_corse méditerranée', iata: 'XK', airline: 'Corse Méditerranée' },
  { id: 'F5_cosmic air', iata: 'F5', airline: 'Cosmic Air' },
  { id: '7C_coyne aviation', iata: '7C', airline: 'Coyne Aviation' },
  { id: 'OU_croatia airlines', iata: 'OU', airline: 'Croatia Airlines' },
  { id: 'QE_crossair europe', iata: 'QE', airline: 'Crossair Europe' },
  { id: 'CU_cubana de aviación', iata: 'CU', airline: 'Cubana de Aviación' },
  { id: 'CY_cyprus airways', iata: 'CY', airline: 'Cyprus Airways' },
  {
    id: 'YK_cyprus turkish airlines',
    iata: 'YK',
    airline: 'Cyprus Turkish Airlines'
  },
  { id: 'OK_czech airlines', iata: 'OK', airline: 'Czech Airlines' },
  { id: '8L_cargo plus aviation', iata: '8L', airline: 'Cargo Plus Aviation' },
  { id: 'GJ_cdi cargo airlines', iata: 'GJ', airline: 'CDI Cargo Airlines' },
  { id: '5Z_cemair', iata: '5Z', airline: 'CemAir' },
  { id: 'XG_clickair', iata: 'XG', airline: 'Clickair' },
  { id: 'V5_danubewings', iata: 'V5', airline: 'DanubeWings' },
  { id: 'WD_das air cargo', iata: 'WD', airline: 'DAS Air Cargo' },
  {
    id: 'DX_dat danish air transport',
    iata: 'DX',
    airline: 'DAT Danish Air Transport'
  },
  { id: 'D0_dhl air limited', iata: 'D0', airline: 'DHL Air Limited' },
  { id: 'ES_dhl international', iata: 'ES', airline: 'DHL International' },
  { id: 'L3_dhl de guatemala', iata: 'L3', airline: 'DHL de Guatemala' },
  { id: 'D3_daallo airlines', iata: 'D3', airline: 'Daallo Airlines' },
  { id: 'N2_dagestan airlines', iata: 'N2', airline: 'Dagestan Airlines' },
  { id: 'H8_dalavia', iata: 'H8', airline: 'Dalavia' },
  { id: 'DD_danish air lines', iata: 'DD', airline: 'Danish Air Lines' },
  { id: '0D_darwin airline', iata: '0D', airline: 'Darwin Airline' },
  { id: 'D5_dauair', iata: 'D5', airline: 'Dauair' },
  { id: 'DL_delta air lines', iata: 'DL', airline: 'Delta Air Lines' },
  { id: 'J7_denim air', iata: 'J7', airline: 'Denim Air' },
  { id: '2A_deutsche bahn', iata: '2A', airline: 'Deutsche Bahn' },
  {
    id: '1I_deutsche rettungsflugwacht',
    iata: '1I',
    airline: 'Deutsche Rettungsflugwacht'
  },
  {
    id: 'AW_dirgantara air service',
    iata: 'AW',
    airline: 'Dirgantara Air Service'
  },
  { id: 'DH_discovery airways', iata: 'DH', airline: 'Discovery Airways' },
  { id: 'Z6_dniproavia', iata: 'Z6', airline: 'Dniproavia' },
  { id: 'YU_dominair', iata: 'YU', airline: 'Dominair' },
  {
    id: 'DO_dominicana de aviación',
    iata: 'DO',
    airline: 'Dominicana de Aviación'
  },
  { id: 'E3_domodedovo airlines', iata: 'E3', airline: 'Domodedovo Airlines' },
  { id: 'D9_donavia', iata: 'D9', airline: 'Donavia' },
  { id: '5D_donbassaero', iata: '5D', airline: 'DonbassAero' },
  { id: 'KB_druk air', iata: 'KB', airline: 'Druk Air' },
  { id: 'DI_dba', iata: 'DI', airline: 'Dba' },
  { id: 'MQ_envoy air', iata: 'MQ', airline: 'Envoy Air' },
  { id: 'EL_ellinair', iata: 'EL', airline: 'Ellinair' },
  {
    id: '9A_eagle express air charter',
    iata: '9A',
    airline: 'Eagle Express Air Charter'
  },
  { id: 'E1_everbread', iata: 'E1', airline: 'Everbread' },
  {
    id: '1C_electronic data systems',
    iata: '1C',
    airline: 'Electronic Data Systems'
  },
  {
    id: '1Y_electronic data systems',
    iata: '1Y',
    airline: 'Electronic Data Systems'
  },
  { id: 'VE_eujet', iata: 'VE', airline: 'EUjet' },
  { id: 'BR_eva air', iata: 'BR', airline: 'EVA Air' },
  { id: 'EY_eagle air', iata: 'EY', airline: 'Eagle Air' },
  { id: 'H7_eagle air', iata: 'H7', airline: 'Eagle Air' },
  { id: 'NZ_eagle airways', iata: 'NZ', airline: 'Eagle Airways' },
  { id: 'QU_utair-ukraine', iata: 'QU', airline: 'UTair-Ukraine' },
  {
    id: 'S9_east african safari air',
    iata: 'S9',
    airline: 'East African Safari Air'
  },
  { id: 'ZE_eastar jet', iata: 'ZE', airline: 'Eastar Jet' },
  { id: 'EA_eastern air lines', iata: 'EA', airline: 'Eastern Air Lines' },
  { id: 'T3_eastern airways', iata: 'T3', airline: 'Eastern Airways' },
  {
    id: 'QF_eastern australia airlines',
    iata: 'QF',
    airline: 'Eastern Australia Airlines'
  },
  { id: 'DK_eastland air', iata: 'DK', airline: 'Eastland Air' },
  { id: 'W9_eastwind airlines', iata: 'W9', airline: 'Eastwind Airlines' },
  { id: 'WK_edelweiss air', iata: 'WK', airline: 'Edelweiss Air' },
  { id: 'MS_egyptair', iata: 'MS', airline: 'Egyptair' },
  {
    id: 'LY_el al israel airlines',
    iata: 'LY',
    airline: 'El Al Israel Airlines'
  },
  {
    id: 'UZ_el-buraq air transport',
    iata: 'UZ',
    airline: 'El-Buraq Air Transport'
  },
  { id: 'EK_emirates airlines', iata: 'EK', airline: 'Emirates Airlines' },
  { id: 'EM_empire airlines', iata: 'EM', airline: 'Empire Airlines' },
  {
    id: 'EU_empresa ecuatoriana de aviación',
    iata: 'EU',
    airline: 'Empresa Ecuatoriana De Aviación'
  },
  { id: 'G8_enkor jsc', iata: 'G8', airline: 'Enkor JSC' },
  { id: 'OF_enter air', iata: 'OF', airline: 'Enter Air' },
  { id: 'E0_eos airlines', iata: 'E0', airline: 'Eos Airlines' },
  { id: 'B8_eritrean airlines', iata: 'B8', airline: 'Eritrean Airlines' },
  {
    id: 'E7_estafeta carga aérea',
    iata: 'E7',
    airline: 'Estafeta Carga Aérea'
  },
  { id: 'OV_estonian air', iata: 'OV', airline: 'Estonian Air' },
  { id: 'ET_ethiopian airlines', iata: 'ET', airline: 'Ethiopian Airlines' },
  { id: 'EY_etihad airways', iata: 'EY', airline: 'Etihad Airways' },
  { id: 'RZ_euro exec express', iata: 'RZ', airline: 'Euro Exec Express' },
  {
    id: 'MM_euroatlantic airways',
    iata: 'MM',
    airline: 'EuroAtlantic Airways'
  },
  { id: 'UI_eurocypria airlines', iata: 'UI', airline: 'Eurocypria Airlines' },
  { id: 'GJ_eurofly', iata: 'GJ', airline: 'Eurofly' },
  { id: 'K2_eurolot', iata: 'K2', airline: 'Eurolot' },
  { id: '3W_euromanx airways', iata: '3W', airline: 'Euromanx Airways' },
  { id: '5O_europe airpost', iata: '5O', airline: 'Europe Airpost' },
  {
    id: 'EA_european air express',
    iata: 'EA',
    airline: 'European Air Express'
  },
  {
    id: 'QY_european air transport',
    iata: 'QY',
    airline: 'European Air Transport'
  },
  {
    id: 'E7_european aviation air charter',
    iata: 'E7',
    airline: 'European Aviation Air Charter'
  },
  { id: 'EW_eurowings', iata: 'EW', airline: 'Eurowings' },
  {
    id: 'EZ_evergreen international airlines',
    iata: 'EZ',
    airline: 'Evergreen International Airlines'
  },
  { id: 'JN_excel airways', iata: 'JN', airline: 'Excel Airways' },
  { id: 'MB_execair aviation', iata: 'MB', airline: 'Execair Aviation' },
  { id: 'OW_executive airlines', iata: 'OW', airline: 'Executive Airlines' },
  {
    id: 'EO_express one international',
    iata: 'EO',
    airline: 'Express One International'
  },
  { id: 'EV_expressjet', iata: 'EV', airline: 'ExpressJet' },
  { id: 'U2_easyjet', iata: 'U2', airline: 'easyJet' },
  { id: 'DS_easyjet switzerland', iata: 'DS', airline: 'easyJet Switzerland' },
  { id: 'EC_easyjet europe', iata: 'EC', airline: 'easyJet Europe' },
  { id: 'IH_falcon aviation', iata: 'IH', airline: 'Falcon Aviation' },
  {
    id: 'FE_far eastern air transport',
    iata: 'FE',
    airline: 'Far Eastern Air Transport'
  },
  {
    id: 'FD_royal flying doctor service',
    iata: 'FD',
    airline: 'Royal Flying Doctor Service'
  },
  { id: 'F6_faroejet', iata: 'F6', airline: 'FaroeJet' },
  { id: 'F3_faso airways', iata: 'F3', airline: 'Faso Airways' },
  { id: 'FX_fedex express', iata: 'FX', airline: 'FedEx Express' },
  {
    id: 'N8_fika salaama airlines',
    iata: 'N8',
    airline: 'Fika Salaama Airlines'
  },
  { id: '4S_finalair congo', iata: '4S', airline: 'Finalair Congo' },
  { id: 'AY_finnair', iata: 'AY', airline: 'Finnair' },
  { id: 'FC_finncomm airlines', iata: 'FC', airline: 'Finncomm Airlines' },
  { id: 'FY_firefly', iata: 'FY', airline: 'Firefly' },
  { id: '7F_first air', iata: '7F', airline: 'First Air' },
  {
    id: 'DP_first choice airways',
    iata: 'DP',
    airline: 'First Choice Airways'
  },
  { id: '8F_fischer air', iata: '8F', airline: 'Fischer Air' },
  { id: '8D_fitsair', iata: '8D', airline: 'FitsAir' },
  { id: 'B5_flightline', iata: 'B5', airline: 'Flightline' },
  {
    id: 'PA_florida coastal airlines',
    iata: 'PA',
    airline: 'Florida Coastal Airlines'
  },
  {
    id: 'RF_florida west international airways',
    iata: 'RF',
    airline: 'Florida West International Airways'
  },
  { id: '8W_fly all ways', iata: '8W', airline: 'Fly All Ways' },
  { id: 'F2_fly air', iata: 'F2', airline: 'Fly Air' },
  { id: 'OJ_fly jamaica airways', iata: 'OJ', airline: 'Fly Jamaica Airways' },
  { id: 'SH_fly me sweden', iata: 'SH', airline: 'Fly Me Sweden' },
  { id: 'D7_flyasianxpress', iata: 'D7', airline: 'FlyAsianXpress' },
  { id: 'TE_flylal', iata: 'TE', airline: 'FlyLal' },
  { id: 'LF_flynordic', iata: 'LF', airline: 'FlyNordic' },
  { id: 'F7_flybaboo', iata: 'F7', airline: 'Flybaboo' },
  { id: 'BE_flybe', iata: 'BE', airline: 'Flybe' },
  { id: 'Y2_flyglobespan', iata: 'Y2', airline: 'Flyglobespan' },
  {
    id: 'W3_flyhy cargo airlines',
    iata: 'W3',
    airline: 'Flyhy Cargo Airlines'
  },
  { id: 'FP_flypelican', iata: 'FP', airline: 'FlyPelican' },
  { id: 'VY_formosa airlines', iata: 'VY', airline: 'Formosa Airlines' },
  {
    id: 'BN_forward air international airlines',
    iata: 'BN',
    airline: 'Forward Air International Airlines'
  },
  { id: '5F_fly one', iata: '5F', airline: 'Fly One' },
  {
    id: 'HK_four star aviation / four star cargo',
    iata: 'HK',
    airline: 'Four Star Aviation / Four Star Cargo'
  },
  { id: 'FH_freebird airlines', iata: 'FH', airline: 'Freebird Airlines' },
  { id: 'SJ_freedom air', iata: 'SJ', airline: 'Freedom Air' },
  { id: 'FP_freedom air', iata: 'FP', airline: 'Freedom Air' },
  { id: 'F9_frontier airlines', iata: 'F9', airline: 'Frontier Airlines' },
  {
    id: '2F_frontier flying service',
    iata: '2F',
    airline: 'Frontier Flying Service'
  },
  {
    id: 'FH_futura international airways',
    iata: 'FH',
    airline: 'Futura International Airways'
  },
  { id: 'FZ_flydubai', iata: 'FZ', airline: 'Flydubai' },
  { id: '9Y_fly georgia', iata: '9Y', airline: 'Fly Georgia' },
  { id: 'VK_flyviking', iata: 'VK', airline: 'FlyViking' },
  {
    id: 'GX_guangxi beibu gulf airlines',
    iata: 'GX',
    airline: 'Guangxi Beibu Gulf Airlines'
  },
  {
    id: 'Y5_golden myanmar airlines',
    iata: 'Y5',
    airline: 'Golden Myanmar Airlines'
  },
  { id: 'GT_gb airways', iata: 'GT', airline: 'GB Airways' },
  { id: 'Z5_gmg airlines', iata: 'Z5', airline: 'GMG Airlines' },
  { id: '7O_galaxy air', iata: '7O', airline: 'Galaxy Air' },
  {
    id: '1G_galileo international',
    iata: '1G',
    airline: 'Galileo International'
  },
  {
    id: 'GC_gambia international airlines',
    iata: 'GC',
    airline: 'Gambia International Airlines'
  },
  { id: 'G7_gandalf airlines', iata: 'G7', airline: 'Gandalf Airlines' },
  { id: 'GA_garuda indonesia', iata: 'GA', airline: 'Garuda Indonesia' },
  { id: '4G_gazpromavia', iata: '4G', airline: 'Gazpromavia' },
  { id: 'GR_gemini air cargo', iata: 'GR', airline: 'Gemini Air Cargo' },
  { id: 'A9_georgian airways', iata: 'A9', airline: 'Georgian Airways' },
  {
    id: 'QB_georgian national airlines',
    iata: 'QB',
    airline: 'Georgian National Airlines'
  },
  { id: 'ST_germania', iata: 'ST', airline: 'Germania' },
  { id: '4U_germanwings', iata: '4U', airline: 'Germanwings' },
  { id: 'GP_apg airlines', iata: 'GP', airline: 'APG Airlines' },
  { id: 'GH_globus airlines', iata: 'GH', airline: 'Globus Airlines' },
  { id: 'GH_ghana airways', iata: 'GH', airline: 'Ghana Airways' },
  {
    id: 'G0_ghana international airlines',
    iata: 'G0',
    airline: 'Ghana International Airlines'
  },
  { id: 'G8_goair', iata: 'G8', airline: 'GoAir' },
  { id: 'GK_go one airways', iata: 'GK', airline: 'Go One Airways' },
  { id: 'G7_gojet airlines', iata: 'G7', airline: 'GoJet Airlines' },
  {
    id: 'G3_gol transportes aéreos',
    iata: 'G3',
    airline: 'Gol Transportes Aéreos'
  },
  { id: 'DC_golden air', iata: 'DC', airline: 'Golden Air' },
  { id: '5Z_gonini air services', iata: '5Z', airline: 'Gonini Air Services' },
  { id: 'G1_gorkha airlines', iata: 'G1', airline: 'Gorkha Airlines' },
  { id: 'GV_grant aviation', iata: 'GV', airline: 'Grant Aviation' },
  {
    id: 'ZK_great lakes airlines',
    iata: 'ZK',
    airline: 'Great Lakes Airlines'
  },
  { id: 'IJ_great wall airlines', iata: 'IJ', airline: 'Great Wall Airlines' },
  {
    id: 'G6_guine bissaur airlines',
    iata: 'G6',
    airline: 'Guine Bissaur Airlines'
  },
  { id: 'J9_guinee airlines', iata: 'J9', airline: 'Guinee Airlines' },
  { id: 'G8_gujarat airways', iata: 'G8', airline: 'Gujarat Airways' },
  { id: 'GF_gulf air', iata: 'GF', airline: 'Gulf Air' },
  { id: 'GY_guyana airways 2000', iata: 'GY', airline: 'Guyana Airways 2000' },
  { id: '3S_air guyane express', iata: '3S', airline: 'Air Guyane Express' },
  { id: 'MR_hunnu air', iata: 'MR', airline: 'Hunnu Air' },
  { id: 'A5_hop!', iata: 'A5', airline: 'Hop!' },
  {
    id: 'H6_hageland aviation services',
    iata: 'H6',
    airline: 'Hageland Aviation Services'
  },
  { id: 'HR_hahn air', iata: 'HR', airline: 'Hahn Air' },
  { id: 'H1_hahn air systems', iata: 'H1', airline: 'Hahn Air Systems' },
  { id: 'HU_hainan airlines', iata: 'HU', airline: 'Hainan Airlines' },
  {
    id: '1R_hainan phoenix information systems',
    iata: '1R',
    airline: 'Hainan Phoenix Information Systems'
  },
  {
    id: '2T_haiti ambassador airlines',
    iata: '2T',
    airline: 'Haiti Ambassador Airlines'
  },
  {
    id: '4R_hamburg international',
    iata: '4R',
    airline: 'Hamburg International'
  },
  {
    id: 'X3_hapag-lloyd express (tuifly)',
    iata: 'X3',
    airline: 'Hapag-Lloyd Express (TUIfly)'
  },
  { id: 'HF_hapagfly', iata: 'HF', airline: 'Hapagfly' },
  { id: 'HB_harbor airlines', iata: 'HB', airline: 'Harbor Airlines' },
  { id: 'HQ_harmony airways', iata: 'HQ', airline: 'Harmony Airways' },
  { id: 'HA_hawaiian airlines', iata: 'HA', airline: 'Hawaiian Airlines' },
  {
    id: 'HP_hawaiian pacific airlines',
    iata: 'HP',
    airline: 'Hawaiian Pacific Airlines'
  },
  { id: 'BH_hawkair', iata: 'BH', airline: 'Hawkair' },
  {
    id: 'HN_heavylift cargo airlines',
    iata: 'HN',
    airline: 'Heavylift Cargo Airlines'
  },
  { id: 'JB_helijet', iata: 'JB', airline: 'Helijet' },
  { id: 'ZU_helios airways', iata: 'ZU', airline: 'Helios Airways' },
  { id: '9I_helitrans', iata: '9I', airline: 'Helitrans' },
  { id: 'HJ_hellas jet', iata: 'HJ', airline: 'Hellas Jet' },
  { id: 'HW_hello', iata: 'HW', airline: 'Hello' },
  { id: '2L_helvetic airways', iata: '2L', airline: 'Helvetic Airways' },
  { id: 'EO_hewa bora airways', iata: 'EO', airline: 'Hewa Bora Airways' },
  { id: "UD_hex'air", iata: 'UD', airline: "Hex'Air" },
  { id: '5K_hi fly', iata: '5K', airline: 'Hi Fly' },
  { id: 'H5_hola airlines', iata: 'H5', airline: 'Hola Airlines' },
  {
    id: 'HC_holidays czech airlines',
    iata: 'HC',
    airline: 'Holidays Czech Airlines'
  },
  { id: 'HX_hong kong airlines', iata: 'HX', airline: 'Hong Kong Airlines' },
  { id: 'RH_hong kong air cargo', iata: 'RH', airline: 'Hong Kong Air Cargo' },
  {
    id: 'UO_hong kong express airways',
    iata: 'UO',
    airline: 'Hong Kong Express Airways'
  },
  { id: 'A6_hongtu airlines', iata: 'A6', airline: 'Hongtu Airlines' },
  { id: 'HH_hope air', iata: 'HH', airline: 'Hope Air' },
  { id: 'QX_horizon air', iata: 'QX', airline: 'Horizon Air' },
  { id: 'BN_horizon airlines', iata: 'BN', airline: 'Horizon Airlines' },
  {
    id: 'H4_héli sécurité helicopter airlines',
    iata: 'H4',
    airline: 'Héli Sécurité Helicopter Airlines'
  },
  { id: 'IK_ikar', iata: 'IK', airline: 'Ikar' },
  { id: 'II_ibc airways', iata: 'II', airline: 'IBC Airways' },
  { id: '0C_ibl aviation', iata: '0C', airline: 'IBL Aviation' },
  {
    id: 'C3_independent carrier (icar)',
    iata: 'C3',
    airline: 'Independent Carrier (ICAR)'
  },
  {
    id: '1F_infini travel information',
    iata: '1F',
    airline: 'INFINI Travel Information'
  },
  { id: '1U_ita software', iata: '1U', airline: 'ITA Software' },
  { id: 'IB_iberia airlines', iata: 'IB', airline: 'Iberia Airlines' },
  { id: 'I2_iberia express', iata: 'I2', airline: 'Iberia Express' },
  { id: 'TY_iberworld', iata: 'TY', airline: 'Iberworld' },
  { id: 'FW_ibex airlines', iata: 'FW', airline: 'Ibex Airlines' },
  {
    id: 'D8_norwegian air international (norway)',
    iata: 'D8',
    airline: 'Norwegian Air International (Norway)'
  },
  { id: 'FI_icelandair', iata: 'FI', airline: 'Icelandair' },
  { id: 'V8_iliamna air taxi', iata: 'V8', airline: 'Iliamna Air Taxi' },
  { id: 'DH_independence air', iata: 'DH', airline: 'Independence Air' },
  { id: '6E_indigo airlines', iata: '6E', airline: 'IndiGo Airlines' },
  { id: 'IC_indian airlines', iata: 'IC', airline: 'Indian Airlines' },
  { id: 'I9_indigo airlines', iata: 'I9', airline: 'Indigo Airlines' },
  { id: 'QZ_indonesia airasia', iata: 'QZ', airline: 'Indonesia AirAsia' },
  { id: 'IO_indonesian airlines', iata: 'IO', airline: 'Indonesian Airlines' },
  { id: 'C4_zimex aviation', iata: 'C4', airline: 'Zimex Aviation' },
  {
    id: 'H4_inter island airways',
    iata: 'H4',
    airline: 'Inter Island Airways'
  },
  {
    id: 'D6_interair south africa',
    iata: 'D6',
    airline: 'Interair South Africa'
  },
  { id: 'ZA_interavia airlines', iata: 'ZA', airline: 'Interavia Airlines' },
  {
    id: 'RS_intercontinental de aviación',
    iata: 'RS',
    airline: 'Intercontinental de Aviación'
  },
  { id: 'ID_interlink airlines', iata: 'ID', airline: 'Interlink Airlines' },
  {
    id: '6I_international business air',
    iata: '6I',
    airline: 'International Business Air'
  },
  { id: '3L_intersky', iata: '3L', airline: 'Intersky' },
  { id: 'I4_interstate airlines', iata: 'I4', airline: 'Interstate Airlines' },
  { id: 'IR_iran air', iata: 'IR', airline: 'Iran Air' },
  {
    id: 'EP_iran aseman airlines',
    iata: 'EP',
    airline: 'Iran Aseman Airlines'
  },
  { id: 'IA_iraqi airways', iata: 'IA', airline: 'Iraqi Airways' },
  { id: 'IH_irtysh air', iata: 'IH', airline: 'Irtysh Air' },
  { id: '2S_island express', iata: '2S', airline: 'Island Express' },
  { id: 'CN_islands nationair', iata: 'CN', airline: 'Islands Nationair' },
  { id: 'IF_islas airways', iata: 'IF', airline: 'Islas Airways' },
  {
    id: 'WC_islena de inversiones',
    iata: 'WC',
    airline: 'Islena De Inversiones'
  },
  { id: '6H_israir', iata: '6H', airline: 'Israir' },
  { id: 'FS_itali airlines', iata: 'FS', airline: 'Itali Airlines' },
  { id: 'GI_itek air', iata: 'GI', airline: 'Itek Air' },
  { id: 'H9_izair', iata: 'H9', airline: 'Izair' },
  { id: 'HC_iceland express', iata: 'HC', airline: 'Iceland Express' },
  { id: 'XM_j-air', iata: 'XM', airline: 'J-Air' },
  { id: 'JC_jal express', iata: 'JC', airline: 'JAL Express' },
  { id: 'JO_jalways', iata: 'JO', airline: 'JALways' },
  { id: 'MT_jmc airlines', iata: 'MT', airline: 'JMC Airlines' },
  {
    id: '1M_jsc transport automated information systems',
    iata: '1M',
    airline: 'JSC Transport Automated Information Systems'
  },
  {
    id: 'JI_jade cargo international',
    iata: 'JI',
    airline: 'Jade Cargo International'
  },
  { id: '3X_japan air commuter', iata: '3X', airline: 'Japan Air Commuter' },
  { id: 'JL_japan airlines', iata: 'JL', airline: 'Japan Airlines' },
  {
    id: 'JL_japan airlines domestic',
    iata: 'JL',
    airline: 'Japan Airlines Domestic'
  },
  { id: 'EG_japan asia airways', iata: 'EG', airline: 'Japan Asia Airways' },
  {
    id: 'NU_japan transocean air',
    iata: 'NU',
    airline: 'Japan Transocean Air'
  },
  { id: 'JA_jetsmart', iata: 'JA', airline: 'JetSMART' },
  { id: 'VJ_jatayu airlines', iata: 'VJ', airline: 'Jatayu Airlines' },
  { id: 'J9_jazeera airways', iata: 'J9', airline: 'Jazeera Airways' },
  { id: 'O2_olt express', iata: 'O2', airline: 'OLT Express' },
  { id: '9W_jet airways', iata: '9W', airline: 'Jet Airways' },
  { id: 'QJ_jet airways', iata: 'QJ', airline: 'Jet Airways' },
  { id: 'PP_jet aviation', iata: 'PP', airline: 'Jet Aviation' },
  {
    id: '3K_jetstar asia airways',
    iata: '3K',
    airline: 'Jetstar Asia Airways'
  },
  { id: 'LS_jet2.com', iata: 'LS', airline: 'Jet2.com' },
  { id: 'B6_jetblue airways', iata: 'B6', airline: 'JetBlue Airways' },
  { id: 'JF_jet asia airways', iata: 'JF', airline: 'Jet Asia Airways' },
  { id: '0J_jetclub', iata: '0J', airline: 'Jetclub' },
  { id: 'SG_jetsgo', iata: 'SG', airline: 'JetsGo' },
  { id: 'JQ_jetstar airways', iata: 'JQ', airline: 'Jetstar Airways' },
  { id: 'GK_jetstar japan', iata: 'GK', airline: 'JetStar Japan' },
  {
    id: 'JM_jetstar hong kong airways',
    iata: 'JM',
    airline: 'Jetstar Hong Kong Airways'
  },
  {
    id: 'JX_jett8 airlines cargo',
    iata: 'JX',
    airline: 'Jett8 Airlines Cargo'
  },
  { id: 'JO_jettime', iata: 'JO', airline: 'Jettime' },
  { id: 'GX_jetx airlines', iata: 'GX', airline: 'JetX Airlines' },
  { id: 'R5_jordan aviation', iata: 'R5', airline: 'Jordan Aviation' },
  {
    id: 'J4_jordan international air cargo',
    iata: 'J4',
    airline: 'Jordan International Air Cargo'
  },
  { id: '6J_jubba airways', iata: '6J', airline: 'Jubba Airways' },
  { id: 'HO_juneyao airlines', iata: 'HO', airline: 'Juneyao Airlines' },
  {
    id: '3Q_kc international airlines',
    iata: '3Q',
    airline: 'KC International Airlines'
  },
  { id: 'KW_kharkiv airlines', iata: 'KW', airline: 'Kharkiv Airlines' },
  { id: 'KD_kalstar aviation', iata: 'KD', airline: 'Kalstar Aviation' },
  { id: 'KD_kd avia', iata: 'KD', airline: 'KD Avia' },
  { id: 'WA_klm cityhopper', iata: 'WA', airline: 'KLM Cityhopper' },
  { id: 'KL_klm', iata: 'KL', airline: 'KLM' },
  { id: 'N2_kabo air', iata: 'N2', airline: 'Kabo Air' },
  { id: 'K4_kalitta air', iata: 'K4', airline: 'Kalitta Air' },
  { id: 'K9_kalitta charters', iata: 'K9', airline: 'Kalitta Charters' },
  {
    id: 'CB*_kalitta charters ii',
    iata: 'CB*',
    airline: 'Kalitta Charters II'
  },
  { id: 'RQ_kam air', iata: 'RQ', airline: 'Kam Air' },
  { id: 'E2_kampuchea airlines', iata: 'E2', airline: 'Kampuchea Airlines' },
  { id: 'V2_karat', iata: 'V2', airline: 'Karat' },
  { id: 'KV_kavminvodyavia', iata: 'KV', airline: 'Kavminvodyavia' },
  { id: 'M5_kenmore air', iata: 'M5', airline: 'Kenmore Air' },
  { id: 'KQ_kenya airways', iata: 'KQ', airline: 'Kenya Airways' },
  {
    id: 'BZ_keystone air service',
    iata: 'BZ',
    airline: 'Keystone Air Service'
  },
  { id: 'K6_khalifa airways', iata: 'K6', airline: 'Khalifa Airways' },
  { id: 'IT_kingfisher airlines', iata: 'IT', airline: 'Kingfisher Airlines' },
  { id: 'Y9_kish air', iata: 'Y9', airline: 'Kish Air' },
  {
    id: 'KP_kiwi international air lines',
    iata: 'KP',
    airline: 'Kiwi International Air Lines'
  },
  {
    id: '7K_kogalymavia air company',
    iata: '7K',
    airline: 'Kogalymavia Air Company'
  },
  { id: '8J_komiinteravia', iata: '8J', airline: 'Komiinteravia' },
  { id: 'KE_korean air', iata: 'KE', airline: 'Korean Air' },
  {
    id: '7B_krasnojarsky airlines',
    iata: '7B',
    airline: 'Krasnojarsky Airlines'
  },
  { id: 'K9_krylo airlines', iata: 'K9', airline: 'Krylo Airlines' },
  { id: 'GW_kuban airlines', iata: 'GW', airline: 'Kuban Airlines' },
  { id: 'VD_kunpeng airlines', iata: 'VD', airline: 'Kunpeng Airlines' },
  { id: 'KU_kuwait airways', iata: 'KU', airline: 'Kuwait Airways' },
  { id: 'GO_kuzu airlines cargo', iata: 'GO', airline: 'Kuzu Airlines Cargo' },
  { id: 'N5_kyrgyz airlines', iata: 'N5', airline: 'Kyrgyz Airlines' },
  { id: 'QH_kyrgyzstan', iata: 'QH', airline: 'Kyrgyzstan' },
  { id: 'R8_kyrgyzstan airlines', iata: 'R8', airline: 'Kyrgyzstan Airlines' },
  { id: 'FK_keewatin air', iata: 'FK', airline: 'Keewatin Air' },
  { id: 'YQ_tar aerolineas', iata: 'YQ', airline: 'TAR Aerolineas' },
  {
    id: 'JF_l.a.b. flying service',
    iata: 'JF',
    airline: 'L.A.B. Flying Service'
  },
  { id: 'LR_lacsa', iata: 'LR', airline: 'LACSA' },
  {
    id: 'KG_lai - línea aérea iaaca',
    iata: 'KG',
    airline: 'LAI - Línea Aérea IAACA'
  },
  { id: 'LA_latam chile', iata: 'LA', airline: 'LATAM Chile' },
  { id: '4M_latam argentina', iata: '4M', airline: 'LATAM Argentina' },
  { id: 'UC_latam cargo chile', iata: 'UC', airline: 'LATAM Cargo Chile' },
  { id: 'PZ_latam paraguay', iata: 'PZ', airline: 'LATAM Paraguay' },
  { id: 'LU_latam express', iata: 'LU', airline: 'LATAM Express' },
  { id: 'LP_latam peru', iata: 'LP', airline: 'LATAM Peru' },
  { id: 'NI_lanica', iata: 'NI', airline: 'LANICA' },
  {
    id: 'L5_línea aérea cuencana',
    iata: 'L5',
    airline: 'Línea Aérea Cuencana'
  },
  { id: 'LO_lot polish airlines', iata: 'LO', airline: 'LOT Polish Airlines' },
  {
    id: 'XO_lte international airways',
    iata: 'XO',
    airline: 'LTE International Airways'
  },
  { id: 'L3_ltu austria', iata: 'L3', airline: 'LTU Austria' },
  { id: 'LT_ltu international', iata: 'LT', airline: 'LTU International' },
  { id: 'N6_lagun air', iata: 'N6', airline: 'Lagun Air' },
  { id: 'IK_lankair', iata: 'IK', airline: 'Lankair' },
  { id: 'QL_lankan cargo', iata: 'QL', airline: 'Lankan Cargo' },
  { id: 'QV_lao airlines', iata: 'QV', airline: 'Lao Airlines' },
  {
    id: 'L7_laoag international airlines',
    iata: 'L7',
    airline: 'Laoag International Airlines'
  },
  { id: 'NG_lauda air', iata: 'NG', airline: 'Lauda Air' },
  { id: 'OE[28]_laudamotion', iata: 'OE[28]', airline: 'LaudaMotion' },
  {
    id: 'LQ_lebanese air transport',
    iata: 'LQ',
    airline: 'Lebanese Air Transport'
  },
  {
    id: 'LI_leeward islands air transport',
    iata: 'LI',
    airline: 'Leeward Islands Air Transport'
  },
  { id: 'LV_level', iata: 'LV', airline: 'Level' },
  {
    id: 'LN_libyan arab airlines',
    iata: 'LN',
    airline: 'Libyan Arab Airlines'
  },
  { id: 'L7_línea aérea sapsa', iata: 'L7', airline: 'Línea Aérea SAPSA' },
  {
    id: 'QL_línea aérea de servicio ejecutivo regional',
    iata: 'QL',
    airline: 'Línea Aérea de Servicio Ejecutivo Regional'
  },
  {
    id: 'ZE_líneas aéreas azteca',
    iata: 'ZE',
    airline: 'Líneas Aéreas Azteca'
  },
  {
    id: 'TM_linhas aéreas de moçambique',
    iata: 'TM',
    airline: 'Linhas Aéreas de Moçambique'
  },
  {
    id: 'JT_lion mentari airlines',
    iata: 'JT',
    airline: 'Lion Mentari Airlines'
  },
  {
    id: 'LM_livingston energy flight',
    iata: 'LM',
    airline: 'Livingston Energy Flight'
  },
  {
    id: 'LB_lloyd aéreo boliviano',
    iata: 'LB',
    airline: 'Lloyd Aéreo Boliviano'
  },
  { id: 'LC_loganair', iata: 'LC', airline: 'Loganair' },
  {
    id: 'HE_luftfahrtgesellschaft walter',
    iata: 'HE',
    airline: 'Luftfahrtgesellschaft Walter'
  },
  { id: 'LH_lufthansa', iata: 'LH', airline: 'Lufthansa' },
  { id: 'LH_lufthansa cargo', iata: 'LH', airline: 'Lufthansa Cargo' },
  { id: 'CL_lufthansa cityline', iata: 'CL', airline: 'Lufthansa CityLine' },
  { id: 'L1_lufthansa systems', iata: 'L1', airline: 'Lufthansa Systems' },
  {
    id: 'DV_lufttaxi fluggesellschaft',
    iata: 'DV',
    airline: 'Lufttaxi Fluggesellschaft'
  },
  { id: 'L5_lufttransport', iata: 'L5', airline: 'Lufttransport' },
  { id: 'LG_luxair', iata: 'LG', airline: 'Luxair' },
  { id: '5V_lviv airlines', iata: '5V', airline: 'Lviv Airlines' },
  { id: 'L2_lynden air cargo', iata: 'L2', airline: 'Lynden Air Cargo' },
  { id: 'L4_lynx aviation', iata: 'L4', airline: 'Lynx Aviation' },
  {
    id: 'Z8_línea aérea amaszonas',
    iata: 'Z8',
    airline: 'Línea Aérea Amaszonas'
  },
  {
    id: 'MJ_líneas aéreas privadas argentinas',
    iata: 'MJ',
    airline: 'Líneas Aéreas Privadas Argentinas'
  },
  { id: 'LT_longjiang airlines', iata: 'LT', airline: 'LongJiang Airlines' },
  { id: 'LJ_jin air', iata: 'LJ', airline: 'Jin Air' },
  { id: 'Q2_maldivian (airline)', iata: 'Q2', airline: 'Maldivian (airline)' },
  { id: 'OD_malindo airways', iata: 'OD', airline: 'Malindo Airways' },
  {
    id: 'AQ_map-management and planung',
    iata: 'AQ',
    airline: 'MAP-Management and Planung'
  },
  { id: 'M7_masair', iata: 'M7', airline: 'MasAir' },
  { id: 'MH_maswings', iata: 'MH', airline: 'MASwings' },
  {
    id: 'IN_mat macedonian airlines',
    iata: 'IN',
    airline: 'MAT Macedonian Airlines'
  },
  {
    id: 'OM_miat mongolian airlines',
    iata: 'OM',
    airline: 'MIAT Mongolian Airlines'
  },
  { id: 'MB_mng airlines', iata: 'MB', airline: 'MNG Airlines' },
  { id: 'CC_macair airlines', iata: 'CC', airline: 'Macair Airlines' },
  { id: 'DM_maersk', iata: 'DM', airline: 'Maersk' },
  { id: 'W5_mahan air', iata: 'W5', airline: 'Mahan Air' },
  { id: 'M2_mahfooz aviation', iata: 'M2', airline: 'Mahfooz Aviation' },
  { id: 'MH_malaysia airlines', iata: 'MH', airline: 'Malaysia Airlines' },
  { id: 'TF_malmö aviation', iata: 'TF', airline: 'Malmö Aviation' },
  { id: 'R5_malta air charter', iata: 'R5', airline: 'Malta Air Charter' },
  {
    id: 'MA_malév hungarian airlines',
    iata: 'MA',
    airline: 'Malév Hungarian Airlines'
  },
  { id: 'RI_mandala airlines', iata: 'RI', airline: 'Mandala Airlines' },
  { id: 'AE_mandarin airlines', iata: 'AE', airline: 'Mandarin Airlines' },
  { id: 'JE_mango', iata: 'JE', airline: 'Mango' },
  { id: '6V_mars rk', iata: '6V', airline: 'Mars RK' },
  { id: 'M7_marsland aviation', iata: 'M7', airline: 'Marsland Aviation' },
  { id: 'MP_martinair', iata: 'MP', airline: 'Martinair' },
  {
    id: 'Q4_mastertop linhas aéreas',
    iata: 'Q4',
    airline: 'Mastertop Linhas Aéreas'
  },
  {
    id: 'H5_mavial magadan airlines',
    iata: 'H5',
    airline: 'Mavial Magadan Airlines'
  },
  { id: '8M_maxair', iata: '8M', airline: 'Maxair' },
  { id: 'MY_maxjet airways', iata: 'MY', airline: 'Maxjet Airways' },
  { id: 'MW_maya island air', iata: 'MW', airline: 'Maya Island Air' },
  { id: '7M_mayair', iata: '7M', airline: 'Mayair' },
  { id: 'M8_mekong airlines', iata: 'M8', airline: 'Mekong Airlines' },
  { id: 'IM_menajet', iata: 'IM', airline: 'Menajet' },
  { id: 'IG_meridiana', iata: 'IG', airline: 'Meridiana' },
  {
    id: 'MZ_merpati nusantara airlines',
    iata: 'MZ',
    airline: 'Merpati Nusantara Airlines'
  },
  { id: 'YV_mesa airlines', iata: 'YV', airline: 'Mesa Airlines' },
  { id: 'XJ_mesaba airlines', iata: 'XJ', airline: 'Mesaba Airlines' },
  {
    id: 'MX_mexicana de aviación',
    iata: 'MX',
    airline: 'Mexicana de Aviación'
  },
  {
    id: 'GL_miami air international',
    iata: 'GL',
    airline: 'Miami Air International'
  },
  {
    id: 'ME_middle east airlines',
    iata: 'ME',
    airline: 'Middle East Airlines'
  },
  {
    id: 'JI_midway airlines (1993–2003)',
    iata: 'JI',
    airline: 'Midway Airlines (1993–2003)'
  },
  {
    id: 'ML_midway airlines (1976–1991)',
    iata: 'ML',
    airline: 'Midway Airlines (1976–1991)'
  },
  { id: 'YX_midwest airlines', iata: 'YX', airline: 'Midwest Airlines' },
  {
    id: 'MY_midwest airlines (egypt)',
    iata: 'MY',
    airline: 'Midwest Airlines (Egypt)'
  },
  { id: 'MJ_mihin lanka', iata: 'MJ', airline: 'Mihin Lanka' },
  { id: 'M4_mistral air', iata: 'M4', airline: 'Mistral Air' },
  { id: 'MW_mokulele airlines', iata: 'MW', airline: 'Mokulele Airlines' },
  { id: '2M_moldavian airlines', iata: '2M', airline: 'Moldavian Airlines' },
  { id: 'ZB_monarch airlines', iata: 'ZB', airline: 'Monarch Airlines' },
  { id: '8I_myway airlines', iata: '8I', airline: 'Myway Airlines' },
  { id: 'YM_montenegro airlines', iata: 'YM', airline: 'Montenegro Airlines' },
  { id: '5M_montserrat airways', iata: '5M', airline: 'Montserrat Airways' },
  { id: '3R_moskovia airlines', iata: '3R', airline: 'Moskovia Airlines' },
  { id: 'M9_motor sich', iata: 'M9', airline: 'Motor Sich' },
  { id: 'NM_mount cook airlines', iata: 'NM', airline: 'Mount Cook Airlines' },
  {
    id: 'N4_mountain air company',
    iata: 'N4',
    airline: 'Mountain Air Company'
  },
  { id: 'VZ_mytravel airways', iata: 'VZ', airline: 'MyTravel Airways' },
  { id: 'UB_myanma airways', iata: 'UB', airline: 'Myanma Airways' },
  {
    id: '8M_myanmar airways international',
    iata: '8M',
    airline: 'Myanmar Airways International'
  },
  { id: 'M2_mhs aviation gmbh', iata: 'M2', airline: 'MHS Aviation GmbH' },
  { id: '6N_niger airlines', iata: '6N', airline: 'Niger Airlines' },
  { id: 'N5_fly easy', iata: 'N5', airline: 'Fly Easy' },
  { id: 'DV_nantucket airlines', iata: 'DV', airline: 'Nantucket Airlines' },
  { id: 'P9_nas air', iata: 'P9', airline: 'Nas Air' },
  { id: 'UE_nasair', iata: 'UE', airline: 'Nasair' },
  { id: 'N4_national airlines', iata: 'N4', airline: 'National Airlines' },
  { id: 'N7_national airlines', iata: 'N7', airline: 'National Airlines' },
  { id: 'NA_national airlines', iata: 'NA', airline: 'National Airlines' },
  {
    id: 'N8_national air cargo dba national airlines',
    iata: 'N8',
    airline: 'National Air Cargo dba National Airlines'
  },
  { id: 'IN_nam air', iata: 'IN', airline: 'NAM Air' },
  {
    id: '9O_national airways cameroon',
    iata: '9O',
    airline: 'National Airways Cameroon'
  },
  {
    id: 'NC_national jet systems',
    iata: 'NC',
    airline: 'National Jet Systems'
  },
  { id: 'CE_nationwide airlines', iata: 'CE', airline: 'Nationwide Airlines' },
  { id: '1N_navitaire', iata: '1N', airline: 'Navitaire' },
  { id: 'RA_nepal airlines', iata: 'RA', airline: 'Nepal Airlines' },
  { id: 'NO_neos', iata: 'NO', airline: 'Neos' },
  { id: '1I_netjets', iata: '1I', airline: 'NetJets' },
  {
    id: 'EJ_new england airlines',
    iata: 'EJ',
    airline: 'New England Airlines'
  },
  { id: '2N_nextjet', iata: '2N', airline: 'NextJet' },
  { id: 'HG_niki', iata: 'HG', airline: 'Niki' },
  {
    id: 'KZ_nippon cargo airlines',
    iata: 'KZ',
    airline: 'Nippon Cargo Airlines'
  },
  { id: 'DD_nok air', iata: 'DD', airline: 'Nok Air' },
  { id: 'XW_nokscoot', iata: 'XW', airline: 'NokScoot' },
  { id: '5N_nordavia', iata: '5N', airline: 'Nordavia' },
  {
    id: 'JH_nordeste linhas aéreas regionais',
    iata: 'JH',
    airline: 'Nordeste Linhas Aéreas Regionais'
  },
  { id: '6N_nordic regional', iata: '6N', airline: 'Nordic Regional' },
  { id: 'N4_nordwind airlines', iata: 'N4', airline: 'Nordwind Airlines' },
  { id: 'N5_norfolk air', iata: 'N5', airline: 'Norfolk Air' },
  {
    id: 'NA_north american airlines',
    iata: 'NA',
    airline: 'North American Airlines'
  },
  {
    id: 'N9_north coast aviation',
    iata: 'N9',
    airline: 'North Coast Aviation'
  },
  { id: 'M3_north flying', iata: 'M3', airline: 'North Flying' },
  {
    id: 'HW_north-wright airways',
    iata: 'HW',
    airline: 'North-Wright Airways'
  },
  { id: 'NC_northern air cargo', iata: 'NC', airline: 'Northern Air Cargo' },
  {
    id: 'U7_northern dene airways',
    iata: 'U7',
    airline: 'Northern Dene Airways'
  },
  { id: 'NW_northwest airlines', iata: 'NW', airline: 'Northwest Airlines' },
  {
    id: 'FY_northwest regional airlines',
    iata: 'FY',
    airline: 'Northwest Regional Airlines'
  },
  { id: 'J3_northwestern air', iata: 'J3', airline: 'Northwestern Air' },
  {
    id: 'DY_norwegian air shuttle',
    iata: 'DY',
    airline: 'Norwegian Air Shuttle'
  },
  { id: 'DI_norwegian air uk', iata: 'DI', airline: 'Norwegian Air UK' },
  {
    id: 'DN_norwegian air argentina',
    iata: 'DN',
    airline: 'Norwegian Air Argentina'
  },
  {
    id: 'D8_norwegian air international',
    iata: 'D8',
    airline: 'Norwegian Air International'
  },
  { id: 'DU_norwegian long haul', iata: 'DU', airline: 'Norwegian Long Haul' },
  {
    id: 'DH_norwegian air norway',
    iata: 'DH',
    airline: 'Norwegian Air Norway'
  },
  { id: 'BJ_nouvel air tunisie', iata: 'BJ', airline: 'Nouvel Air Tunisie' },
  { id: 'O9_nova airline', iata: 'O9', airline: 'Nova Airline' },
  { id: '1I_novair', iata: '1I', airline: 'Novair' },
  { id: 'VQ_novo air', iata: 'VQ', airline: 'Novo Air' },
  { id: 'N6_nuevo continente', iata: 'N6', airline: 'Nuevo Continente' },
  { id: '1I_netjets europe', iata: '1I', airline: 'NetJets Europe' },
  { id: 'NK_spirit airlines', iata: 'NK', airline: 'Spirit Airlines' },
  { id: "UQ_o'connor airlines", iata: 'UQ', airline: "O'Connor Airlines" },
  {
    id: 'O8_oasis hong kong airlines',
    iata: 'O8',
    airline: 'Oasis Hong Kong Airlines'
  },
  { id: 'VC_ocean airlines', iata: 'VC', airline: 'Ocean Airlines' },
  { id: 'O2_linear air', iata: 'O2', airline: 'Linear Air' },
  { id: 'OA_olympic air', iata: 'OA', airline: 'Olympic Air' },
  { id: 'WY_oman air', iata: 'WY', airline: 'Oman Air' },
  { id: 'OV_salamair', iata: 'OV', airline: 'SalamAir' },
  { id: 'OE_laudamotion', iata: 'OE', airline: 'Laudamotion' },
  {
    id: 'OY_omni air international',
    iata: 'OY',
    airline: 'Omni Air International'
  },
  { id: '8Q_onur air', iata: '8Q', airline: 'Onur Air' },
  { id: 'R2_orenburg airlines', iata: 'R2', airline: 'Orenburg Airlines' },
  {
    id: 'OX_orient thai airlines',
    iata: 'OX',
    airline: 'Orient Thai Airlines'
  },
  {
    id: 'QO_origin pacific airways',
    iata: 'QO',
    airline: 'Origin Pacific Airways'
  },
  { id: 'OL_olt express germany', iata: 'OL', airline: 'OLT Express Germany' },
  { id: 'ON_our airline', iata: 'ON', airline: 'Our Airline' },
  { id: 'OJ_overland airways', iata: 'OJ', airline: 'Overland Airways' },
  { id: 'OZ_ozark air lines', iata: 'OZ', airline: 'Ozark Air Lines' },
  { id: 'O7_ozjet airlines', iata: 'O7', airline: 'Ozjet Airlines' },
  { id: 'OA_olympic airlines', iata: 'OA', airline: 'Olympic Airlines' },
  {
    id:
      'OB_oasis international airlines now assigned to boliviana de aviacion (boa)',
    iata: 'OB',
    airline:
      'Oasis International Airlines Now assigned to Boliviana de Aviacion (BoA)'
  },
  { id: 'PV_pan air', iata: 'PV', airline: 'PAN Air' },
  { id: '9Q_pb air', iata: '9Q', airline: 'PB Air' },
  { id: 'PU_pluna', iata: 'PU', airline: 'PLUNA' },
  { id: 'U4_pmtair', iata: 'U4', airline: 'PMTair' },
  { id: 'OH_psa airlines', iata: 'OH', airline: 'PSA Airlines' },
  { id: 'Y5_pace airlines', iata: 'Y5', airline: 'Pace Airlines' },
  { id: 'BL_pacific airlines', iata: 'BL', airline: 'Pacific Airlines' },
  { id: 'DJ_pacific blue', iata: 'DJ', airline: 'Pacific Blue' },
  {
    id: '8P_pacific coastal airlines',
    iata: '8P',
    airline: 'Pacific Coastal Airlines'
  },
  {
    id: 'Q8_pacific east asia cargo airlines',
    iata: 'Q8',
    airline: 'Pacific East Asia Cargo Airlines'
  },
  { id: 'LW_pacific wings', iata: 'LW', airline: 'Pacific Wings' },
  { id: 'GX_pacificair', iata: 'GX', airline: 'Pacificair' },
  {
    id: 'PK_pakistan international airlines',
    iata: 'PK',
    airline: 'Pakistan International Airlines'
  },
  {
    id: 'GP_palau trans pacific airlines',
    iata: 'GP',
    airline: 'Palau Trans Pacific Airlines'
  },
  {
    id: 'PF_palestinian airlines',
    iata: 'PF',
    airline: 'Palestinian Airlines'
  },
  { id: 'NR_pamir airways', iata: 'NR', airline: 'Pamir Airways' },
  {
    id: 'PN_pan american airways',
    iata: 'PN',
    airline: 'Pan American Airways'
  },
  {
    id: 'PA_pan american airways',
    iata: 'PA',
    airline: 'Pan American Airways'
  },
  {
    id: 'PA_pan american world airways',
    iata: 'PA',
    airline: 'Pan American World Airways'
  },
  {
    id: 'P8_pantanal linhas aéreas',
    iata: 'P8',
    airline: 'Pantanal Linhas Aéreas'
  },
  { id: 'I7_paramount airways', iata: 'I7', airline: 'Paramount Airways' },
  {
    id: 'P3_passaredo transportes aéreos',
    iata: 'P3',
    airline: 'Passaredo Transportes Aéreos'
  },
  { id: 'HP_pearl airways', iata: 'HP', airline: 'Pearl Airways' },
  { id: 'PC_pegasus airlines', iata: 'PC', airline: 'Pegasus Airlines' },
  { id: "PE_people's", iata: 'PE', airline: "People's" },
  {
    id: '1I_pegasus hava tasimaciligi',
    iata: '1I',
    airline: 'Pegasus Hava Tasimaciligi'
  },
  { id: 'KS_peninsula airways', iata: 'KS', airline: 'Peninsula Airways' },
  { id: 'P9_perm airlines', iata: 'P9', airline: 'Perm Airlines' },
  { id: 'P9_peruvian airlines', iata: 'P9', airline: 'Peruvian Airlines' },
  { id: 'Z2_philippines airasia', iata: 'Z2', airline: 'Philippines AirAsia' },
  { id: 'PR_philippine airlines', iata: 'PR', airline: 'Philippine Airlines' },
  { id: 'HP_phoenix airways', iata: 'HP', airline: 'Phoenix Airways' },
  { id: '9R_phuket air', iata: '9R', airline: 'Phuket Air' },
  {
    id: 'PI_piedmont airlines (1948-1989)',
    iata: 'PI',
    airline: 'Piedmont Airlines (1948-1989)'
  },
  { id: '9E_pinnacle airlines', iata: '9E', airline: 'Pinnacle Airlines' },
  { id: 'PO_polar air cargo', iata: 'PO', airline: 'Polar Air Cargo' },
  { id: 'PH_polynesian airlines', iata: 'PH', airline: 'Polynesian Airlines' },
  { id: 'DJ_polynesian blue', iata: 'DJ', airline: 'Polynesian Blue' },
  { id: '1U_polyot sirena', iata: '1U', airline: 'Polyot Sirena' },
  { id: 'PD_porter airlines', iata: 'PD', airline: 'Porter Airlines' },
  { id: 'NI_portugalia', iata: 'NI', airline: 'Portugalia' },
  { id: 'BK_potomac air', iata: 'BK', airline: 'Potomac Air' },
  { id: 'PW_precision air', iata: 'PW', airline: 'Precision Air' },
  { id: 'TO_president airlines', iata: 'TO', airline: 'President Airlines' },
  { id: 'FE_primaris airlines', iata: 'FE', airline: 'Primaris Airlines' },
  { id: '8Q_princess air', iata: '8Q', airline: 'Princess Air' },
  {
    id: '8W_private wings flugcharter',
    iata: '8W',
    airline: 'Private Wings Flugcharter'
  },
  {
    id: 'P6_privilege style líneas aéreas',
    iata: 'P6',
    airline: 'Privilege Style Líneas Aéreas'
  },
  { id: 'P0_proflight zambia', iata: 'P0', airline: 'Proflight Zambia' },
  {
    id: 'FV_pulkovo aviation enterprise',
    iata: 'FV',
    airline: 'Pulkovo Aviation Enterprise'
  },
  { id: 'QF_qantas', iata: 'QF', airline: 'Qantas' },
  { id: 'QF_qantaslink', iata: 'QF', airline: 'Qantaslink' },
  { id: 'QR_qatar airways', iata: 'QR', airline: 'Qatar Airways' },
  { id: 'R6_racsa', iata: 'R6', airline: 'RACSA' },
  { id: '1D_radixx', iata: '1D', airline: 'Radixx' },
  { id: '8L_redhill aviation', iata: '8L', airline: 'Redhill Aviation' },
  { id: 'V4_reem air', iata: 'V4', airline: 'Reem Air' },
  { id: 'FN_regional air lines', iata: 'FN', airline: 'Regional Air Lines' },
  { id: 'ZL_regional express', iata: 'ZL', airline: 'Regional Express' },
  { id: 'P7_regional paraguaya', iata: 'P7', airline: 'Regional Paraguaya' },
  { id: '3C_regionsair', iata: '3C', airline: 'RegionsAir' },
  { id: 'QQ_reno air', iata: 'QQ', airline: 'Reno Air' },
  { id: 'RW_republic airlines', iata: 'RW', airline: 'Republic Airlines' },
  {
    id: 'RH_republic express airlines',
    iata: 'RH',
    airline: 'Republic Express Airlines'
  },
  { id: 'C7_rico linhas aéreas', iata: 'C7', airline: 'Rico Linhas Aéreas' },
  { id: 'E2_rio grande air', iata: 'E2', airline: 'Rio Grande Air' },
  { id: 'RL_rio linhas aéreas', iata: 'RL', airline: 'Rio Linhas Aéreas' },
  {
    id: 'SL_rio sul serviços aéreos regionais',
    iata: 'SL',
    airline: 'Rio Sul Serviços Aéreos Regionais'
  },
  { id: 'V2_vision airlines', iata: 'V2', airline: 'Vision Airlines' },
  { id: 'FV_rossiya', iata: 'FV', airline: 'Rossiya' },
  { id: 'GZ_air rarotonga', iata: 'GZ', airline: 'Air Rarotonga' },
  { id: 'RR_royal air force', iata: 'RR', airline: 'Royal Air Force' },
  {
    id: 'RS_royal air force of oman',
    iata: 'RS',
    airline: 'Royal Air Force of Oman'
  },
  { id: 'AT_royal air maroc', iata: 'AT', airline: 'Royal Air Maroc' },
  { id: 'R0_royal airlines', iata: 'R0', airline: 'Royal Airlines' },
  {
    id: 'V5_royal aruban airlines',
    iata: 'V5',
    airline: 'Royal Aruban Airlines'
  },
  {
    id: 'BI_royal brunei airlines',
    iata: 'BI',
    airline: 'Royal Brunei Airlines'
  },
  { id: 'RJ_royal jordanian', iata: 'RJ', airline: 'Royal Jordanian' },
  { id: 'RK_skyview airways', iata: 'RK', airline: 'Skyview Airways' },
  {
    id: 'RK_royal khmer airlines',
    iata: 'RK',
    airline: 'Royal Khmer Airlines'
  },
  {
    id: 'RL_royal phnom penh airways',
    iata: 'RL',
    airline: 'Royal Phnom Penh Airways'
  },
  {
    id: 'WR_royal tongan airlines',
    iata: 'WR',
    airline: 'Royal Tongan Airlines'
  },
  {
    id: 'P7_russian sky airlines',
    iata: 'P7',
    airline: 'Russian Sky Airlines'
  },
  { id: 'WB_rwandair express', iata: 'WB', airline: 'Rwandair Express' },
  { id: '7S_ryan air service', iata: '7S', airline: 'Ryan Air Service' },
  {
    id: 'RD_ryan international airlines',
    iata: 'RD',
    airline: 'Ryan International Airlines'
  },
  { id: 'FR_ryanair', iata: 'FR', airline: 'Ryanair' },
  {
    id: 'YS_régional compagnie aérienne européenne',
    iata: 'YS',
    airline: 'Régional Compagnie Aérienne Européenne'
  },
  { id: 'RT_uvt aero', iata: 'RT', airline: 'UVT Aero' },
  { id: 'TR_scoot', iata: 'TR', airline: 'Scoot' },
  {
    id: 'IJ_spring airlines japan',
    iata: 'IJ',
    airline: 'Spring Airlines Japan'
  },
  { id: '6Y_smartlynx airlines', iata: '6Y', airline: 'Smartlynx Airlines' },
  { id: 'E3_sabaidee airways', iata: 'E3', airline: 'Sabaidee Airways' },
  { id: 'GG_sky lease cargo', iata: 'GG', airline: 'Sky Lease Cargo' },
  { id: 'GW_skygreece airlines', iata: 'GW', airline: 'SkyGreece Airlines' },
  { id: 'N9_shree airlines', iata: 'N9', airline: 'Shree Airlines' },
  { id: '7E_sylt air gmbh', iata: '7E', airline: 'Sylt Air GmbH' },
  { id: 'OL_samoa air', iata: 'OL', airline: 'Samoa Air' },
  { id: 'S4_sata international', iata: 'S4', airline: 'SATA International' },
  {
    id: 'SA_south african airways',
    iata: 'SA',
    airline: 'South African Airways'
  },
  {
    id: 'RS_sky regional airlines',
    iata: 'RS',
    airline: 'Sky Regional Airlines'
  },
  { id: 'W7_sayakhat airlines', iata: 'W7', airline: 'Sayakhat Airlines' },
  {
    id: 'NL_shaheen air international',
    iata: 'NL',
    airline: 'Shaheen Air International'
  },
  { id: 'MM_sam colombia', iata: 'MM', airline: 'SAM Colombia' },
  {
    id: 'SK_scandinavian airlines',
    iata: 'SK',
    airline: 'Scandinavian Airlines'
  },
  { id: 'PI_sol del paraguay', iata: 'PI', airline: 'Sol del Paraguay' },
  { id: 'UG_sevenair', iata: 'UG', airline: 'SevenAir' },
  { id: 'S7_s7 airlines', iata: 'S7', airline: 'S7 Airlines' },
  { id: 'Q7_skybahamas', iata: 'Q7', airline: 'SkyBahamas' },
  { id: 'BB_seaborne airlines', iata: 'BB', airline: 'Seaborne Airlines' },
  { id: 'PV_st barth commuter', iata: 'PV', airline: 'St Barth Commuter' },
  { id: 'K5_seaport airlines', iata: 'K5', airline: 'SeaPort Airlines' },
  { id: 'W3_switfair cargo', iata: 'W3', airline: 'Switfair Cargo' },
  {
    id: 'FP_servicios aéreos de los andes',
    iata: 'FP',
    airline: 'Servicios Aéreos de los Andes'
  },
  { id: 'UL_srilankan airlines', iata: 'UL', airline: 'SriLankan Airlines' },
  {
    id: 'SY_sun country airlines',
    iata: 'SY',
    airline: 'Sun Country Airlines'
  },
  { id: 'SG_spicejet', iata: 'SG', airline: 'Spicejet' },
  { id: 'I6_sky eyes', iata: 'I6', airline: 'Sky Eyes' },
  { id: 'EH_saeta', iata: 'EH', airline: 'SAETA' },
  { id: '7G_star flyer', iata: '7G', airline: 'Star Flyer' },
  { id: 'FA_safair', iata: 'FA', airline: 'Safair' },
  { id: 'N5_skagway air service', iata: 'N5', airline: 'Skagway Air Service' },
  {
    id: 'HZ_sakhalinskie aviatrassy (sat)',
    iata: 'HZ',
    airline: 'Sakhalinskie Aviatrassy (SAT)'
  },
  { id: 'SP_sata air acores', iata: 'SP', airline: 'SATA Air Acores' },
  { id: '8S_scorpio aviation', iata: '8S', airline: 'Scorpio Aviation' },
  { id: 'ZY_sky airlines', iata: 'ZY', airline: 'Sky Airlines' },
  { id: 'SQ_singapore airlines', iata: 'SQ', airline: 'Singapore Airlines' },
  { id: '5M_sibaviatrans', iata: '5M', airline: 'Sibaviatrans' },
  { id: 'SI_skynet airlines', iata: 'SI', airline: 'Skynet Airlines' },
  { id: 'XS_sita', iata: 'XS', airline: 'SITA' },
  { id: 'ZS_sama airlines', iata: 'ZS', airline: 'Sama Airlines' },
  {
    id: 'SQ_singapore airlines cargo',
    iata: 'SQ',
    airline: 'Singapore Airlines Cargo'
  },
  { id: 'FT_siem reap airways', iata: 'FT', airline: 'Siem Reap Airways' },
  { id: 'SX_sky work airlines', iata: 'SX', airline: 'Sky Work Airlines' },
  { id: 'SM_swedline express', iata: 'SM', airline: 'Swedline Express' },
  { id: 'S6_star air', iata: 'S6', airline: 'Star Air' },
  {
    id: 'D2_severstal air company',
    iata: 'D2',
    airline: 'Severstal Air Company'
  },
  { id: 'VD_swedjet airways', iata: 'VD', airline: 'SwedJet Airways' },
  { id: 'QF_sunstate airlines', iata: 'QF', airline: 'Sunstate Airlines' },
  { id: '5G_skyservice airlines', iata: '5G', airline: 'Skyservice Airlines' },
  { id: 'RE_stobart air', iata: 'RE', airline: 'Stobart Air' },
  {
    id: 'FS_servicios de transportes aéreos fueguinos',
    iata: 'FS',
    airline: 'Servicios de Transportes Aéreos Fueguinos'
  },
  { id: 'SD_sudan airways', iata: 'SD', airline: 'Sudan Airways' },
  { id: 'PI_sun air (fiji)', iata: 'PI', airline: 'Sun Air (Fiji)' },
  {
    id: 'LW_sun air international',
    iata: 'LW',
    airline: 'Sun Air International'
  },
  {
    id: 'EZ_sun air of scandinavia',
    iata: 'EZ',
    airline: 'Sun Air of Scandinavia'
  },
  { id: 'SV_saudia', iata: 'SV', airline: 'Saudia' },
  { id: 'WN_southwest airlines', iata: 'WN', airline: 'Southwest Airlines' },
  {
    id: 'A4_southern winds airlines',
    iata: 'A4',
    airline: 'Southern Winds Airlines'
  },
  { id: 'WG_sunwing airlines', iata: 'WG', airline: 'Sunwing Airlines' },
  {
    id: 'LX_swiss international air lines',
    iata: 'LX',
    airline: 'Swiss International Air Lines'
  },
  { id: 'SR_swissair', iata: 'SR', airline: 'Swissair' },
  { id: 'SR_sundair', iata: 'SR', airline: 'Sundair' },
  {
    id: 'LZ[45]_swiss global air lines',
    iata: 'LZ[45]',
    airline: 'Swiss Global Air Lines'
  },
  { id: 'WV_swe fly', iata: 'WV', airline: 'Swe Fly' },
  { id: 'S8_shovkoviy shlyah', iata: 'S8', airline: 'Shovkoviy Shlyah' },
  {
    id: 'Q4_swazi express airways',
    iata: 'Q4',
    airline: 'Swazi Express Airways'
  },
  { id: 'WO_swoop', iata: 'WO', airline: 'Swoop' },
  { id: 'S8_skywise airline', iata: 'S8', airline: 'Skywise Airline' },
  { id: 'XQ_sunexpress', iata: 'XQ', airline: 'SunExpress' },
  {
    id: 'RB_syrian arab airlines',
    iata: 'RB',
    airline: 'Syrian Arab Airlines'
  },
  { id: 'AL_skywalk airlines', iata: 'AL', airline: 'Skywalk Airlines' },
  { id: 'ZP_silk way airlines', iata: 'ZP', airline: 'Silk Way Airlines' },
  {
    id: '7L_silk way west airlines',
    iata: '7L',
    airline: 'Silk Way West Airlines'
  },
  { id: 'E5_samara airlines', iata: 'E5', airline: 'Samara Airlines' },
  { id: 'SC_shandong airlines', iata: 'SC', airline: 'Shandong Airlines' },
  { id: 'SK_sas braathens', iata: 'SK', airline: 'SAS Braathens' },
  { id: '9C_spring airlines', iata: '9C', airline: 'Spring Airlines' },
  { id: '3U_sichuan airlines', iata: '3U', airline: 'Sichuan Airlines' },
  { id: 'FM_shanghai airlines', iata: 'FM', airline: 'Shanghai Airlines' },
  { id: 'ZH_shenzhen airlines', iata: 'ZH', airline: 'Shenzhen Airlines' },
  { id: '8C_shanxi airlines', iata: '8C', airline: 'Shanxi Airlines' },
  { id: "7L_sun d'or", iata: '7L', airline: "Sun D'Or" },
  { id: 'NE_skyeurope', iata: 'NE', airline: 'SkyEurope' },
  {
    id: 'CQ_sunshine express airlines',
    iata: 'CQ',
    airline: 'Sunshine Express Airlines'
  },
  { id: 'SO_superior aviation', iata: 'SO', airline: 'Superior Aviation' },
  { id: 'TE_skytaxi', iata: 'TE', airline: 'Skytaxi' },
  { id: 'JK_spanair', iata: 'JK', airline: 'Spanair' },
  { id: '2G*_san juan airlines', iata: '2G*', airline: 'San Juan Airlines' },
  { id: '1Z_sabre pacific', iata: '1Z', airline: 'Sabre Pacific' },
  { id: '1S_sabre', iata: '1S', airline: 'Sabre' },
  {
    id: '1I_sierra nevada airlines',
    iata: '1I',
    airline: 'Sierra Nevada Airlines'
  },
  { id: '1H_siren-travel', iata: '1H', airline: 'Siren-Travel' },
  { id: '1Q_sirena', iata: '1Q', airline: 'Sirena' },
  {
    id: '1K_southern cross distribution',
    iata: '1K',
    airline: 'Southern Cross Distribution'
  },
  { id: '1K_sutra', iata: '1K', airline: 'Sutra' },
  { id: '2C_sncf', iata: '2C', airline: 'SNCF' },
  {
    id: '2S_star equatorial airlines',
    iata: '2S',
    airline: 'Star Equatorial Airlines'
  },
  { id: 'S0_slok air gambia', iata: 'S0', airline: 'Slok Air Gambia' },
  { id: 'SO_sosoliso airlines', iata: 'SO', airline: 'Sosoliso Airlines' },
  {
    id: 'VA_virgin australia regional airlines',
    iata: 'VA',
    airline: 'Virgin Australia Regional Airlines'
  },
  {
    id: '1I_sky trek international airlines',
    iata: '1I',
    airline: 'Sky Trek International Airlines'
  },
  { id: 'SX_skybus airlines', iata: 'SX', airline: 'Skybus Airlines' },
  {
    id: 'RU_skyking turks and caicos airways',
    iata: 'RU',
    airline: 'SkyKing Turks and Caicos Airways'
  },
  {
    id: 'S3_santa barbara airlines',
    iata: 'S3',
    airline: 'Santa Barbara Airlines'
  },
  { id: 'XT_skystar airways', iata: 'XT', airline: 'SkyStar Airways' },
  { id: 'H2_sky airline', iata: 'H2', airline: 'Sky Airline' },
  { id: 'OO_skywest airlines', iata: 'OO', airline: 'SkyWest Airlines' },
  { id: 'JZ_skyways express', iata: 'JZ', airline: 'Skyways Express' },
  { id: 'BC_skymark airlines', iata: 'BC', airline: 'Skymark Airlines' },
  {
    id: 'LJ_sierra national airlines',
    iata: 'LJ',
    airline: 'Sierra National Airlines'
  },
  { id: 'MI_silkair', iata: 'MI', airline: 'SilkAir' },
  { id: '6Q_slovak airlines', iata: '6Q', airline: 'Slovak Airlines' },
  { id: 'PY_surinam airways', iata: 'PY', airline: 'Surinam Airways' },
  { id: '8D_servant air', iata: '8D', airline: 'Servant Air' },
  { id: 'NB_sterling airlines', iata: 'NB', airline: 'Sterling Airlines' },
  { id: '6J_skynet asia airways', iata: '6J', airline: 'Skynet Asia Airways' },
  { id: 'IE_solomon airlines', iata: 'IE', airline: 'Solomon Airlines' },
  {
    id: '6W_saratov airlines joint stock company',
    iata: '6W',
    airline: 'Saratov Airlines Joint Stock Company'
  },
  { id: 'HZ_sat airlines', iata: 'HZ', airline: 'Sat Airlines' },
  { id: 'S5_shuttle america', iata: 'S5', airline: 'Shuttle America' },
  { id: 'R1_sirin', iata: 'R1', airline: 'Sirin' },
  { id: 'Q4_starlink aviation', iata: 'Q4', airline: 'Starlink Aviation' },
  { id: 'V9_star1 airlines', iata: 'V9', airline: 'Star1 Airlines' },
  { id: 'SO_sunshine airlines', iata: 'SO', airline: 'Sunshine Airlines' },
  { id: 'O3_sf airlines', iata: 'O3', airline: 'SF Airlines' },
  {
    id: '5P_small planet airlines',
    iata: '5P',
    airline: 'Small Planet Airlines'
  },
  {
    id: 'XG_sunexpress deutschland',
    iata: 'XG',
    airline: 'Sunexpress Deutschland'
  },
  { id: 'WE_thai smile airways', iata: 'WE', airline: 'Thai Smile Airways' },
  { id: 'VZ_thai vietjet air', iata: 'VZ', airline: 'Thai Vietjet Air' },
  { id: 'XJ_thai airasia x', iata: 'XJ', airline: 'Thai AirAsia X' },
  { id: 'SL_thai lion mentari', iata: 'SL', airline: 'Thai Lion Mentari' },
  { id: 'EQ_tame', iata: 'EQ', airline: 'TAME' },
  { id: 'JJ_latam brasil', iata: 'JJ', airline: 'LATAM Brasil' },
  { id: 'TP_tap portugal', iata: 'TP', airline: 'TAP Portugal' },
  { id: 'TU_tunisair', iata: 'TU', airline: 'Tunisair' },
  { id: '3V_tnt airways', iata: '3V', airline: 'TNT Airways' },
  { id: 'TR_transbrasil', iata: 'TR', airline: 'Transbrasil' },
  { id: 'M7_tropical airways', iata: 'M7', airline: 'Tropical Airways' },
  { id: 'T2_thai air cargo', iata: 'T2', airline: 'Thai Air Cargo' },
  {
    id: 'HQ_thomas cook airlines',
    iata: 'HQ',
    airline: 'Thomas Cook Airlines'
  },
  {
    id: 'MT_thomas cook airlines',
    iata: 'MT',
    airline: 'Thomas Cook Airlines'
  },
  { id: 'TQ_tandem aero', iata: 'TQ', airline: 'Tandem Aero' },
  { id: 'L9_teamline air', iata: 'L9', airline: 'Teamline Air' },
  {
    id: 'UE_transeuropean airlines',
    iata: 'UE',
    airline: 'Transeuropean Airlines'
  },
  {
    id: '2S_satgur air transport',
    iata: '2S',
    airline: 'Satgur Air Transport'
  },
  { id: 'ZT_titan airways', iata: 'ZT', airline: 'Titan Airways' },
  { id: 'TR_tigerair singapore', iata: 'TR', airline: 'Tigerair Singapore' },
  { id: 'TT_tigerair australia', iata: 'TT', airline: 'Tigerair Australia' },
  { id: 'IT_tigerair taiwan', iata: 'IT', airline: 'Tigerair Taiwan' },
  { id: 'DG_cebgo', iata: 'DG', airline: 'Cebgo' },
  {
    id: 'TG_thai airways international',
    iata: 'TG',
    airline: 'Thai Airways International'
  },
  { id: 'FD_thai airasia', iata: 'FD', airline: 'Thai AirAsia' },
  { id: 'TK_turkish airlines', iata: 'TK', airline: 'Turkish Airlines' },
  { id: 'T7_twin jet', iata: 'T7', airline: 'Twin Jet' },
  { id: '9I_thai sky airlines', iata: '9I', airline: 'Thai Sky Airlines' },
  { id: 'TD_tulip air', iata: 'TD', airline: 'Tulip Air' },
  {
    id: 'TL_trans mediterranean airlines',
    iata: 'TL',
    airline: 'Trans Mediterranean Airlines'
  },
  {
    id: 'GY_tri-mg intra asia airlines',
    iata: 'GY',
    airline: 'Tri-MG Intra Asia Airlines'
  },
  {
    id: 'OF_transports et travaux aériens de madagascar',
    iata: 'OF',
    airline: 'Transports et Travaux Aériens de Madagascar'
  },
  { id: '3P_tiara air', iata: '3P', airline: 'Tiara Air' },
  { id: '7T_tobruk air', iata: '7T', airline: 'Tobruk Air' },
  { id: 'TI_tol-air services', iata: 'TI', airline: 'Tol-Air Services' },
  { id: 'BY_thomson airways', iata: 'BY', airline: 'Thomson Airways' },
  { id: 'PM_tropic air', iata: 'PM', airline: 'Tropic Air' },
  { id: 'QT_tampa', iata: 'QT', airline: 'TAMPA' },
  { id: 'K3_taquan air services', iata: 'K3', airline: 'Taquan Air Services' },
  { id: 'GE_transasia airways', iata: 'GE', airline: 'TransAsia Airways' },
  { id: 'TO_transavia france', iata: 'TO', airline: 'Transavia France' },
  { id: 'HV_transavia holland', iata: 'HV', airline: 'Transavia Holland' },
  { id: 'VR_tacv', iata: 'VR', airline: 'TACV' },
  {
    id: 'T9_transmeridian airlines',
    iata: 'T9',
    airline: 'TransMeridian Airlines'
  },
  {
    id: 'TH_transmile air services',
    iata: 'TH',
    airline: 'Transmile Air Services'
  },
  { id: 'S5_trast aero', iata: 'S5', airline: 'Trast Aero' },
  { id: '9T_transwest air', iata: '9T', airline: 'Transwest Air' },
  { id: 'UN_transaero airlines', iata: 'UN', airline: 'Transaero Airlines' },
  { id: 'T9_thai star airlines', iata: 'T9', airline: 'Thai Star Airlines' },
  { id: 'T5_turkmenhovayollary', iata: 'T5', airline: 'Turkmenhovayollary' },
  { id: 'UG_tuninter', iata: 'UG', airline: 'Tuninter' },
  { id: '7O[49]_travel service', iata: '7O[49]', airline: 'Travel Service' },
  { id: 'T6_tavrey airlines', iata: 'T6', airline: 'Tavrey Airlines' },
  { id: 'QS_travel service', iata: 'QS', airline: 'Travel Service' },
  { id: "TW_t'way air", iata: 'TW', airline: "T'way Air" },
  {
    id: 'AL_transaviaexport airlines',
    iata: 'AL',
    airline: 'TransAVIAexport Airlines'
  },
  { id: '6B_tuifly nordic', iata: '6B', airline: 'TUIfly Nordic' },
  {
    id: 'DT_taag angola airlines',
    iata: 'DT',
    airline: 'TAAG Angola Airlines'
  },
  { id: 'SF_tassili airlines', iata: 'SF', airline: 'Tassili Airlines' },
  { id: 'TJ_tradewind aviation', iata: 'TJ', airline: 'Tradewind Aviation' },
  { id: 'PZ_tam mercosur', iata: 'PZ', airline: 'TAM Mercosur' },
  {
    id: 'AX_trans states airlines',
    iata: 'AX',
    airline: 'Trans States Airlines'
  },
  {
    id: '1E_travelsky technology',
    iata: '1E',
    airline: 'Travelsky Technology'
  },
  { id: '2H_thalys', iata: '2H', airline: 'Thalys' },
  {
    id: '1L_open skies consultative commission',
    iata: '1L',
    airline: 'Open Skies Consultative Commission'
  },
  { id: 'RO_tarom', iata: 'RO', airline: 'Tarom' },
  { id: '3T_turan air', iata: '3T', airline: 'Turan Air' },
  { id: 'T4_trip linhas aéreas', iata: 'T4', airline: 'TRIP Linhas Aéreas' },
  { id: 'L6_tbilaviamsheni', iata: 'L6', airline: 'Tbilaviamsheni' },
  { id: 'XN_xpressair', iata: 'XN', airline: 'XpressAir' },
  { id: 'VO_tyrolean airways', iata: 'VO', airline: 'Tyrolean Airways' },
  {
    id: 'TX_transportes aéreos nacionales',
    iata: 'TX',
    airline: 'Transportes Aéreos Nacionales'
  },
  {
    id: 'OR_tui airlines netherlands',
    iata: 'OR',
    airline: 'TUI Airlines Netherlands'
  },
  { id: 'GS_tianjin airlines', iata: 'GS', airline: 'Tianjin Airlines' },
  { id: 'TZ_tsaradia', iata: 'TZ', airline: 'Tsaradia' },
  { id: 'U5_usa3000 airlines', iata: 'U5', airline: 'USA3000 Airlines' },
  { id: 'B7_uni air', iata: 'B7', airline: 'UNI Air' },
  { id: 'UA_united airlines', iata: 'UA', airline: 'United Airlines' },
  { id: '4H_united airways', iata: '4H', airline: 'United Airways' },
  {
    id: 'U2_united feeder service',
    iata: 'U2',
    airline: 'United Feeder Service'
  },
  { id: 'U7_usa jet airlines', iata: 'U7', airline: 'USA Jet Airlines' },
  { id: 'U6_ural airlines', iata: 'U6', airline: 'Ural Airlines' },
  { id: 'QU_uganda airlines', iata: 'QU', airline: 'Uganda Airlines' },
  { id: 'UF_um airlines', iata: 'UF', airline: 'UM Airlines' },
  {
    id: '6Z_ukrainian cargo airways',
    iata: '6Z',
    airline: 'Ukrainian Cargo Airways'
  },
  {
    id: '5X_united parcel service',
    iata: '5X',
    airline: 'United Parcel Service'
  },
  { id: 'US_us airways', iata: 'US', airline: 'US Airways' },
  { id: 'UH_us helicopter', iata: 'UH', airline: 'US Helicopter' },
  { id: 'UT_utair aviation', iata: 'UT', airline: 'UTair Aviation' },
  { id: 'HY_uzbekistan airways', iata: 'HY', airline: 'Uzbekistan Airways' },
  {
    id: 'PS_ukraine international airlines',
    iata: 'PS',
    airline: 'Ukraine International Airlines'
  },
  { id: 'US_unavia suisse', iata: 'US', airline: 'Unavia Suisse' },
  { id: 'JW_vanilla air', iata: 'JW', airline: 'Vanilla Air' },
  { id: 'VB_viva aerobus', iata: 'VB', airline: 'VIVA Aerobus' },
  {
    id: 'VA_virgin australia airlines',
    iata: 'VA',
    airline: 'Virgin Australia Airlines'
  },
  { id: 'VF_valuair', iata: 'VF', airline: 'Valuair' },
  { id: 'J7_valujet airlines', iata: 'J7', airline: 'ValuJet Airlines' },
  {
    id: '0V_vietnam air services company (vasco)',
    iata: '0V',
    airline: 'Vietnam Air Services Company (VASCO)'
  },
  { id: 'VC_voyageur airways', iata: 'VC', airline: 'Voyageur Airways' },
  { id: 'VN_vietnam airlines', iata: 'VN', airline: 'Vietnam Airlines' },
  { id: 'NN_vim airlines', iata: 'NN', airline: 'VIM Airlines' },
  { id: '2R_via rail canada', iata: '2R', airline: 'Via Rail Canada' },
  { id: 'VA_viasa', iata: 'VA', airline: 'Viasa' },
  { id: 'Y4_volaris', iata: 'Y4', airline: 'Volaris' },
  {
    id: 'VI_volga-dnepr airlines',
    iata: 'VI',
    airline: 'Volga-Dnepr Airlines'
  },
  { id: 'VX_virgin america', iata: 'VX', airline: 'Virgin America' },
  { id: 'VJ_vietjet air', iata: 'VJ', airline: 'Vietjet Air' },
  { id: 'V4_vieques air link', iata: 'V4', airline: 'Vieques Air Link' },
  { id: 'TV_virgin express', iata: 'TV', airline: 'Virgin Express' },
  {
    id: 'VK_virgin nigeria airways',
    iata: 'VK',
    airline: 'Virgin Nigeria Airways'
  },
  {
    id: 'VS_virgin atlantic airways',
    iata: 'VS',
    airline: 'Virgin Atlantic Airways'
  },
  { id: 'ZG_viva macau', iata: 'ZG', airline: 'Viva Macau' },
  { id: 'VE_c.a.i. second', iata: 'VE', airline: 'C.A.I. Second' },
  { id: 'VY_vueling airlines', iata: 'VY', airline: 'Vueling Airlines' },
  { id: 'XF_vladivostok air', iata: 'XF', airline: 'Vladivostok Air' },
  { id: 'LC_varig logística', iata: 'LC', airline: 'Varig Logística' },
  { id: 'VM_viaggio air', iata: 'VM', airline: 'Viaggio Air' },
  { id: '9V_vipair airlines', iata: '9V', airline: 'Vipair Airlines' },
  { id: 'RG_vrg linhas aéreas', iata: 'RG', airline: 'VRG Linhas Aéreas' },
  { id: 'FC_vivacolombia', iata: 'FC', airline: 'VivaColombia' },
  { id: 'VP_vasp', iata: 'VP', airline: 'VASP' },
  { id: 'V7_volotea', iata: 'V7', airline: 'Volotea' },
  { id: 'VG_vlm airlines', iata: 'VG', airline: 'VLM Airlines' },
  { id: 'G6_air volga', iata: 'G6', airline: 'Air Volga' },
  { id: 'UK_vistara', iata: 'UK', airline: 'Vistara' },
  { id: 'WD_wdl aviation', iata: 'WD', airline: 'WDL Aviation' },
  { id: 'WT_wasaya airways', iata: 'WT', airline: 'Wasaya Airways' },
  {
    id: 'WH_webjet linhas aéreas',
    iata: 'WH',
    airline: 'WebJet Linhas Aéreas'
  },
  { id: '2W_welcome air', iata: '2W', airline: 'Welcome Air' },
  {
    id: 'WZ_west african airlines',
    iata: 'WZ',
    airline: 'West African Airlines'
  },
  { id: 'PT_west air sweden', iata: 'PT', airline: 'West Air Sweden' },
  {
    id: 'YH_west caribbean airways',
    iata: 'YH',
    airline: 'West Caribbean Airways'
  },
  { id: '8O_west coast air', iata: '8O', airline: 'West Coast Air' },
  { id: 'WS_westjet', iata: 'WS', airline: 'WestJet' },
  { id: 'XP_western', iata: 'XP', airline: 'Western' },
  { id: 'WA_western airlines', iata: 'WA', airline: 'Western Airlines' },
  {
    id: 'W7_western pacific airlines',
    iata: 'W7',
    airline: 'Western Pacific Airlines'
  },
  { id: 'CN_westward airways', iata: 'CN', airline: 'Westward Airways' },
  { id: 'WF_widerøe', iata: 'WF', airline: 'Widerøe' },
  { id: 'IV_wind jet', iata: 'IV', airline: 'Wind Jet' },
  { id: '7W_windrose air', iata: '7W', airline: 'Windrose Air' },
  { id: 'IW_wings air', iata: 'IW', airline: 'Wings Air' },
  { id: '8Z_wizz air bulgaria', iata: '8Z', airline: 'Wizz Air Bulgaria' },
  { id: 'W6_wizz air', iata: 'W6', airline: 'Wizz Air' },
  { id: 'WO_world airways', iata: 'WO', airline: 'World Airways' },
  { id: '1P_worldspan', iata: '1P', airline: 'Worldspan' },
  { id: 'WW_wow air', iata: 'WW', airline: 'WOW air' },
  { id: '8V_wright air service', iata: '8V', airline: 'Wright Air Service' },
  { id: 'KW_wataniya airways', iata: 'KW', airline: 'Wataniya Airways' },
  { id: '3W*_wan air', iata: '3W*', airline: 'Wan Air' },
  { id: 'WR_westjet encore', iata: 'WR', airline: 'WestJet Encore' },
  { id: 'MF_xiamen airlines', iata: 'MF', airline: 'Xiamen Airlines' },
  { id: 'SE_xl airways france', iata: 'SE', airline: 'XL Airways France' },
  { id: 'XP_xtra airways', iata: 'XP', airline: 'Xtra Airways' },
  { id: 'YL_yamal airlines', iata: 'YL', airline: 'Yamal Airlines' },
  { id: 'R3_yakutia airlines', iata: 'R3', airline: 'Yakutia Airlines' },
  {
    id: 'Y8_yangtze river express',
    iata: 'Y8',
    airline: 'Yangtze River Express'
  },
  {
    id: 'Y0_yellow air taxi/friendship airways',
    iata: 'Y0',
    airline: 'Yellow Air Taxi/Friendship Airways'
  },
  { id: 'IY_yemenia', iata: 'IY', airline: 'Yemenia' },
  { id: '4Y_yute air alaska', iata: '4Y', airline: 'Yute Air Alaska' },
  { id: '2N_yuzhmashavia', iata: '2N', airline: 'Yuzhmashavia' },
  { id: 'Q3_zambian airways', iata: 'Q3', airline: 'Zambian Airways' },
  { id: '3J_zip', iata: '3J', airline: 'Zip' },
  { id: 'Z4_zoom airlines', iata: 'Z4', airline: 'Zoom Airlines' }
];

export { AIRLINES };
