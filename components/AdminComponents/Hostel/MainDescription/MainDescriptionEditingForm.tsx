import { FormEvent } from "react"
import { MainDescription, MainDescriptionInput } from "../../../../graphqlGenerated/graphql";
import { ButtonAdmin } from "../../ButtonAdmin";


type MainDescriptionEditingFormProps = { 
    updateMainDescription: (newMainDes: MainDescriptionInput) => void
    mainDescription: MainDescription
    onClose: () => void
}

export default function MainDescriptionEditingForm({updateMainDescription, mainDescription, onClose} : MainDescriptionEditingFormProps) { 

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget);
        const updatedMainDescription: MainDescriptionInput = { 
            contacts: { 
                title: { 
                    EST: formData.get("ESTConTitle")?.toString(), 
                    RUS: formData.get("RUSConTitle")?.toString(), 
                    ENG: "", 
                },
                body: { 
                    EST: formData.get("ESTConBody")?.toString(), 
                    RUS: formData.get("RUSConBody")?.toString(), 
                    ENG: "", 
                }
            }, 
            text: { 
                EST: formData.get("ESTText")?.toString(),
                RUS: formData.get("RUSText")?.toString(),
                ENG: ""
            }
        }

        updateMainDescription(updatedMainDescription);
        onClose();
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Main description</h2>
            <div>
                <h3>Main description text</h3>
                <div>
                    <input type="text" placeholder="EST Text" name="ESTText" defaultValue={mainDescription.text?.EST ?? ""}/>
                    {/* <input type="text" placeholder="ENG Text" name="ENGText" defaultValue={mainDescription.text?.ENG ?? ""}/> */}
                    <input type="text" placeholder="RUS Text" name="RUSText" defaultValue={mainDescription.text?.RUS ?? ""}/>
                </div>
               
            </div>
            <h2>Contacts</h2>
            <div>
                <h3>Contacts title</h3>
                <div>
                    <input type="text" placeholder="EST Contact Title" name="ESTConTitle" defaultValue={mainDescription.contacts?.title?.EST ?? ""}/>
                    {/* <input type="text" placeholder="ENG Contact Title" name="ENGConTitle" defaultValue={mainDescription.contacts?.title?.ENG ?? ""}/> */}
                    <input type="text" placeholder="RUS Contact Title" name="RUSConTitle" defaultValue={mainDescription.contacts?.title?.RUS ?? ""}/>
                </div>
                <h3>Contacts body</h3>
                <div>
                    <input type="text" placeholder="EST Contact Body" name="ESTConBody" defaultValue={mainDescription.contacts?.body?.EST ?? ""}/>
                    {/* <input type="text" placeholder="ENG Contact Body" name="ENGConBody" defaultValue={mainDescription.contacts?.body?.ENG ?? ""}/> */}
                    <input type="text" placeholder="RUS Contact Body" name="RUSConBody" defaultValue={mainDescription.contacts?.body?.RUS ?? ""}/>
                </div>
            </div>
            <ButtonAdmin isSubmit label={"Submit"} border action={()=>{}} />
        </form>
    )
}