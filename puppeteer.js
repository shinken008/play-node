const puppeteer = require('puppeteer');
const fs = require('fs');
const JSONToFile = (obj, filename) =>
  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://segmentfault.com/frontend');
  //

  // Wait for the results page to load and display the results.
  const resultsSelector = '.middle .news-list .news-item .news__item-info .news__item-title>a';

  // Wait for select important
  await page.waitForSelector(resultsSelector);

  // Extract the results from the page.
  const data = []
  const links = await page.evaluate(resultsSelector => {
    const anchors = Array.from(document.querySelectorAll(resultsSelector));
    return anchors.map(anchor => {
      const title = anchor.textContent.split('|')[0].trim();
      // return `${title} - ${anchor.href}`;
      return { title, url: anchor.href }
    });
  }, resultsSelector);
  // console.log(links.join('\n'));
  JSONToFile({ "list": links }, "data")
  //
  await browser.close();
});