import React, { useState } from 'react';

const Form = (props) => {
    const [fullname, setFullname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [programStudy, setProgramStudy] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

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
                break;
        }

        const student = {
            fullname,
            birthDate,
            gender,
            faculty,
            programStudy,
        };

        props.addStudent(student);

        setFullname('');
        setBirthDate('');
        setGender('');
        setProgramStudy('');
    };

    return (
        <div id="form-student">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="input-name">Fullname</label>
                <input
                    type="text"
                    id="input-name"
                    data-testid="name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                />
                <div id="grid-student">
                    <div id="grid-item">
                        <label htmlFor="input-date">Birth Date</label>
                        <input
                            type="date"
                            id="input-date"
                            data-testid="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                    </div>
                    <div id="grid-item">
                        <label htmlFor="input-gender">Gender</label>
                        <select
                            id="input-gender"
                            data-testid="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <label htmlFor="input-prody">Program Study</label>
                <select
                    id="input-prody"
                    data-testid="prody"
                    value={programStudy}
                    onChange={(e) => setProgramStudy(e.target.value)}
                >
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

                <button type="submit" data-testid="submit" id="add-btn">Add student</button>
            </form>
        </div>
    );
};

export default Form;
