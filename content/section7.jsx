import Image from "next/image"
import { Container } from "react-bootstrap"

import chart from '../public/assets/img/Chart.png'

const Section7 = () => {
  return (
    <section className="section7">
        <Container>
            <div className="section7-content">
                <div className="title">
                    <h3>Video Oyunları - Her Yıl Büyüyen,<br /> Durdurulamaz bir Sektör! </h3>
                    <p>Oyun sektörü, her geçen gün büyüyen, gelişimini global çapta sürdüren ve sinema, müzik gibi pek çok sektörü geride bırakmış durumda olan bir ekosistem. Gelişimini sürdüren oyun ekosisteminde Gamer Arena, dijitalleşmenin de getirdiği avantaj ile her yaştan insanı buluşturuyor, oyunları ve oyuncuları birleştiriyor.
                    ICRYPEX, geleceği sana getirmeye,  “Metaverse”i seninle buluşturmaya devam ediyor.
                    Ayrıca, video oyunlarının durdurulamaz yükselişi, tam da Bitcoin grafiği gibi görünüyor, değil mi? :&#41;
                    </p>
                </div>
                <div className="chart">
                    <Image src={chart} alt="/"  />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Section7