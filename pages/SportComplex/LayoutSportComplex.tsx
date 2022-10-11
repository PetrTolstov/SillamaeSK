import Layout from "../../components/Layout";
import BigSideNavComponent from "../../components/BigSideNavComponent";
import React from "react";
import styles from '../../styles/LayoutsForSidePages.module.css'

type LayoutSportComplexProps = {
    children : React.ReactNode
}

const LayoutSportComplex = ({children} : LayoutSportComplexProps) => {
    const labels = ['Arengukava',  'Kodukord', 'Galerii']//
    const paths = ['/SportComplex', '/SportComplex/Regulations' ,'/SportComplex/Gallery']//
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

export default LayoutSportComplex
