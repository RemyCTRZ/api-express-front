import React, { SyntheticEvent, useState } from 'react';
import Layout from "../layouts/Layout";
import Style from '../styles/Register.module.css'

const Register = () => {

    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:3001/user/signup', {
            method: "POST",
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                firstName,
                birthDate,
                email,
                password
            })
        });
        window.location.replace('/login')
    }

    return (
        <Layout>
            <form onSubmit={submit} className={Style.form}>
                <h1 className="h3 mb-3 fw-normal">Inscription</h1>
                <input className="form-control" placeholder="Nom" required
                    onChange={e => setName(e.target.value)}
                />
                <input className="form-control" placeholder="Prénom" required
                    onChange={e => setFirstName(e.target.value)}
                />
                <input type="date" className="form-control" placeholder="Date de naissance" required
                    onChange={e => setBirthDate(e.target.value)}
                />
                <input type="email" className="form-control" placeholder="Email" required
                    onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control" placeholder="Mot de passe" required
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="w-100 btn btn-lg btn-primary" type="submit">S&apos;inscrire</button>
            </form>
        </Layout>
    );
};

export default Register;