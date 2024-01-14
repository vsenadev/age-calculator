import styles from './Calculator.module.sass';
import {useContext} from "react";
import {GlobalContext} from "../../store/GlobalState";

export default function Calculator(){
    const { result }: any = useContext(GlobalContext);

    return (
        <div className={styles.container}>
            <div className={styles.container__date}>
                <span className={styles.container__date_number}>{ !result.years ? '- -' : result.years }</span>
                <span className={styles.container__date_text}>years</span>
            </div>
            <div className={styles.container__date}>
                <span className={styles.container__date_number}>{!result.month ? '- -' : result.month}</span>
                <span className={styles.container__date_text}>months</span>
            </div>
            <div className={styles.container__date}>
                <span className={styles.container__date_number}>{!result.days ? '- -' : result.days}</span>
                <span className={styles.container__date_text}>days</span>
            </div>
        </div>
    )
}