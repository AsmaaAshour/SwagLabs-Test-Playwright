//@ts-check
import { test, expect } from "@playwright/test";

test.skip("Assertion Title", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");
  await page.waitForTimeout(5000);
});

test.skip("Assertion Url", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  //await expect(page).toHaveURL("https://www.saucedemo.com/")
  await expect(page).toHaveURL(/.*demo/);
});

test.skip("Login and Add item", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  //await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  //add one item using id
  //await page.click('#add-to-cart-sauce-labs-backpack')

  //add all items using claass & advance for
  const buttons = await page.$$(".btn");
  for (const button of buttons) {
    await button.click();
  }
  await page.waitForTimeout(5000);
});

test("Select", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await page.waitForTimeout(3000)

  //change the dropdown menu option by using value 
  await page.locator(".product_sort_container").selectOption("za")
  await page.waitForTimeout(3000)

  //change the dropdown menu option by using label
  await page.locator(".product_sort_container").selectOption({label:"Price (low to high)"})
  await page.waitForTimeout(3000)

  //change the dropdown menu option by using index
  await page.locator(".product_sort_container").selectOption({index:3})
  await page.waitForTimeout(3000)



  await page.waitForTimeout(10000);
});
