import {Locator, Page} from "@playwright/test"

export class HomePage {
    public readonly page
    readonly gameLogos: Locator
    readonly gameTitles: Locator
    readonly gamePlayButtons: Locator

    constructor(page: Page) {
        this.page = page
        this.gameLogos = page.locator('.game-logo')
        this.gameTitles = page.locator('.video-slider-controls').getByRole('heading')
        this.gamePlayButtons = page.locator('.video-slider a')
    }


}