import styles from "../styles/HeaderComponent.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import LanguageStore from "../Stores/LanguageStore";
import { observer } from "mobx-react-lite";
import { action } from "mobx";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

function HeaderComponent() {
	const [navStyles, setNavStyles] = useState([styles.mainNav]); //, styles.hiddenMainNav
	const [langStyle, setLangStyles] = useState([styles.changeLanguage]); //, styles.hiddenLang
	const [contentBut, setContentBut] = useState("╳");
	const [isEstLanguage, setIsEstLanguage] = useState(LanguageStore.currentLanguage.isEst);

	function openNav() {
		switch (navStyles.length) {
			case 1:
				setNavStyles([styles.mainNav, styles.hiddenMainNav]);
				setContentBut("☰");
				break;
			case 2:
				setNavStyles([styles.mainNav]);
				setContentBut("╳");
				break;
		}

		switch (langStyle.length) {
			case 1:
				setLangStyles([styles.changeLanguage, styles.hiddenLang]);
				break;
			case 2:
				setLangStyles([styles.changeLanguage]);
				break;
		}
	}

	const changeLang = () => {
		LanguageStore.switchLanguage();
		setIsEstLanguage(LanguageStore.currentLanguage.isEst);
	};
	/*
    const [isEst, setLang] = useState(true);
    const handleLanguageChange = () => {
        if (isEst) {
            setLang(false);
        } else {
            setLang(true)
        }
    }
    <div onClick={handleLanguageChange} className={styles.lang}>
        {isEst ? "RU" : "EE"}
    </div>
    </div>

     */

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
		<header>
			<div className={styles.aboveNav}>
				<div className={styles.logoInformation}>
					<Link href={`/`}>
						<a className={styles.logo} />
					</Link>
					<Link href={`/`}>
						<h1 className={styles.logoName}>SILLAMÄE SPORDIKOMPLEKS KALEV</h1>
					</Link>

				</div>
				<button className={styles.openbtn} onClick={openNav}>
					{contentBut}
				</button>
				<a className={langStyle.join(" ")} onClick={changeLang}>
					{isEstLanguage ? "RU" : "ET"}
				</a>
			</div>
			<nav className={navStyles.join(" ")}>
				<Link href={`/`}>
					<a className={router.pathname == "/" ? styles.chosenPage : ""}>{lang.homePageTab}</a>
				</Link>
				<Link href={`/SportComplex`}>
					<a className={router.pathname.includes("/SportComplex") ? styles.chosenPage : ""}>
						{lang.fromSportComplexPageTab}
					</a>
				</Link>
				<Link href={`/SportOpportunities`}>
					<a className={router.pathname.includes("/SportOpportunities") ? styles.chosenPage : ""}>
						{lang.sportOpportunitiesPageTab}
					</a>
				</Link>
				<Link href={`/Kalender`}>
					<a className={router.pathname == "/Kalender" ? styles.chosenPage : ""}>{lang.calendarPageTab}</a>
				</Link>
				<Link href={`/PriceList`}>
					<a className={router.pathname == "/PriceList" ? styles.chosenPage : ""}>{lang.priceListPageTab}</a>
				</Link>
				<Link href={`/Hostel`}>
					<a className={router.pathname == "/Hostel" ? styles.chosenPage : ""}>{lang.hostelPageTab}</a>
				</Link>
				<Link href={`/Contact`}>
					<a className={router.pathname == "/Contact" ? styles.chosenPage : ""}>{lang.contactPageTab}</a>
				</Link>
			</nav>
		</header>
	);
}

// for language store support
export default observer(HeaderComponent);
