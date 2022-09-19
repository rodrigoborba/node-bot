const puppeteer = require('puppeteer')
const readlineSync = require('readline-sync');

console.log('Welcome to Bot 🤖');

async function robot() {
  console.log('STARTING PROCESS...')
  const browser = await puppeteer.launch({ headless: false, args: ['--lang="pt-BR"'] });
  console.log(browser)

  const page = await browser.newPage();
  
  const user = readlineSync.question('Type mail: ') || '';
  const pass = readlineSync.question('Type pass: ') || '';

  const url = 'https://www.google.com'
  await page.goto(url);
  
  await page.screenshot({path: 'site-1-' + new Date() + '.png'});

  // const resultadowaitForSelector = await page.waitForSelector('.btn btn-primary btn-sm')
  // console.log('result for resultadowaitForSelector: ' + resultadowaitForSelector)
  // console.log('result: ' + resultado)

  console.log('finishing...')
  await browser.close();
}

robot();