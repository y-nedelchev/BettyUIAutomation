import {Locator, Page} from "@playwright/test";

export class BasePage {
    private readonly page: Page
    readonly agreeCookies: Locator

    constructor(page: Page) {
        this.page = page
        this.agreeCookies = page.getByRole('button', {name: 'I agree'})
    }

    async acceptCookies(): Promise<void> {
        if(await this.agreeCookies.isVisible({timeout: 3000})){
            await this.agreeCookies.click()
        }
    }

    isMobile(): boolean {
        const ctx = this.page.context() as unknown as { _options?: { isMobile?: boolean } }
        return ctx._options?.isMobile === true
    }
}