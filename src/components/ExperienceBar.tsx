import Styles from '../styles/component/ExperienceBar.module.css'

export  function ExperienceBar(){
    return (
        <header className={Styles.experienceBar}>
            <span>0 px</span>
            <div> 
                <div style={{width:'50%'}} />
                <span className={Styles.currentExperience} style={{left:'50%'}} >300xp</span>
            </div>
            <span>600 xp</span>
        </header>
    )
}