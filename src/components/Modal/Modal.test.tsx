import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Modal from './index'

afterEach(() => {
    cleanup()
})

test('should render modal component visible', () => {
    render(<Modal label={'Test Modal 1'} open={true} id={1} />)
    const modalElement = screen.getByTestId('testModal-1')
    expect(modalElement).toBeInTheDocument()
    expect(modalElement).toHaveClass('modal_window_visible')
    const modalLabelElement = screen.getByTestId('testModalLabel-1')
    expect(modalLabelElement).toBeInTheDocument()
    expect(modalLabelElement).toHaveTextContent('Test Modal 1')
})

test('should render modal component hidden', () => {
    render(<Modal label={'Test Modal 2'} open={false} id={2} />)
    const itemIconElement = screen.getByTestId('testModal-2')
    expect(itemIconElement).toBeInTheDocument()
    expect(itemIconElement).not.toHaveClass('modal_window_visible')
})

test('matches item snapshot', () => {
    const tree = renderer
        .create(
            <>
                <Modal label={'Test Modal 1'} open={true} id={1} />
                <Modal label={'Test Modal 2'} open={false} id={2} />
            </>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})
