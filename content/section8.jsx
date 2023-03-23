import Image from "next/image"
import { Container, Row , Col } from "react-bootstrap"

import Section8left from '../public/assets/img/Section8left.png'
import Frame from '../public/assets/img/Frame.png'
import Frame1 from '../public/assets/img/Frame1.png'
import Frame2 from '../public/assets/img/Frame2.png'
import Frame3 from '../public/assets/img/icon-people.png'


const Section8 = () => {
  return (
    <section className="section8">
        <Container>
            <div className="section8-content">
                <div className="title">
                    <h3>ICRYPEX'te Benzersiz Ön Satışlara Katıl! <br />
                    GAU Token'a Sahip Ol ve Rekabette Yerini Al!</h3>
                </div>
                <div className="info">
                    <div className="left">
                        <Image src={Section8left} alt="/"  />
                    </div>
                    <div className="right">
                        <Row lg={2} xs={1}>
                            <Col>
                                <Image src={Frame3} alt="/"  />
                                <h4>Rakiplerini bul</h4>
                                <p>Benzersiz 21 oyundan dilediğini seç! Şimdi sana karşı mücadele edecek birini keşfetme zamanı. Yeteneklerine uygun, dişine göre bir rakip bul!</p>
                            </Col>
                            <Col>
                                <Image src={Frame1} alt="/"  />
                                <h4>Düellolara Katıl</h4>
                                <p>Rekabet daima güzeldir; tabii oyunun kurallarına uyduğun sürece! İster bireysel, istersen de takımın ile düellolara katılarak becerilerini herkese kanıtla!</p>
                            </Col>
                            <Col>
                                <Image src={Frame2} alt="/"  />
                                <h4>Kendini Göster</h4>
                                <p>Ethereum ağında geliştirilmiş olan GAU Token, yalnızca ICRYPEX Kripto Para Borsasında listelenecek</p>
                            </Col>
                            <Col>
                                <Image src={Frame} alt="/" />
                                <h4>Ödüller Kazan</h4>
                                <p>Başarılarını kanıtladın, sıra ödüllerde! Birinci olduğun ve takımının  galibiyetle sonuçlandırdığı oyunlarda GAU Token ödülleri ve sürpriz hediyeler seni bekliyor!</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Section8