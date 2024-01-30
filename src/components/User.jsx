import { useSelector } from "react-redux";


export default function User() {

    const { name } = useSelector(state => state.user);
    const { secondName } = useSelector(state => state.user);

    return (
        <div>
            <h1>Usuário: {name}</h1> 
            <h2>Second name: {secondName}</h2>
        </div>
    );
}
