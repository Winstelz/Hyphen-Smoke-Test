import { test, expect } from '@playwright/test';



test('Amazon Carousel', async ({ page }) => {
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
    const Amazon = page.locator("(//span[@class='css-1d8cyf9'][normalize-space()='SELECT'])[1]");
    await Amazon.click();
    await page.waitForTimeout(2000);
    const Address = page.locator("//span[@class='css-itlzwm']");
    expect(Address).toContainText("Amazon");
//Click First Product
    const FirstProd = await page.locator("//body/div[@id='root']/div[@class='css-1dt9zfm']/section[@class='css-qo9iz4']/div[@class='css-0']/div[@class='css-1ug2bif']/div[@class='css-tomjeu']/article[1]/div[1]/div[1]");
    await FirstProd.click();
    await page.waitForTimeout(2000);
    const RightArrow = page.locator("//button[@class='css-2a1iib']//*[name()='svg']");
    await RightArrow.click();
    await RightArrow.click();
    await RightArrow.click();
    await RightArrow.click();
    await page.waitForTimeout(2000);
    const LastImg = page.locator("(//img[@alt='Product thumbnail'])[5]");
    expect(LastImg).toHaveAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/81ZBH43QdAL.jpg");
    const LeftArrow = page.locator("//button[@class='css-12ztixw']//*[name()='svg']");
    await LeftArrow.click();
    await LeftArrow.click();
    const ThirdImg = page.locator("//li[@class='css-98o3qm']//img[@alt='Product thumbnail']");
    expect(ThirdImg).toHaveAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/81ZBH43QdAL.jpg");
    const Close = page.locator("//button[@class='css-t2aoxx']//*[name()='svg']");
    await Close.click();
//Click Last Product
    const LastProd = await page.locator("//body[1]/div[1]/div[1]/section[1]/div[5]/div[1]/div[1]/article[5]/div[1]/div[1]/a[1]/span[1]");
    await LastProd.click();
    await page.waitForTimeout(2000);
    await RightArrow.click();   
    await RightArrow.click();
    await RightArrow.click();
    await page.waitForTimeout(2000);
    const LastImg2 = page.locator("//div[@id='gallerySlider']//li[4]//img[1]");
    expect(LastImg2).toHaveAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/61mIRGqG--L.jpg");
    await LeftArrow.click();   
    expect(ThirdImg).toHaveAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/51HwKvZq0pL.jpg");
    await Close.click();
    //await page.waitForTimeout(2000);
//Add to Cart Button
    const FirstATC = await page.locator("((//button[@aria-label='ATC'])[2]").click();
    const NewPage = await page.waitForEvent("popup");
    await NewPage.waitForTimeout(2000);
    await expect(NewPage).toHaveTitle(/Please Confirm/);
//Close NewPage
    await NewPage.close();
//Add to Cart From Product Title
    await LastProd.click();
    const SecondATC = await page.locator("(//button[@aria-label='ATC'])[6]").click();
    const NewPage2 = await page.waitForEvent("popup");
    await NewPage2.waitForTimeout(2000);
    await expect(NewPage2).toHaveTitle(/Please Confirm/);
    





});