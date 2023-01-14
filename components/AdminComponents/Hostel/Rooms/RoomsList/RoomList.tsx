import { useState } from "react";
import { GetRoomsDocument, Room, useAddRoomMutation, useDeleteRoomMutation, useEditRoomMutation, useGetRoomsQuery } from "../../../../../graphqlGenerated/graphql"
import { ButtonAdmin } from "../../../ButtonAdmin";
import ModalAdmin from "../../../ModalAdmin";
import RoomCompact from "../RoomCompact/RoomCompact"
import RoomAddForm from "./RoomAddForm";
import RoomEditingForm from "./RoomEditingForm";


export type RoomListProps = { 
    roomList: Room[]
}

export default function RoomList() { 
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [currentRoom, setCurrentRoom] = useState<Room>();

    const {data: roomList, error, refetch } = useGetRoomsQuery({onError(error) {
        alert(`Failed to fetch rooms with error: ${error.message}`);
    }});

    const [deleteRoom, {}] = useDeleteRoomMutation();
    const [addRoom, {}] = useAddRoomMutation();
    const [updateRoom, {data}] = useEditRoomMutation(); 

    const openEditModal = (room: Room) => { 
        setCurrentRoom(room);
        setShowEditModal(true); 
    }
    const openAddModal = () => { 

    }
    return ( 
        <div>
            {roomList?.GetRooms?.map(room => ( 
                <div key={room?._id}>
                    <RoomCompact roomData={room as Room} deleteAction={()=>{ deleteRoom({variables: {roomIdToDelete: room?._id}, refetchQueries: [{query: GetRoomsDocument}]}) }} openEditModal={() => openEditModal(room as Room)} />
                </div>
            ))} 

            <ModalAdmin isShowing={showEditModal} onClose={() => setShowEditModal(false)}>
                <RoomEditingForm room={currentRoom as Room} onClose={() => setShowEditModal(false)} updateRoom={(updatedRoom) => { 
                    updateRoom({variables: {roomIdToEdit: currentRoom?._id, editedRoom: updatedRoom }, refetchQueries: [{query: GetRoomsDocument}]})
                }} />
            </ModalAdmin>
            <ModalAdmin isShowing={showAddModal} onClose={() => setShowAddModal(false)}>
                <RoomAddForm onClose={() => setShowAddModal(false)} addRoom={(room) => {addRoom({variables: {newRoom: room}, refetchQueries: [{query: GetRoomsDocument}]})}} />
            </ModalAdmin>
            <ButtonAdmin filled label={"Lisa roomi"} action={() => {setShowAddModal(true)}} />
        </div>
    )
}