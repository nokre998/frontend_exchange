import { useNavigate } from "react-router-dom"
import { LoginForm } from "./ui/LoginForm"

export const Login = () => {
    const navigate = useNavigate()
    
    const registerButtonClicked = () => {
        navigate('/register')
    }
    
    return (
        <div className="min-h-screen flex justify-center items-center">
            <LoginForm />

            <button type="button" onClick={registerButtonClicked} className="bg-green-300">Тіркелу</button>
        </div>
    )
}
