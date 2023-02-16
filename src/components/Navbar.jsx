import React, {useRef} from 'react'
import './Navbar.css'
import { AiOutlineBars } from "react-icons/ai";
import { GiCrossedSwords } from "react-icons/gi";
import Button from './Button';

// ARROW FUNCTION COMPONENT
//useRef
// useref geriye current obyektini qaytarir



const Navbar = () => {
  const qaraDivUnvaniRef = useRef()
  const qaraMenyunuAc = (e) => {
    const kliknenenElement = e.target
     
    if(kliknenenElement.classList.contains('bars-icon')){
      qaraDivUnvaniRef.current.classList.add('aktiv')
    }
  }
  const qaraMenyunuBagla = (e) => {
    const kliknenenElement = e.target
     
    if(kliknenenElement.classList.contains('cross-icon')||kliknenenElement.classList.contains('nav-links')){
      qaraDivUnvaniRef.current.classList.remove('aktiv')
    }
    }
  

  return (
    <>
      <div className='overlay ' onClick={qaraMenyunuBagla} ref={qaraDivUnvaniRef}>
        <GiCrossedSwords className='cross-icon' onClick={qaraMenyunuBagla}/>
        <div className='nav-links'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Services</a>
          <a href='#'>Blogs</a>
          <a href='#'>Contact</a>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Mahmudov Media</a>
          <button onClick={qaraMenyunuAc} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <AiOutlineBars className='bars-icon'/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Blog</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white" href="#">Contact</a>
              </li>
            </ul>

            {/* PROPS ANLAYISHI */}
            <Button buttonunIcindekiYazi ="Sign In" />

          </div>
        </div>
      </nav>9
    </>
  )
}

export default Navbar