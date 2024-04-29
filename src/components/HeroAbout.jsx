'use client'
import React, { useState } from 'react'
import Modal from './Modal'

const HeroAbout = () => {
    const [data, setData] = useState('')
    const [title, setTitle] = useState('')

    const openAnalog = () =>{
        setTitle('Аналогові телеканали')
        setData(analog)
        document.getElementById('my_modal_2').showModal()
    }
    const openDigi = () =>{
        setTitle('Цифрові телеканали')
        setData(digi)
        document.getElementById('my_modal_2').showModal()
    }

    const analog = [
        'Bereg Info',
        'EuroSport',
        'M4 sport',
        'M2',
        'M1',
        'RTL II',
        'TV2',
        'IZAUR',
        'AMC HU',
        'FILM Box',
        'GALAXY 4',
        'Animal Planet HU',
        'Max4',
        'JOCKY',
        'Discovery',
        'RTL CLUB',
        'MOZI+',
        'MINIMAX',
        'Muzika Tv',
        'Film Mania',
        'Duna',
        'Cool',
        'Super TV2',
        'Moziverzum',
        'National Geographic',
        'НТН',
        'ІНТЕР',
        'ПІКСЕЛЬ',
        'МЕГА',
        'Setanta Sport',
        'К1',
        '2+2',
        '21 Ужгород',
        '1+1',
        'ТЕТ',
        'ПЛЮС ПЛЮС',
        'БІГУДІ',
        'M1',
        'M2',
        'ICTV2',
        'Трофей',
        '24 Канал',
        'Прямий',
        'СТБ',
        'Уніан',
        'НОВИЙ КАНАЛ',
        'Сонце',
        'DVS-sat Info',
        'Cine+',
        'ЕНТЕР ФІЛЬМ',
        'ЕСПРЕСО'
    ]
    const digi = [
        '1+1 HD',
        'ТЕТ',
        'ПЛЮС ПЛЮС',
        'БІГУДІ',
        '2+2',
        '24 Канал',
        'BTQ',
        'Уніан',
        '1+1 Україна',
        'ICTV2',
        'TVIY SERIAL',
        'СТБ HD',
        'ICTV HD',
        'НОВИЙ КАНАЛ HD',
        'M1',
        'M2',
        'ОЦЕ',
        'Інтер HD',
        'НТН HD',
        'MEGA HD',
        'K1 HD',
        'Enter Film',
        'Pershiy',
        'ПІКСЕЛЬ HD',
        'Suspilne News',
        'Suspilne Krym',
        'Rada',
        'M1',
        'M2',
        'M4 sport',
        'Duna',
        'DunaWorld',
        'M5',
        '6 Соток',
        'Наука',
        'Перший Автомобільний',
        'Трофей',
        'Фауна',
        'Фронт',
        'Терра',
        'Перший Кабельний',
        'Cool',
        'Moziverzum',
        'RTl',
        'RTL2',
        'Muszika Tv',
        'TV2',
        'Film+',
        'Galaxy4',
        'Mozi+',
        'Jocky Tv',
        'Sorozot+',
        'Izaura',
        'Max4',
        'History',
        'Nat Geo',
        'Duck Tv',
        'EuroSport1',
        'Viasat Film',
        'Sport1',
        'Viasat Kino Action',
        'EuroSport1',
        'Viasat KinoHD',
        'Viasat Comedy',
        'Setanta Sport',
        'Setanta Sport+',
        'HollyWood HD',
        'Cine+',
        'Cine+ Hits',
        'Cine+ Kids'
    ]

  return (
    <div className="hero min-h-screen rounded-md" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZHIYwqUfkzSqEBi9Tq_Ak1edsBQ1mTBLjbaulD9-4AJBV3iy_WZF1kTrqdjE_QIhGtcUQ2CIzg0Fy_roRBW96dLY_FAHL6Bfg=w1920-h919-rw-v1)'}}>
        <Modal data={data} title={title}/>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Bereg-Tv</h1>
            <p className="mb-5">Мережа кабельного телебачення в берегівському районі(Дийда, Велика Бийгань, Мала Бийгань, Яноші, Косонь, Запсонь, Вари, Боржава, Мужієво,Бене) українські і угорські канали в аналозі і цифровій якості</p>
            <button onClick={openAnalog} className="btn bg-prime-color mr-3 hover:bg-teal-500 duration-200 hover:scale-110">Аналог</button>
            <button onClick={openDigi} className="btn bg-prime-color ml-3 hover:bg-teal-500 duration-200 hover:scale-110">Цифрові</button>
            </div>
        </div>
    </div>
  )
}

export default HeroAbout