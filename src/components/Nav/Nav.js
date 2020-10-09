import React, { useEffect, useState } from 'react';
import './Nav.css'

function Nav(props) {

    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true)
            } else setShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    },[])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="https://assets.brand.microsites.netflix.io/assets/df87ee0c-c4ea-11e7-8d40-066b49664af6_cm_800w.png?v=46" 
            alt="Netflix Logo"
            />

            <img 
            className="nav__avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" 
            alt="Avatar"
            />
        </div>
    );
}

export default Nav;