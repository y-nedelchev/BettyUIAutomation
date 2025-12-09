import {Page} from "@playwright/test";

export class BasePage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
}