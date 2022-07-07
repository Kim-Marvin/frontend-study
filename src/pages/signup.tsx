import Head from 'next/head'
import React from 'react'
import axios from 'axios'
import Signup from '../components/Signup'

const signup = () => {
    React.useEffect(() => {
        const apiRequest = async () => {
            const apiInstance = await axios.create({
                baseURL:
                    'https://fv3p699st7.execute-api.ap-northeast-2.amazonaws.com/development',
            })
            const response = await apiInstance.get('/')
            console.log(response)
        }
        apiRequest()
    }, [])
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>회원가입</title>
            </Head>
            <Signup />
        </>
    )
}
export default signup
