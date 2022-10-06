import type { NextPage } from 'next'
import LayoutSportComplex from "./LayoutSportComplex";
import Layout from "../../components/Layout";
import AppIsBeingBuilt from "../../components/Temporary/AppIsBeingBuilt";
import {useEffect, useState} from "react";
import axios from "axios";
import {LINK} from "../../config/constants";
import languageStore from "../../Stores/LanguageStore";


const SportComplex: NextPage = () => {
    const page = 'Arengukava'
    const [imgFile, setImgFile] = useState('');

    useEffect(() => {
        (async () => {
            const res = await axios.get(LINK + "/getPhoto", {
                headers: {
                    'optional': page
                }
            });
            console.log(res.data)
            setImgFile(`${LINK}/public/images/${page}/${res.data[0]}`)
        })()
    }, [])

    return (
        <Layout>
            <AppIsBeingBuilt isEst={languageStore.currentLanguage.isEst}/>
        </Layout>
    )
}

export default SportComplex
/*
<LayoutSportComplex>
            <>
                <img src={imgFile} className={styles.titlePhoto}/>
                <h2>Arengukava</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed id cras vulputate nunc eu. Tristique sollicitudin faucibus purus viverra cum. Sed etiam mauris, in sollicitudin metus orci, sed amet. Integer fringilla a enim morbi cras.
                    Vivamus commodo cursus viverra lectus et. Feugiat urna condimentum elit nec aliquet pharetra porttitor. Nulla volutpat pellentesque mauris volutpat morbi. Enim pharetra enim quis at aliquet pharetra eros. Porttitor sed morbi tortor aliquam. A arcu.</p>
            </>
        </LayoutSportComplex>
 */