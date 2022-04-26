import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const ProfessorTableRow = ({professor}) => {
    const {id,name,university,degree} = professor

    function deleteProfessor(){
        if (window.confirm(`deseja excluir o professor de id: ${id}?`)) {
            axios.delete(`http://localhost:3001/professores/${id}`)
                window.location.reload()
                .then(response => alert("professor " + name + " removido com sucesso"))
                .catch(error => console.log(error))

        }
    }

    return(
        <tr>
            <td>
                {id}
            </td>
            <td>
                {name}
            </td>
            <td>
                {university}
            </td>
            <td>
                {degree}
            </td>
            <td style={{textAlign:"center"}}>
                <Link to={`/editProfessor/${id}`} className="btn btn-primary">Editar</Link>
            </td>
            <td style={{textAlign:"center"}}>
                <button className="btn btn-danger" onClick={()=> deleteProfessor()}>Apagar</button>
            </td>
        </tr>
    );
}

export default ProfessorTableRow