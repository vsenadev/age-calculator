import styles from './input.module.sass';

export default function Input(){
    return (
        <div className={styles.container}>
            <div className={styles.container__box}>
                <span className={styles.container__box_label}>DAY</span>
                <input
                    type='text'
                    placeholder='DD'
                    className={styles.container__box_input}
                />
            </div>
            <div className={styles.container__box}>
                <span className={styles.container__box_label}>MONTH</span>
                <input
                    type='text'
                    placeholder='MM'
                    className={styles.container__box_input}
                />
            </div>
            <div className={styles.container__box}>
                <span className={styles.container__box_label}>YEAR</span>
                <input
                    type='text'
                    placeholder='YYYY'
                    className={styles.container__box_input}
                />
            </div>
        </div>
    )
}