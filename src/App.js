import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";

import CreateStudent from './components/crud/student/CreateStudent';
import EditStudent from './components/crud/student/EditStudent';
import ListStudent from './components/crud/student/ListStudent';
import CreateProfessor from './components/crud/professor/CreateProfessor';
import EditProfessor from './components/crud/professor/EditProfessor';
import ListProfessor from './components/crud/professor/ListProfessor';

import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>CRUD</Link>
        <div className="collapse navbar-collapse" id="navbarS upportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Student
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a class="dropdown-item" href="/createStudent">Create Student</a></li>
                <li><a class="dropdown-item" href="/listStudent">List Student</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Professor
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a class="dropdown-item" href="/createProfessor">Create Professor</a></li>
                <li><a class="dropdown-item" href="/listProfessor">List Professor</a></li>
              </ul>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
        <Route path="createProfessor" element={<CreateProfessor />} />
        <Route path="editProfessor/:id" element={<EditProfessor />} />
        <Route path="listProfessor" element={<ListProfessor />} />
      </Routes>
    </div>
  );
}

export default App;
