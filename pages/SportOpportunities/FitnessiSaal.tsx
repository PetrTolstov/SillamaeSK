import type { NextPage } from 'next'
import LayoutSportComplexOpportunities from "./LayoutSportComplexOpportunities";
import styles from "../../styles/LayoutsForSidePages.module.css";


const FitnessiSaal: NextPage = () => {
    return (
        <LayoutSportComplexOpportunities>
            <>
                <img src={'../FitnessiSaal.png'} alt={"s"} className={styles.titlePhoto}/>
                <h2>Fitnessi saal</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed id cras vulputate nunc eu. Tristique sollicitudin faucibus purus viverra cum. Sed etiam mauris, in sollicitudin metus orci, sed amet. Integer fringilla a enim morbi cras.
                    Vivamus commodo cursus viverra lectus et. Feugiat urna condimentum elit nec aliquet pharetra porttitor. Nulla volutpat pellentesque mauris volutpat morbi. Enim pharetra enim quis at aliquet pharetra eros. Porttitor sed morbi tortor aliquam. A arcu.</p>
            </>
        </LayoutSportComplexOpportunities>
    )
}

export default FitnessiSaal
