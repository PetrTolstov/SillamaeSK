import { observer } from "mobx-react-lite";
import styles from "../styles/FooterComponent.module.css";
import LanguageStore from "../Stores/LanguageStore";
import React, { useEffect, useState } from "react";
import { autorun } from "mobx";
import { useGetFooterQuery, useGetTimeTableQuery } from "../graphqlGenerated/graphql";
import languageStore from "../Stores/LanguageStore";
import LanguageStoreV2 from "../Stores/LanguageStoreV2";

function FooterComponent() {
	const { data, loading, error } = useGetTimeTableQuery();
	const { data: footerData, loading: loadinfFooter } = useGetFooterQuery();
	const lang = {
		contactUs: LanguageStore.currentLanguage.isEst
			? LanguageStore.footer.ContactUs.EST
			: LanguageStore.footer.ContactUs.RUS,
		sportComplex: LanguageStore.currentLanguage.isEst
			? LanguageStore.footer.SportComplex.EST
			: LanguageStore.footer.SportComplex.RUS,
		visitUs: LanguageStore.currentLanguage.isEst
			? LanguageStore.footer.VisitUs.EST
			: LanguageStore.footer.VisitUs.RUS,
		folowUs: LanguageStore.currentLanguage.isEst
			? LanguageStore.footer.FollowOnSocialMedia.EST
			: LanguageStore.footer.FollowOnSocialMedia.RUS,
	};
	const TimeTable = () => (
		<div className={styles.containerScheduleFooter}>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<div>
						<span>
							{languageStore.currentLanguage.isEst
								? data!.GetTimeTable?.SportComplex?.title?.EST
								: data!.GetTimeTable?.SportComplex?.title?.RUS}
						</span>
						<span>
							{languageStore.currentLanguage.isEst
								? data!.GetTimeTable?.SportComplex?.minTitle1?.EST
								: data!.GetTimeTable?.SportComplex?.minTitle1?.RUS}
							: {data!.GetTimeTable?.SportComplex?.timeTable1}
						</span>
						<span>
							{languageStore.currentLanguage.isEst
								? data!.GetTimeTable?.SportComplex?.minTitle2?.EST
								: data!.GetTimeTable?.SportComplex?.minTitle2?.RUS}
							: {data!.GetTimeTable?.SportComplex?.timeTable2}
						</span>
					</div>
					<div>
						<span>
							{languageStore.currentLanguage.isEst
								? data!.GetTimeTable?.SwimmingPool?.title?.EST
								: data!.GetTimeTable?.SwimmingPool?.title?.RUS}
						</span>
						<span>
							{languageStore.currentLanguage.isEst
								? data!.GetTimeTable?.SwimmingPool?.minTitle1?.EST
								: data!.GetTimeTable?.SwimmingPool?.minTitle1?.RUS}
							: {data!.GetTimeTable?.SwimmingPool?.timeTable1}
						</span>
						<span>
							{languageStore.currentLanguage.isEst
								? data!.GetTimeTable?.SwimmingPool?.minTitle2?.EST
								: data!.GetTimeTable?.SwimmingPool?.minTitle2?.RUS}
							: {data!.GetTimeTable?.SwimmingPool?.timeTable2}
						</span>
					</div>
				</>
			)}
		</div>
	);
	return (
		<footer className={styles.footer}>
			<div className={styles.footerInformation}>
				<div className={styles.containerInformationFooter}>
					{footerData?.GetFooter?.firstSection?.showHeader ? (
						<h3>{footerData?.GetFooter?.firstSection?.header![LanguageStoreV2.currentLanguage] ?? ""}</h3>
					) : (
						<></>
					)}
					{footerData?.GetFooter?.firstSection?.showBody ? (
						<span>{footerData?.GetFooter?.firstSection?.body![LanguageStoreV2.currentLanguage] ?? ""}</span>
					) : (
						<></>
					)}
				</div>
				<div className={styles.containerInformationFooter}>
					{footerData?.GetFooter?.secondSection?.showHeader ? (
						<h3>{footerData?.GetFooter?.secondSection?.header![LanguageStoreV2.currentLanguage] ?? ""}</h3>
					) : (
						<></>
					)}
					{footerData?.GetFooter?.secondSection?.showBody ? (
						<span>
							{footerData?.GetFooter?.secondSection?.body![LanguageStoreV2.currentLanguage] ?? ""}
						</span>
					) : (
						<></>
					)}
				</div>
				<div className={styles.containerInformationFooter}>
					{footerData?.GetFooter?.thirdSection?.showHeader ? (
						<h3>{footerData?.GetFooter?.thirdSection?.header![LanguageStoreV2.currentLanguage] ?? ""}</h3>
					) : (
						<></>
					)}
					{footerData?.GetFooter?.thirdSection?.showBody ? (
						footerData.GetFooter.showContacts ? (
							<TimeTable />
						) : (
							<span>{footerData.GetFooter.thirdSection?.body![LanguageStoreV2.currentLanguage]}</span>
						)
					) : footerData?.GetFooter?.showContacts ? (
						<TimeTable />
					) : (
						<></>
					)}
				</div>
				<a href={"https://www.facebook.com/spordikompleksKalev"} className={styles.facebookIcon}></a>
			</div>
		</footer>
	);
}

export default observer(FooterComponent);
