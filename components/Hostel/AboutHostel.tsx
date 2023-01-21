import styles from "./AboutHostel.module.css";
import { TextContent, useGetMainDescriptionQuery } from "../../graphqlGenerated/graphql";
import { observer } from "mobx-react-lite";
import { getTextContent } from "../../Helpers/TextContentService";


function AboutHostel() {
	const { data, loading, error } = useGetMainDescriptionQuery({onError(error) {
        console.log(error);
    }, onCompleted(data) { 
        // console.log(data);
    }});
	return (
		<article className={styles.generalInformation} data-aos='fade-right' data-aos-once={"true"}>
			<div className={styles.mainText}>
				<h2 className={styles.h2}>Hostel</h2>
				{!loading ? <p>{getTextContent(data?.GetMainDescription?.text as TextContent)}</p> : <p>Loading...</p>}
			</div>
			<div className={styles.imageBlock}>
				<div className={styles.contactInfo}>
					{!loading ? (
						<>
							<span className={styles.contactText}>
								{getTextContent(data?.GetMainDescription?.contacts?.title as TextContent)}
							</span>
							<span>{getTextContent(data?.GetMainDescription?.contacts?.body as TextContent)}</span>
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
