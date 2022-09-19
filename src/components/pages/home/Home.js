import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { AuthBackground } from "../../styles/authStyles";

export default function Home(){

    const navigate = useNavigate()
    const token = localStorage.getItem("token");

    function autoLogin() {
        if(token) {
            navigate('/products');
        } else {
            navigate('/login');
        }
    }
    autoLogin()
    

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

}