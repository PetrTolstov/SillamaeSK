import { Room, TextContent } from "../../../../../graphqlGenerated/graphql"
import styles from "../../../../../styles/PriceListElementAdmin.module.css"
import { ButtonAdmin } from "../../../ButtonAdmin"
import Bin from "/public/Bin.svg"
import Edit from "/public/Edit.svg"
import Image from 'next/image'

export type RoomCompactProps = { 
    roomData: Room
    deleteAction: () => void 
    openEditModal: () => void
}

export default function RoomCompact( {roomData, deleteAction, openEditModal} :  RoomCompactProps) { 

    return ( 
        <div className={styles.mainContainer}>
			<div className={styles.elementBody}>
				<p>{roomData.name?.EST}</p>
			</div>
			<div className={styles.btns}>
				<ButtonAdmin border label={<Image src={Bin} width={23} height={20}/>} action={deleteAction}/>
                <ButtonAdmin border label={<Image src={Edit} width={23} height={20} />} action={openEditModal}/>
			</div>
		</div>
    )

}