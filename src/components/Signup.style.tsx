import styled from 'styled-components'

export const FormContainer = styled.form`
    @font-face {
        font-family: NanumSquareWeb;
        src: local(NanumSquareR), local(NanumSquare),
            url(NanumSquareR.eot?#iefix) format('embedded-opentype'),
            url(NanumSquareR.woff) format('woff'),
            url(NanumSquareR.ttf) format('truetype');
        font-style: normal;
        font-weight: normal;
        unicode-range: U+0-10FFFF;
    }
    margin: 0 16px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
    > h1 {
        font-family: NanumSquareWeb;
        font-weight: 800;
        text-align: center;
        font-size: x-large;
        color: #000080;
        padding: 10px;
    }
    > label {
        font-family: NanumSquareWeb;
        display: flex;
        padding: 10px;
        > span {
            width: 200px;
            text-align: end;
            margin-right: 8px;
            padding: 5px;
        }
        > input {
            flex: 1;
        }
    }
`
