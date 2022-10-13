import { makeAutoObservable } from "mobx";

export enum language {
	EST = "EST",
	ENG = "ENG",
	RUS = "RUS",
}

class TranslatableElement { 
    constructor(EST: string, RUS: string, ENG: string) { 
        this.EST = EST
        this.RUS = RUS
        this.ENG = ENG
    }
    EST
    RUS
    ENG
    getTranslation(currentLanguage: language) { 
        return currentLanguage == language.EST ? this.EST : currentLanguage == language.RUS ? this.RUS : this.ENG
    }
}

class LanguageStore {
	constructor() {
        const self = this
		makeAutoObservable(this);
	}
	switchToLanguage(langToSwitch: language) {
		this.currentLanguage = langToSwitch;
	}
	currentLanguage: language = language.EST;
    getCurrentLanguage(): language { 
        return this.currentLanguage
    }
 	header = {
		title: {
			EST: "SILLAMÄE SPORDIKOMPLEKS KALEV",
			ENG: "SILLAMÄE SPORDIKOMPLEKS KALEV",
			RUS: "SILLAMÄE SPORDIKOMPLEKS KALEV",
            getTranslation(currentLanguage: language) { 
                return currentLanguage == language.EST ? this.EST : currentLanguage == language.RUS ? this.RUS : this.ENG
            }
		},
		tabs: {
			homePageTab: new TranslatableElement("AVALEHT", "ГЛАВНАЯ", "HOME"),
			FromSportComplexPageTab: new TranslatableElement("SPORDIKOMPLEKSIST", "СПОРТКОМПЛЕКС", "SPORTCOMPLEX"),
			SportOpportunitiesPageTab: new TranslatableElement("SPORTIMISVÕIMALUSED", "СПОРТ-СООРУЖЕНИЯ", "SPORT FACILITIES"),
			CalendarPageTab: new TranslatableElement("KALENDER", "КАЛЕНДАРЬ", "CALENDAR"),
			PriceListPageTab: new TranslatableElement("HINNAKIRI", "РАСЦЕНКИ", "PRICELIST"),
			HostelPageTab: new TranslatableElement("HOSTEL", "ХОСТЕЛ", "HOSTEL"),
			ContactPageTab: new TranslatableElement("KONTAKT", "КОНТАКТ", "CONTACT"),
		},
	};

	footer = {
		ContactUs: { EST: "Võta ühendust", RUS: "Связаться с нами", ENG: "Contact us" },
		SportComplex: { EST: "Spordikompleks Kalev", RUS: "Спортивный комплекс Калев", ENG: "Sports complex" },
		VisitUs: { EST: "Külasta meid", RUS: "Посетите нас", ENG: "Visit us" },
		FollowOnSocialMedia: {
			EST: "Jälgi meid sotsiaalmeedias",
			RUS: "Следите за нами в социальный сетях",
			ENG: "Follow us on social media",
		},
	};

	mainPage = {
		latestNews: {
            title: new TranslatableElement("VIIMASED UUDISED", "ПОЛЕДНИЕ НОВОСТИ", "LATEST NEWS"),
            // button: new TranslatableElement("Vaata Rohkem", "Пока")
        } 
	};
}

export default new LanguageStore();
