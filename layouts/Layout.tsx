import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useCookies } from 'react-cookie';
import Style from '../styles/Layout.module.css'

// @ts-ignore
const Layout = (props) => {

    const [cookies, setCookies, removeCookies] = useCookies(["cookie"])
    const [isConnected, setIsConnected] = useState(false)

    const logout = () => {
        removeCookies(["cookie"])
        window.location.replace('/login')
    }

    async function isUserConnected() {
        if (cookies.cookie) {
            await setIsConnected(true)
        }
    }

    useEffect(() => {
        isUserConnected()
    })

    return (
        <>
            <nav className={Style.navbar}>
                <div className={Style.container}>
                    <Link href="/">
                        <a href="#" className={Style.navbar_link} >Profil</a>
                    </Link>
                    <div className={Style.right_navlinks}>
                        {!isUserConnected ? (
                            <ul className={Style.navbar_list}>
                                <li className={Style.navbar_item}>
                                    <Link href="/login">
                                        <a className={Style.navbar_link} >Se connecter</a>
                                    </Link>
                                </li>
                                <li className={Style.navbar_item}>
                                    <Link href="/register">
                                        <a className={Style.navbar_link} >S&apos;inscrire</a>
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className={Style.navbar_list}>
                                <li className={Style.navbar_item}>
                                    <Link href="/">
                                        <a className={Style.navbar_link} onClick={logout} >Se déconnecter</a>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>

            <main className={Style.form}>
                {props.children}
            </main>
        </>
    );
};

export default Layout;