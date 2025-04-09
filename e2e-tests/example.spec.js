import { test, expect } from '@playwright/test'

test.describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  }),
  test('ivysaurs page can be navigated to', async ({page}) => {
    const childOfLink = page.getByText('ivysaur')
    const ivysaurLink = page.getByRole('link').filter({has: childOfLink})
    await ivysaurLink.press()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})