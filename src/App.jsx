import { useState } from 'react'
import './App.css'

import perfil from "./assets/perfil.webp"
import bg from "./assets/bg.webp"

import GroupComponent from './Component/GroupComponent'

function App() {

  const group01 = [
    { name: "Alongamento de fibra/tips/gel", price: 120},
    { name: "Blindagem", price: 70},
    { name: "Blindagem/Dec./Esmaltação", price: 80},
    { name: "Banho de Gel", price: 90},
  ]

  const group02 = [
    { name: "Manutenção Unha de Fibra/Tips/Gel", price: 90 },
    { name: "Repor Unha Na Manutanção (UN)", price: 5 },
    { name: "Repor Unha Fora Da Manutanção (UN)", price: 10 },
  ]

  const group03 = [
    { name: "Remoção do alongamento", price: 30 },
  ]

  return (
    <div className='App' translate="no" class="notranslate">
      <div className="principal">
        <header>
          <h1 className='title'>Juliana Barbosa</h1>
          <img src={perfil} alt="Perfil" className='perfil' />

        </header>
        <section className='prices'>

          <GroupComponent title="Valores" group={group01} />
          <GroupComponent title="Manutenção" group={group02} />
          <GroupComponent title="extras" group={group03} />

          <p className='cardAlert'>Passo Cartão Com Acréssimo Da Máquina</p>
          <p className='cardAlert'>Atendimento com hora marcada</p>

        </section>
        <section>
          <div className="divTitle"><h1>Localização</h1></div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1115.0480115716784!2d-44.131092947257784!3d-19.942959120606574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c035ccdeaa71%3A0xb9da0eabff152d81!2sR.%20Cinco%2C%2099%20-%20Vila%20Cristina%2C%20Betim%20-%20MG%2C%2032675-876!5e0!3m2!1spt-BR!2sbr!4v1748040631766!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
        <section className='contact'>
          <div className="divTitle"><h1 className="disTitle">Contato</h1></div>
          <a href="https://bit.ly/4mu6WnB" target='_blank'><button>Whatsapp <i class="fa-brands fa-whatsapp"></i></button></a>
          <a href="https://instagram.com/julianabarbosanails_" target='_blank'><button>Instagram <i class="fa-brands fa-instagram"></i></button></a>
        </section >
      </div>
      <footer>
        <p>Juliana Barbosa Nails | © Todos os Direitos Reserados</p>
      </footer>
    </div >
  )
}

export default App
