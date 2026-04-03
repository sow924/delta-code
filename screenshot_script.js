const puppeteer = require('puppeteer');

(async () => {
    // Launch a new browser instance
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the HTML file (update the path if necessary)
    await page.goto('file:///path/to/your/blog-tech-2.html');

    // Full page screenshot
    await page.screenshot({ path: 'screenshots/full_page.png', fullPage: true });

    // Viewport screenshot
    await page.setViewport({ width: 1280, height: 800 }); // set viewport size
    await page.screenshot({ path: 'screenshots/viewport.png' });

    // Close the browser
    await browser.close();
})();