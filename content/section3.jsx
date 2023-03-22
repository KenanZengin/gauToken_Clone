import { useState,useEffect } from "react";

import { Container } from "react-bootstrap"

const Section3 = () => {

    const duration = 9 * 24 * 60 * 60 * 1000;
    const [time,setTime] = useState(duration)

    useEffect(()=>{
        setTimeout(()=>{
            setTime(time-1000)
        },1000)
    },[time])

    const getFormattedTime  = (time) => {
        let total_seconds = parseInt(Math.floor(time/1000))
        let total_minutes = parseInt(Math.floor(total_seconds/60))
        let total_hours = parseInt(Math.floor(total_minutes/60))
        let days = parseInt(Math.floor(total_hours/24))

        let seconds = parseInt(total_seconds % 60)
        let minutes = parseInt(total_minutes % 60)
        let hours   = parseInt(total_hours   % 24)
        
        if(days == 0 && hours == 0 && minutes == 0 && seconds == 0){
            return(
                <h3>Ön Satış Süresi Doldu</h3>
            )
        }

        return(
            <>
                <div className="time">
                    <h3 className="days">
                        {days}<p>Gün</p>
                    </h3>
                    <span>:</span>
                    <h3 className="days">
                        {hours}<p>Saat</p>
                    </h3>
                    <span>:</span>
                    <h3 className="days">
                        {minutes}<p>Dakika</p>
                    </h3>
                    <span>:</span>
                    <h3 className="days">
                        {seconds}<p>Saniye</p>
                    </h3>
                </div>  
            </>
        )
    }

  return (
    <div className="section3">
        <Container>
            <div className="section3-content">
                <h3>22 KASIM 2021 - 00.00</h3>
                <p>GAU Token Ön Satışında Yerini Al</p>
                {getFormattedTime(time)}
            </div>
        </Container>
    </div>
  )
}

export default Section3