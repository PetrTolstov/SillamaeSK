import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { LINK } from "../../config/constants";
import styles from "../../styles/ModalAdmin.module.css";
import { ButtonAdmin } from "./ButtonAdmin";

const ImageForm = ({ page, show, closeModal }: { page: string; show: boolean, closeModal: ()=>void }) => {
	//const page = '/Gallery'

	const [file, setFile] = useState<FileList>();
	const [imgFile, setImgFile] = useState("");

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFile(event.currentTarget.files!);
	};

	useEffect(() => {
		(async () => {
			const res = await axios.get(LINK + "/getPhoto", {
				headers: {
					optional: page,
				},
			});
			setImgFile(`${LINK}/public/images/${page}/${res.data[0]}`);
		})();
	}, []);

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		const data = new FormData();
		data.append("optional", page);
		if (file) {
			// @ts-ignore
			for (let x = 0; x < file.length; x++) {
				data.append("file", file[x]);
			}
		}
		axios.post(LINK + "/upload", data);
        closeModal();
	};
	if (show) {
		return (
			<>
                <div className={styles.shadow}></div>
				<div className={styles.container}>
                    <ButtonAdmin border action={closeModal} label={"Close modal"} />
					<form>
						<div className='form-group'>
							<label htmlFor='file'>Upload File:</label>
							<input
								className='form-control-file mb-3'
								type='file'
								id='file'
								multiple
								onChange={handleFileChange}
							/>
							<button onClick={handleSubmit}>
								Upload
							</button>
						</div>
					</form>
					<img src={imgFile} alt='img' />
					{/* Display Image Here */}
				</div>
			</>
		);
	} else {
		return <></>;
	}
};

export default ImageForm;
