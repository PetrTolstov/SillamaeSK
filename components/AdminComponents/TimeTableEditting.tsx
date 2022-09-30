import { FormEvent } from "react";
import { GetTimeTableDocument, TimeTableInput, useGetTimeTableQuery, useSetTimeTableMutation } from "../../graphqlGenerated/graphql";
import { ButtonAdmin } from "./ButtonAdmin";
import styles from '../../styles/TimeTableEditting.module.css'; 

export function TimeTableEditting() { 
    const { data: dataTimeTable, loading: loadingTimeTable } = useGetTimeTableQuery();
	const [updateTimeTable, { data: updatedData, loading: updatedLoading }] = useSetTimeTableMutation();
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
		const data = new FormData(e.currentTarget);
        const updatedTimeTable: TimeTableInput = { 
            title: { 
                EST: data.get("title-EST")?.toString(), 
                RUS: data.get("title-RUS")?.toString()
            }, 
            SportComplex: { 
                title: { 
                    EST: data.get("1-title-EST")?.toString(),
                    RUS: data.get("1-title-RUS")?.toString()
                }, 
                minTitle1: { 
                    EST: data.get("1-minTitle1-EST")?.toString(),
                    RUS: data.get("1-minTitle1-RUS")?.toString()
                }, 
                minTitle2: { 
                    EST: data.get("1-minTitle2-EST")?.toString(),
                    RUS: data.get("1-minTitle2-RUS")?.toString()
                },
                timeTable1: data.get("1-timeTable1")?.toString(), 
                timeTable2: data.get("1-timeTable2")?.toString(), 
            }, 
            SwimmingPool: { 
                title: { 
                    EST: data.get("2-title-EST")?.toString(),
                    RUS: data.get("2-title-RUS")?.toString()
                }, 
                minTitle1: { 
                    EST: data.get("2-minTitle1-EST")?.toString(),
                    RUS: data.get("2-minTitle1-RUS")?.toString()
                }, 
                minTitle2: { 
                    EST: data.get("2-minTitle2-EST")?.toString(),
                    RUS: data.get("2-minTitle2-RUS")?.toString()
                },
                timeTable1: data.get("2-timeTable1")?.toString(), 
                timeTable2: data.get("2-timeTable2")?.toString(), 
            }
        }
        updateTimeTable({ variables: { 
            newTimeTable: updatedTimeTable,
        },
        onError(error) {
            alert(error.message)
        },
        onCompleted(data) {
            alert(data.SetTimeTable);
        }, 
        refetchQueries: [{query: GetTimeTableDocument}]})
	};
	return (
		<div className={styles.container}>
			<h3>Ajakava</h3>
			<div>
                {loadingTimeTable ? <p>Loading...</p> : <></>}
				<form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "400px" }}>
					<label >
						Title
						<div style={{ display: "flex", flexDirection: "column" }}>
							<input type='text' name='title-EST' placeholder="EST" defaultValue={dataTimeTable?.GetTimeTable?.title?.EST ?? ""}/>
							<input type='text' name='title-RUS' placeholder="RUS" defaultValue={dataTimeTable?.GetTimeTable?.title?.RUS ?? ""} />
						</div>
					</label>
					<div style={{ display: "flex", width: "100%", marginTop: "20px", justifyContent: "space-between" }}>
						<label style={{ display: "flex", flexDirection: "column" }}>
							<label style={{ display: "flex", flexDirection: "column" }}>
								<label>
									<input type='text' name='1-title-EST' placeholder="EST title: 'Spordikompleks'" defaultValue={dataTimeTable?.GetTimeTable?.SportComplex?.title?.EST ?? ""}/>
								</label>
								<label>
									<input type='text' name='1-title-RUS' placeholder="RUS title: 'Спорткомплекс'" defaultValue={dataTimeTable?.GetTimeTable?.SportComplex?.title?.RUS ?? ""}/>
								</label>
							</label>
							<div>
                                <div>
								    <input style={{ width: "50px" }} type='text' name='1-minTitle1-EST' placeholder='EST E-R' defaultValue={dataTimeTable?.GetTimeTable?.SportComplex?.minTitle1?.EST ?? ""}/>
								    <input style={{ width: "50px", marginLeft: "10px"}} type='text' name='1-minTitle1-RUS' placeholder='RUS E-R' defaultValue={dataTimeTable?.GetTimeTable?.SportComplex?.minTitle1?.RUS ?? ""}/>
                                </div>
								<input type='text' name='1-timeTable1' defaultValue={dataTimeTable?.GetTimeTable?.SportComplex?.timeTable1 ?? ""} />
							</div>
							<div>
                                <div>
								    <input style={{ width: "50px" }} type='text' name='1-minTitle2-EST' placeholder='EST E-R' defaultValue={dataTimeTable?.GetTimeTable?.SportComplex?.minTitle2?.EST ?? ""}/>
								    <input style={{ width: "50px", marginLeft: "10px"}} type='text' name='1-minTitle2-RUS' placeholder='RUS E-R' defaultValue={dataTimeTable?.GetTimeTable?.SportComplex?.minTitle2?.RUS ?? ""}/>
                                </div>
								<input type='text' name='1-timeTable2' defaultValue={dataTimeTable?.GetTimeTable?.SportComplex?.timeTable2 ?? ""}/>
							</div>
						</label>
                        <label style={{ display: "flex", flexDirection: "column" }}>
							<label style={{ display: "flex", flexDirection: "column" }}>
								<label>
									<input type='text' name='2-title-EST' placeholder="EST title: 'Ujula'" defaultValue={dataTimeTable?.GetTimeTable?.SwimmingPool?.title?.EST ?? ""}/>
								</label>
								<label>
									<input type='text' name='2-title-RUS' placeholder="RUS title: 'Бассейн'" defaultValue={dataTimeTable?.GetTimeTable?.SwimmingPool?.title?.RUS ?? ""}/>
								</label>
							</label>
							<div>
                                <div>
								    <input style={{ width: "50px" }} type='text' name='2-minTitle1-EST' placeholder='EST E-R' defaultValue={dataTimeTable?.GetTimeTable?.SwimmingPool?.minTitle1?.EST ?? ""}/>
								    <input style={{ width: "50px", marginLeft: "10px"}} type='text' name='2-minTitle1-RUS' placeholder='RUS E-R' defaultValue={dataTimeTable?.GetTimeTable?.SwimmingPool?.minTitle1?.RUS ?? ""}/>
                                </div>
								<input type='text' name='2-timeTable1' defaultValue={dataTimeTable?.GetTimeTable?.SwimmingPool?.timeTable1 ?? ""} />
							</div>
							<div>
                                <div>
								    <input style={{ width: "50px" }} type='text' name='2-minTitle2-EST' placeholder='EST E-R' defaultValue={dataTimeTable?.GetTimeTable?.SwimmingPool?.minTitle2?.EST ?? ""}/>
								    <input style={{ width: "50px", marginLeft: "10px"}} type='text' name='2-minTitle2-RUS' placeholder='RUS E-R' defaultValue={dataTimeTable?.GetTimeTable?.SwimmingPool?.minTitle2?.RUS ?? ""}/>
                                </div>
								<input type='text' name='2-timeTable2' defaultValue={dataTimeTable?.GetTimeTable?.SwimmingPool?.timeTable2 ?? ""}/>
							</div>
						</label>
					</div>
					<ButtonAdmin filled isSubmit label='Submit' action={() => {}} />
				</form>
			</div>
		</div>
	);
}