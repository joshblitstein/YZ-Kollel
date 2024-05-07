import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import logo from './logo.png'
import './nav.scss';

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    useEffect(()=>{
        window.onscroll = function() {myFunction()};

        var navbar = document.querySelector(".navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
          } else {
            navbar.classList.remove("sticky");
          }
        }
    },[])

  

    return (
        <nav id="navbar" className="navbar">
         
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="right">
            <ul className={isActive ? 'navlinks active' : 'navLinks'}>
                <li><a href="/"><CiHome color='white'/></a></li>
                <li><a href="/about"><CiCircleInfo color='white'/></a></li>
                <li><a href="/contact"><CiUser color='white'/></a></li>
            </ul>
            <div className="searchBar">
                <input type="text" placeholder="What you lookin for?..." />
                <button type="submit"><CiSearch color='white'/></button>
            </div>
      
           
            </div>
            <a  onClick={toggleClass} className="icon"><RxHamburgerMenu /></a>
        </nav>
    );
}

export default Nav;
