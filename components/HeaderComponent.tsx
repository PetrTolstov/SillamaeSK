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
	const [navStyles, setNavStyles] = useState([styles.mainNav, styles.hiddenMainNav]); //, styles.hiddenMainNav
	const [langStyle, setLangStyles] = useState([styles.changeLanguage, styles.hiddenLang]); //, styles.hiddenLang
	const [contentBut, setContentBut] = useState(threeScticks);
	const [isEstLanguage, setIsEstLanguage] = useState(LanguageStore.currentLanguage.isEst);

	const labelsSportComplex = {
		RUS: ['План развития',  'Распорядок', 'Галерея'],
		EST: ['Arengukava',  'Kodukord', 'Galerii'],
		ENG: ['Development plan',  'Internal rules', 'Gallery']
	}

	const labelsSportOpp = {
		EST: ['Ujula', 'Staadion', 'Kunstmurustaadion', 'Suur saal', 'Väike saal', 'Fitnessi saal', 'Jõusaal', 'Maleruum', 'Kergejõustikumaneež'],
		ENG: ['Swimming pool', 'Stadium', 'Turf', 'Big hall', 'Small hall', 'Fitness hall', 'Gym', 'Chess room', 'Athletics'],
		RUS: ['Бассейн', 'Стадион', 'Стадион с искусственным покрытием', 'Большой зал', 'Малый залl', 'Фитнес зал', 'Тренажерный зал', 'Шахматная комната', 'Легкоатлетический манеж'],
	}

	function openNav() {
		switch (navStyles.length) {
			case 1:
				setNavStyles([styles.mainNav, styles.hiddenMainNav]);
				setContentBut(threeScticks);
				setLangStyles([styles.changeLanguage, styles.hiddenLang])
				break;
			case 2:
				setNavStyles([styles.mainNav]);
				setLangStyles([styles.changeLanguage])
				setContentBut(cross);
				break;
		}

	}

	const changeLang = () => {
        if (isEstLanguage) { 
            LanguageStoreV2.switchToLanguage(language.ENG);
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
					<a className={langStyle.join(" ")} onClick={changeLang}>
						{isEstLanguage ? "EN" : "ET"}
					</a>
					<a className={styles.optionalLang} onClick={() => { LanguageStoreV2.switchToLanguage(language.RUS)}}>
						RU
					</a>
					<button className={styles.openbtn} onClick={openNav}>
						<Image src={contentBut} alt={'☰'} width={'18px'} height={'18px'}/>
					</button>
				</div>

			</div>
			<nav className={navStyles.join(" ")}>
				<Link href={`/`}>
					<a className={router.pathname == "/" ? styles.chosenPage : ""}>{LanguageStoreV2.header.tabs.homePageTab.getTranslation(LanguageStoreV2.currentLanguage)}</a>
				</Link>
				<div className={styles.SportComplexLink}>
				<Link href={`/SportComplex/Regulations`}>
					<a className={router.pathname.includes("/SportComplex") ? styles.chosenPage : ""}>
						{LanguageStoreV2.header.tabs.FromSportComplexPageTab.getTranslation(LanguageStoreV2.currentLanguage)}
					</a>
				</Link>
				</div>
				<div className={styles.optionalSportComplexLinks}>
					<Link href={`/SportComplex/`}>
						<a>{labelsSportComplex[LanguageStoreV2.currentLanguage][0]}</a>
					</Link>
					<Link href={`/SportComplex/Regulations`}>
						<a>{labelsSportComplex[LanguageStoreV2.currentLanguage][1]}</a>
					</Link>
					<Link href={`/SportComplex/Gallery`}>
						<a>{labelsSportComplex[LanguageStoreV2.currentLanguage][2]}</a>
					</Link>
				</div>

				<div className={styles.SportOpportunitiesLink}>
				<Link href={`/SportOpportunities`}>
					<a className={router.pathname.includes("/SportOpportunities") ? styles.chosenPage : ""}>
						{LanguageStoreV2.header.tabs.SportOpportunitiesPageTab.getTranslation(LanguageStoreV2.currentLanguage)}
					</a>
				</Link>
				</div>
				<div className={styles.optionalSportOpportunitiesLinks}>
					<Link href={`/SportOpportunities`}>
						<a>{labelsSportOpp[LanguageStoreV2.currentLanguage][0]}</a>
					</Link>
					<Link href={`/SportOpportunities/Staadion`}>
						<a>{labelsSportOpp[LanguageStoreV2.currentLanguage][1]}</a>
					</Link>
					<Link href={`/SportOpportunities/Kunstmurustaadion`}>
						<a>{labelsSportOpp[LanguageStoreV2.currentLanguage][2]}</a>
					</Link>
					<Link href={`/SportOpportunities/SuurSaal`}>
						<a>{labelsSportOpp[LanguageStoreV2.currentLanguage][3]}</a>
					</Link>
					<Link href={`/SportOpportunities/VaikeSaal`}>
						<a>{labelsSportOpp[LanguageStoreV2.currentLanguage][4]}</a>
					</Link>
					<Link href={`/SportOpportunities/FitnessiSaal`}>
						<a>{labelsSportOpp[LanguageStoreV2.currentLanguage][5]}</a>
					</Link>
					<Link href={`/SportOpportunities/Jousaal`}>
						<a>{labelsSportOpp[LanguageStoreV2.currentLanguage][6]}</a>
					</Link>
					<Link href={`/SportOpportunities/Maleruum`}>
						<a>{labelsSportOpp[LanguageStoreV2.currentLanguage][7]}</a>
					</Link>
					<Link href={`/SportOpportunities/Kergejoustikumaneez`}>
						<a>{labelsSportOpp[LanguageStoreV2.currentLanguage][8]}</a>
					</Link>
				</div>
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
