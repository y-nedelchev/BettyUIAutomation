import {test as base} from '@playwright/test'
import {PageManager} from "./src/pages/pageManager";

export type TestOptions = {
    navigateToHomePage: string
    pm: PageManager
}

export const test = base.extend<TestOptions>({
    pm: async ({page}, use) => {
        const pageManager = new PageManager(page)
        await use(pageManager)
    },

    navigateToHomePage: async ({page, pm}, use) => {
        await page.goto('/')
        await pm.onBasePage().acceptCookies()
        await use('')
    }
})