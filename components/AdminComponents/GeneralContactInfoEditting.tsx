import { FormEvent } from "react";
import { GeneralContactsInfoInput, useGetGeneralContactsInfoQuery, useSetGeneralContactInfoMutation } from "../../graphqlGenerated/graphql";
import { ButtonAdmin } from "./ButtonAdmin";
import frameStyles from "../../styles/FormStyles.module.css"

export const GeneralContactInfoEditting = () => { 
    const {data: getData, loading: getLoading, error: getError} = useGetGeneralContactsInfoQuery();
    const [updateGeneralInfo, {data: setData, loading: setLoading, error: setError}] = useSetGeneralContactInfoMutation();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const newInfo: GeneralContactsInfoInput = {
            addressField: {
                fieldTitle: { 
                    EST: data.get("address-EST")?.toString(),
                    RUS: data.get("address-RUS")?.toString(),
                }, 
                fieldInfo: data.get("address")?.toString(),
            }, 
            phoneField: { 
                fieldTitle: { 
                    EST: data.get("phone-EST")?.toString(),
                    RUS: data.get("phone-RUS")?.toString(),
                }, 
                fieldInfo: data.get("phone")?.toString(),
            }, 
            emailField: { 
                fieldTitle: { 
                    EST: data.get("email-EST")?.toString(),
                    RUS: data.get("email-RUS")?.toString(),
                }, 
                fieldInfo: data.get("email")?.toString(),
            }
        };
        updateGeneralInfo({variables: { newGeneralContactsInfo: newInfo}, onCompleted(data) {
            alert(data.SetGeneralContactInfo);
        },});
    }
	return (
		<div className={frameStyles.container}>
            {getLoading ? <p>Loading...</p> :<></>}
			<h3>Kontakt Üldinfo</h3>
			<form onSubmit={handleSubmit}>
				<div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
					<div style={{display: "flex", flexDirection: "column", width: "80px"}}>
                        <div className={frameStyles.flexCon}>
						    <input type='text' name="address-EST" placeholder='EST' defaultValue={getData?.GetGeneralContactsInfo?.addressField?.fieldTitle?.EST ?? ""} className={frameStyles.input}/>
                            <span className={frameStyles.focusBorder}></span>
                        </div>
                        <div className={frameStyles.flexCon}>
						    <input type='text' name="address-RUS" placeholder='RUS' defaultValue={getData?.GetGeneralContactsInfo?.addressField?.fieldTitle?.RUS ?? ""} className={frameStyles.input}/>
                            <span className={frameStyles.focusBorder}></span>
                        </div>
					</div>
                    <div className={frameStyles.flexCon}>
					    <input type='text' placeholder='Info' name="address" defaultValue={getData?.GetGeneralContactsInfo?.addressField?.fieldInfo ?? ""} className={frameStyles.input} />
                        <span className={frameStyles.focusBorder}></span>
                    </div>
                </div>
				<div style={{display: "flex", alignItems: "center", marginTop: "20px" , justifyContent: "space-between"}}>
					<div style={{display: "flex", flexDirection: "column", width: "80px"}}>
                        <div className={frameStyles.flexCon}>
						    <input type='text' name="phone-EST" placeholder='EST' defaultValue={getData?.GetGeneralContactsInfo?.phoneField?.fieldTitle?.EST ?? ""}  className={frameStyles.input}/>
                            <span className={frameStyles.focusBorder}></span>
                        </div>
                        <div className={frameStyles.flexCon}>
                            <input type='text' name="phone-RUS" placeholder='RUS' defaultValue={getData?.GetGeneralContactsInfo?.phoneField?.fieldTitle?.RUS ?? ""}  className={frameStyles.input}/>
                            <span className={frameStyles.focusBorder}></span>
                        </div>
                    </div>
                    <div className={frameStyles.flexCon}>
					    <input type='text' placeholder='Info' name="phone" defaultValue={getData?.GetGeneralContactsInfo?.phoneField?.fieldInfo ?? ""}  className={frameStyles.input}/>
                        <span className={frameStyles.focusBorder}></span>
                    </div>
                </div>
				<div style={{display: "flex", alignItems: "center", marginTop: "20px", justifyContent: "space-between"}}>
					<div style={{display: "flex", flexDirection: "column", width: "80px"}}>
                        <div className={frameStyles.flexCon}>
						    <input type='text' name="email-EST" placeholder='EST' defaultValue={getData?.GetGeneralContactsInfo?.emailField?.fieldTitle?.EST ?? ""}  className={frameStyles.input}/>
                            <span className={frameStyles.focusBorder}></span>
                        </div>
                        <div className={frameStyles.flexCon}>
						    <input type='text' name="email-RUS" placeholder='RUS' defaultValue={getData?.GetGeneralContactsInfo?.emailField?.fieldTitle?.RUS ?? ""}  className={frameStyles.input} />
                            <span className={frameStyles.focusBorder}></span>
                        </div>
					</div>
                    <div className={frameStyles.flexCon}>
					    <input type='text' placeholder='Info' name="email" defaultValue={getData?.GetGeneralContactsInfo?.emailField?.fieldInfo ?? ""}  className={frameStyles.input}/>
                        <span className={frameStyles.focusBorder}></span>
                    </div>
				</div>
                <ButtonAdmin filled isSubmit action={()=>{}} label={"Submit"}/>
			</form>
		</div>
	);
}