import { observer } from "mobx-react-lite";
import Image from "next/image";
import React, { useState } from "react";
// Carousel
import { Carousel, CarouselProps } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useGetTimeTableQuery } from "../../graphqlGenerated/graphql";
import LanguageStoreV2 from "../../Stores/LanguageStoreV2";
import styles from "../../styles/CarouselComponent.module.css";

const CarouselComponent = ({ showSchedule = false, imageList, roundedCorners = true }: { showSchedule?: boolean, imageList?: string[], roundedCorners?: boolean }) => {
	const { data, loading, error } = useGetTimeTableQuery();

	const ArrowNext = (clickHandler: () => void) => {
		return (
			<button className={[styles.arrowNext, styles.arrows].join(" ")} onClick={clickHandler}>
				▶
			</button>
		);
	};
	const ArrowPrev = (clickHandler: () => void) => {
		return (
			<button className={[styles.arrowPrev, styles.arrows].join(" ")} onClick={clickHandler}>
				◀
			</button>
		);
	};

	const Schedule = () => (
		<div className={showSchedule ? styles.schedule : styles.hidden}>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<div>
						<p>
							{
								data?.GetTimeTable?.title![
									LanguageStoreV2.currentLanguage == "ENG" ? "EST" : LanguageStoreV2.currentLanguage
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
	);

	return (
		<article className={[styles.parent, roundedCorners ? styles.parentBorder : ""].join(" ")}>
			<div>
				<Schedule />
				<Carousel
                    autoPlay
					width={"100%"}
					showThumbs={false}
					showIndicators={false}
					showStatus={false}
					className={styles.Carousel}
					renderArrowNext={ArrowNext}
					renderArrowPrev={ArrowPrev}>
					{imageList?.map((el, index) => (
						<div key={index} className={styles.CarouselItem} style={{ width: "100%", backgroundImage: `url(${el})`}}></div>
					))}
				</Carousel>
			</div>
		</article>
	);
};

export default observer(CarouselComponent);
