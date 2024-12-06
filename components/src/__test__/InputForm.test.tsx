import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import InputForm from "../components/InputForm"

test("Renders the inputForm and checks the snapshot", () => {
    const inputForm = render(<InputForm />)

    expect(inputForm).toMatchSnapshot('inputFormDefaultSnapshot')    
})

test('renders input form and handles input change', () => {
  render(<InputForm />)
  
  const input = screen.getByRole('textbox')
  expect(input).toBeTruthy()
  fireEvent.change(input, { target: { value: 'Hello' } })
  
  expect(input).toHaveValue('Hello')
  expect(screen.queryByText('No numbers allowed!')).not.toBeInTheDocument()
})

test('shows error message when input contains numbers', () => {
  const form = render(<InputForm />)
  
  const input = screen.getByRole('textbox')
  fireEvent.change(input, { target: { value: '123' } })
  
  expect(screen.getByText('No numbers allowed!')).toBeInTheDocument()
  expect(form.container.querySelector('.form-success')).not.toBeInTheDocument()
});

test('handles button click and shows success message', () => {
  const form = render(<InputForm />)
  
  const input = screen.getByRole('textbox')
  const button = screen.getByRole('button')
  
  fireEvent.change(input, { target: { value: 'Hello' } })
  fireEvent.click(button)
  
  expect(form.container.querySelector('.form-success')).toBeInTheDocument()
});

test('prevents form submission on Enter key press', () => {
  const form = render(<InputForm />)
  
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'Hello' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
  
  expect(form.container.querySelector('.form-success')).toBeInTheDocument()
});


// test("Renders the inputForm add text", () => {
//     const handleClick = jest.fn()
//     render(<InputForm />)
     
//     const input = screen.getByRole('input')
//     expect(input).toBeTruthy()

//     fireEvent.click(inputForm)
//     expect(handleClick).toHaveBeenCalledTimes(1)
// })

// test("Renders the inputForm submit text, check for result", () => {
//     const handleClick = jest.fn()
//     render(<InputForm />)
     
//     const inputForm = screen.getByText('Submit')
//     expect(inputForm).toBeTruthy()
//     fireEvent.click(inputForm)
//     expect(handleClick).toHaveBeenCalledTimes(1)
// })

// test("Renders the inputForm submit number, check for error + success should not show", () => {
//     const handleClick = jest.fn()
//     render(<InputForm />)
     
//     const inputForm = screen.getByText('Submit')
//     expect(inputForm).toBeTruthy()
//     fireEvent.click(inputForm)
//     expect(handleClick).toHaveBeenCalledTimes(1)
// })