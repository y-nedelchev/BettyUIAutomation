import {Locator, Page} from "@playwright/test"
import {GameConfig} from "../test-data";

export class GamePage {

    constructor(
        readonly page: Page,
        readonly config: GameConfig
    ) {}

    get balance(): Locator{
        return this.page.locator(this.config.selectors.balance)
    }

    async startGame(): Promise<void> {
        const {clickableArea, playButton} = this.config.selectors
        if(clickableArea) {
            await this.page.locator(clickableArea).click()
            return
        }

        if(playButton) {
            await this.page.locator(playButton).click()
            return
        }
    }
}