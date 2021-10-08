import { useState,useEffect } from 'react'
import styles from '../styles/component/Countdown.module.css'

export function Countdown(){

    //This is an typescript of timeout
    let countDownDelay : NodeJS.Timeout

    const [time,setTime] = useState(0.1*60)
    const [isActive,setIsActive]=useState(false)
    const [hasFinished, setHasFinished]= useState(false)

    const minutes= Math.floor(time/60)
    const seconds= time%60

    const [minuteLeft,minuteRight]=  String(minutes).padStart(2,'0').split('')
    const [secondLeft,secondRight]=  String(seconds).padStart(2,'0').split('')

    function startCount(){

        setIsActive(true);

    }

    function resetCountdown(){
        //Change the state of the isActive
        setIsActive(false)
        //This function stop the settimeout without 1s of delay
        clearTimeout(countDownDelay)
        //reset the timer
        setTime(0.1*60)
    }

    useEffect(()=>{

        if(isActive && time>0){
            countDownDelay= setTimeout(() => {
                setTime(time-1)
            }, 1000);
        } else if(isActive && time===0){
            setHasFinished(true)
            setIsActive(false)
        }

    },[isActive,time])
    return(
        <div>        
            <div className={styles.countdown}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
                
            </div>

            {hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownBtn}  
                >
                    Ciclo Terminado             
                </button> 

                ) : ( 
                    isActive? (
                        <button type="button" className={`${styles.countdownBtn} ${styles.countdownBtnLeave}`} 
                        onClick={resetCountdown}
                        >
                            Abandonar             
                        </button>
                    ) : (
                        <button type="button" className={styles.countdownBtn} 
                        onClick={startCount}
                        >
                            Iniciar              
                        </button>
                    )
            )}            

        </div>
    )
}