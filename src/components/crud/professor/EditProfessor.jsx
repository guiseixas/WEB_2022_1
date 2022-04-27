import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function EditProfessor() {

    const [name, setName] = useState("")
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
    const params = useParams()
    const navigate = useNavigate()

    useEffect( //parte de pegar no json server e colocar no formulario
        () => {
            axios.get('http://localhost:3002/crud/professor/retrieve/' + params.id)
            .then(
                (response) => {
                    setName(response.data.name)
                    setUniversity(response.data.university)
                    setDegree(response.data.degree)
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

        const updatedProfessor = {name, university, degree}
        axios.put('http://localhost:3002/crud/professor/update/' + params.id, updatedProfessor)
            .then(response => {
                console.log("professor atualizado")
                navigate("/listProfessor")
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <main>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text"
                            className="form-control"
                            value={name ?? ""}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Universidade: </label>
                        <input type="text"
                            className="form-control"
                            value={university ?? ""}
                            name="university"
                            onChange={(event) => { setUniversity(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Titulação: </label>
                        <input type="text"
                            className="form-control"
                            value={degree ?? ""}
                            name="degree"
                            onChange={(event) => { setDegree(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Atualizar Professor" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default EditProfessor