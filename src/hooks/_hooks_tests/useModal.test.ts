import { useModal } from '../useModal'
import { act, renderHook } from '@testing-library/react-hooks'

describe('Modal label hook', () => {
    it('Set modal label', () => {
        const { result } = renderHook(useModal)

        act(() => {
            result.current.setModalLabel('Test Modal Label')
        })
        expect(result.current.modalLabel).toBe('Test Modal Label')
    })

    it('Reset modal label', () => {
        const { result } = renderHook(useModal)

        act(() => {
            result.current.setModalLabel('Test Modal Label')
        })
        expect(result.current.modalLabel).toBe('Test Modal Label')

        act(() => {
            result.current.resetModalLabel()
        })
        expect(result.current.modalLabel).toBe('')
    })
})

describe('Modal Open/hide hook', () => {
    it('Open Modal', () => {
        const { result } = renderHook(useModal)

        act(() => {
            result.current.openModal()
        })
        expect(result.current.modalOpen).toBeTruthy()
    })

    it('Reset player item', () => {
        const { result } = renderHook(useModal)

        act(() => {
            result.current.openModal()
        })
        expect(result.current.modalOpen).toBeTruthy()

        act(() => {
            result.current.hideModal()
        })
        expect(result.current.modalOpen).toBeFalsy()
    })
})
