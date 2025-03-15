import { LoginForm } from "@/components/auth/LoginForm";

const Login = () => {
    return (
        <div className="grid justify-center w-full gap-4">
            <h1>Iniciar sesion en la red social</h1>
            <LoginForm />
        </div>
    )
}

export default Login