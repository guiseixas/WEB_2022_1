import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = ({student}) => {
    const {id,name,course,ira} = student

    function deleteStudent(){
        if (window.confirm(`deseja excluir o estudante de id: ${id}?`)) {
            axios.delete(`http://localhost:3001/estudantes/${id}`)
                window.location.reload()
                .then(response => alert("estudante " + name + " removido com sucesso"))
                .catch(error => console.log(error))
        }
    }

    return (
        <tr>
            <td>
                {id}
            </td>
            <td>
                {name}
            </td>
            <td>
                {course}
            </td>
            <td>
                {ira}
            </td>
            <td style={{textAlign:"center"}}>
                <Link to={`/editStudent/${id}`} className="btn btn-primary">Editar</Link>
            </td>
            <td style={{textAlign:"center"}}>
                <button className="btn btn-danger" onClick={()=> deleteStudent()}>Apagar</button>
            </td>
        </tr>
    )
}

export default StudentTableRow