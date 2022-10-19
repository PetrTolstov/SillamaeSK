import styles from "../../styles/ImageWithSchedule.module.css";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LINK } from "../../config/constants";
import { useGetTimeTableQuery } from "../../graphqlGenerated/graphql";
import { observer } from "mobx-react-lite";
import languageStore from "../../Stores/LanguageStore";
import { any } from "prop-types";
import LanguageStoreV2 from "../../Stores/LanguageStoreV2";

function ImageWithScheduleComponent({ isMain = false }) {
	const { data, loading, error } = useGetTimeTableQuery();
	const page = "Karusel";
	const [imgFile, setImgFile] = useState("");

	useEffect(() => {
		(async () => {
			const res = await axios.get(LINK + "/getPhoto", {
				headers: {
					optional: page,
				},
			});
			// console.log(res.data)
			setImgFile(`${LINK}/public/images/${page}/${res.data[0]}`);
		})();
	}, []);

	return (
		<article
			className={styles.ImageWithSchedule}
			style={{ backgroundImage: `url(${imgFile})` }}
			data-aos='zoom-in-right'
			data-aos-once={"true"}>
			{/*<img src={imgFile} className={isMain ? styles.backGroundImg : styles.altBackGroundImg}/>*/}
			<div className={isMain ? styles.schedule : styles.hidden}>
				{loading ? (
					<p>Loading...</p>
				) : (
					<>
						<div>
							<p>
								{
									data?.GetTimeTable?.title![
										LanguageStoreV2.currentLanguage == "ENG"
											? "EST"
											: LanguageStoreV2.currentLanguage
									]
								}
							</p>
						</div>
						<div className={styles.divSchedule}>
							<div>
								<p>
									{
										data?.GetTimeTable?.SportComplex?.title![
											LanguageStoreV2.currentLanguage == "ENG"
												? "EST"
												: LanguageStoreV2.currentLanguage
										]
									}
								</p>
								<p>
									{
										data?.GetTimeTable?.SportComplex?.minTitle1![
											LanguageStoreV2.currentLanguage == "ENG"
												? "EST"
												: LanguageStoreV2.currentLanguage
										]
									}
									: {data?.GetTimeTable?.SportComplex?.timeTable1}
								</p>
								<p>
									{
										data?.GetTimeTable?.SportComplex?.minTitle2![
											LanguageStoreV2.currentLanguage == "ENG"
												? "EST"
												: LanguageStoreV2.currentLanguage
										]
									}
									: {data?.GetTimeTable?.SportComplex?.timeTable2}
								</p>
							</div>
							<div>
								<p>
									{
										data?.GetTimeTable?.SwimmingPool?.title![
											LanguageStoreV2.currentLanguage == "ENG"
												? "EST"
												: LanguageStoreV2.currentLanguage
										]
									}
								</p>
								<p>
									{
										data?.GetTimeTable?.SwimmingPool?.minTitle1![
											LanguageStoreV2.currentLanguage == "ENG"
												? "EST"
												: LanguageStoreV2.currentLanguage
										]
									}
									: {data?.GetTimeTable?.SwimmingPool?.timeTable1}
								</p>
								<p>
									{
										data?.GetTimeTable?.SwimmingPool?.minTitle2![
											LanguageStoreV2.currentLanguage == "ENG"
												? "EST"
												: LanguageStoreV2.currentLanguage
										]
									}
									: {data?.GetTimeTable?.SwimmingPool?.timeTable2}
								</p>
							</div>
						</div>
					</>
				)}
			</div>

			<div className={isMain ? styles.scheduleButtons : styles.AltScheduleButtons}>
				<button className={styles.left}>◀</button>
				<button className={styles.right}>▶</button>
			</div>
		</article>
	);
}

export default observer(ImageWithScheduleComponent);
