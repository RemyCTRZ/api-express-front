import React, { useState, SyntheticEvent } from 'react';
import { useCookies } from 'react-cookie';
import Layout from "../layouts/Layout";
import Style from '../styles/Login.module.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookies, removeCookies] = useCookies(["cookie"])

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const userLogged = await fetch('http://localhost:3001/users/login', {
            method: "POST",
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        });

        // On met le token de l'utilisateur dans le cookie

        const result = await userLogged.json()
        const token = result.accessToken

        if (token) {
            setCookies("cookie", token, "/")
        }

        // Redirection vers la page d'accueil

        window.location.replace('/')
    }

    return (
        <Layout>
            <main className={Style.main}>
                <form className={Style.form} onSubmit={submit} autoComplete="off">
                    <h3 className="h3 mb-3 fw-bold">Connexion</h3>
                    <input type="email" className="form-control" placeholder="Email" required
                        onChange={e => setEmail(e.target.value)} />
                    <input type="password" className="form-control" placeholder="Mot de passe" required
                        onChange={e => setPassword(e.target.value)} />
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Se connecter</button>
                </form>
            </main>
        </Layout>
    );
};

export default Login;
