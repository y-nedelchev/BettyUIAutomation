export type GameConfig = {
    name: string
    url: string
    selectors: GameSelectors
}

export type GameSelectors = {
    playButton?: string
    clickableArea?: string
    balance: string
    win: string
    stakeValue: string
    spinButton: string
    autoSpinButton: string
    spinInProgressLocator?: string
    stakeMinus: string
    stakePlus: string
    stakeAmount: string
}

export const gameConfig: GameConfig[] =
    [
        {
        name: '10x Minimum',
        url: 'https://tinyurl.com/3sxw6wy8',
        selectors: {
            playButton: '.button-play__inner',
            balance: '.balance .amount',
            win: '.win .amount',
            stakeValue: '.stake .amount-stake',
            spinButton: '.arrows-spin-button',
            autoSpinButton: '.controls__autoplay button',
            stakeMinus: 'button.button-stake__wrapper-minus',
            stakePlus: 'button.button-stake__wrapper-plus',
            stakeAmount: '.amount-stake',
            }
        },
        {
        name: 'Irish Wilds',
        url: 'https://tinyurl.com/39hjjjf3',
        selectors: {
            playButton: 'button.button__slider-play',
            balance: '.balance .amount',
            win: '.win .amount',
            stakeValue: '.stake .amount-stake',
            spinButton: '.arrows-spin-button',
            autoSpinButton: '.controls__autoplay button',
            stakeMinus: 'button.button-stake__wrapper-minus',
            stakePlus: 'button.button-stake__wrapper-plus',
            stakeAmount: '.stake .amount',
        }
    },
]