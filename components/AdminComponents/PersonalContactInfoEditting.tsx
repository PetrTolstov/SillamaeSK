import { FormEvent } from "react";
import { GetGeneralContactsInfoDocument, PersonContactInfoInput, useGetPersonalContactsInfoQuery, useSetPersonalContactInfoMutation } from "../../graphqlGenerated/graphql";
import { ButtonAdmin } from "./ButtonAdmin";

export function PersonalContactInfoEditting () { 
    const {data: getData, loading: getLoading, error: getError} = useGetPersonalContactsInfoQuery();
    const [updatePersonalInfo, {data: setData, loading: setLoading, error: setError}] = useSetPersonalContactInfoMutation();


    const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => { 
        e.preventDefault(); 
        const data = new FormData(e.currentTarget);
        const newObj: PersonContactInfoInput[] = [
            { 
                name: data.get("name1")?.toString(),
                role: { 
                    EST: data.get("role1-EST")?.toString(), 
                    RUS: data.get("role1-RUS")?.toString(), 
                },
                phone: data.get("phone1")?.toString(),
                email: data.get("email1")?.toString(),
            },
            { 
                name: data.get("name2")?.toString(),
                role: { 
                    EST: data.get("role2-EST")?.toString(), 
                    RUS: data.get("role2-RUS")?.toString(), 
                },
                phone: data.get("phone2")?.toString(),
                email: data.get("email2")?.toString(),
            },
            { 
                name: data.get("name3")?.toString(),
                role: { 
                    EST: data.get("role3-EST")?.toString(), 
                    RUS: data.get("role3-RUS")?.toString(), 
                },
                phone: data.get("phone3")?.toString(),
                email: data.get("email3")?.toString(),
            }
        ];
        updatePersonalInfo({ variables: { 
            newPersonalContactsInfo: newObj
        }, refetchQueries: [{query: GetGeneralContactsInfoDocument}], onCompleted(data) {
            alert(data.SetPersonalContactInfo);
        },})
    } 

    return ( 
        <div>

			<h3>Isikuandmeid</h3>
			<form onSubmit={handleSubmit}>
                {/* FIRST */}
				<div style={{display: "flex", alignItems: "center"}}>
					<div style={{display: "flex", flexDirection: "column", width: "200px"}}>
                        <input type="text" name="name1" placeholder="Nimi" defaultValue={getData?.GetPersonalContactsInfo![0]?.name ?? ""}/>
					</div>
				</div>
				<div style={{display: "flex", alignItems: "center"}}>
                    <input type="text" name="role1-EST" placeholder="Ametikoht-EST" defaultValue={getData?.GetPersonalContactsInfo![0]?.role?.EST ?? ""}/>
                    <input type="text" name="role1-RUS" placeholder="Ametikoht-RUS" defaultValue={getData?.GetPersonalContactsInfo![0]?.role?.RUS ?? ""}/>
				</div>
                <div style={{display: "flex", alignItems: "center", marginTop: "10px"}}>
                    <input type="text" name="phone1" placeholder="Telefon" defaultValue={getData?.GetPersonalContactsInfo![0]?.phone ?? ""}/>
                    <input type="text" name="email1" placeholder="E-Post" defaultValue={getData?.GetPersonalContactsInfo![0]?.email ?? ""}/>
				</div>
                {/* SECOND */}
                <div style={{display: "flex", alignItems: "center", marginTop: "50px"}}>
					<div style={{display: "flex", flexDirection: "column", width: "200px"}}>
                        <input type="text" name="name2" placeholder="Nimi" defaultValue={getData?.GetPersonalContactsInfo![1]?.name ?? ""}/>
					</div>
				</div>
				<div style={{display: "flex", alignItems: "center"}}>
                    <input type="text" name="role2-EST" placeholder="Ametikoht-EST" defaultValue={getData?.GetPersonalContactsInfo![1]?.role?.EST ?? ""}/>
                    <input type="text" name="role2-RUS" placeholder="Ametikoht-RUS" defaultValue={getData?.GetPersonalContactsInfo![1]?.role?.RUS ?? ""}/>
				</div>
                <div style={{display: "flex", alignItems: "center", marginTop: "10px"}}>
                    <input type="text" name="phone2" placeholder="Telefon" defaultValue={getData?.GetPersonalContactsInfo![1]?.phone ?? ""}/>
                    <input type="text" name="email2" placeholder="E-Post" defaultValue={getData?.GetPersonalContactsInfo![1]?.email ?? ""}/>
				</div>

                {/* THIRD */}
                <div style={{display: "flex", alignItems: "center", marginTop: "50px"}}>
					<div style={{display: "flex", flexDirection: "column", width: "200px"}}>
                        <input type="text" name="name3" placeholder="Nimi" defaultValue={getData?.GetPersonalContactsInfo![2]?.name ?? ""}/>
					</div>
				</div>
				<div style={{display: "flex", alignItems: "center"}}>
                    <input type="text" name="role3-EST" placeholder="Ametikoht-EST" defaultValue={getData?.GetPersonalContactsInfo![2]?.role?.EST ?? ""}/>
                    <input type="text" name="role3-RUS" placeholder="Ametikoht-RUS" defaultValue={getData?.GetPersonalContactsInfo![2]?.role?.RUS ?? ""}/>
				</div>
                <div style={{display: "flex", alignItems: "center", marginTop: "10px"}}>
                    <input type="text" name="phone3" placeholder="Telefon" defaultValue={getData?.GetPersonalContactsInfo![2]?.phone ?? ""}/>
                    <input type="text" name="email3" placeholder="E-Post" defaultValue={getData?.GetPersonalContactsInfo![2]?.email ?? ""}/>
				</div>
                <ButtonAdmin filled isSubmit action={()=>{}} label={"Submit"}/>
			</form>
		</div>
    )
}