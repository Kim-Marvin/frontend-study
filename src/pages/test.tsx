import react, { useEffect, useState } from 'react'
import axios from 'axios'

const Test = () => {
    const [message, setMessage] = useState('')
    // Get Method
    useEffect(() => {
        const apiRequest = async () => {
            const apiInstance = await axios.create({
                baseURL:
                    'https://fv3p699st7.execute-api.ap-northeast-2.amazonaws.com/development',
            })
            const response = await apiInstance.get('/basket/apple')
            setMessage(response.data.body.message)
            console.log(response)
        }
        apiRequest()
    }, [])
    // Post Method
    const handleSubmit = async (e) => {
        e.preventDefault()
        const apiInstance = await axios.create({
            baseURL:
                'https://fv3p699st7.execute-api.ap-northeast-2.amazonaws.com/development',
        })
        const response = await apiInstance.post('/signup', {
            count: 1,
        })
    }
    return (
        <>
            <p>test</p>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='name' />
                <input type='submit' />
            </form>
        </>
    )
}

export default Test
