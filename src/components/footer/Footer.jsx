import React, { useContext } from 'react'
import './Footer.scss'
import Logo from '../image/header__logo.png'
import Twitter from '../image/Twitter.png'
import Facebook from '../image/Facebook.png'
import Insta from '../image/Insta.png'
import { Context } from '../Context/Context'
import { Link } from 'react-router-dom'

function Footer() {
    const {value, setValue} = useContext(Context)
  return (
    <div className="foooter">

    <div className='container'>
        <div className="footer">
            <div className="footer__inner">
                <div className='inner__left'>
                    <img src={Logo} alt="" />
                    <h6>© 2023 “Copper Pro” <br /> Все права защищенны</h6>
                    <h5>Политика конфиденциальности</h5>
                </div>
                <div className='inner__right'>
                    <ul>
                        <li className='ota'>Навигация</li>
                        <li>Каталог</li>
                        <li>Новости</li>
                        <li>Доставка</li>
                        <li>О нас</li>
                        <li>Контакты</li>
                    </ul>
                    <ul>
                        <li className='ota'>Каталог</li>
                        <li>Для эфирных масел</li>
                        <li>Для гидролатов</li>
                        <li>Медная посуда</li>
                        <li>Аксессуары из меди</li>
                        <li>Индивидуальный заказ</li>
                        <li>Скидки и предложения</li>
                    </ul>
                    <ul>
                        <li className='ota'>Контакты</li>
                        <li>Андижан обл. <br />Избасканский р. </li>
                        <li>+998 (94) 469-25-09</li>
                        <li>masadbek2006@gmail.com</li>
                        <span>
                            <a href="#"><img src={Twitter} alt="" /></a>
                            <a href="#"><img src={Facebook} alt="" /></a>
                            <a href="https://instagram.com/bekk_cap1/" target='_blank'><img src={Insta} alt="" /></a>
                        </span>
                    </ul>
                </div>
                <button onClick={()=>{window.scrollTo({top:0})}}>ВВЕРХ</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer