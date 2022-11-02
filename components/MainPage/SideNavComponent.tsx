import styles from '../../styles/SideNavComponent.module.css'
import Link from "next/link";
import {router} from "next/client";
import LanguageStoreV2, {language} from "../../Stores/LanguageStoreV2";


type SideNavProps = {
    paths : string[],
    labels : string[]
}

function SideNavComponent({paths, labels} : SideNavProps){



    return(
        <nav className={styles.sideNav}>
            {paths.map((el, i) => (
                <Link href={el}  key={`link-${i}`}>
                    <a>{labels[i]}</a>
                </Link>
            ))}

        </nav>
    )
}

export default SideNavComponent



/*
<Link href={`/SportOpportunities/Kunstmurustaadion`}>
                <a>Kunstmurustaadion</a>
            </Link>
            <Link href={`/SportOpportunities`}>
                <a>Ujula</a>
            </Link>
            <Link href={`/SportOpportunities/Kergejoustikumaneez`}>
                <a>Kergejõustikumaneež</a>
            </Link>
            <Link href={`/SportOpportunities/Staadion`}>
                <a>Staadion</a>
            </Link>

            <Link href={`/SportOpportunities/FitnessiSaal`}>
                <a>Fitnessi saal</a>
            </Link>
            <Link href={`/SportOpportunities/SuurSaal`}>
                <a>Suur saal</a>
            </Link>
            <Link href={`/SportOpportunities/VaikeSaal`}>
                <a>Väike saal</a>
            </Link>
            <Link href={`/SportOpportunities/Jousaal`}>
                <a>Jõusaal</a>
            </Link>
            <Link href={`/SportOpportunities/Maleruum`}>
                <a>Maleruum</a>
            </Link>

 */