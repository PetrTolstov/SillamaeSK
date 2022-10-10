import React, {ChangeEvent, LegacyRef, useEffect, useRef, useState} from "react";
import axios from "axios";
import { LINK } from "../../config/constants";
import styles from "../../styles/ModalAdmin.module.css";
import { ButtonAdmin } from "./ButtonAdmin";
import kalender from "../../pages/Kalender";
import stylesBut from "../../styles/ButtonAdmin.module.css";
import frameStyles from "../../styles/FormStyles.module.css";

const ImageForm = ({ page, show, closeModal}: { page: string; show: boolean, closeModal: ()=>void }) => {
	//const page = '/Gallery'

	const [file, setFile] = useState<FileList>();
	const [imgFile, setImgFile] = useState("");
	const [imgFileName, setImgFileName] = useState([]);
	const [title, setTitle] = useState("")
	const [date, setDate] = useState('')


	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFile(event.currentTarget.files!);
		setImgFile(URL.createObjectURL(event.currentTarget.files![0]))
	};

	const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if(event.currentTarget.value){
			setTitle(event.currentTarget.value)
			console.log(event.currentTarget.value)
		}
	};

	const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		if(event.currentTarget.value){
			setDate(event.currentTarget.value)
			console.log(event.currentTarget.value)
		}
	};

	const handleTitleSelectChange= (event: any) => {
		if(event.currentTarget.value){
			let l = event.currentTarget.value.split("-")
			setTitle(l[3])
			setDate(l.slice(0,3).join('-'))
			console.log(event.currentTarget.value)

		}
	};

	useEffect(() => {
		(async () => {
			const res = await axios.get(LINK + "/getPhoto", {
				headers: {
					optional: page,
				},
			});
			setImgFileName(res.data);
		})();
	}, []);




	const handleSubmit = (event: { preventDefault: () => void }) => {
		if(!file){
			alert("Valed andmed")
		}

		event.preventDefault();
		const data = new FormData();

		if(date && title){
			data.append("title", title);
			data.append("date", date);
		}

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
				<div className={styles.container} style={{padding : "10px 50px 50px 50px "}}>
                    <ButtonAdmin border action={closeModal} label={"Close modal"} />
					<form >

						{page == "Gallery" ?
							<>
								<div className={styles.titleCon}>
									<div className={frameStyles.flexCon} style={{marginBottom: "20px", width: "fit-content"}}>
										<label htmlFor='text-EST'>Title</label>
										<input type={'text'} className={frameStyles.input} onChange={handleTitleChange} id={"title"} value={title}></input>
										<span className={frameStyles.focusBorder}></span>
									</div>
									<select name="listOfEvents" onChange={handleTitleSelectChange} id={'select'}>
										<option disabled selected > -- select an option -- </option>
										{
											imgFileName.map((el) => (
												<>
													<option value={`${Object.keys(el)[0]}`} key={`${Object.keys(el)[0]}`}>{Object.keys(el)[0]}</option>
												</>

											))
										}
									</select>
								</div>
								<div className={frameStyles.flexCon} style={{marginBottom: "20px",  width: "fit-content"}}>
									<label htmlFor='text-EST'>Date</label>
									<input type={'date'} className={frameStyles.input}  onChange={handleDateChange} value={date}></input>
									<span className={frameStyles.focusBorder}></span>
								</div>
							</>
							:
							<></>
						}
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
