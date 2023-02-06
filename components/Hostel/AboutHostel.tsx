import styles from "./AboutHostel.module.css";
import {
    TextContent,
    useGetMainDescriptionQuery,
} from "../../graphqlGenerated/graphql";
import { observer } from "mobx-react-lite";
import { getTextContent } from "../../Helpers/TextContentService";
import CarouselComponent from "../MainPage/CarouselComponent";
import axios from "axios";
import { useState, useEffect } from "react";
import { LINK } from "../../config/constants";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


function AboutHostel() {
    const { data, loading, error } = useGetMainDescriptionQuery({
        onError(error) {
            console.log(error);
        },
        onCompleted(data) {
            // console.log(data);
        },
    });

    const [imgFile, setImgFile] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await axios.get(LINK + "/getPhoto", {
                headers: {
                    optional: "Hostel",
                },
            });
            // console.log(res.data)
            let list = res.data.map((el: any) => {
                return `${LINK}/public/images/Hostel/${el}`;
            });

            setImgFile(list);
        })();
    }, []);

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

    return (
        <article
            className={styles.generalInformation}
            data-aos="fade-right"
            data-aos-once={"true"}
        >
            <div className={styles.mainText}>
                <h2 className={styles.h2}>Hostel</h2>
                {!loading ? (
                    <p>
                        {getTextContent(
                            data?.GetMainDescription?.text as TextContent
                        )}
                    </p>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div className={styles.imageBlock}>
                {imgFile ? <Carousel
                    autoPlay
					width={"100%"}
					showThumbs={false}
					showIndicators={false}
					showStatus={false}
					className={styles.Carousel}
					renderArrowNext={ArrowNext}
					renderArrowPrev={ArrowPrev}>
					{imgFile?.map((el, index) => (
						<div key={index} className={styles.CarouselItem} style={{ width: "100%", backgroundImage: `url(${el})`, height: "100%"}}></div>
					))}
				</Carousel>
                : <></> }
                
                <div className={styles.contactInfo}>
                    {!loading ? (
                        <>
                            <span className={styles.contactText}>
                                {getTextContent(
                                    data?.GetMainDescription?.contacts
                                        ?.title as TextContent
                                )}
                            </span>
                            <span>
                                {getTextContent(
                                    data?.GetMainDescription?.contacts
                                        ?.body as TextContent
                                )}
                            </span>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </article>
    );
}

export default observer(AboutHostel);
