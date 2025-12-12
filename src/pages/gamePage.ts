import {expect, Locator, Page} from "@playwright/test"
import {GameConfig} from "../test-data";

export class GamePage {

    constructor(
        readonly page: Page,
        readonly config: GameConfig

    ){}

    async getBalance(): Promise<number> {
        const currentBalance = await this.page.locator(this.config.selectors.balance).innerText()
        const currentBalanceNormalized= Number(currentBalance.replace(/[^0-9.-]+/g, ''))

        return +currentBalanceNormalized
    }

    async getStakeAmount(): Promise<number> {
        const currentStake = await this.page.locator(this.config.selectors.stakeAmount).innerText()
        const currentStakeNormalized= Number(currentStake.replace(/[^0-9.-]+/g, ''))

        return +currentStakeNormalized
    }

    get autoSpinButton(): Locator {
        return this.page.locator(this.config.selectors.autoSpinButton)
    }

    async startGame(): Promise<void> {

        const {clickableArea, playButton} = this.config.selectors

        if(clickableArea) {

            await this.page.locator(clickableArea).waitFor({state: 'attached'})
            await expect(this.page.locator(clickableArea)).toBeEnabled()
            await this.page.locator(clickableArea).click()
            return
        }

        if(playButton) {
            await this.page.locator(playButton).waitFor({state: 'visible'})
            await expect(this.page.locator(playButton)).toBeEnabled()
            await this.page.locator(playButton).click()
            return
        }
    }

    async raiseStake(raiseTimes: number): Promise<void> {
        for(let i = 0; i < raiseTimes; i++) {
            await this.page.locator(this.config.selectors.stakePlus).click()
        }
    }

    async hitSpinButton(): Promise<void> {
        const spinButton: Locator = this.page.locator(this.config.selectors.spinButton)
        const autoSpin: Locator = this.page.locator(this.config.selectors.autoSpinButton)

        await spinButton.waitFor({state: "visible"})
        await spinButton.click()
        await expect(autoSpin).toBeDisabled()
    }
}