import React from 'react'
import './Header.scss'
import Header__img from '../image/header__logo.png'
import Heart from '../image/heart.png'
import Shop from '../image/shop.png'
import User from '../image/user.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='contai'>
        <div className="header__logo">
          <ul className='header__left'>
            <Link to='/home'>
              <img src={Header__img} alt="" />
            </Link>
            <Link to='/catalog'>
              <li>Каталог</li>
            </Link>
            <li>Новости</li>
            <li>Доставка</li>
            <Link to='/about'>
              <li>О нас</li>
            </Link>
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