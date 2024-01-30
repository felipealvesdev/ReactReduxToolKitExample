import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addStudent, removeStudent } from "../redux/listSlice";

export default function List() {


    const dispatch = useDispatch();

    const { students, studentsQuantity } = useSelector(state => state.list);


    // Aqui vem o reducer do store, precisa ser state.nomeQueEstaNoStore
    const [ name, setName ] = useState();
    const [id, setId] = useState();

    const handleSendName = async () => {
        if(name !== "") {
            await dispatch( addStudent(name));
        }
    }

    const handleDeleteById = async () => {
        await dispatch( removeStudent(id));
    }



    return (
        <div>
            <h1>Componente list</h1>
            {Array.isArray(students) ? students.map((item, id) => <h1 key={id}>{item}</h1>): ""}

            <input onChange={(e) => setName(e.target.value)} />
            <button onClick={handleSendName}>Send name to list</button>

            <input onChange={(e) => setId(e.target.value)}/>
            <button onClick={handleDeleteById}>Excluir item nº{ id } da lista</button>
            <h1>Quantidade de estudantes na lista {studentsQuantity}</h1>
        
        </div>
    )
}
