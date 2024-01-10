import styles from './Home.module.sass';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Calculator from "../../components/Calculator/Calculator";

export default function Home(){
    return(
        <section className={styles.container}>
            <div className={styles.container__box}>
                <Input/>
                <Button/>
                <Calculator/>
            </div>
        </section>
    )
}