import styles from '../../styles/SideNavComponent.module.css'
import Link from "next/link";

function SideNavComponent(){
    return(
        <nav className={styles.sideNav}>
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











        </nav>
    )
}

export default SideNavComponent