import styles from './Home.module.sass';
import Input from "../../components/Input/Input";

export default function Home(){
    return(
        <section className={styles.container}>
            <div className={styles.container__box}>
                <Input/>
                <div>
                <hr/>
                    <div>

                    </div>
                </div>
                <div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </section>
    )
}