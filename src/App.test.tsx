import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from './App'

afterEach(() => {
    cleanup()
})

test('renders texts', () => {
    render(<App />)
    const title = screen.getByText(/Test MyCoach - Johann Bernard/i)
    expect(title).toBeInTheDocument()
    const playerLabel = screen.getByText(/Joueur/i)
    expect(playerLabel).toBeInTheDocument()
    const computerLabel = screen.getByText(/Ordinateur/i)
    expect(computerLabel).toBeInTheDocument()
})

test('matches button snapshot', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
})
