import Layout from "../../components/Layout";
import BigSideNavComponent from "../../components/BigSideNavComponent";
import React from "react";
import styles from '../../styles/LayoutSportComplex.module.css'

type LayoutSportComplexProps = {
    children : React.ReactNode
}

const LayoutSportComplex = ({children} : LayoutSportComplexProps) => {
    const labels = ['Arengukava', 'Kodukord', 'Galerii']
    const paths = ['/SportComplex','/SportComplex/Regulations','/SportComplex/Gallery']
    return (
        <Layout>
            <main className={styles.main}>
                <BigSideNavComponent labels={labels} paths={paths}/>
                {children}
            </main>
        </Layout>
)
}

export default LayoutSportComplex
