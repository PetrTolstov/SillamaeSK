import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { LINK } from "../../config/constants";
import styles from "../../styles/ModalAdmin.module.css";
import { ButtonAdmin } from "./ButtonAdmin";
import kalender from "../../pages/Kalender";
import stylesBut from "../../styles/ButtonAdmin.module.css";

const DeleteImage = ({ page, show, closeModal}: { page: string; show: boolean, closeModal: ()=>void }) => {
	const [imgFile, setImgFile] = useState([]);


	useEffect(() => {
		(async () => {
			const res = await axios.get(LINK + "/getPhoto", {
				headers: {
					optional: page,
				},
			});
			setImgFile(res.data);
		})();
	}, []);

	/*const handleSubmit = (event: { preventDefault: () => void }) => {
		if(!file){
			alert("Valed andmed")
		}

		event.preventDefault();
		const data = new FormData();
		data.append("optional", page);
		console.log(file)
		if (file) {
			// @ts-ignore
			for (let x = 0; x < file.length; x++) {
				data.append("file", file[x]);
			}
		}
		console.log(data)
		axios.post(LINK + "/upload", data).then((r) => closeModal());
	};
	 */
	if (show) {
		return (
			<>
				<div className={styles.shadow}></div>
				<div className={styles.container}>
					<ButtonAdmin border action={closeModal} label={"Close modal"} />
					{imgFile.map((el) => {
						console.log(el)
						return <img src={`${LINK}/public/images/${page}/${el}`} key={el} alt='img' style={page == "Karusel" ? {width: "100%", height: "300px",  backgroundSize: '100% 100%', borderRadius: "10px"} : {} }/>
					})}
					{/* Display Image Here */}
				</div>
			</>
		);
	} else {
		return <></>;
	}
};

export default DeleteImage;
