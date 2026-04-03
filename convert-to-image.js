const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  try {
    // Read the HTML file
    const htmlPath = path.join(__dirname, 'blog-tech-2.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    // Launch browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set viewport size
    await page.setViewport({ width: 1200, height: 800 });

    // Load HTML
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    // Create screenshots folder if it doesn't exist
    const screenshotDir = path.join(__dirname, 'screenshots');
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir);
    }

    // Take full page screenshot
    await page.screenshot({
      path: path.join(screenshotDir, 'blog-tech-2-full.png'),
      fullPage: true,
      quality: 95
    });

    // Take viewport screenshot
    await page.screenshot({
      path: path.join(screenshotDir, 'blog-tech-2-preview.png'),
      quality: 95
    });

    console.log('✅ Screenshots generated successfully!');
    console.log('📸 Full page: screenshots/blog-tech-2-full.png');
    console.log('📸 Preview: screenshots/blog-tech-2-preview.png');

    await browser.close();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
})();