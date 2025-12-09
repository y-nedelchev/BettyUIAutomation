export type GameConfig = {
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
    stakeMinus: string
    stakePlus: string
}

export const gameConfig: GameConfig[] =
    [
        {
        name: '10x Minimum',
        selectors: {
            playButton: '.button-play-block',
            balance: '.balance .amount',
            win: '.win .amount',
            stakeValue: '.stake .amount-stake',
            spinButton: '.arrows-spin-button',
            spinInProgressLocator: '.arrows-spin-button[disabled]',
            stakeMinus: '[xlink:href]',
            stakePlus: '[xlink:href]'
        }
    },

    // export const irishWildsConfig: GameConfig = {
    //     name: 'Irish Wilds',
    //     selectors: {
    //         playButton: 'button:has-text("Play")',
    //         clickableArea: 'canvas',
    //         balance: 'TODO-balance-locator',
    //         win: 'TODO-win-locator',
    //         stakeValue: 'TODO-stake-value-locator',
    //         spinButton: 'TODO-spin-button-locator',
    //         spinInProgressLocator: 'TODO-spinning-state-locator'
    //     }
    // }
]