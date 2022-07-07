import { useState } from 'react'
import { toast } from 'react-toastify'
import { FormContainer } from './Signup.style'

const Signup = () => {
    // signup
    const [values, setValues] = useState({
        id: '',
        pw: '',
        pwcheck: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        // agree: false,
    })

    const handleSignup = (e) => {
        e.preventDefault()
        for (let i = 0; i < 7; i++) {
            var signupInputs = e.target[i].value
            if (signupInputs == '') {
                toast.error(
                    '필요한 양식을 기입하지 않으셨습니다. 다시 기입해 주세요.'
                )
                return false
            }
        }
        // if (e.target[7].value == false) {
        //     toast.error('약관에 동의하지 않으셨습니다. 약관에 동의해 주세요.')
        //     return false
        // }

        for (let i = 1; i < 3; i++) {
            var pw = e.target[i].value
            var num = pw.search(/[0-9]/g)
            var eng = pw.search(/[a-z]/gi)
            var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi)

            if (pw.length < 8 || pw.length > 20) {
                toast.error('8자리 ~ 20자리 이내로 입력해주세요.')
                return false
            } else if (pw.search(/\s/) != -1) {
                toast.error('비밀번호는 공백 없이 입력해주세요.')
                return false
            } else if (num < 0 || eng < 0 || spe < 0) {
                toast.error('영문,숫자, 특수문자를 혼합하여 입력해주세요.')
                return false
            }
        }

        if (e.target[1].value != e.target[2].value) {
            toast.error('비밀번호가 서로 다릅니다.')
            return false
        }
        var reg =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

        if (!reg.test(e.target[4].value)) {
            alert('이메일 형식에 맞게 입력해주세요')
        }

        toast.success('회원 가입이 완료되셨습니다!')
    }

    const signupChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    // return HTML
    return (
        <>
            <FormContainer onSubmit={handleSignup}>
                <h1>회원가입</h1>
                <label>
                    <span>ID:</span>
                    <input
                        name='id'
                        type='text'
                        value={values.id}
                        onChange={signupChange}
                        placeholder='아이디를 입력해주세요'
                    />
                </label>
                <label>
                    <span>Password:</span>
                    <input
                        name='pw'
                        type='password'
                        value={values.pw}
                        onChange={signupChange}
                        placeholder='비밀번호를 입력해주세요'
                    />
                </label>
                <label>
                    <span>Password Check:</span>
                    <input
                        name='pwcheck'
                        type='password'
                        value={values.pwcheck}
                        onChange={signupChange}
                        placeholder='비밀번호를 입력해주세요'
                    />
                </label>
                <label>
                    <span>Name:</span>
                    <input
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={signupChange}
                        placeholder='활동명을 입력해주세요'
                    />
                </label>
                <label>
                    <span>E-Mail:</span>
                    <input
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={signupChange}
                        placeholder='이메일을 입력해주세요'
                    />
                </label>
                <label>
                    <span>Phone Number:</span>
                    <input
                        name='phone'
                        type='phone'
                        value={values.phone}
                        onChange={signupChange}
                        placeholder='전화번호를 입력해주세요'
                    />
                </label>
                <label>
                    <span>Address:</span>
                    <input
                        name='adderess'
                        type='text'
                        value={values.address}
                        onChange={signupChange}
                        placeholder='주소를 입력해주세요'
                    />
                </label>
                {/* <label>
                    <input
                        name='agree'
                        type='checkbox'
                        value={values.agree}
                        onChange={signupChange}
                        placeholder='약관에 동의하시겠습니까?'
                    />{' '}
                    약관에 동의하시겠습니까?
                </label> */}
                <input type='submit' />
            </FormContainer>
        </>
    )
}

export default Signup
