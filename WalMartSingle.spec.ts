import { test, expect } from '@playwright/test';



test('WalMart Single', async ({ page }) => {
    //Navigate to Advantage site    
        await page.goto('https://www.hyphen.shopping/TVZFZOIZZP');
//Change Store
    const Store = await page.locator("//span[normalize-space()='CHANGE RETAILER']");
    await Store.click();
    await page.waitForTimeout(2000);
    //const MyLocal = await page.locator("//span[normalize-space()='USE MY LOCATION']");
    //await MyLocal.click();
    const MyStore = await page.locator("//div[normalize-space()='560 Wessel Dr, Fairfield, Oh, 45014']");
    await page.waitForTimeout(2000);
    const Zip = await page.locator("//input[@id='postal-code-input']");
    await Zip.click();
    await Zip.fill("45014");
    await page.keyboard.press("Enter");
    await page.locator("button[aria-label='Close the Menu'] svg").click();
    await page.waitForTimeout(2000);
    const Address = page.locator("//span[@class='css-ue1hsf']");
    expect(Address).toContainText("1143");
//Click First Product
    const FirstProd = await page.locator("//a[@class='product-image-link']");
    await FirstProd.click();
    await page.waitForTimeout(2000);
    const RightArrow = page.locator("//button[@class='css-2a1iib']//*[name()='svg']");
    await RightArrow.click();
    await RightArrow.click();
    await RightArrow.click();
    await RightArrow.click();
    await page.waitForTimeout(2000);
    const LastImg = page.locator("(//img[@alt='Product thumbnail'])[5]");
    expect(LastImg).toHaveAttribute("src", "https://i5.walmartimages.com/asr/d84aff5e-faa1-4013-955b-846adcdced5b.b43920dabf21351948caa168ddc78c99.jpeg?odnHeight=100&odnWidth=100&odnBg=ffffff");
    const LeftArrow = page.locator("//button[@class='css-12ztixw']//*[name()='svg']");
    await LeftArrow.click();
    await LeftArrow.click();
    const ThirdImg = page.locator("//li[@class='css-98o3qm']//img[@alt='Product thumbnail']");
    expect(ThirdImg).toHaveAttribute("src", "https://i5.walmartimages.com/asr/2603ebff-ffd6-4c7f-bb43-41271b8d19ad.50867bfce8132e93312c3d8bb777bb26.jpeg?odnHeight=100&odnWidth=100&odnBg=ffffff");
    const Close = page.locator("//button[@class='css-t2aoxx']//*[name()='svg']");
    await Close.click();
//Add to Cart Button (Products are OOS)
    const FirstATC = await page.locator("//article[@class='css-4n62tq']//span[@class='css-1d8cyf9'][normalize-space()='SHOP NOW']").click();
    const NewPage = await page.waitForEvent("popup");
    await NewPage.waitForTimeout(2000);
    await expect(NewPage).toHaveTitle(/Gerber 2nd Foods/);
//Close NewPage
    await NewPage.close();
    await page.waitForTimeout(2000);
//Add to Cart From Product Title
    await FirstProd.click();
    const SecondATC = await page.locator("//div[@class='css-7m3drn']//div//span[@class='css-1d8cyf9'][normalize-space()='SHOP NOW']").click();
    const NewPage2 = await page.waitForEvent("popup");
    await NewPage2.waitForTimeout(2000);
    await expect(NewPage2).toHaveTitle(/Gerber 2nd Foods/);
    





});