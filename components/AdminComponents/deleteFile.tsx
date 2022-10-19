import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from "react";
import axios from "axios";
import { LINK } from "../../config/constants";
import styles from "../../styles/ModalAdmin.module.css";
import { ButtonAdmin } from "./ButtonAdmin";
import kalender from "../../pages/Kalender";
import stylesBut from "../../styles/ButtonAdmin.module.css";

const DeleteImage = ({ page, show, closeModal}: { page: string; show: boolean, closeModal: ()=>void }) => {
	const [imgFile, setImgFile] = useState([]);
	const [listImgDel, setListImgDel] = useState([])

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


	const handleTitleChange = (event: any) => {
		const select = document.getElementById('select')
		// @ts-ignore
		var value = select.options[select.selectedIndex].value;
		Array.from(document.getElementsByClassName(styles.imgCont)).forEach((el) => {
			if (!(styles.hidden in el.classList)){
				el.classList.add(styles.hidden)
			}
		})
		document.getElementById(value)!.classList.remove(styles.hidden)
	};

	const handleSubmit = (event: { preventDefault: () => void }) => {

		event.preventDefault();


		if (listImgDel) {

			axios.post(LINK + "/delete", listImgDel).then((r) => closeModal());
			window.location.reload()
		}else{
			alert("Choose photo to remove")
		}

	};


	const handleImgClick = (event: any) => {
		console.log(event.target.id)
		const img : string = event.target.id
		let copyList : string[] = [...listImgDel]

		if (copyList.indexOf(img) != -1){
			document.getElementById(img)?.classList.remove(styles.chosen)

			copyList = copyList.filter(data => data != img)

		}else{
			document.getElementById(img)?.classList.add(styles.chosen)
			copyList.push(img)

		}
		console.log(copyList)
		// @ts-ignore
		setListImgDel(copyList)

	};
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

					<div  className={styles.butCon}>

						{typeof imgFile[0] == "string" ? <></> :
						<select name="listOfEvents" onChange={handleTitleChange} id={'select'}>
						{
							imgFile.map((el) => (
								<>
									<option value={`${Object.keys(el)[0]}`} key={`${Object.keys(el)[0]}`}>{Object.keys(el)[0]}</option>
								</>

							))
						}
						</select>
						}

						<button onClick={handleSubmit} className={stylesBut.filledBtn} style={{border : "none"}}>Delete</button>

					</div>
					{imgFile.map((el : {string : string[]}, i) => (
						<div key={`${el}`} id={`${el}-c`} className={`${i == 0 || typeof el == "string"? '' : styles.hidden} ${styles.imgCont}`}>
							{
								typeof el == "string" ?
									<img src={`${LINK}/public/images/${page}/${el}`} key={`${el}`} id={`${page}/${el}`} style={{width: "300px"}} onClick={handleImgClick} className={`${styles.img}`}/>
									:
								Object.values(el)[0]?.map((img) =>(
									<img src={`${LINK}/public/images/${page}/${Object.keys(el)[0]}/${img}`} key={`${Object.keys(el)[0]}-${img}`} id={`${Object.keys(el)[0]}/${img}`} style={{width: "300px"}} onClick={handleImgClick} className={`${styles.img}`}/>
								))
							}
						</div>
					))}
					{/* Display Image Here */}
				</div>
			</>
		);
	} else {
		return <></>;
	}
};

export default DeleteImage;
