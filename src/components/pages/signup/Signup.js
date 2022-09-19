import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthBackground, Logo, Form, Button, ButtonText, SignUpLink } from '../../styles/authStyles.js';
import { postSignup } from '../../../services/authServices.js';
import { IoKey, IoMailSharp, IoPerson } from 'react-icons/io5';
import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';

const FormContainer = styled.div`
    position: relative;
`

export default function Signup() {

    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const userBuild = {};

    const handleChangeName = event => {
        setName(event.target.value);
    };
    const handleChangeEmail = event => {
        setEmail(event.target.value);
    };
    const handleChangePassword = event => {
        setPassword(event.target.value);
    };
    const handleChangeConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    };

    function handleClickLogin() {
        setLoading(true);

        if(confirmPassword !== password) {
            alert("Senhas não conferem!");
            setLoading(false);
            return "error"
        }

        userBuild.name = name;
        userBuild.email = email;
        userBuild.password = password;
        console.log("userBuild: ", userBuild);

        postSignup(userBuild).then((res) => {
            console.log("data:", res.data);
            navigate('/login');
            setLoading(false);
        }).catch((res) => {
            alert(res.message);
            console.log("errorData: ", res)
            setLoading(false);
        });
    }
    
    if (loading) {
        return (<AuthBackground>
            <TailSpin
                height="80"
                width="80"
                color="#25acbf"
                ariaLabel="tail-spin-loading"
                radius="1"
                visible={true}
            />
          </AuthBackground>)
    };

    return (
        <AuthBackground>
            <Logo>BuyGreen</Logo>
            <FormContainer>
                <Form type={"text"}
                    placeholder="Nome"
                    onChange={handleChangeName}
                    value={name}
                    required />
                    <IoPerson style={{ position: 'absolute',
                        right: '1rem',
                        top: '.85rem', 
                        fontSize: "1.2rem", 
                        color: "grey" }}/>
            </FormContainer>
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
            <FormContainer>
                <Form type={"password"}
                    placeholder="Confirme a senha"
                    onChange={handleChangeConfirmPassword}
                    value={confirmPassword}
                    required />
                    <IoKey style={{ position: 'absolute', 
                    right: '1rem', 
                    top: '.85rem', 
                    fontSize: "1.2rem", 
                    color: "grey" }}/>
            </FormContainer>
            <Button onClick={handleClickLogin}>
                <ButtonText >Cadastrar</ButtonText>
            </Button>
            <Link style={{ textDecoration: 'none' }} to={`/login`}>
                <SignUpLink>Já tem cadastro? Entre aqui!</SignUpLink>
            </Link>
        </AuthBackground>
    )
}