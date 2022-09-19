import styles from '../../styles/SideNavComponent.module.css'

function SideNavComponent(){
    return(
        <nav className={styles.sideNav}>
            <a>Kunstmurustaadion</a>
            <a>Ujula</a>
            <a>Kergejõustikumaneež</a>
            <a>Staadion</a>

            <a>Fitnessi saal</a>
            <a>Suur saal</a>
            <a>Väike saal</a>
            <a>Jõusaal</a>
            <a>Maleruum</a>
        </nav>
    )
}

export default SideNavComponent