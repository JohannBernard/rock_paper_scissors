import { useComputer } from '../useComputer'
import { act, renderHook } from '@testing-library/react-hooks'

describe('Computer score hook', () => {
    it('Increments computer score by 1', () => {
        const { result } = renderHook(useComputer)

        act(() => {
            result.current.incrementComputerScore()
        })
        expect(result.current.computerScore).toBe(1)
    })

    it('Reset computer score', () => {
        const { result } = renderHook(useComputer)

        act(() => {
            result.current.incrementComputerScore()
        })
        expect(result.current.computerScore).toBe(1)

        act(() => {
            result.current.resetComputerScore()
        })
        expect(result.current.computerScore).toBe(0)
    })
})

describe('Computer item hook', () => {
    it('Update computer item', () => {
        const { result } = renderHook(useComputer)
        const rockData = {
            name: 'rock',
            label: 'Pierre',
            icon: '👊',
            strongerThan: ['scissors'],
        }

        act(() => {
            result.current.setComputerItem(rockData)
        })
        expect(result.current.computerItem).toBe(rockData)
    })

    it('Reset computer item', () => {
        const { result } = renderHook(useComputer)
        const rockData = {
            name: 'rock',
            label: 'Pierre',
            icon: '👊',
            strongerThan: ['scissors'],
        }

        act(() => {
            result.current.setComputerItem(rockData)
        })
        expect(result.current.computerItem).toBe(rockData)

        act(() => {
            result.current.resetComputerItem()
        })
        expect(result.current.computerItem).toBeUndefined()
    })
})
