import Layout from "../layouts/Layout";
import React, { useEffect, useState } from "react";
import Style from '../styles/Index.module.css'
import { useCookies } from "react-cookie";

export default function Home() {

  const [cookies, setCookies, removeCookies] = useCookies(["cookie"])

  function setHeaders(token) {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);
    const options = {
      method: "GET",
      mode: "cors",
      headers,
    };

    return options;
  }

  async function Test() {
    if (cookies.cookie) {
      let continu
      let options = setHeaders(cookies.cookie)


    }

  }

  return (
    <Layout>
      <section className={Style.section}>
        <div className={Style.vertical}>
          <p className={Style.title}>M</p>
          <p className={Style.title}>o</p>
          <p className={Style.title}>n</p>
          <p className={Style.space}> </p>
          <p className={Style.title}>p</p>
          <p className={Style.title}>r</p>
          <p className={Style.title}>o</p>
          <p className={Style.title}>f</p>
          <p className={Style.title}>i</p>
          <p className={Style.title}>l</p>
        </div>
        <article className={Style.article}>
          <div className={Style.name}>
            <p className={Style.info}>Nom :</p>
            <p className={Style.info}>Prénom :</p>
          </div>
          <p>Date de naissance :</p>
          <p>Email :</p>
          <span className={Style.password_span}>Mot de passe :</span>
          <input type="password" className={Style.password} placeholder="Nouveau mot de passe"></input>
          <button className={Style.button}><span className={Style.button_span}>Valider les modifications</span></button>
        </article>
      </section>
    </Layout>
  )
}