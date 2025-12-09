import { test } from '../fixtures'
import * as data from '../src/test-data/index'
import {expect} from "@playwright/test";

test.describe.parallel('Home Page Validations', () => {
  test('TC01 Verify the number of games on Home Page matches test data', async ({ navigateToHomePage, pm }) => {
    // TODO This count should not be hardcoded, data.homeGamesUnderTest.length should be used
    const gamesCount = 72
    await expect(pm.onHomePage().gameTitles).toHaveCount(gamesCount)
    await expect(pm.onHomePage().gameLogos).toHaveCount(gamesCount)
    await expect(pm.onHomePage().gamePlayButtons).toHaveCount(gamesCount)
  })

  for(const [i, game] of data.homeGamesUnderTest.entries()) {
    test(`TC02 Verify ${game.title} game has the correct attributes`, async ({ navigateToHomePage, pm }) => {
      const gameTitles = pm.onHomePage().gameTitles.nth(i)
      await expect(gameTitles).toHaveText(game.title)

      const gameUrl = pm.onHomePage().gamePlayButtons.nth(i)
      await expect(gameUrl).toHaveAttribute('href', game.expectedUrlPart)
    })
  }


})