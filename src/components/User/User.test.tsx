import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import User from './index'

afterEach(() => {
    cleanup()
})

test('should render user component', () => {
    render(<User name="Joueur" score={2} id={1} />)
    const itemElement = screen.getByTestId('testUser-1')
    expect(itemElement).toBeInTheDocument()
    const itemIconElement = screen.getByTestId('testUserName-1')
    expect(itemIconElement).toBeInTheDocument()
    expect(itemIconElement).toHaveTextContent('Joueur')
    const itemLabelElement = screen.getByTestId('testUserScore-1')
    expect(itemLabelElement).toHaveTextContent('2')
})

test('matches user snapshot', () => {
    const tree = renderer
        .create(<User name="Joueur" score={2} id={1} />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})
