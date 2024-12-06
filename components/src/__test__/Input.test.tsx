import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import Input from "../components/Input"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the input and checks the snapshot", () => {
    const handleChange = jest.fn()
    const comp = render(<Input value='' type='text' onChange={handleChange} hasError={false} />)
    expect(comp).toBeTruthy()
    expect(comp).toMatchSnapshot('inputDefaultSnapshot')    
})

test("Renders the input with text and checks the snapshot", () => {
    const handleChange = jest.fn()
    const comp = render(<Input value='This is me.' onChange={handleChange} type='text' hasError={false} />)
    expect(comp).toBeTruthy()
    expect(comp).toMatchSnapshot('inputValueSnapshot')   
})

test("Renders the input with numbers and error and checks the snapshot", () => {
    const handleChange = jest.fn()
    const comp = render(<Input value='123' onChange={handleChange} type='text' hasError={true} />)
    expect(comp).toBeTruthy()
    
    const errorClassName = comp.container.querySelector('.error')
    expect(errorClassName).toBeTruthy()

    expect(comp).toMatchSnapshot('inputErrorSnapshot')   
})