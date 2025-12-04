import { useState } from "react";
const Login = (props) => {
    const [username, setUsername] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(username);
        props.setUser(username);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Username" 
                onChange={(e)=> setUsername(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    )
};
export default Login;