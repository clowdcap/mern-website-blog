import React from 'react'
import './write.css'

const Write = () => {
    let imagem = "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    return (
        <section className="write center">
            <img className="write__img" src={imagem} alt="Imagem"/>
            <form className="write__form">
                <div className="write__form__group">

                    <label htmlFor="file__input">
                        <i className="write__icon fas fa-plus"></i>
                    </label>

                    <input id="file__input" type="file" style={{ display: "none" }} />
                    <input className="write__input" placeholder="Title" type="text" autoFocus={true}/>
                </div>

                <div className="write__form__group">
                    <textarea className="write__input write__texto" placeholder="Me conte uma história" type="text" autoFocus={true} />
                </div>
                
                <button className="write__submit" type="submit">Publicar</button>
            </form>
        </section>
    )
}

export default Write