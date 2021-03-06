import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditStudent() {

    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [ira, setIRA] = useState(0)
    const params = useParams()
    const navigate = useNavigate()

    useEffect( //parte de pegar no json server e colocar no formulario
        () => {
            axios.get('http://localhost:3002/crud/student/retrieve/' + params.id)
                .then(
                    (response) => {
                        console.log(params)
                        console.log(response.data)
                        setName(response.data.name)
                        setCourse(response.data.course)
                        setIRA(response.data.ira)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        },
        [params.id]
    )

    const handleSubmit = (event) => {
        event.preventDefault()

        const updatedStudent = { name, course, ira }
        axios.put('http://localhost:3002/crud/student/update/' + params.id, updatedStudent)
            .then(response => {
                console.log("estudante atualizado")
                navigate("/listStudent")
            }
            )
            .catch(error => console.log(error))
    }

    return (
        <>
            <main>
                <h2>
                    Editar Estudante
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text"
                            className="form-control"
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text"
                            className="form-control"
                            value={course ?? ""}
                            name="course"
                            onChange={(event) => { setCourse(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text"
                            className="form-control"
                            value={ira ?? 0}
                            name="ira"
                            onChange={(event) => { setIRA(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Atualizar Estudante" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default EditStudent