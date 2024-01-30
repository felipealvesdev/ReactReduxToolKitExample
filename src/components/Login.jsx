import { useState } from "react"
import { useDispatch } from "react-redux";
import { changeUser, changeSecondName } from "../redux/userSlice";

export default function Login() {

    const [name, setName] = useState("");
    const [secondName, setSecondName] = useState("");

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(changeUser(name));
    }

    const handleSecondName = () => {
        dispatch(changeSecondName(secondName));
    }

    return (
        <div>
                <h1>Login</h1>
                <input type="text" onChange={(e)=> setName(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>

                <input type="text" onChange={(e)=> setSecondName(e.target.value)}/>
                <button onClick={handleSecondName}>Change second name</button>
        </div>
    )
}
