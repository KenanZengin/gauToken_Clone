import Image from "next/image"
import { Container } from "react-bootstrap"

import logo from '../public/assets/img/logo.png'
import goldcoin from '../public/assets/img/Gold-Coin.png'
import Link from "next/link"

const Section1 = () => {
  return (
    <div className="section1">
        <Container>
            <div className="logo">
               <Link href={"/"}>
                    <Image src={logo} alt="/" />
               </Link>
            </div>
            <div className="content">
                <div className="left">
                    <p>Rekabet Blok Zincire Taşınıyor!</p>
                    <div className="title">
                        <h1>
                            Gamer Arena <br /> Utility Token (GAU)
                            <span> İlk Kez ve Sadece
                            ICRYPEX’te!</span>
                        </h1>
                        <div className="rod"></div>
                    </div>
                    <div className="info">
                        <h2>Limitli Ön Satışa Hemen Katıl!</h2>
                        <p>Rekabetçi ve tamamen dijital oyun platformu Gamer Arena, GAU Token ile blok zincire taşınıyor! ICRYPEX üzerinde gerçekleşecek olan ön satışa katıl, avantajlı
                        fiyatı ile GAU Token sahibi olma şansını kaçırma!</p>
                    </div>
                </div>
                <div className="right">
                    <Image src={goldcoin} alt="/"  />
                </div>
            </div>
            <div className="buton">
                <div >
                    <button>
                        <Link href="#">
                            GAU TOKEN AL
                        </Link>
                    </button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Section1