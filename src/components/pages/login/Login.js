import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthBackground, Logo, Form, Button, ButtonText, SignUpLink } from '../../styles/authStyles.js';
import { postLogin } from '../../../services/authServices.js';
import { IoKey, IoMailSharp } from 'react-icons/io5';
import styled from 'styled-components';

const FormContainer = styled.div`
    position: relative;
`

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userBuild = {};

    const handleChangeEmail = event => {
        setEmail(event.target.value);
    };
    const handleChangePassword = event => {
        setPassword(event.target.value);
    }

    function handleClickLogin() {
        userBuild.email = email;
        userBuild.password = password;
        console.log("userBuild: ", userBuild);

        postLogin(userBuild).then((res) => {
            console.log("data:", res.data);
            localStorage.setItem("token", res.data.token);
            navigate('/home');
        }).catch((res) => {
            alert(res.message);
            console.log("errorData: ", res)
        })
    }

    return (
        <AuthBackground>
            <Logo>BuyGreen</Logo>
            <FormContainer>
                <Form type={"email"}
                    placeholder="Email"
                    onChange={handleChangeEmail}
                    value={email}
                    required />
                    <IoMailSharp style={{ position: 'absolute',
                        right: '1rem',
                        top: '.85rem', 
                        fontSize: "1.2rem", 
                        color: "grey" }}/>
            </FormContainer>
            <FormContainer>
                <Form type={"password"}
                    placeholder="Senha"
                    onChange={handleChangePassword}
                    value={password}
                    required />
                    <IoKey style={{ position: 'absolute', 
                    right: '1rem', 
                    top: '.85rem', 
                    fontSize: "1.2rem", 
                    color: "grey" }}/>
            </FormContainer>
            
            <Button onClick={handleClickLogin}>
                <ButtonText >Entrar</ButtonText>
            </Button>
            <Link style={{ textDecoration: 'none' }} to={`/signup`}>
                <SignUpLink>Ainda não é cadastrado? Cadastre-se agora!</SignUpLink>
            </Link>
        </AuthBackground>
    )
}