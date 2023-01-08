import React from 'react'
import './Header.scss'
import Header__img from '../image/header__logo.png'
import Heart from '../image/heart.png'
import Shop from '../image/shop.png'
import User from '../image/user.png'

function Header() {
  return (
    <div className='container'>
        <div className="header__logo">
          <ul className='header__left'>
            <img src={Header__img} alt="" />
            <li>Каталог</li>
            <li>Новости</li>
            <li>Доставка</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
          <ul className='header__right'>
            <li className='header__heart'>
              <img src={Heart} alt="" />
            </li>
            <li className='header__user'>
              <img src={User} alt="" />
            </li>
            <li className='header__shop'>
              <img src={Shop} alt="" />
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Header