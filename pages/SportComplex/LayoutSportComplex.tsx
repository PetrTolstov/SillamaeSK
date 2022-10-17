import Layout from "../../components/Layout";
import BigSideNavComponent from "../../components/BigSideNavComponent";
import React from "react";
import styles from '../../styles/LayoutsForSidePages.module.css'
import LanguageStoreV2 from "../../Stores/LanguageStoreV2";
import { observer } from "mobx-react-lite";

type LayoutSportComplexProps = {
    children : React.ReactNode
}

const LayoutSportComplex = ({children} : LayoutSportComplexProps) => {
    const labels = {
        RUS: ['План развития',  'Распорядок', 'Галерея'], 
        EST: ['Arengukava',  'Kodukord', 'Galerii'], 
        ENG: ['Development plan',  'Internal rules', 'Gallery']
    }

    const paths = ['/SportComplex', '/SportComplex/Regulations' ,'/SportComplex/Gallery']//
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

export default observer(LayoutSportComplex)
