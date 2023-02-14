import { loginRequest, profileRequest } from "../api/auth"
import { useAuthStore } from "../store/auth"
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const { setToken, setProfile } = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = async (e : TForm) => {
        e.preventDefault()
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value
        
        const resLogin = await loginRequest(email,password);
        setToken(resLogin.data.token)
        const resProfile = await profileRequest()
        setProfile(resProfile.data.profile)

        navigate('/profile')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
        </>
    )
}

export default LoginPage;