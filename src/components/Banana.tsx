import { useState } from 'react'
import useInput from '../hooks/useInput'

const Banana = (props) => {
    // props
    const { color, fruit } = props

    // declare variables
    const [values, setValues] = useInput({
        id: '',
        pw: '',
        email: '',
    })

    // event handlers
    const login = (e) => {
        e.preventDefault()
        alert('login')
    }

    return (
        <form onSubmit={login}>
            <label>
                <input
                    name='email'
                    type='email'
                    value={values.email}
                    onChange={setValues}
                    placeholder='testEmail'
                />
            </label>
            <label>
                <input
                    name='id'
                    type='text'
                    value={values.id} // abc
                    onChange={setValues}
                    placeholder='testID'
                />
            </label>
            <label>
                <input
                    name='pw'
                    type='password'
                    value={values.pw}
                    onChange={setValues}
                    placeholder='testPW'
                />
            </label>
            <input type='submit' />
        </form>
    )
}

export default Banana
