import Styles from '../styles/component/Profile.module.css'

export function Profile(){
    return(
        <div className={Styles.profileContainer}>
            <img src="https://github.com/wwinner9.png" alt="avatar" />
            <div>
                <strong>Fernando Wanda</strong>
                <p>
                    <img src="icon/gps.png" alt="levelUp" />
                    Leve 1
                </p>
            </div>
        </div>
    )
}