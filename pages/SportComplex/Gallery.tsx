import type { NextPage } from "next";
import LayoutSportComplex from "./LayoutSportComplex";
import img from "../../public/img.png";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { LINK } from "../../config/constants";
import styles from "../../styles/galleyPhotoContainer.module.css";
import AppIsBeingBuilt from "../../components/Temporary/AppIsBeingBuilt";
import LanguageStore from "../../Stores/LanguageStore";
import { useGetPageConfigQuery } from "../../graphqlGenerated/graphql";
import {v4 as uuid} from "uuid";

// @ts-ignore
import ModalImage from "react-modal-image";


const Gallery: NextPage = () => {
    const page = "Gallery";
    const [imgFile, setImgFile] = useState([]);
    const [currentEvent, setCurrentEvent] = useState("");

    useEffect(() => {
        (async () => {
            const res = await axios.get(LINK + "/getPhoto", {
                headers: {
                    optional: page,
                },
            });

            setImgFile(res.data);
            setCurrentEvent(Object.keys(res.data[0])[0])
        })();
    }, []);

    const handleClick = (event: any) => {
        event.currentTarget.classList.add(styles.imgFix);
        document
            .getElementsByClassName(styles.closeBut)[0]
            .classList.add(styles.blockBut);
        Array.from(
            document.getElementsByClassName(
                styles.backBlack
            ) as HTMLCollectionOf<HTMLElement>
        )[0].style.display = "block";
    };

    const closePhoto = (event: any) => {
        document
            .getElementsByClassName(styles.closeBut)[0]
            .classList.remove(styles.blockBut);
        Array.from(document.getElementsByClassName(styles.imgNotFix)).forEach(
            (el) => {
                if (el.classList.length > 1) {
                    el.classList.remove(styles.imgFix);
                }
            }
        );
        Array.from(
            document.getElementsByClassName(
                styles.backBlack
            ) as HTMLCollectionOf<HTMLElement>
        )[0].style.display = "none";
    };

    const { data: configData } = useGetPageConfigQuery({
        variables: {
            pageName: "Gallery",
        },
    });

    return (
        <LayoutSportComplex>
            {configData?.GetPageConfig?.showBanner ? (
                <AppIsBeingBuilt isEst={LanguageStore.currentLanguage.isEst} />
            ) : (
                <>
                    <h2>Galerii</h2>
                    <button
                        className={styles.closeBut}
                        onClick={closePhoto}
                    ></button>
                    <div>
                        <select onChange={(e) => setCurrentEvent(e.currentTarget.value)} value={currentEvent} className={styles.select}>
                            {imgFile.map((el: { string: string[] }) => (
                                
                                    <option value={Object.keys(el)[0]}  key={uuid()}>{Object.keys(el)[0]}</option>
                                
                            ))}
                        </select>
                        
                        {imgFile.map((el: { string: string[] }) => {
                            if(Object.keys(el)[0] != currentEvent){
                                return(<div  key={uuid()}></div>)
                            }
                            return (
                            <div  key={uuid()}>
                                <h3>{Object.keys(el)[0]}</h3>
                                <div className={styles.contForPhotos}>
                                    {Object.values(el)[0]?.map((img: any) => 
                                    (
                                        <div
                                            key={uuid()}
                                            className={styles.imgFrame}
                                        >
                                            <ModalImage
                                                small={`${LINK}/public/images/${page}/${
                                                    Object.keys(el)[0]
                                                }/${img}`}
                                                large={`${LINK}/public/images/${page}/${
                                                    Object.keys(el)[0]
                                                }/${img}`}
                                                alt={Object.keys(el)[0]}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.backBlack}></div>
                            </div>
                            )
                        })}
                    </div>
                </>
            )}
        </LayoutSportComplex>
    );
};

export default Gallery;
