import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
// import logo from "./components/user.png";
import "./App.css";

const App = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await fetch("http://localhost:3001/student");
            const data = await response.json();
            setStudents(data);
            setLoading(false);
        } catch (error) {
            console.log("Error fetching students:", error);
            setLoading(false);
        }
    };
    const addStudent = async (student) => {
        try {
            await fetch("http://localhost:3001/student", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(student),
            });
            // Refresh the students list after successful addition
            fetchStudents();
        } catch (error) {
            console.log("Error adding student:", error);
        }
    };

    if (loading) {
        return "Loading ...";
    }

    return (
        <>
            <nav>
                <div id="nav-left">
                    <h1>Student Portal</h1>
                </div>
                <div id="nav-right">
                    <p>Admin</p>
                    {/* <img src={logo} alt="Logo" /> */}
                </div>
            </nav>
            <Form addStudent={addStudent} />
            <Table students={students} setStudents={setStudents} />
        </>
    );
};

export default App;
