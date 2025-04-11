import puppeteer from 'puppeteer';

export async function GET() {
  try {
    // const browser = await puppeteer.launch({
    //   headless: 'new', // Recommended for Next.js server
    //   args: ['--no-sandbox', '--disable-setuid-sandbox'], // Required for some environments
    // });
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, isMobile: true });
    await page.goto('https://www.roc.je', {
      waitUntil: "load",
      timeout:50000,
    });

    const data=await page.screenshot({
      encoding: 'base64'
    });
    console.log(data)
    await browser.close();
     const image=`data:image/png;base64,${data}`
    return Response.json(image)
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
