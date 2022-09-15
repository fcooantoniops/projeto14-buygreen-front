import styled from "styled-components"


const AuthBackground = styled.div`
    background-color: #193631;
    height: 100vh;
    width: 100vh;
    max-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Logo = styled.h1`
    color: white;
    font-size: 4rem;
    margin-bottom: 2rem;
`
const Form = styled.input`
    height: 3rem;
    width: 83vw;
    border: 0px;
    border-radius: 5px;
    margin-bottom: .8rem;
    text-indent: .6rem;
    font-size: .9rem;
    box-sizing: border-box;
`
const Button = styled.div`
    background-color: #1F484D;
    width: 83vw;
    height: 3rem;
    border-radius: 5px;
    margin-bottom: 2rem;
    margin-top: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ButtonText = styled.h2`
    color: white;
`
const SignUpLink = styled.p`
    color: white;
`


export { AuthBackground, Logo, Form, Button, ButtonText, SignUpLink}