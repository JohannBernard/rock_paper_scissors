import { useEffect } from 'react'
import './App.css'
// components
import Button from './components/Button'
import Item from './components/Item'
import Modal from './components/Modal'
import User from './components/User'
// data
import rock_paper_scissors from './data/rock_paper_scissors.json'
import rock_paper_scissors_lizard_spoke from './data/rock_paper_scissors_lizard_spoke.json'
// interface
import IItem from './interfaces/IItem'
// helper
import Utils from './helpers/Utils'
import GameHelper from './helpers/GameHelper'
// hook
import { usePlayer } from './hooks/usePlayer'
import { useComputer } from './hooks/useComputer'
import { useModal } from './hooks/useModal'
import { useGameMode } from './hooks/useGameMode'

function App() {
    // Hook init
    const {
        //Player
        playerScore,
        incrementPlayerScore,
        resetPlayerScore,
        playerItem,
        setPlayerItem,
        resetPlayerItem,
    } = usePlayer()
    const {
        //Computer
        computerScore,
        incrementComputerScore,
        resetComputerScore,
        computerItem,
        setComputerItem,
        resetComputerItem,
    } = useComputer()
    const {
        //Modal
        modalLabel,
        setModalLabel,
        resetModalLabel,
        modalOpen,
        openModal,
        hideModal,
    } = useModal()
    const {
        //Game Mode
        gameMode,
        setGameMode,
    } = useGameMode()

    // Player select an item
    function selectItemAction(item: IItem) {
        const playerItem = item
        const computerItem = gameMode[Utils.getRandomInt(gameMode.length)]
        //Show items
        setPlayerItem(playerItem)
        setComputerItem(computerItem)
        //Increment point to the winner
        if (GameHelper.wonStatus(playerItem, computerItem) === -1) {
            //Player Lost
            incrementComputerScore()
        } else if (GameHelper.wonStatus(playerItem, computerItem) === 1) {
            //Player Win
            incrementPlayerScore()
        }
    }

    // Player select random item
    function randomItemAction() {
        selectItemAction(gameMode[Utils.getRandomInt(gameMode.length)])
    }

    // Toggle game Mode - Add/Remove lizard & spoke
    function toggleGameMode() {
        if (gameMode === rock_paper_scissors) {
            setGameMode(rock_paper_scissors_lizard_spoke)
        } else {
            setGameMode(rock_paper_scissors)
        }
    }

    //Reset Game
    function resetGame() {
        hideModal()
        resetPlayerScore()
        resetComputerScore()
        resetPlayerItem()
        resetComputerItem()
        resetModalLabel()
    }

    // Test if game is finished
    useEffect(() => {
        function testEndGame() {
            if (playerScore === 3 || computerScore === 3) {
                //Fin de la partie
                playerScore === 3
                    ? setModalLabel('Gagné !')
                    : setModalLabel('Perdu...')
                openModal()
            }
        }
        testEndGame()
    }, [playerScore, computerScore, openModal, setModalLabel])

    return (
        <div className="App">
            <header>
                <img
                    width={80}
                    height={80}
                    src={require('./assets/images/logo-mycoach.jpeg')}
                    alt="logo_my_coach"
                    className="logo_my_coach"
                />
                <div className="headerContent">
                    <h1>Test MyCoach - Johann Bernard</h1>
                    <Button
                        label={
                            gameMode === rock_paper_scissors
                                ? '👊✋✌'
                                : '👊✋✌🦎🖖'
                        }
                        onClickCustom={() => toggleGameMode()}
                        icon
                        title="Changer de mode de jeu"
                    />
                </div>
            </header>

            <section className="gameSection">
                <div>
                    <div className="userContainer">
                        <User name="Joueur" score={playerScore} />
                        <User name="Ordinateur" score={computerScore} />
                    </div>

                    <div className="gameContainer">
                        {playerItem || computerItem ? (
                            <>
                                <Item
                                    item={playerItem}
                                    opponent={computerItem}
                                />
                                <Item
                                    item={computerItem}
                                    opponent={playerItem}
                                />
                            </>
                        ) : (
                            <>
                                <p className="instructionText">
                                    Veuillez sélectionnez un signe pour
                                    commencer la partie.
                                </p>
                            </>
                        )}
                    </div>
                    <p className="winLabel">
                        {GameHelper.wonLabel(playerItem, computerItem)}
                    </p>
                </div>

                <div className="actionsContainer">
                    <div className="actions">
                        {gameMode.map((item) => (
                            <Button
                                key={item.name}
                                label={item.label}
                                onClickCustom={() => selectItemAction(item)}
                            />
                        ))}
                        <Button
                            label={'Hasard'}
                            onClickCustom={() => randomItemAction()}
                        />
                    </div>
                </div>
            </section>
            <Modal
                label={modalLabel}
                open={modalOpen}
                onClickCustom={() => resetGame()}
            />
        </div>
    )
}

export default App
