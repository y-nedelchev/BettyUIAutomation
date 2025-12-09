type GameConfig = {
    name: string
    selectors: GameSelectors
}

type GameSelectors = {
    playButton?: string
    clickableArea?: string
    balance: string
    win: string
    stakeValue: string
    spinButton: string
    spinInProgressLocator?: string
}

export const irishWildsConfig: GameConfig = {
    name: 'Irish Wilds',
    selectors: {
        playButton: 'button:has-text("Play")',
        clickableArea: 'canvas',
        balance: 'TODO-balance-locator',
        win: 'TODO-win-locator',
        stakeValue: 'TODO-stake-value-locator',
        spinButton: 'TODO-spin-button-locator',
        spinInProgressLocator: 'TODO-spinning-state-locator'
    }
}
