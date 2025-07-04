// Web scraper for https://www.petsbest.com/lp/pet-insurance
const axios = require('axios');
const cheerio = require('cheerio');

async function scrapePetsBest() {
  try {
    const url = 'https://www.petsbest.com/lp/pet-insurance';
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Example: Extract main headline and plan info (customize as needed)
    const headline = $('h1').first().text().trim();
    const subheadline = $('h2').first().text().trim();
    const planSections = [];
    $('.plan-card, .plan, .insurance-plan').each((i, el) => {
      planSections.push($(el).text().trim());
    });

    console.log('Headline:', headline);
    console.log('Subheadline:', subheadline);
    console.log('Plan Sections:', planSections);
  } catch (error) {
    console.error('Error scraping PetsBest:', error.message);
  }
}

scrapePetsBest();