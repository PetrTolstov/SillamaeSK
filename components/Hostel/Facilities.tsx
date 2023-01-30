import styles from './Facilities.module.css'
import {Facility, TextContent, useGetFacilitiesQuery} from "../../graphqlGenerated/graphql";
import { observer } from 'mobx-react-lite';
import ModalAdmin from '../AdminComponents/ModalAdmin';
import { useState } from 'react';
import { getTextContent } from '../../Helpers/TextContentService';

function Facilities(){
    const {data, loading, error} = useGetFacilitiesQuery()
    const [currentFacility, setCurrentFacility] = useState<Facility>()
    return(
        <> <h2 className={styles.h2}>Facilities</h2>
        <article className={styles.listOfFacilities}  data-aos="fade-right" data-aos-once={'true'}>
            {loading ? <p>Loading...</p> : data?.GetFacilities?.map(facility => ( 
                <button key={facility?._id} onClick={()=>setCurrentFacility(facility as Facility)}>
                    {getTextContent(facility?.title as TextContent)}
                </button>
            ))}
        </article>
        <ModalAdmin isShowing={currentFacility != undefined} onClose={() => setCurrentFacility(undefined)}>
                <p>{getTextContent(currentFacility?.description as TextContent)}</p>
        </ModalAdmin>
        </>
    )
}

export default observer(Facilities)