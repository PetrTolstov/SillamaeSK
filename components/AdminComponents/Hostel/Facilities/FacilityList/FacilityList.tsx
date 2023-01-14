import { useState } from "react";
import { Facility, GetFacilitiesDocument, GetRoomsDocument, Room, useAddFacilityMutation, useAddRoomMutation, useDeleteFacilityMutation, useDeleteRoomMutation, useEditFacilityMutation, useEditRoomMutation, useGetFacilitiesQuery, useGetRoomsQuery } from "../../../../../graphqlGenerated/graphql"
import { ButtonAdmin } from "../../../ButtonAdmin";
import ModalAdmin from "../../../ModalAdmin";
import FacilityCompact from "../FacilityCompact/FacilityCompact";
import FacilityAddForm from "./FacilityAddForm";
import FacilityEditingForm from "./FacilityEditingForm";


export type FacilityListProps = { 
    roomList: Room[]
}

export default function FacilityList() { 
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [currentFacility, setCurrentFacility] = useState<Facility>();

    const {data: facilityList, error, refetch } = useGetFacilitiesQuery({onError(error) {
        alert(`Failed to fetch rooms with error: ${error.message}`);
    }});

    const [deleteRoom, {}] = useDeleteFacilityMutation();
    const [addFacility, {}] = useAddFacilityMutation();
    const [updateFacility, {data}] = useEditFacilityMutation(); 

    const openEditModal = (facility: Facility) => { 
        setCurrentFacility(facility);
        setShowEditModal(true); 
    }
    const openAddModal = () => { 

    }
    return ( 
        <div>
            {facilityList?.GetFacilities?.map(facility => ( 
                <div key={facility?._id}>
                    <FacilityCompact facilityData={facility as Facility} deleteAction={()=>{ deleteRoom({variables: {facilityId: facility?._id}, refetchQueries: [{query: GetFacilitiesDocument}]}) }} openEditModal={() => openEditModal(facility as Facility)} />
                </div>
            ))} 

            <ModalAdmin isShowing={showEditModal} onClose={() => setShowEditModal(false)}>
                <FacilityEditingForm facility={currentFacility as Facility} onClose={() => setShowEditModal(false)} updateFacility={(updatedFacility) => { 
                    updateFacility({variables: {facilityId: currentFacility?._id, newFacilityData: updatedFacility }, refetchQueries: [{query: GetFacilitiesDocument}]})
                }} />
            </ModalAdmin>
            <ModalAdmin isShowing={showAddModal} onClose={() => setShowAddModal(false)}>
                <FacilityAddForm onClose={() => setShowAddModal(false)} addFacility={(facility) => {addFacility({variables: {facility: facility}, refetchQueries: [{query: GetFacilitiesDocument}]})}} />
            </ModalAdmin>
            <ButtonAdmin filled label={"Add facility"} action={() => {setShowAddModal(true)}} />
        </div>
    )
}