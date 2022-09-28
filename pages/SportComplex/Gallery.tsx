import type { NextPage } from 'next'
import LayoutSportComplex from "./LayoutSportComplex";
import styles from "../../styles/LayoutSportComplex.module.css";

const Gallery: NextPage = () => {
    return (
        <LayoutSportComplex>
            <article className={styles.article}>
                <h3>2020 - 2021</h3>
                <div>

                </div>
            </article>
        </LayoutSportComplex>
    )
}

export default Gallery