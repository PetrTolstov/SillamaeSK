import styles from "./HostelRooms.module.css";
import { TextContent, useGetGeneralContactsInfoQuery, useGetRoomsQuery } from "../../graphqlGenerated/graphql";
import { observer } from "mobx-react-lite";
import LanguageStoreV2 from "../../Stores/LanguageStoreV2";
import photo from "../../public/RoomPhoto.png";
import { getTextContent } from "../../Helpers/TextContentService";

function HostelRooms() {
	const { data, loading, error } = useGetRoomsQuery();

	return (
		<>
			<h2 className={styles.h2}>Available rooms</h2>
			<article className={styles.listOfRooms} data-aos='fade-right' data-aos-once={"true"}>
				<ul className={styles.ul}>
					{loading ? <p>Loading</p> : data?.GetRooms?.map((room) => (
						<li key={room?._id}>
							<img src={photo.src} alt={"Room photo"} />
							<h3>{getTextContent(room?.name as TextContent)}</h3>
							<p>{getTextContent(room?.description as TextContent)}</p>

							<button>
								{LanguageStoreV2.mainPage.latestNews.button[LanguageStoreV2.currentLanguage]}
							</button>
						</li>
					))}
				</ul>
			</article>
		</>
	);
}

export default observer(HostelRooms);
