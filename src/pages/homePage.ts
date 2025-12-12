import {expect, Locator, Page} from "@playwright/test"
import {GameConfig} from "../test-data";
import {PageManager} from "./pageManager";
import * as data from "../test-data";

export class HomePage {
    public readonly page
    readonly gameLogos: Locator
    readonly games: Locator
    readonly gamePlayButtons: Locator
    readonly mobileSliderNext: Locator

    constructor(page: Page) {
        this.page = page
        this.gameLogos = page.locator('.game-logo')
        this.games = page.locator('.center')
        this.gamePlayButtons = page.locator('.center')
        this.mobileSliderNext = page.locator('.current .next')
    }

    /**
     * Locates a single game “card” by its visible title text.
     * Matching rules:
     * - Exact match on the title (no partial matches)
     * - Ignores leading/trailing whitespace around the title
     * - Escapes any regex special characters in `gameTitle` so titles like `A+B` match literally
     *
     * @param gameTitle The expected game title as shown in the UI
     * @returns A Locator pointing to the matching game card container
     */
    locateGameByTitle(gameTitle: string): Locator {
        const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

        return this.games
            .filter({ has: this.page.locator('h4', { hasText: new RegExp(`^\\s*${escapeRegex(gameTitle)}\\s*$`) }) })
    }

    getGameUrl(game: Locator): Locator {
        return game.locator("a")
    }

    async selectGame(config: GameConfig): Promise<Page> {
        const game = this.locateGameByTitle(config.name)

        for(let i: number = 0; i < 80; i++){
            if(await game.isVisible()) break
            await this.mobileSliderNext.click()
        }

        const playLink = this.getGameUrl(game)
        await expect(playLink).toHaveCount(1)

        const [popup] = await Promise.all([
            this.page.context().waitForEvent('page', { timeout: 15000 }),
            playLink.click()
        ])

        await popup.waitForLoadState()
        return popup
    }

}