import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from "../components/Button"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the button and checks the snapshot", () => {
    const comp = render(<Button />)
    expect(comp).toBeTruthy()
    expect(comp).toMatchSnapshot('buttonDefaultSnapshot')    
})

test("Renders the button with image and diferent label and checks the snapshot", () => {
    const comp = render(<Button useIcon={true} label='Send'/>)
    expect(comp).toBeTruthy()
    expect(comp).toMatchSnapshot('buttonImageSnapshot')   
})

test("Renders the button and clicks on it", () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} />)
     
    const button = screen.getByText('Submit')
    expect(button).toBeTruthy()
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
})