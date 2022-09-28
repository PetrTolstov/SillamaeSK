import type { NextPage } from 'next'
import LayoutSportComplex from "./LayoutSportComplex";
import {inspect} from "util";
import styles from '../../styles/LayoutSportComplex.module.css'

const Regulations: NextPage = () => {
    return (
        <LayoutSportComplex>
            <article className={styles.article}>
                <h2>Kodukord</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed id cras vulputate nunc eu. Tristique sollicitudin faucibus purus viverra cum. Sed etiam mauris, in sollicitudin metus orci, sed amet. Integer fringilla a enim morbi cras.
                    Vivamus commodo cursus viverra lectus et. Feugiat urna condimentum elit nec aliquet pharetra porttitor. Nulla volutpat pellentesque mauris volutpat morbi. Enim pharetra enim quis at aliquet pharetra eros. Porttitor sed morbi tortor aliquam. A arcu.</p>
            </article>
        </LayoutSportComplex>
    )
}

export default Regulations