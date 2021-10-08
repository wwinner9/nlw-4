import styles from '../styles/component/ChallengeBox.module.css'

export function ChallengeBox(){

    const hasActiveChallenge=true;

    return(
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="" alt="body" />
                        <strong>Novo Desafio</strong>
                        <p>Levante e bla bla bla </p>                        
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.failButton}
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.sucessButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ):(
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="" alt="Level Up" />
                        Avance de level Completando desafios
                    </p>
                </div>  
            )}
            

        </div>
    );
}