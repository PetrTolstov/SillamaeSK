import Layout from "../../components/Layout";
import BigSideNavComponent from "../../components/BigSideNavComponent";
import React from "react";
import styles from '../../styles/LayoutsForSidePages.module.css'

type LayoutSportComplexOpportunitiesProps = {
    children : React.ReactNode
}

const LayoutSportComplexOpportunities = ({children} : LayoutSportComplexOpportunitiesProps) => {
    const labels = ['Ujula', 'Staadion', 'Kunstmurustaadion', 'Suur saal', 'Väike saal', 'Fitnessi saal', 'Jõusaal', 'Maleruum', 'Kergejõustikumaneež']
    const paths = ['/SportOpportunities', '/SportOpportunities/Staadion', '/SportOpportunities/Kunstmurustaadion', '/SportOpportunities/SuurSaal', '/SportOpportunities/VaikeSaal', '/SportOpportunities/FitnessiSaal', '/SportOpportunities/Jousaal', '/SportOpportunities/Maleruum', '/SportOpportunities/Kergejoustikumaneez']
    return (
        <Layout>
            <main className={styles.main}>
                <BigSideNavComponent labels={labels} paths={paths}/>
                <article className={styles.article} data-aos={'fade-left'} data-aos-once={'true'}>
                {children}
                </article>
            </main>
        </Layout>
)
}

export default LayoutSportComplexOpportunities
