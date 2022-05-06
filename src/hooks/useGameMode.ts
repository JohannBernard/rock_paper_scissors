import { useState } from 'react'
import IItem from '../interfaces/IItem'
import rock_paper_scissors from '../data/rock_paper_scissors.json'

export const useGameMode = () => {
    const [gameMode, _setGameMode] = useState<IItem[]>(rock_paper_scissors)

    // Player Score
    const setGameMode = (items: Array<IItem>) => {
        _setGameMode(items)
    }

    return { gameMode, setGameMode }
}
