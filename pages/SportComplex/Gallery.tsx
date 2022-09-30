import type { NextPage } from 'next'
import LayoutSportComplex from "./LayoutSportComplex";
import img from "../../public/img.png"
import {useEffect, useState} from "react";
import axios from "axios";
import {LINK} from "../../config/constants";

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

    return (
        <LayoutSportComplex>
            <>
                <h2>Galerii</h2>
                <h3>2021 - 2022</h3>
                <div>
                    {
                        imgFile.map((el) => (
                            <img src={`${LINK}/public/images/${page}/${el}`} />
                            ))
                    }


                </div>
            </>
        </LayoutSportComplex>
    )
}

export default Gallery