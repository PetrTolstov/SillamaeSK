import { Facility, Room, TextContent } from "../../../../../graphqlGenerated/graphql"
import styles from "../../../../../styles/PriceListElementAdmin.module.css"
import { ButtonAdmin } from "../../../ButtonAdmin"
import Bin from "/public/Bin.svg"
import Edit from "/public/Edit.svg"
import Image from 'next/image'

export type FacilityCompactProps = { 
    facilityData: Facility
    deleteAction: () => void 
    openEditModal: () => void
}

export default function FacilityCompact( {facilityData, deleteAction, openEditModal} :  FacilityCompactProps) { 

    return ( 
        <div className={styles.mainContainer}>
			<div className={styles.elementBody}>
				<p>{facilityData.title?.EST}</p>
			</div>
			<div className={styles.btns}>
				<ButtonAdmin border label={<Image src={Bin} width={23} height={20}/>} action={deleteAction}/>
                <ButtonAdmin border label={<Image src={Edit} width={23} height={20} />} action={openEditModal}/>
			</div>
		</div>
    )

}