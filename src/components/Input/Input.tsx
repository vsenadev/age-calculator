import styles from './input.module.sass';
import {useContext} from "react";
import {GlobalContext} from "../../store/GlobalState";

export default function Input(){
    const { day, month, year, setDay, setMonth, setYear, wrongInputs }: any = useContext(GlobalContext);

    return (
        <div className={styles.container}>
            <div className={styles.container__box}>
                <span
                    className={styles.container__box_label}
                    style={(wrongInputs.day.empty || wrongInputs.day.invalid || wrongInputs.day.whole) ? { color: 'hsl(0, 100%, 67%)' } : {}}
                >DAY
                </span>
                <input
                    type='number'
                    placeholder='DD'
                    className={styles.container__box_input}
                    style={(wrongInputs.day.empty || wrongInputs.day.invalid || wrongInputs.day.whole) ? { borderColor: 'hsl(0, 100%, 67%)' } : {}}
                    value={day}
                    onChange={(event) => setDay(event.target.value)}
                />
                {
                    wrongInputs.day.empty ?
                        <span className={styles.container__box_message}>This field is required</span>
                        : wrongInputs.day.invalid || wrongInputs.day.whole ?
                            <span className={styles.container__box_message}>Must be a valid day</span>
                                : ''
                }
            </div>
            <div className={styles.container__box}>
                <span
                    className={styles.container__box_label}
                    style={(wrongInputs.month.empty || wrongInputs.month.invalid || wrongInputs.day.whole) ? { color: 'hsl(0, 100%, 67%)' } : {}}
                >MONTH</span>
                <input
                    type='number'
                    placeholder='MM'
                    className={styles.container__box_input}
                    style={(wrongInputs.month.empty || wrongInputs.month.invalid || wrongInputs.day.whole) ? { borderColor: 'hsl(0, 100%, 67%)' } : {}}
                    value={month}
                    onChange={(event) => setMonth(event.target.value)}
                />
                {
                    wrongInputs.month.empty ?
                        <span className={styles.container__box_message}>This field is required</span>
                        : wrongInputs.month.invalid ?
                            <span className={styles.container__box_message}>Must be a valid day</span>
                            : ''
                }
            </div>
            <div className={styles.container__box}>
                <span
                    className={styles.container__box_label}
                    style={(wrongInputs.year.empty || wrongInputs.year.invalid || wrongInputs.day.whole) ? { color: 'hsl(0, 100%, 67%)' } : {}}
                >YEAR</span>
                <input
                    type='number'
                    placeholder='YYYY'
                    className={styles.container__box_input}
                    style={(wrongInputs.year.empty || wrongInputs.year.invalid || wrongInputs.day.whole) ? { borderColor: 'hsl(0, 100%, 67%)' } : {}}
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                />
                {
                    wrongInputs.year.empty ?
                        <span className={styles.container__box_message}>This field is required</span>
                        : wrongInputs.year.invalid ?
                            <span className={styles.container__box_message}>Must be a valid day</span>
                            : ''
                }
            </div>
        </div>
    )
}