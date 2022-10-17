import Layout from "../../components/Layout";
import BigSideNavComponent from "../../components/BigSideNavComponent";
import React from "react";
import styles from '../../styles/LayoutsForSidePages.module.css'
import { observer } from "mobx-react-lite";
import LanguageStoreV2 from "../../Stores/LanguageStoreV2";

type LayoutSportComplexOpportunitiesProps = {
    children : React.ReactNode
}

const LayoutSportComplexOpportunities = ({children} : LayoutSportComplexOpportunitiesProps) => {

    const labels = {
        EST: ['Ujula', 'Staadion', 'Kunstmurustaadion', 'Suur saal', 'Väike saal', 'Fitnessi saal', 'Jõusaal', 'Maleruum', 'Kergejõustikumaneež'], 
        ENG: ['Swimming pool', 'Stadium', 'Turf', 'Big hall', 'Small hall', 'Fitness hall', 'Gym', 'Chess room', 'Athletics'], 
        RUS: ['Бассейн', 'Стадион', 'Стадион с искусственным покрытием', 'Большой зал', 'Малый залl', 'Фитнес зал', 'Тренажерный зал', 'Шахматная комната', 'Легкоатлетический манеж'], 
    }
    const paths = ['/SportOpportunities', '/SportOpportunities/Staadion', '/SportOpportunities/Kunstmurustaadion', '/SportOpportunities/SuurSaal', '/SportOpportunities/VaikeSaal', '/SportOpportunities/FitnessiSaal', '/SportOpportunities/Jousaal', '/SportOpportunities/Maleruum', '/SportOpportunities/Kergejoustikumaneez']
    return (
        <Layout>
            <main className={styles.main}>
                <BigSideNavComponent labels={labels[LanguageStoreV2.currentLanguage]} paths={paths}/>
                <article className={styles.article} data-aos={'fade-left'} data-aos-once={'true'}>
                {children}
                </article>
            </main>
        </Layout>
)
}

export default observer(LayoutSportComplexOpportunities)
