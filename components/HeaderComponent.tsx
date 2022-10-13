import styles from "../styles/HeaderComponent.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import LanguageStore from "../Stores/LanguageStore";
import { observer } from "mobx-react-lite";
import cross from '../public/cross.svg'
import threeScticks from  '../public/threeSticks.svg'
import Image from "next/image";
import LanguageStoreV2, { language } from "../Stores/LanguageStoreV2";

function HeaderComponent() {
	const [navStyles, setNavStyles] = useState([styles.mainNav]); //, styles.hiddenMainNav
	const [langStyle, setLangStyles] = useState([styles.changeLanguage]); //, styles.hiddenLang
	const [contentBut, setContentBut] = useState(cross);
	const [isEstLanguage, setIsEstLanguage] = useState(LanguageStore.currentLanguage.isEst);

	function openNav() {
		switch (navStyles.length) {
			case 1:
				setNavStyles([styles.mainNav, styles.hiddenMainNav]);
				setContentBut(threeScticks);
				break;
			case 2:
				setNavStyles([styles.mainNav]);
				setContentBut(cross);
				break;
		}

	}

	const changeLang = () => {
        if (isEstLanguage) { 
            LanguageStoreV2.switchToLanguage(language.RUS);
        } else { 
            LanguageStoreV2.switchToLanguage(language.EST)
        }
		LanguageStore.switchLanguage();
		setIsEstLanguage(LanguageStore.currentLanguage.isEst);
	};

	// Languages
	const lang = {
		headerTitle: isEstLanguage ? LanguageStore.header.title.EST : LanguageStore.header.title.RUS,
		homePageTab: isEstLanguage
			? LanguageStore.header.tabs.homePageTab.EST
			: LanguageStore.header.tabs.homePageTab.RUS,
		fromSportComplexPageTab: isEstLanguage
			? LanguageStore.header.tabs.FromSportComplexPageTab.EST
			: LanguageStore.header.tabs.FromSportComplexPageTab.RUS,
		sportOpportunitiesPageTab: isEstLanguage
			? LanguageStore.header.tabs.SportOpportunitiesPageTab.EST
			: LanguageStore.header.tabs.SportOpportunitiesPageTab.RUS,
		calendarPageTab: isEstLanguage
			? LanguageStore.header.tabs.CalendarPageTab.EST
			: LanguageStore.header.tabs.CalendarPageTab.RUS,
		priceListPageTab: isEstLanguage
			? LanguageStore.header.tabs.PriceListPageTab.EST
			: LanguageStore.header.tabs.PriceListPageTab.RUS,
		hostelPageTab: isEstLanguage
			? LanguageStore.header.tabs.HostelPageTab.EST
			: LanguageStore.header.tabs.HostelPageTab.RUS,
		contactPageTab: isEstLanguage
			? LanguageStore.header.tabs.ContactPageTab.EST
			: LanguageStore.header.tabs.ContactPageTab.RUS,
	};

	const router = useRouter();
	const navRef = useRef(null);

	return (
		<header className={styles.header}>
			<div className={styles.aboveNav}>
				<div className={styles.logoInformation}>
					<Link href={`/`}>
						<a className={styles.logo} />
					</Link>
					<Link href={`/`}>
						<h1 className={styles.logoName}>SILLAMÄE SPORDIKOMPLEKS KALEV</h1>
					</Link>

				</div>
				<div className={styles.switchButtons}>
					<a className={styles.changeLanguage} onClick={changeLang}>
						{isEstLanguage ? "RU" : "ET"}
					</a>
					<a className={styles.optionalLang} onClick={() => { LanguageStoreV2.switchToLanguage(language.ENG)}}>
						EN
					</a>
					<button className={styles.openbtn} onClick={openNav}>
						<Image src={contentBut} alt={'☰'}/>
					</button>
				</div>

			</div>
			<nav className={navStyles.join(" ")}>
				<Link href={`/`}>
					<a className={router.pathname == "/" ? styles.chosenPage : ""}>{LanguageStoreV2.header.tabs.homePageTab.getTranslation(LanguageStoreV2.currentLanguage)}</a>
				</Link>
				<Link href={`/SportComplex/Regulations`}>
					<a className={router.pathname.includes("/SportComplex") ? styles.chosenPage : ""}>
						{LanguageStoreV2.header.tabs.FromSportComplexPageTab.getTranslation(LanguageStoreV2.currentLanguage)}
					</a>
				</Link>
				<Link href={`/SportOpportunities`}>
					<a className={router.pathname.includes("/SportOpportunities") ? styles.chosenPage : ""}>
						{LanguageStoreV2.header.tabs.SportOpportunitiesPageTab.getTranslation(LanguageStoreV2.currentLanguage)}
					</a>
				</Link>
				<Link href={`/Kalender`}>
					<a className={router.pathname == "/Kalender" ? styles.chosenPage : ""}>{LanguageStoreV2.header.tabs.CalendarPageTab.getTranslation(LanguageStoreV2.currentLanguage)}</a>
				</Link>
				<Link href={`/PriceList`}>
					<a className={router.pathname == "/PriceList" ? styles.chosenPage : ""}>{LanguageStoreV2.header.tabs.PriceListPageTab.getTranslation(LanguageStoreV2.currentLanguage)}</a>
				</Link>
				<Link href={`/Hostel`}>
					<a className={router.pathname == "/Hostel" ? styles.chosenPage : ""}>{LanguageStoreV2.header.tabs.HostelPageTab.getTranslation(LanguageStoreV2.currentLanguage)}</a>
				</Link>
				<Link href={`/Contact`}>
					<a className={router.pathname == "/Contact" ? styles.chosenPage : ""}>{LanguageStoreV2.header.tabs.ContactPageTab.getTranslation(LanguageStoreV2.currentLanguage)}</a>
				</Link>
			</nav>
		</header>
	);
}

// for language store support
export default observer(HeaderComponent);
