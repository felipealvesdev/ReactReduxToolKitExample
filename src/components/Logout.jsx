import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

export default function Logout() {

    const dispatch = useDispatch();


    const handleLogout = () => {
        dispatch(logout());
    }


  return (
    <div>

        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
