import { prototype } from "events";
import { action, observable } from "mobx";
import { makeObservable } from "mobx";
import { lazy } from "react";
class LanguageStore {
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
				EST: "Avaleht",
				RUS: "Главная",
			},
			FromSportComplexPageTab: {
				EST: "Spordikompleksist",
				RUS: "Из Спорткомплекса",
			},
			SportOpportunitiesPageTab: {
				EST: "Sportimisvõimalused",
				RUS: "Спорт-сооружения",
			},
			CalendarPageTab: {
				EST: "Kalender",
				RUS: "Календарь",
			},
			PriceListPageTab: {
				EST: "Hinnakiri",
				RUS: "Расценки",
			},
			HostelPageTab: {
				EST: "Hostel",
				RUS: "Хостел",
			},
			ContactPageTab: {
				EST: "Kontakt",
				RUS: "Контакт",
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

	constructor() {
		makeObservable(this, {
			header: observable,
			footer: observable,
			mainPage: observable,
			switchLanguage: action,
		});
	}
}

export default new LanguageStore();
