import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Button from './index'

afterEach(() => {
    cleanup()
})

test('should render button component', () => {
    render(<Button label="Test" />)
    const buttonElement = screen.getByTestId('testButton')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Test')
})

test('matches button snapshot', () => {
    const tree = renderer.create(<Button label="Test" />).toJSON()
    expect(tree).toMatchSnapshot()
})
