import styles from './Button.module.sass';
import { ReactComponent as ArrowIcon } from '../../assets/images/icon-arrow.svg';
import {RefObject, useContext, useRef} from "react";
import {GlobalContext} from "../../store/GlobalState";
import validateFields, {calculateLifetime} from "../../utils/Home.utils";
import {useRipple} from "react-use-ripple";
import {IErrors} from "../../interface/IHome.interface";

export default function Button(){
    const { day, month, year, errors, setWrongInputs, setResult }: any = useContext(GlobalContext);
    const ref: RefObject<HTMLElement | any> = useRef()

    useRipple(ref, {
        animationLength: 600,
        rippleColor: 'rgba(255,255,255,0.7)',
    });

    const callResult = () => {
        const response: IErrors = validateFields(day, month, year, errors)
        setWrongInputs(response)
        let totalErrors = 0

        Object.values(response).forEach((element) => {
            if(element.empty || element.whole || element.invalid){
                totalErrors += 1
            }
        })

        if(totalErrors === 0){
            setResult(calculateLifetime(day, month, year))
        }
    }

    return (
        <div className={styles.container}>
            <hr className={styles.container__line}/>
            <div className={styles.container__button} ref={ref} onClick={() => callResult()}>
                <button>{<ArrowIcon/>}</button>
            </div>
        </div>
    )
}