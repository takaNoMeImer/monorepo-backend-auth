import { useAuthStore } from "../store/auth";
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Profile</h1>
            <h1>{JSON.stringify(useAuthStore.getState().profile)}</h1>
            <button onClick={() => {
                useAuthStore.getState().logout(),
                navigate('/login')
            }}>Logout</button>
        </>
    )
}

export default ProfilePage;