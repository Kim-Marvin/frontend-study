import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Reset } from 'styled-reset'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Reset />
            <Component {...pageProps} />
            <ToastContainer position='bottom-right' theme='dark' />
        </>
    )
}

export default MyApp
