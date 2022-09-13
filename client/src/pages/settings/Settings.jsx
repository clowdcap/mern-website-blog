/* Import padrao react */
import React from 'react'

/* Import css */
import './settings.css'

/* Import components */
import Sidebar from '../../components/sidebar/Sidebar'


const Settings = () => {
  return (
    <section className="settings center">
        <div className="settings__wrapper">
        <div className="settings__titulo">
            <span className="settings__titulo__update">Atualize sua conta</span>
            <span className="settings__titulo__delete">Deletar contar</span>
        </div>
        <form className="settings__form">
                <label>Foto de Perfil</label>
            <div className="settings__PP">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Imagem" />
                    <label htmlFor="fileInput"><i className="settings__PP__icon far fa-user-circle"></i>{" "}</label>
                <input id="fileInput" type="file" style={{ display: "none" }} className="settings__PP__button" />
            </div>
                <label>Usuário</label>
            <input type="text" placeholder="Seu nome de usuário" name="name" />
                <label>E-Mail</label>
            <input type="email" placeholder="seu_email@ghotmail.com" name="email" />
                <label>Senha</label>
            <input type="password" placeholder="Password" name="password" />
            <button className="settings__submit__button" type="submit">Atualizar</button>
        </form>
        </div>
        <Sidebar />
    </section>
  )
}

export default Settings