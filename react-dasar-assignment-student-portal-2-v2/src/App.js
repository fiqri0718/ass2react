import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import './App.css';
import fotofiqri from './fotofiqri.png'

const App = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/student')
            .then((response) => response.json())
            .then((data) => {
                setStudents(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const handleAdd = (newStudent) => {
        const { programStudy } = newStudent;
        let faculty = '';

        switch (programStudy) {
            case 'Ekonomi':
            case 'Manajemen':
            case 'Akuntansi':
                faculty = 'Fakultas Ekonomi';
                break;
            case 'Administrasi Publik':
            case 'Administrasi Bisnis':
            case 'Hubungan Internasional':
                faculty = 'Fakultas Ilmu Sosial dan Politik';
                break;
            case 'Teknik Sipil':
            case 'Arsitektur':
                faculty = 'Fakultas Teknik';
                break;
            case 'Matematika':
            case 'Fisika':
            case 'Informatika':
                faculty = 'Fakultas Teknologi Informasi dan Sains';
                break;
            default:
                faculty = '';
        }

        const studentWithFaculty = { ...newStudent, faculty };

        fetch('http://localhost:3001/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentWithFaculty),
        })
            .then((response) => response.json())
            .then((data) => {
                setStudents([...students, data]);
            })
            .catch((error) => {
                console.error('Error adding student:', error);
            });
    };

    // const handleDelete = (id) => {
    //     fetch(`http://localhost:3001/student/${id}`, {
    //         method: 'DELETE',
    //     })
    //         .then(() => {
    //             const updatedStudents = students.filter((student) => student.id !== id);
    //             setStudents(updatedStudents);
    //         })
    //         .catch((error) => {
    //             console.error('Error deleting student:', error);
    //         });
    // };
    // const handleDelete = (id) => {
    //     fetch(`http://localhost:3001/student/${id}`, {
    //         method: 'DELETE',
    //     })
    //         .then(() => {
    //             setStudents((prevStudents) =>
    //                 prevStudents.filter((student) => student.id !== id)
    //             );
    //         })
    //         .catch((error) => console.log(error));
    // };

    return (
        <>
            {loading ? (
                <p>Loading ...</p>
            ) : (
                <>
                        <section id="top1">
                            <div className="container" id="toptu">
                                <h1>Student Portal</h1>
                                <div className="user">
                                    <h4>Maulana Fiqri</h4>
                                    <img src={fotofiqri} width="300px" height="auto" alt='fotofiqri'/>
                                </div>
                            </div>
                        </section>
                        <section id="form">    
                    <Form handleAdd={handleAdd} />
                    </section>
                        <Table students={students} setStudents={setStudents} />
                </>
            )}
        </>
    );
};

export default App;
