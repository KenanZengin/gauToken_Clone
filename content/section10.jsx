'use client'
import Image from "next/image"
import { Container,Row,Col } from "react-bootstrap"

import frame3 from '../public/assets/img/frame3.png'
import frame4 from '../public/assets/img/frame4.png'
import frame5 from '../public/assets/img/frame5.png'
import frame6 from '../public/assets/img/frame6.png'
import frame7 from '../public/assets/img/frame7.png'
import frame8 from '../public/assets/img/frame8.png'
import section11 from '../public/assets/img/Section-11.png'

const Section10 = () => {
  return (
    <section className="section10">
        <Container>
            <div className="section10-content">
                <div className="title">
                    <h3>
                        Neden Icrypex Cyrpto Exchange
                    </h3>
                    <p>
                    ICRYPEX, finans profesyonelleri tarafından kurulmuş, Türkiye’yi kripto para dünyasının yenilikleri ile tanıştırmayı hedefleyen ve yatırımcıya gerçek blok zinciri tecrübesi sunan kripto para borsasıdır. ICRYPEX, listelediği kripto para birimleri ve gerçekleştirdiği projeler ile Türkiye’de pek çok ilke imza atmayı sürdürüyor!
                    </p>
                </div>
                <div className="info">
                    <Row xl={3} md={2} xs={1}>
                        <Col>
                            <Image src={frame3} alt="/"  />
                            <h4>Hızlı Platform</h4>
                            <p>İster kripto para dünyasıyla yeni tanışmış ol ister profesyonel bir yatırımcı, ICRYPEX ile kendi blok zincir öykünü yaratarak gerçek bir blok zincir tecrübesi yaşayabilir ve özel analizlerle işlemlerini gerçekleştirebilirsin.</p>
                        </Col>
                        <Col>
                            <Image src={frame4} alt="/"  />
                            <h4>Soğuk Cüzdan</h4>
                            <p>Kripto varlıklarınız, fiziksel olarak izole edilmiş, çevrimdışı, ağa bağlı olmayan cüzdanlarda muhafaza edilir. Bu soğuk depolar, varlıklarınızı güvenle saklayabilecek fiziki zorlu çevresel koşullara dayanır ve siber risk barındırmaz.</p>
                        </Col>
                        <Col>
                            <Image src={frame5} alt="/"  />
                            <h4>Uygulama</h4>
                            <p>Teknolojisiyle 10 milisaniyenin altında işlem süresi sunan ICRYPEX uygulamasında pratik tasarımı sayesinde birçok işlemi kolaylıkla gerçekleştirebilir, dilediğin her yerden kripto para portföyüne ulaşabilir, geleceğin projelerine yatırımı cepten yapabilirsin.</p>
                        </Col>
                        <Col>
                            <div>
                                <Image src={frame6} alt="/"  />
                            </div>
                            <h4>2FA Doğrulama</h4>
                            <p>2 adımlı doğrulama, kişisel veri güvenliğinin son noktalarından biridir. 2FA ile hesabınıza girerken bir güvenlik katmanı daha eklemiş olursunuz. Böylece sadece sizin için oluşturulan doğrulama kodu ile hesabınıza giriş yaparsınız</p>
                        </Col>
                        <Col>
                            <Image src={frame7} alt="/"  />
                            <h4>Gerçek Cüzdan</h4>
                            <p>Icrypex ile yaptığınız işlemler talebinizle, gerçek çekirdekte yapılır, global blokzincire yansıtılır. Sadece Icrypex üzerinde açtığınız cüzdandaki işlemleri Etherscan veya btc.com üzerinden de takip edebilirsiniz.</p>
                        </Col>
                        <Col>
                            <Image src={frame8} alt="/"  />
                            <h4>Yüksek Derinlik</h4>
                            <p>Icrypex size 20 para birimi ile 40 markette derinlikli bir borsa hizmeti sunar. Teorik olarak bu, aynı anda 40 farklı markete erişebildiğiniz anlamına gelir. Her birinde istediğiniz an işleme girip çıkabillirsiniz..</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
        <div className="section11-img">
            <Image src={section11} alt="/"  />
        </div>
    </section>
  )
}

export default Section10