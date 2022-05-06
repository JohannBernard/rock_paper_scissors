import { useState } from 'react'

export const useModal = () => {
    const [modalLabel, _setModalLabel] = useState<string>('')
    const [modalOpen, _setModalOpen] = useState<boolean>(false)

    // Modal Label
    const setModalLabel = (label: string) => {
        _setModalLabel(label)
    }
    const resetModalLabel = () => {
        _setModalLabel('')
    }

    // Modal Open
    const openModal = () => {
        _setModalOpen(true)
    }
    const hideModal = () => {
        _setModalOpen(false)
    }

    return {
        modalLabel,
        setModalLabel,
        resetModalLabel,
        modalOpen,
        openModal,
        hideModal,
    }
}
