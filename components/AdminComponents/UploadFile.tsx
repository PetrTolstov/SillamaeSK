import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { LINK } from "../../config/constants";
import styles from "../../styles/ModalAdmin.module.css";
import { ButtonAdmin } from "./ButtonAdmin";
import kalender from "../../pages/Kalender";
import stylesBut from "../../styles/ButtonAdmin.module.css";

const ImageForm = ({ page, show, closeModal}: { page: string; show: boolean, closeModal: ()=>void }) => {
	//const page = '/Gallery'

	const [file, setFile] = useState<FileList>();
	const [imgFile, setImgFile] = useState("");

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFile(event.currentTarget.files!);
		setImgFile(URL.createObjectURL(event.currentTarget.files![0]))
	};



	useEffect(() => {
		(async () => {
			const res = await axios.get(LINK + "/getPhoto", {
				headers: {
					optional: page,
				},
			});
			//setImgFile(`${LINK}/public/images/${page}/${res.data[0]}`);
		})();
	}, []);

	const handleSubmit = (event: { preventDefault: () => void }) => {
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
	if (show) {
		return (
			<>
                <div className={styles.shadow}></div>
				<div className={styles.container}>
                    <ButtonAdmin border action={closeModal} label={"Close modal"} />
					<form style={{marginBottom: "50px", marginTop: "50px"}}>
						<div className={styles.cont} >
							<label htmlFor='file'>Upload File:</label>
							<br/>
							<input
								className='form-control-file mb-3'
								type='file'
								id='file'
								multiple
								onChange={handleFileChange}

							/>
							<button onClick={handleSubmit} className={stylesBut.filledBtn} style={{border : "none"}}>Upload</button>
						</div>
					</form>
					{imgFile ? <img src={imgFile} alt='img' style={page == "Karusel" ? {width: "100%", height: "300px",  backgroundSize: '100% 100%', borderRadius: "10px"} : {} }/> : <p>Eelvaate nägemiseks lisage foto</p> }
					{/* Display Image Here */}
				</div>
			</>
		);
	} else {
		return <></>;
	}
};

export default ImageForm;
