import Head from 'next/head'
import Signup from '../components/Signup'

const signup = () => {
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
