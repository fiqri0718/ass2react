// import React from 'react';

// const Table = (props) => {
//     const { students, handleDelete } = props;

//     const deleteStudent = async (id) => {
//         try {
//             const response = await fetch(`http://localhost:3001/student/${id}`, {
//                 method: 'DELETE',
//             })

//             if (response.ok) {
//                 handleDelete(id);
//             } else {
//                 throw new Error('Failed to delete student');
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <>
//             <table id="table-student">
//                 <thead>
//                     <tr>
//                         <th>No</th>
//                         <th>Full Name</th>
//                         <th>Birth Date</th>
//                         <th>Gender</th>
//                         <th>Faculty</th>
//                         <th>Program Study</th>
//                         <th>Option</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {students.map((student, index) => (
//                         <tr key={student.id} className="student-data-row">
//                             <td>{index + 1}</td>
//                             <td>{student.fullname}</td>
//                             <td>{student.birthDate}</td>
//                             <td>{student.gender}</td>
//                             <td>{student.faculty}</td>
//                             <td>{student.programStudy}</td>
//                             <td>
//                                 <button
//                                     onClick={() => deleteStudent(student.id)}
//                                     data-testid={`delete-${student.id}`}
//                                 >
//                                     Delete Student
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     );
// };

// export default Table;
import React from 'react';

function Table({ students, setStudents }) {
    const handleDelete = (id) => {
        fetch(`http://localhost:3001/student/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setStudents((prevStudents) =>
                    prevStudents.filter((student) => student.id !== id)
                );
            })
            .catch((error) => console.log(error));
    };

    return (
        <table id="table-student">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Birth Date</th>
                    <th>Gender</th>
                    <th>Faculty</th>
                    <th>Program Study</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                    <tr key={student.id} className="student-data-row">
                        <td>{index + 1}</td>
                        <td>{student.fullname}</td>
                        <td>{student.birthDate}</td>
                        <td>{student.gender}</td>
                        <td>{student.faculty}</td>
                        <td>{student.programStudy}</td>
                        <td>
                            <button class="delete-btn" type="button"
                                onClick={() => handleDelete(student.id)}
                                data-testid={`delete-${student.id}`}
                            >
                                Delete Student
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
