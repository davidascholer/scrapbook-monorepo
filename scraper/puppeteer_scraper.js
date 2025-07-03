// Puppeteer-based scraper for PetsBest pet insurance quote form
const puppeteer = require("puppeteer");
const chromium = require("chromium");
const ua =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36";

(async () => {
  const executablePath = await chromium.path;
  const browser = await puppeteer.launch({
    executablePath: executablePath,
    headless: true, // Set to false if you want to see the browser
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  page.setUserAgent(ua);
  await page.goto("https://www.petsbest.com/lp/pet-insurance", {
    waitUntil: "networkidle2",
  });

  // Enter pet name
  await page.type('input[title="pet name"]', "pika");

  // Select breed
  await page.click(".jcf-select-opener");

  // Wait for the dropdown to appear
  await page.waitForSelector(".jcf-list-content", { visible: true });

  // Click the breed option
  await page.evaluate(() => {
    const options = Array.from(
      document.querySelectorAll(".jcf-list-content li")
    );
    const option = options.find((o) => o.textContent.includes("Unknown"));
    if (option) option.click();
  });

  await page.screenshot({ path: "example.png" });

  // Click the start my quote button
  await page.evaluate(async () => {
    const btns = Array.from(
      document.querySelectorAll('button, input[type="submit"]')
    );
    const btn = btns.find(
      (b) => b.textContent.trim().toLowerCase() === "start my quote"
    );

    if (btn) btn.click();
  });

  // Wait for navigation or result
  await page.waitForNavigation({ waitUntil: "networkidle2" });

  // Get the response (HTML of the next page)
  const result = await page.content();
  // Save the result to a file

  const fs = require("fs");
  fs.writeFileSync("result.html", result);
  console.log("Scraping completed and result saved as result.html");
  await browser.close();
})();
