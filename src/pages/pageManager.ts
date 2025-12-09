import {Page} from '@playwright/test'
import {BasePage} from "./basePage"
import {HomePage} from "./homePage"
import {GamePage} from "./gamePage"
import { GameConfig } from '../test-data/gameSelectors'
export class PageManager {

    private readonly page: Page
    private readonly basePage: BasePage
    private readonly homePage: HomePage

    constructor(page: Page) {
        this.page = page
        this.basePage = new BasePage(this.page)
        this.homePage = new HomePage(this.page)
    }

    onBasePage(){
        return this.basePage
    }

    onHomePage() {
        return this.homePage
    }

    onGamePage(gamePage: Page, config: GameConfig) {
        return new GamePage(gamePage, config)
    }
}