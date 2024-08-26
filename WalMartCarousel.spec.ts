import { test, expect } from '@playwright/test';



test('WalMart Carousel', async ({ page }) => {
    //Navigate to Advantage site    
        await page.goto('https://www.hyphen.shopping/0QRNY52VKA');
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
    const WalMart = page.locator("//li[8]//section[2]//button[1]//div[1]//span[1]");
    await WalMart.click();
    await page.waitForTimeout(2000);
    const Address = page.locator("//span[@class='css-ue1hsf']");
    expect(Address).toContainText("1143");
//Click First Product
    const FirstProd = await page.locator("//body/div[@id='root']/div[@class='css-1dt9zfm']/section[@class='css-qo9iz4']/div[@class='css-0']/div[@class='css-1ug2bif']/div[@class='css-tomjeu']/article[1]/div[1]/div[1]");
    await FirstProd.click();
    await page.waitForTimeout(2000);
    const RightArrow = page.locator("//button[@class='css-2a1iib']");
    await RightArrow.click();
    await RightArrow.click();
    await RightArrow.click();
    await RightArrow.click();
    await page.waitForTimeout(2000);
    const LastImg = page.locator("//li[@class='css-98o3qm']//img[@alt='Product thumbnail']");
    expect(LastImg).toHaveAttribute("src", "https://i5.walmartimages.com/asr/d84aff5e-faa1-4013-955b-846adcdced5b.b43920dabf21351948caa168ddc78c99.jpeg?odnHeight=100&odnWidth=100&odnBg=ffffff");
    const LeftArrow = page.locator("//button[@class='css-12ztixw']//*[name()='svg']");
    await LeftArrow.click();
    await LeftArrow.click();
    const ThirdImg = page.locator("//li[@class='css-98o3qm']//img[@alt='Product thumbnail']");
    expect(ThirdImg).toHaveAttribute("src", "https://i5.walmartimages.com/asr/2603ebff-ffd6-4c7f-bb43-41271b8d19ad.50867bfce8132e93312c3d8bb777bb26.jpeg?odnHeight=100&odnWidth=100&odnBg=ffffff");
    const Close = page.locator("//button[@class='css-t2aoxx']//*[name()='svg']");
    await Close.click();
//Click Last Product
    const LastProd = await page.locator("//body[1]/div[1]/div[1]/section[1]/div[5]/div[1]/div[1]/article[5]/div[1]/div[1]/a[1]/span[1]");
    await LastProd.click();
    await page.waitForTimeout(2000);
    await RightArrow.click();   
    await RightArrow.click();
    await RightArrow.click();
    await RightArrow.click();
    await page.waitForTimeout(2000);
    const LastImg2 = page.locator("//div[@id='gallerySlider']//li[5]//img[1]");
    expect(LastImg2).toHaveAttribute("src", "https://i5.walmartimages.com/asr/7c654e03-a479-491a-92e1-3fd66407ee16.904076ff2fedae0dec9fce51188d626d.jpeg?odnHeight=100&odnWidth=100&odnBg=ffffff");
    await LeftArrow.click();
    await LeftArrow.click();    
    expect(ThirdImg).toHaveAttribute("src", "https://i5.walmartimages.com/asr/bc921b15-dfa8-48bd-a9da-e710935bf00f.06fcac51bb927b89d6fb5bb37db114e5.jpeg?odnHeight=100&odnWidth=100&odnBg=ffffff");
    await Close.click();
    await page.waitForTimeout(2000);
//Add to Cart Button
    const FirstATC = await page.locator("(//button[@id='single-shop-now-button'])[2]").click();
    const NewPage = await page.waitForEvent("popup");
    await NewPage.waitForTimeout(2000);
    await expect(NewPage).toHaveTitle(/Gerber 2nd Foods Baby Food/);


  

 






    





});