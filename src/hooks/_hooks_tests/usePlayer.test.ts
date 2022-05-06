import { usePlayer } from '../usePlayer'
import { act, renderHook } from '@testing-library/react-hooks'

describe('Player score hook', () => {
    it('Increments player score by 1', () => {
        const { result } = renderHook(usePlayer)

        act(() => {
            result.current.incrementPlayerScore()
        })
        expect(result.current.playerScore).toBe(1)
    })

    it('Reset player score', () => {
        const { result } = renderHook(usePlayer)

        act(() => {
            result.current.incrementPlayerScore()
        })
        expect(result.current.playerScore).toBe(1)

        act(() => {
            result.current.resetPlayerScore()
        })
        expect(result.current.playerScore).toBe(0)
    })
})

describe('Player item hook', () => {
    it('Update player item', () => {
        const { result } = renderHook(usePlayer)
        const rockData = {
            name: 'rock',
            label: 'Pierre',
            icon: '👊',
            strongerThan: ['scissors'],
        }

        act(() => {
            result.current.setPlayerItem(rockData)
        })
        expect(result.current.playerItem).toBe(rockData)
    })

    it('Reset player item', () => {
        const { result } = renderHook(usePlayer)
        const rockData = {
            name: 'rock',
            label: 'Pierre',
            icon: '👊',
            strongerThan: ['scissors'],
        }

        act(() => {
            result.current.setPlayerItem(rockData)
        })
        expect(result.current.playerItem).toBe(rockData)

        act(() => {
            result.current.resetPlayerItem()
        })
        expect(result.current.playerItem).toBeUndefined()
    })
})
