const puppeteer = require("puppeteer");
const chromium = require("chromium");

(async () => {
  const executablePath = await chromium.path;
  const browser = await puppeteer.launch({
    executablePath: executablePath,
    headless: falsea, // Set to false if you want to see the browser
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 896,
      height: 1130,
    });
  }
  {
    const targetPage = page;
    await targetPage.goto(
      "https://quote.metlifepetinsurance.com/pet?enrollment_code=99-99-00-9998"
    );
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Close this dialog[role=\\"image\\"])'),
      targetPage.locator("#a8dc7f7c-9543-4340-81ac-e3be997d9503 svg"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"a8dc7f7c-9543-4340-81ac-e3be997d9503\\"]/button/svg)'
      ),
      targetPage.locator(
        ":scope >>> #a8dc7f7c-9543-4340-81ac-e3be997d9503 svg"
      ),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 9,
          y: 8,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator(
        "div:nth-of-type(3) div.v-input__slot > div > div:nth-of-type(1) > div > div"
      ),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"ElementIdAnimal\\"]/form/div[1]/div/div[1]/div/div[1]/div/div)'
      ),
      targetPage.locator(
        ":scope >>> div:nth-of-type(3) div.v-input__slot > div > div:nth-of-type(1) > div > div"
      ),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 25,
          y: 15,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Your Pet\\'s Name)"),
      targetPage.locator("#input-37"),
      targetPage.locator('::-p-xpath(//*[@id=\\"input-37\\"])'),
      targetPage.locator(":scope >>> #input-37"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 85,
          y: 10,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Your Pet\\'s Name)"),
      targetPage.locator("#input-37"),
      targetPage.locator('::-p-xpath(//*[@id=\\"input-37\\"])'),
      targetPage.locator(":scope >>> #input-37"),
    ])
      .setTimeout(timeout)
      .fill("dino");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down("Tab");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up("Tab");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Your Pet\\'s Age)"),
      targetPage.locator("#petAgeSelect"),
      targetPage.locator('::-p-xpath(//*[@id=\\"petAgeSelect\\"])'),
      targetPage.locator(":scope >>> #petAgeSelect"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 96,
          y: 11,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator(
        '::-p-aria(2 years old) >>>> ::-p-aria([role=\\"generic\\"])'
      ),
      targetPage.locator("#\\32 "),
      targetPage.locator('::-p-xpath(//*[@id=\\"2\\"])'),
      targetPage.locator(":scope >>> #\\32 "),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 107,
          y: 10,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator(
        "div:nth-of-type(6) div.v-input__slot > div > div:nth-of-type(1) > div > div"
      ),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div/main/div/div/div[1]/div[2]/form/div/div/div/div/div/div/div[1]/div/div[6]/div/form/div/div/div[1]/div/div[1]/div/div)'
      ),
      targetPage.locator(
        ":scope >>> div:nth-of-type(6) div.v-input__slot > div > div:nth-of-type(1) > div > div"
      ),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 19,
          y: 20,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Select Pet Breed)"),
      targetPage.locator("#petBreedSelect"),
      targetPage.locator('::-p-xpath(//*[@id=\\"petBreedSelect\\"])'),
      targetPage.locator(":scope >>> #petBreedSelect"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 86,
          y: 5,
        },
      });
    // Press the down arrow key to open the dropdown
    await targetPage.keyboard.press("ArrowDown");
    // Press the enter key to select the first option
    await targetPage.keyboard.press("Enter");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Email Address)"),
      targetPage.locator("#emailAddressField"),
      targetPage.locator('::-p-xpath(//*[@id=\\"emailAddressField\\"])'),
      targetPage.locator(":scope >>> #emailAddressField"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 96,
          y: 13,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Email Address)"),
      targetPage.locator("#emailAddressField"),
      targetPage.locator('::-p-xpath(//*[@id=\\"emailAddressField\\"])'),
      targetPage.locator(":scope >>> #emailAddressField"),
    ])
      .setTimeout(timeout)
      .fill("test@gmail.com");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Enter a 5 digit zipcode number.)"),
      targetPage.locator("#input-69"),
      targetPage.locator('::-p-xpath(//*[@id=\\"input-69\\"])'),
      targetPage.locator(":scope >>> #input-69"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 98,
          y: 5,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Enter a 5 digit zipcode number.)"),
      targetPage.locator("#input-69"),
      targetPage.locator('::-p-xpath(//*[@id=\\"input-69\\"])'),
      targetPage.locator(":scope >>> #input-69"),
    ])
      .setTimeout(timeout)
      .fill("98199");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("main footer div.col span"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"app\\"]/div[1]/main/div/div/div[1]/footer/div/div[2]/button/span)'
      ),
      targetPage.locator(":scope >>> main footer div.col span"),
      targetPage.locator("::-p-text(Next Step)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 28.1328125,
          y: 3.5,
        },
      });
  }
  {
    const targetPage = page;
    const value = await targetPage.evaluate(async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const sessionValue = sessionStorage.getItem("qf");
      // Save the session value to a file
      return sessionValue;
    });
    console.log(" Value:", value);
  }
  {
    await browser.close();
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
