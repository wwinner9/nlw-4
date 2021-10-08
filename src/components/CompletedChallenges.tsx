import styles from '../styles/component/CompletedChalenges.module.css'

export function CompletedChalenges(){
    return(
        <div className={styles.completedChalenges}>
            <span>Desafios Completos</span>
            <span>4</span>
        </div>
    );
}