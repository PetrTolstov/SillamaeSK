import styles from '../styles/SideNav.module.css'
import Link from "next/link";

import {useRouter} from "next/router";

type SideNavProps = {
    paths : string[],
    labels : string[]
}

function BigSideNavComponent({paths, labels} : SideNavProps){

    const router = useRouter()
    console.log(router.pathname)
    return(
            <nav className={styles.sideNav}>
                {paths.map((el, i) => (
                    <Link href={el}  key={`link-${i}`}>
                        <a className={router.pathname == el ? styles.chosenPage : ""}>{labels[i]}</a>
                    </Link>
                ))}


            </nav>
    )
}

export default BigSideNavComponent