import Image from "next/image"

import img from '../public/assets/img/Section-1.png'

const Section1 = () => {
  return (
    <section className="section1-carousel">
        <div className="carouselwrap">
            <div className="item">
                <div className="item-img">
                    <Image src={img} alt="/" />
                </div>
            </div>
        </div>   
    </section>
  )
}

export default Section1