import type { NextPage } from 'next'
import LayoutSportComplex from "./LayoutSportComplex";
import img from "../../public/img.png"
import {useEffect, useState} from "react";
import axios from "axios";
import {LINK} from "../../config/constants";
import styles from '../../styles/galleyPhotoContainer.module.css'

const Gallery: NextPage = () => {
    const page = 'Gallery'
    const [imgFile, setImgFile] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get(LINK + "/getPhoto", {
                headers: {
                    'optional': page
                }
            });
            console.log(res.data)
            setImgFile(res.data)
        })()
    }, [])

    const handleClick = (event: any) => {
        event.currentTarget.classList.add(styles.imgFix)
        document.getElementsByClassName(styles.closeBut)[0].classList.add(styles.blockBut)
        Array.from(document.getElementsByClassName(styles.backBlack) as HTMLCollectionOf<HTMLElement>)[0].style.display = "block"
    };

    const closePhoto = (event: any) => {
        document.getElementsByClassName(styles.closeBut)[0].classList.remove(styles.blockBut)
        Array.from(document.getElementsByClassName(styles.imgNotFix)).forEach((el) => {
            if (el.classList.length > 1){
                el.classList.remove(styles.imgFix)
            }
        })
        Array.from(document.getElementsByClassName(styles.backBlack) as HTMLCollectionOf<HTMLElement>)[0].style.display = "none"
    }

    return (
        <LayoutSportComplex>
            <>
                <h2>Galerii</h2>
                <button className={styles.closeBut} onClick={closePhoto}></button>
                <div>
                    {
                        imgFile.map((el : {string : string[]}) => (
                            <>
                                <h3>{Object.keys(el)[0]}</h3>
                                <div className={styles.contForPhotos}>

                                {
                                   Object.values(el)[0]?.map((img: any) =>(
                                       <div key={`${Object.keys(el)[0]}/${img}`} >

                                           <img src={`${LINK}/public/images/${page}/${Object.keys(el)[0]}/${img}`} onClick={handleClick} className={styles.imgNotFix}/>
                                       </div>
                                   ))
                                }
                                </div>
                                <div className={styles.backBlack}></div>
                            </>

                            )
                        )
                    }


                </div>
            </>
        </LayoutSportComplex>
    )
}

export default Gallery