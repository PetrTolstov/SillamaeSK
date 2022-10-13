import styles from '../../styles/PriceListTableComponent.module.css'
import {GetPriceListQuery, useGetPriceListQuery} from "../../graphqlGenerated/graphql";
import Image from "next/image";
import minus from "../../public/minus.svg"
import plus from "../../public/plus.svg"
import LanguageStoreV2 from '../../Stores/LanguageStoreV2';


function PriceListTableComponent(){
    const { loading, error, data } = useGetPriceListQuery();



    function showOrHideLabel(id : any, index : number){
        Array.from(document.getElementsByClassName(styles.tdButtonHd)).forEach(function (element) {
            if(element.id.charAt(element.id.length - 1) == "P"){
                element.className = styles.tdButton
            }else {
                element.className = styles.tdButtonHd
            }
        });

        Array.from(document.getElementsByClassName(styles.tdButton)).forEach(function (element) {
            if(element.id.charAt(element.id.length - 1) == "P"){
                element.className = styles.tdButton
            }else {
                element.className = styles.tdButtonHd
            }
        });






        let element = document.getElementById(`${id}`)
        if(element){
            if(element.className == styles.hidden){
                Array.from(document.getElementsByClassName(styles.showen)).forEach(function (element) {
                    element.className = styles.hidden
                });
                element.className = styles.showen
                // @ts-ignore
                document.getElementById(`${id}-butP`).className = styles.tdButtonHd
                // @ts-ignore
                document.getElementById(`${id}-butM`).className = styles.tdButton

            }else{
                element.className = styles.hidden
                // @ts-ignore
                document.getElementById(`${id}-butP`).className = styles.tdButton
                // @ts-ignore
                document.getElementById(`${id}-butM`).className = styles.tdButtonHd
            }
        }

    }



    function createTableItems(date: GetPriceListQuery | undefined){
        let data = date?.GetPriceList

        return data?.map((element, index) => (
            <tbody className={styles.label} key={element?._id}>
            <tr>
                <td colSpan={3} width={"100%"} className={styles.labelTd} onClick={() => {showOrHideLabel(element?._id, index)}}>
                    <span className={styles.tdHeader}>{element?.name[LanguageStoreV2.currentLanguage]}</span>
                    <div className={styles.tdButton} id={`${element?._id}-butP`}  >
                        <Image src={plus} />
                    </div>

                    <div className={styles.tdButtonHd} id={`${element?._id}-butM`}>
                        <Image src={minus}  />
                    </div>
                </td>
            </tr>
            <div className={styles.hidden} id={element?._id}>
                <tr className={styles.moreHidden} key={`${element?._id}-${element?.tickets?.length}`} >
                    <td className={styles.description}>
                        {LanguageStoreV2.priceList.propertyTitles.serviceDescription[LanguageStoreV2.currentLanguage]}
                    </td>
                    <td className={styles.duration}>
                        {LanguageStoreV2.priceList.propertyTitles.duration[LanguageStoreV2.currentLanguage]}
                    </td>
                    <td className={styles.price}>
                        {`${LanguageStoreV2.priceList.propertyTitles.price[LanguageStoreV2.currentLanguage]} €`}
                    </td>
                </tr>
                {element?.tickets?.map((el, i) => (
                    <tr className={styles.moreHidden} key={`${element?._id}-${i}`} >
                        <td className={styles.description}>
                            {el?.description[LanguageStoreV2.currentLanguage]}
                        </td>
                        <td className={styles.duration}>
                            {`${el?.duration?.hours != 0 ? el?.duration?.hours + ' h ' : ''}${el?.duration?.additionalInfo ? `${el?.duration?.additionalInfo.EST}` : ""}`}
                        </td>
                        <td className={styles.price}>
                            {`${el?.price != 0 ? el?.price + '' : ""}`}
                        </td>
                    </tr>
                ))}
            </div>
            </tbody>
        ))

    }


    return(
        <>
            {loading ? <p>Loading...</p> :
                <table className={styles.table}>
                    {createTableItems(data)}
                </table>
                }

        </>
    )
}

export default PriceListTableComponent