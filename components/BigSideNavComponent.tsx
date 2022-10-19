import styles from '../styles/SideNav.module.css'
import Link from "next/link";

import {useRouter} from "next/router";

type SideNavProps = {
    paths : string[],
    labels : string[]
}

function BigSideNavComponent({paths, labels} : SideNavProps){

    const router = useRouter()
    return(
            <nav className={styles.sideNav} data-aos={'fade-right'} data-aos-once={'true'}>
                {paths.map((el, i) => (
                    <Link href={el}  key={`link-${i}`}>
                        <a className={router.pathname == el ? styles.chosenPage : ""}>{labels[i]}</a>
                    </Link>
                ))}


            </nav>
    )
}

export default BigSideNavComponent