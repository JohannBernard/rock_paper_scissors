import { useState } from 'react'
import IItem from '../interfaces/IItem'

export const useComputer = () => {
    const [computerScore, _setComputerScore] = useState<number>(0)
    const [computerItem, _setComputerItem] = useState<IItem>()

    // Computer Score
    const incrementComputerScore = () => {
        _setComputerScore(computerScore + 1)
    }
    const resetComputerScore = () => {
        _setComputerScore(0)
    }

    //Computer Item
    const setComputerItem = (item: IItem) => {
        _setComputerItem(item)
    }
    const resetComputerItem = () => {
        _setComputerItem(undefined)
    }

    return {
        computerScore,
        incrementComputerScore,
        resetComputerScore,
        computerItem,
        setComputerItem,
        resetComputerItem,
    }
}
