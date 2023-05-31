import React, { useState } from 'react';

const Form = (props) => {
    const { handleAdd } = props;
    const [fullname, setFullname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [programStudy, setProgramStudy] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newStudent = {
            fullname,
            birthDate,
            gender,
            programStudy,
        };

        handleAdd(newStudent);

        setFullname('');
        setBirthDate('');
        setGender('');
        setProgramStudy('');
    };

    return (
        <>
            <div className="container" id="formstudent">
                <form id="form-student" onSubmit={handleSubmit}>
                    <label htmlFor="input-name">Fullname</label>
                    <input
                        type="text"
                        id="input-name"
                        data-testid="name"
                        value={fullname}
                        onChange={(event) => setFullname(event.target.value)}
                    />
                    <label htmlFor="input-date">Birth Date</label>
                    <input
                        type="date"
                        id="input-date"
                        data-testid="date"
                        value={birthDate}
                        onChange={(event) => setBirthDate(event.target.value)}
                    />
                    <label htmlFor="input-gender">Gender</label>
                    <select
                        id="input-gender"
                        data-testid="gender"
                        value={gender}
                        onChange={(event) => setGender(event.target.value)}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <label htmlFor="input-prody">Program Study</label>
                    <select
                        id="input-prody"
                        data-testid="prody"
                        value={programStudy}
                        onChange={(event) => setProgramStudy(event.target.value)}
                    >
                        <option value="">Select Program Study</option>
                        <option value="Ekonomi">Ekonomi</option>
                        <option value="Manajemen">Manajemen</option>
                        <option value="Akuntansi">Akuntansi</option>
                        <option value="Administrasi Publik">Administrasi Publik</option>
                        <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                        <option value="Hubungan Internasional">Hubungan Internasional</option>
                        <option value="Teknik Sipil">Teknik Sipil</option>
                        <option value="Arsitektur">Arsitektur</option>
                        <option value="Matematika">Matematika</option>
                        <option value="Fisika">Fisika</option>
                        <option value="Informatika">Informatika</option>
                    </select>
                    <input type="submit" value="Add student" data-testid="submit" id="add-btn" />
                </form>
            </div>
        </>
    );
};

export default Form;
