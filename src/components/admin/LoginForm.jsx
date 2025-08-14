import { useState } from "react";

function LoginForm() {
    const {username, setUsername} = useState('')
    const {password, setPassword} = useState('')

    function usernameHandle(e) {
        setUsername(e.target.value)
    }

    function passwordHandle(e) {
        setPassword(e.target.value)
    }

    return (  
        <>
            <div className="loginFormWrapper">
                <form>
                    <label>
                        Username:
                        <input 
                        type="text" 
                        value={username}
                        onChange={usernameHandle}
                    />
                    </label>
                    <label>
                        Password:
                        <input 
                        type="text" 
                        value={password}
                        onChange={passwordHandle}
                    />
                    </label>
                    <button>
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}

export default LoginForm;