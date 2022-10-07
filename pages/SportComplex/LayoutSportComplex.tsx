import Layout from "../../components/Layout";
import BigSideNavComponent from "../../components/BigSideNavComponent";
import React from "react";
import styles from '../../styles/LayoutsForSidePages.module.css'

type LayoutSportComplexProps = {
    children : React.ReactNode
}

const LayoutSportComplex = ({children} : LayoutSportComplexProps) => {
    const labels = [ 'Kodukord', 'Galerii']//'Arengukava',
    const paths = ['/SportComplex/Regulations','/SportComplex/Gallery']//'/SportComplex'
    return (
        <Layout>
            <main className={styles.main}>
                <BigSideNavComponent labels={labels} paths={paths}/>
                <article className={styles.article}>
                {children}
                </article>
            </main>
        </Layout>
)
}

export default LayoutSportComplex
