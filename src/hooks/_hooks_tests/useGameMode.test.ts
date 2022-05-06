import { useGameMode } from '../useGameMode'
import { act, renderHook } from '@testing-library/react-hooks'
import rock_paper_scissors from '../../data/rock_paper_scissors.json'
import rock_paper_scissors_lizard_spoke from '../../data/rock_paper_scissors_lizard_spoke.json'

describe('Game Mode hook', () => {
    it('Set Classic Mode', () => {
        const { result } = renderHook(useGameMode)
        act(() => {
            result.current.setGameMode(rock_paper_scissors)
        })
        const expectedGame = [
            {
                name: 'rock',
                label: 'Pierre',
                icon: '👊',
                strongerThan: ['scissors'],
            },
            {
                name: 'paper',
                label: 'Feuille',
                icon: '✋',
                strongerThan: ['rock'],
            },
            {
                name: 'scissors',
                label: 'Ciseaux',
                icon: '✌',
                strongerThan: ['paper'],
            },
        ]
        expect(result.current.gameMode).toStrictEqual(expectedGame)
    })

    it('Set lizard/spoke Mode', () => {
        const { result } = renderHook(useGameMode)
        act(() => {
            result.current.setGameMode(rock_paper_scissors_lizard_spoke)
        })
        const expectedGame = [
            {
                name: 'rock',
                label: 'Pierre',
                icon: '👊',
                strongerThan: ['scissors', 'lizard'],
            },
            {
                name: 'paper',
                label: 'Feuille',
                icon: '✋',
                strongerThan: ['rock', 'spoke'],
            },
            {
                name: 'scissors',
                label: 'Ciseaux',
                icon: '✌',
                strongerThan: ['paper', 'lizard'],
            },
            {
                name: 'lizard',
                label: 'Lézard',
                icon: '🦎',
                strongerThan: ['paper', 'spoke'],
            },
            {
                name: 'spoke',
                label: 'Spock',
                icon: '🖖',
                strongerThan: ['rock', 'scissors'],
            },
        ]
        expect(result.current.gameMode).toStrictEqual(expectedGame)
    })
})
