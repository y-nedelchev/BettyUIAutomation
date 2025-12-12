import { test } from '../fixtures'
import * as data from '../src/test-data/index'
import {expect, Locator} from "@playwright/test"
import {GameConfig} from "../src/test-data";
import {GamePage} from "../src/pages/gamePage";

test.describe.parallel('Home Page Validations', () => {
  test('TC01 Verify the number of games on Home Page matches test data', async ({ navigateToHomePage, pm }) => {
    // TODO This count should not be hardcoded, data.gameConfig.length should be used
    const gamesCount = 72
    await expect(pm.onHomePage().games).toHaveCount(gamesCount)
    await expect(pm.onHomePage().gameLogos).toHaveCount(gamesCount)
    await expect(pm.onHomePage().gamePlayButtons).toHaveCount(gamesCount)
  })

  for(let i = 0; i < data.gameConfig.length; i++) {
    const gameConfig: GameConfig = data.gameConfig[i]

    test(`TC02 Verify ${gameConfig.name} game has the correct URL`, async ({ navigateToHomePage, pm }) => {
      const targetGame: Locator = pm.onHomePage().locateGameByTitle(gameConfig.name)
      const gameUrl: Locator = pm.onHomePage().getGameUrl(targetGame)
      await expect(gameUrl).toHaveAttribute('href', gameConfig.url)
    })
  }
})

test.describe.parallel('Game Validations', () => {
  for(let i: number = 0; i < data.gameConfig.length; i++) {
    const configuration = data.gameConfig[i]

    test(`TC03 Verify balance is successfully updated after spin for "${configuration.name}"`, async ({ navigateToHomePage, pm }) => {
      const gamePage = await pm.onHomePage().selectGame(configuration)
      const game = new GamePage(gamePage, configuration)

      await game.startGame()
      for(let i: number = 0; i <= 5; i++){
        const initialBalance = await game.getBalance()
        const stake = await game.getStakeAmount()
        await game.hitSpinButton()
        const balanceAfterSpin = await game.getBalance()
        if(initialBalance - stake != balanceAfterSpin)
          throw new Error(`Incorrect balance calculation. Balance before spin: ${initialBalance}, 
          Balance after spin: ${balanceAfterSpin}, Stake: ${stake}`)
        await expect(game.autoSpinButton).toBeEnabled({timeout: 30000})
      }
    })
  }
})