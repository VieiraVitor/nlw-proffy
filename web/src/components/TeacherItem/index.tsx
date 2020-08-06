import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt=""/>
                        <div>
                            <strong>Proffy 1</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Lorem ipsun.
                        <br/><br/>
                        Ipsun Lore.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 500,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt=""/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;