import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'
// goi lai cai footer da
const footerAboutLinks = [
    {
        display: "About Us",
        path: "/about" 
    },
    {
        display: "Contact Us",
        path: "/about" // tao page contact
    },
    {
        display: "Career with Hesisted Coffee",
        path: "/about" // tao page career
    },
    {
        display: "News",
        path: "/about" // page new lay API news mau tren mang la dc
    },
    {
        display: "Shop Branch",
        path: "/about" // tao page để đại 
    }
]

const footerCustomerLinks = [
    {
        display: "Return Policy",
        path: "/about"
    },
    {
        display: "Refund Policy",
        path: "/about"
    },
    {
        display: "Warranty Policy",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Hotline
                        </div>
                        <div className="footer__content">
                            <p>
                                Order Hotline <strong>0782831981</strong>
                            </p>
                            <p>
                                Help <strong>0782831981</strong>
                            </p>
                            <p>
                                Advice, complaints <strong>0782831981</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            About Us
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Customer service
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                            
                        </p>
                        <p>
                            We talk coffee. Hesitated Coffee is a local coffee provider founded by Mr. Quang Huy.
                            Group 2 New Tech. 
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
