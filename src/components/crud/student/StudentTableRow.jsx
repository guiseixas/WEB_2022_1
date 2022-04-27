import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = ({student}) => {
    const {_id,name,course,ira} = student

    function deleteStudent(){
        if (window.confirm(`deseja excluir o estudante de id: ${_id}?`)) {
            axios.delete(`http://localhost:3002/crud/student/delete/${_id}`)
                window.location.reload()
                .then(response => alert("estudante " + name + " removido com sucesso"))
                .catch(error => console.log(error))
        }
    }

    return (
        <tr>
            <td>
                {_id}
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
                <Link to={`/editStudent/${_id}`} className="btn btn-primary">Editar</Link>
            </td>
            <td style={{textAlign:"center"}}>
                <button className="btn btn-danger" onClick={()=> deleteStudent()}>Apagar</button>
            </td>
        </tr>
    )
}

export default StudentTableRow