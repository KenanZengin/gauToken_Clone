import Link from 'next/link'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import {BsTelegram,BsFacebook,BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'

import qr from '../public/assets/img/QR.png'
import logo from '../public/assets/img/logo.png'
import bank from '../public/assets/img/bank.png'



const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <div className="footer-content">
                <div className="info">
                    <div className="left">
                        <h3>ICRYPEX ILE GAU TOKEN’A <br /> SAHİP OL!</h3>
                        <Link href="#">
                            <Image src={qr} alt="/"  />
                        </Link>
                    </div>
                    <div className="right">
                    <Link href={"/"}>
                        <Image src={logo} alt="/"  />
                    </Link>
                        <address>
                          <p>0850 255 1079</p>
                          Icrypex Bilişim A.Ş. Maslak Mah. <br /> Maslak Meydan Sok. Spring Giz Plaza <br /> N:5/57 Sarıyer/İstanbul
                        </address>
                        <div className="social">
                            <Link href="#"> <BsFacebook size={25} /></Link>
                            <Link href="#"><BsTelegram size={25} /> </Link>
                            <Link href="#"> <BsInstagram size={25} /></Link> 
                            <Link href="#"><BsLinkedin size={25} /> </Link>
                            <Link href="#"><BsTwitter size={25} /></Link>
                        </div>
                    </div>
                </div>
                <div className="partner ">
                    <div className="left">
                        <Image src={bank} alt="/"  />
                    </div>
                    <div className="right">
                        <span>Tüm Hakları Saklıdır © 2018-2021 Icrypex Crypto Exchange</span>
                    </div>
                </div>
            </div>
        </Container>
        <div className='addclr'></div>
    </footer>
  )
}

export default Footer