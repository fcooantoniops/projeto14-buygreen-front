import { AuthBackground, Logo, Form, Button, ButtonText, SignUpLink} from '../../styles/auth.js';

export default function Login() {

    return (
        <AuthBackground>
            <Logo>BuyGreen</Logo>
            <Form placeholder="Email"></Form>
            <Form placeholder="Senha"></Form>
            <Button>
                <ButtonText>Entrar</ButtonText>
            </Button>
            <SignUpLink>Ainda não é cadastrado? Cadastre-se agora!</SignUpLink>
        </AuthBackground>
    )
}