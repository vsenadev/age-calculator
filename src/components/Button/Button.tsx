import styles from './Button.module.sass';
import { ReactComponent as ArrowIcon } from '../../assets/images/icon-arrow.svg';

export default function Button(){
    return (
        <div className={styles.container}>
            <hr className={styles.container__line}/>
            <div className={styles.container__button}>
                <button>{<ArrowIcon/>}</button>
            </div>
        </div>
    )
}