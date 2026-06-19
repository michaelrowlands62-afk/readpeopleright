const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 650 });

  await page.goto('http://localhost:5173/game');
  await page.waitForLoadState('networkidle');
  await page.click('.start-btn');
  await page.waitForSelector('.game-answer', { timeout: 3000 });

  const before = await page.evaluate(() => {
    const r = s => Math.round(document.querySelector(s)?.getBoundingClientRect().height ?? 0);
    return {
      bar: r('.game-bar'), question: r('.game-question'),
      figure: r('.game-figure'), timer: r('.game-timer-wrap'), answers: r('.game-answers'),
      viewport: window.innerHeight, scroll: document.documentElement.scrollHeight,
    };
  });
  console.log('Before answer:', before);
  console.log('Figure height:', before.figure, '(need ≥ 280)  Fits:', before.scroll <= before.viewport);
  await page.screenshot({ path: './figure-before.png' });

  // Answer correctly (index 1)
  await page.locator('.game-answer').nth(1).click();
  await page.waitForSelector('.game-fact', { timeout: 3000 });
  await page.waitForTimeout(100);

  const after = await page.evaluate(() => {
    const r = s => Math.round(document.querySelector(s)?.getBoundingClientRect().height ?? 0);
    const nb = document.querySelector('.game-next-wrap')?.getBoundingClientRect().bottom ?? 0;
    return {
      figure: r('.game-figure'), fact: r('.game-fact'), nextWrap: r('.game-next-wrap'),
      nextBottom: Math.round(nb), viewport: window.innerHeight,
      scroll: document.documentElement.scrollHeight,
    };
  });
  console.log('\nAfter answer:', after);
  console.log('Figure height:', after.figure, '  Next btn bottom:', after.nextBottom, '/', after.viewport);
  console.log('Button visible:', after.nextBottom <= after.viewport, '  Fits:', after.scroll <= after.viewport);
  await page.screenshot({ path: './figure-after.png' });

  await browser.close();
  console.log('\nDone');
})().catch(err => { console.error(err); process.exit(1); });
