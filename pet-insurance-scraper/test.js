const puppeteer = require("puppeteer");
const chromium = require("chromium");

(async () => {
  const executablePath = await chromium.path;
  const browser = await puppeteer.launch({
    executablePath: executablePath,
    headless: true, // Set to false if you want to see the browser
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("https://www.example.com");
  // Perform actions here, like taking a screenshot or filling out a form
  await page.screenshot({ path: "example.png" });
  await browser.close();
  console.log("Scraping completed and screenshot saved as example.png");
})();
