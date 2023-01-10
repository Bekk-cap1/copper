import React, { useContext, useState } from 'react'
import { catalog } from '../../data/categ'
import { data } from '../../data/data'
import Header from '../../header/Header'
import './Catalog.scss'
import Next from '../../image/next.png'
import Footer from '../../footer/Footer'
import { Context } from '../../Context/Context'
import { Link } from 'react-router-dom'

function Catalog() {
    const [stat, setStat] = useState()
    const {catal, setCatal} = useContext(Context)
    return (
        <>
            <Header />
            <div className='header__catalog'>
                <div className="container">
                    <div className="catalog__inner">
                        <h3>Главная / <strong>Каталог</strong></h3>
                        <h1>Каталог</h1>
                        <ul>
                            {
                                catalog?.map((e, i) => (
                                    <li key={i}>
                                        <img src={e.img} alt="" />
                                        <h4>{e.name}</h4>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <hr />
                    <div className='main__search'>
                        <div>
                            <label htmlFor="forr" className='label'></label>
                            <input type="text" id='forr' placeholder='Поиск' />
                        </div>
                        <div className='main__search__left'>
                            <h6>Сортировка:</h6>
                            <select>
                                <option>По цене</option>
                                <option>По иимени</option>
                            </select>
                        </div>
                    </div>
                    <ul className='mapper'>
                        {
                            data?.map((e, i) => (
                                <Link to='/catalog-product'>
                                    <li onClick={()=> setCatal(e)}>
                                        <img src={e.img} alt="" />
                                        <span>
                                            <b>{e.name}</b>
                                            <b className='price'>{e.price} грн</b>
                                        </span>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                    <div className="pages">
                        <ul className='page__ul'>
                            <li onClick={()=> stat > 1? setStat(stat - 1): setStat(4)}><img src={Next} alt="" /></li>
                            <ul>
                                <li className={stat == '1'? 'active' : ''} onClick={(e)=>setStat(e.target.id)} id='1' >1</li>
                                <li className={stat == '2'? 'active' : ''} onClick={(e)=>setStat(e.target.id)} id='2'>2</li>
                                <li className={stat == '3'? 'active' : ''} onClick={(e)=>setStat(e.target.id)} id='3'>3</li>
                                <li className={stat == '4'? 'active' : ''} onClick={(e)=>setStat(e.target.id)} id='4'>4</li>
                            </ul>
                            <li onClick={()=> stat < 4? setStat(stat + 1): setStat(1)} className='next'><img src={Next} alt="" /></li>

                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Catalog