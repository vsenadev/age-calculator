import styles from './input.module.sass';
import {useContext} from "react";
import {GlobalContext} from "../../store/GlobalState";

export default function Input(){
    const { day, month, year, setDay, setMonth, setYear }: any = useContext(GlobalContext);

    return (
        <div className={styles.container}>
            <div className={styles.container__box}>
                <span className={styles.container__box_label}>DAY</span>
                <input
                    type='text'
                    placeholder='DD'
                    className={styles.container__box_input}
                    value={day}
                    onChange={(event) => setDay(event.target.value)}
                />
            </div>
            <div className={styles.container__box}>
                <span className={styles.container__box_label}>MONTH</span>
                <input
                    type='text'
                    placeholder='MM'
                    className={styles.container__box_input}
                    value={month}
                    onChange={(event) => setMonth(event.target.value)}
                />
            </div>
            <div className={styles.container__box}>
                <span className={styles.container__box_label}>YEAR</span>
                <input
                    type='text'
                    placeholder='YYYY'
                    className={styles.container__box_input}
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                />
            </div>
        </div>
    )
}