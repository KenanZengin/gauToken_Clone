
import Image from "next/image"
import { Container } from "react-bootstrap"

import layer from '../public/assets/img/_Layer_.png'

const Section2 = () => {

    

  return (
    <div className="section2">
       <Container>
            <div className="section2-content">
                <div className="left">
                    <div className="title">
                        <h3>Ön Satış Fırsatını Kaçırma</h3>
                        <Image src={layer} alt="/"  />
                    </div>
                </div>
                <div className="right">
                <h3>Ön Satış Fırsatını Kaçırma</h3>
                    <form>

                        <input type="text" placeholder="İsim" className="item" />
                        <input type="text" placeholder="Soyisim"  className="item" />
                        <input type="text" placeholder="Telefon Numaraso" className="item" />
                        <input type="email" placeholder="E-mail"  className="item" />
                        <input type="text" placeholder="TC Kimlik Numarası"  className="item" />
                        <input type="text" placeholder="Gün" className="date" />
                        <input type="text" placeholder="Ay" className="date" />
                        <input type="text" placeholder="Yıl" className="date" />
                        <input type="password" placeholder="Şifre"  className="item" />
                        <input type="password" placeholder="Şifre(Tekrar)"  className="item" />
                        
                        <label className="container" htmlFor="1"> <input type="checkbox"  id="1" /><span className="checkmark"></span>Ben Robot Değilim</label>
                        <label className="container" htmlFor="2"> <input  type="checkbox" id="2" /><span className="checkmark"></span>18 yaşından büyük olduğumu beyan ederim, Ön Bilgilendirme Metni ve 
                        Kullanım Sözleşmesini okudum ve onaylıyorum.</label>
                        <label className="container" htmlFor="3"> <input  type="checkbox" id="3" /><span className="checkmark"></span>Ticari reklam ve duyurulardan haber almak istiyorum.</label>

                    </form>
                </div>
            </div>
       </Container>
    </div>
  )
}

export default Section2