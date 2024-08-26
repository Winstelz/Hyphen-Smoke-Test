import { test, expect } from '@playwright/test';



test('WalMart List', async ({ page }) => {
    //Navigate to Advantage site    
        await page.goto('https://www.hyphen.shopping/5O6RZY8VIO');
//Change Store
    const Store = await page.locator("//button[@id='open-retailer-menu-button']//div[@class='css-fp0qfx']//*[name()='svg']");
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
    const FirstProd = await page.locator("(//a[@class='product-image-link'])[1]");
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
//Click Last Product
    const LastProd = await page.locator("(//a[@class='product-image-link'])[5]");
    await LastProd.click();
    await page.waitForTimeout(2000);
    await RightArrow.click();   
    await RightArrow.click();
    await RightArrow.click();
    await RightArrow.click();
    await page.waitForTimeout(2000);
    const LastImg2 = page.locator("(//img[@alt='Product thumbnail'])[5]");
    expect(LastImg2).toHaveAttribute("src", "https://i5.walmartimages.com/asr/7c654e03-a479-491a-92e1-3fd66407ee16.904076ff2fedae0dec9fce51188d626d.jpeg?odnHeight=100&odnWidth=100&odnBg=ffffff");
    await LeftArrow.click();   
    await LeftArrow.click(); 
    expect(ThirdImg).toHaveAttribute("src", "https://i5.walmartimages.com/asr/bc921b15-dfa8-48bd-a9da-e710935bf00f.06fcac51bb927b89d6fb5bb37db114e5.jpeg?odnHeight=100&odnWidth=100&odnBg=ffffff");
    await Close.click();
    //await page.waitForTimeout(2000);
//Add to Cart Button (Products are OOS)
    //const FirstATC = await page.locator("((//button[@aria-label='ATC'])[2]").click();
   // const NewPage = await page.waitForEvent("popup");
   // await NewPage.waitForTimeout(2000);
   // await expect(NewPage).toHaveTitle(/Please Confirm/);
//Close NewPage
   // await NewPage.close();
//Add to Cart From Product Title
    //await LastProd.click();
   // const SecondATC = await page.locator("(//button[@aria-label='ATC'])[6]").click();
   // const NewPage2 = await page.waitForEvent("popup");
   // await NewPage2.waitForTimeout(2000);
   // await expect(NewPage2).toHaveTitle(/Please Confirm/);
    





});