import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Item from './index'

afterEach(() => {
    cleanup()
})

test('should render rock item component', () => {
    const rockData = {
        name: 'rock',
        label: 'Pierre',
        icon: '👊',
        strongerThan: ['scissors'],
    }
    render(<Item item={rockData} id={1} />)
    const itemElement = screen.getByTestId('testItem-1')
    expect(itemElement).toBeInTheDocument()
    const itemIconElement = screen.getByTestId('testItemIcon-1')
    expect(itemIconElement).toBeInTheDocument()
    expect(itemIconElement).toHaveTextContent('👊')
    const itemLabelElement = screen.getByTestId('testItemLabel-1')
    expect(itemLabelElement).toHaveTextContent('Pierre')
})

test('should render paper item component', () => {
    const paperData = {
        name: 'paper',
        label: 'Feuille',
        icon: '✋',
        strongerThan: ['rock'],
    }
    render(<Item item={paperData} id={2} />)
    const itemElement = screen.getByTestId('testItem-2')
    expect(itemElement).toBeInTheDocument()
    const itemIconElement = screen.getByTestId('testItemIcon-2')
    expect(itemIconElement).toBeInTheDocument()
    expect(itemIconElement).toHaveTextContent('✋')
    const itemLabelElement = screen.getByTestId('testItemLabel-2')
    expect(itemLabelElement).toHaveTextContent('Feuille')
})

test('should render scissors item component', () => {
    const scissorsData = {
        name: 'scissors',
        label: 'Ciseaux',
        icon: '✌',
        strongerThan: ['paper'],
    }
    render(<Item item={scissorsData} id={3} />)
    const itemElement = screen.getByTestId('testItem-3')
    expect(itemElement).toBeInTheDocument()
    const itemIconElement = screen.getByTestId('testItemIcon-3')
    expect(itemIconElement).toBeInTheDocument()
    expect(itemIconElement).toHaveTextContent('✌')
    const itemLabelElement = screen.getByTestId('testItemLabel-3')
    expect(itemLabelElement).toHaveTextContent('Ciseaux')
})

test('matches item snapshot', () => {
    const rockData = {
        name: 'rock',
        label: 'Pierre',
        icon: '👊',
        strongerThan: ['scissors'],
    }
    const paperData = {
        name: 'paper',
        label: 'Feuille',
        icon: '✋',
        strongerThan: ['rock'],
    }
    const scissorsData = {
        name: 'scissors',
        label: 'Ciseaux',
        icon: '✌',
        strongerThan: ['paper'],
    }

    const tree = renderer
        .create(
            <div>
                <Item item={rockData} id={1} />
                <Item item={paperData} id={2} />
                <Item item={scissorsData} id={3} />
            </div>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})
