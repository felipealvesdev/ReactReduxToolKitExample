import { useSelector } from "react-redux"

export default function Navbar() {

  const { name } = useSelector(state => state.user);
    
  return (
    <div>Navbar e o usuário logado é: {name}</div>
  )
}
