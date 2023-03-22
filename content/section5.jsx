import Image from 'next/image'
import { Container } from 'react-bootstrap'

import robotcoin from '../public/assets/img/Robot-coin.png'

const Section5 = () => {
  return (
    <div className="section4-5">
        <Container>
            <div className="section4-5-content">
                <div className="coinimg">
                    <Image src={robotcoin} className="big" alt="/"  />
                </div>
                <div className="info">
                    <h3>Gamer Arena Utility Token Nasıl Alınır?</h3>
                    <ul>
                        <li>Gamer Arena Utility Token’ıı ICRYPEX üzerinden satın almak için ICRYPEX mobil uygulamaları veya İnternet sitesi üzerinden ICRYPEX’e üye olun.</li>
                        <li>Hesap onaylarınızı gerçekleştirin.</li>
                        <li>Yatırma menüsü üzerinden TL bakiye yüklemesini gerçekleştirin.</li>
                        <li>Ön satış periyodunun başlangıcı ile birlikte Gamer Arena Utility Token’ı satın alabilirsiniz!</li>
                    </ul>
                    <p>Unutma, satın aldığın Gamer Arena Utility Token’lar 30 gün boyunca kilitli kalacak.</p>
                </div>
            </div>
        </Container>
        <div className="title">
            <h2>UTILITY TOKEN <span>GAMER ARENA</span></h2>
        </div>
    </div>
  )
}

export default Section5