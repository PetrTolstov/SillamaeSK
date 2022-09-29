import type { NextPage } from 'next'
import Layout from "../components/Layout";
import AppIsBeingBuilt from "../components/Temporary/AppIsBeingBuilt";
import styles from "../styles/Contact.module.css"
import GeneralInformation from "../components/Contact/GeneralInformation";
import GoogleMapComponent from "../components/Contact/GoogleMapComponent";
import SpecificContact from "../components/Contact/SpecificContact";

const Contact: NextPage = () => {
    const data = [{
        imgUrl : 'personalPhoto.svg',
        position : "Juhataja",
        name : "Maidu Laht",
        telefon : "+372 111 11 11",
        email : "example@sillamaesk.ee"
    },
        {
            imgUrl : 'personalPhoto.svg',
            position : "Spordispetsialist/ Teenindusjuht",
            name : "Jelena Verzilova ",
            telefon : "+372 111 11 11",
            email : "example@sillamaesk.ee"
        },
        {
            imgUrl : 'personalPhoto.svg',
            position : "Majandusspetsialist",
            name : "Svetlana Denissenkova ",
            telefon : "+372 111 11 11",
            email : "example@sillamaesk.ee"
        }]

    return (
        <Layout>
            <AppIsBeingBuilt isEst={true}/>

        </Layout>
    )
}

export default Contact

/*
<main className={styles.main}>
                <div className={styles.firstContainer}>
                    <GeneralInformation/>
                    <GoogleMapComponent/>
                </div>
                <div className={styles.specificContacts}>
                    <SpecificContact data={data[0]}/>
                    <SpecificContact data={data[1]}/>
                    <SpecificContact data={data[2]}/>
                </div>
            </main>
 */