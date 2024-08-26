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



    





});