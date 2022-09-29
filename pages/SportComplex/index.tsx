import type { NextPage } from 'next'
import LayoutSportComplex from "./LayoutSportComplex";
import Layout from "../../components/Layout";
import AppIsBeingBuilt from "../../components/Temporary/AppIsBeingBuilt";


const SportComplex: NextPage = () => {
    return (
        <Layout>
            <AppIsBeingBuilt isEst={true}/>
        </Layout>
    )
}

export default SportComplex
/*
<LayoutSportComplex>
            <>
                <h2>Arengukava</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed id cras vulputate nunc eu. Tristique sollicitudin faucibus purus viverra cum. Sed etiam mauris, in sollicitudin metus orci, sed amet. Integer fringilla a enim morbi cras.
                    Vivamus commodo cursus viverra lectus et. Feugiat urna condimentum elit nec aliquet pharetra porttitor. Nulla volutpat pellentesque mauris volutpat morbi. Enim pharetra enim quis at aliquet pharetra eros. Porttitor sed morbi tortor aliquam. A arcu.</p>
            </>
        </LayoutSportComplex>
 */