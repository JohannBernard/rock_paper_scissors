import IItem from '../interfaces/IItem'

abstract class GameHelper {
    public static wonStatus(playerItem?: IItem, computerItem?: IItem) {
        if (!(playerItem && computerItem)) {
            return 0
        }
        if (playerItem.name === computerItem.name) {
            // Egalité
            return 0
        } // Gagné
        else if (playerItem.strongerThan.includes(computerItem.name)) {
            return 1
        } else {
            // Perdu
            return -1
        }
    }

    public static wonLabel(playerItem?: IItem, computerItem?: IItem) {
        if (!(playerItem && computerItem)) {
            return ''
        }
        const itemNameArray = [playerItem.name, computerItem.name]
        if (itemNameArray[0] === itemNameArray[1]) {
            return 'Égalité'
        }
        if (
            itemNameArray.includes('scissors') &&
            itemNameArray.includes('paper')
        ) {
            return 'Les ciseaux coupent la feuille'
        }
        if (itemNameArray.includes('paper') && itemNameArray.includes('rock')) {
            return 'La feuille recouvre la pierre'
        }
        if (
            itemNameArray.includes('rock') &&
            itemNameArray.includes('lizard')
        ) {
            return 'La pierre écrase le lézard'
        }
        if (
            itemNameArray.includes('lizard') &&
            itemNameArray.includes('spoke')
        ) {
            return 'Le lézard empoisonne Spock'
        }
        if (
            itemNameArray.includes('spoke') &&
            itemNameArray.includes('scissors')
        ) {
            return 'Spock casse les ciseaux'
        }
        if (
            itemNameArray.includes('scissors') &&
            itemNameArray.includes('lizard')
        ) {
            return 'Les ciseaux décapitent le lézard'
        }
        if (
            itemNameArray.includes('paper') &&
            itemNameArray.includes('spoke')
        ) {
            return 'La feuille réfute Spock'
        }
        if (
            itemNameArray.includes('lizard') &&
            itemNameArray.includes('paper')
        ) {
            return 'Le lézard mange la feuille'
        }
        if (itemNameArray.includes('spoke') && itemNameArray.includes('rock')) {
            return 'Spock vaporise la pierre'
        }
        if (
            itemNameArray.includes('rock') &&
            itemNameArray.includes('scissors')
        ) {
            return 'La pierre écrase les ciseaux'
        }
    }
}

export default GameHelper
