import { useState } from 'react'
import IItem from '../interfaces/IItem'

export const usePlayer = () => {
    const [playerScore, _setPlayerScore] = useState<number>(0)
    const [playerItem, _setPlayerItem] = useState<IItem>()

    // Player Score
    const incrementPlayerScore = () => {
        _setPlayerScore(playerScore + 1)
    }
    const resetPlayerScore = () => {
        _setPlayerScore(0)
    }

    //Player Item
    const setPlayerItem = (item: IItem) => {
        _setPlayerItem(item)
    }
    const resetPlayerItem = () => {
        _setPlayerItem(undefined)
    }

    return {
        playerScore,
        incrementPlayerScore,
        resetPlayerScore,
        playerItem,
        setPlayerItem,
        resetPlayerItem,
    }
}
