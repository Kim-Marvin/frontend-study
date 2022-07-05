import { toast } from 'react-toastify'
import useInput from '../hooks/useInput'
import { FormContainer, LabelTest } from './Signup.style'

const Signup = () => {
    const [values, setValues] = useInput({
        id: '',
        pw: '',
    })

    const handleSignup = (e) => {
        e.preventDefault()
        toast('login!')
    }
    return (
        <>
            <h1>Signup</h1>
            <FormContainer onSubmit={handleSignup}>
                <label>
                    <span>ID:</span>
                    <input
                        name='id'
                        type='text'
                        value={values.id}
                        onChange={setValues}
                        placeholder='id'
                    />
                </label>
                <LabelTest>
                    <span>Password:</span>
                    <input
                        name='pw'
                        type='password'
                        value={values.pw}
                        onChange={setValues}
                        placeholder='Password'
                    />
                </LabelTest>
                <input type='submit' />
            </FormContainer>
        </>
    )
}

export default Signup
