import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

import goldcoin from '../public/assets/img/TOKEN_2.png'


const Section4 = () => {
  return (
    <section className="section4-5">
        <Container>
            <div className="section4-5-content">
                <div className="info">
                    <h3>Gamer Arena Utility Token Nedir?</h3>
                    <p>
                      Gamer Arena Utility Token, Gamer Arena tarafından geliştirilmiş, dijital rekabetin yepyeni bir boyutu. Benzersiz bir “Utility Token” olan Gamer Arena Utility Token - kısaca GAU Token, Gamer Arena dijital oyun, e-spor ve rekabet platformu içerisinde yüz binlerce kullanıcı tarafından aktif <br /> olarak kullanılacak.
                     </p>
                     <p>Gamer Arena Utility Token’ı rekabetin yüksek olduğu e-spor düellolarında kullanabilir, büyük ödüllere hiç olmadığı kadar kolay erişebilirsin. Birbirinden çekişmeli oyun turnuvalarının ve bireysel maçların düzenlenebileceği, 300 binin üzerinde üyesiyle dev bir oyun platformu olan Gamer Arena’da GAU Token ile özel maçlara katılım gösterebilir, kendini  dijital arenada kanıtlayabilirsin.
                     </p>
                     <div className="buton">
                        <div>
                            <button>
                                <Link href="#">
                                    WHITEPAPER
                                </Link>
                            </button>
                        </div>
                     </div>
                </div>
                
                <div className="coinimg ">
                   <Image src={goldcoin} className="small" alt="/"   />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Section4