import { prototype } from "events";
import { action, makeAutoObservable, observable } from "mobx";
import { makeObservable } from "mobx";
import { lazy } from "react";
class LanguageStore {

    constructor() { 
        makeAutoObservable(this)
    }
	switchLanguage() {
		this.currentLanguage.isEst = !this.currentLanguage.isEst;
	}

	currentLanguage = {
		isEst: true,
	};

	header = {
		title: {
			EST: "SILLAMÄE SPORDIKOMPLEKS KALEV",
			RUS: "СИЛЛАМЯЭ СПОРТИВНЫЙ КОМПЛЕКС КАЛЕВ",
		},
		tabs: {
			homePageTab: {
				EST: "AVALEHT",
				RUS: "ГЛАВНАЯ",
			},
			FromSportComplexPageTab: {
				EST: "SPORDIKOMPLEKSIST",
				RUS: "СПОРТКОМПЛЕКС",
			},
			SportOpportunitiesPageTab: {
				EST: "SPORTIMISVÕIMALUSED",
				RUS: "СПОРТ-СООРУЖЕНИЯ",
			},
			CalendarPageTab: {
				EST: "KALENDER",
				RUS: "КАЛЕНДАРЬ",
			},
			PriceListPageTab: {
				EST: "HINNAKIRI",
				RUS: "РАСЦЕНКИ",
			},
			HostelPageTab: {
				EST: "HOSTEL",
				RUS: "ХОСТЕЛ",
			},
			ContactPageTab: {
				EST: "KONTAKT",
				RUS: "КОНТАКТ",
			},
		},
	};

	footer = {
		ContactUs: { EST: "Võta ühendust", RUS: "Связаться с нами" },
		SportComplex: { EST: "Spordikompleks Kalev", RUS: "Спортивный комплекс Калев" },
		VisitUs: { EST: "Külasta meid", RUS: "Посетите нас" },
		FollowOnSocialMedia: { EST: "Jälgi meid sotsiaalmeedias", RUS: "Следите за нами в социальный сетях" },
	};

	mainPage = {
		latestNews: this.currentLanguage.isEst ? "VIIMASED UUDISED" : "ПОЛЕДНИЕ НОВОСТИ",
	};
}

export default new LanguageStore();
