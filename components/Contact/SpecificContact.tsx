import styles from '../../styles/SpecificContact.module.css'

type SpecificContactProps = {
    data :{
        imgUrl : string,
        position : string,
        name : string,
        telefon : string,
        email : string
    }
    }

function SpecificContact({data} : SpecificContactProps){
    return(
        <article className={styles.SpecificContact}>
            <img src={data.imgUrl} alt={'Personal Photo'}/>
            <div className={styles.textContainer}>
                <p><b>{data.position}</b></p>
                <p>{data.name}</p>
                <p>Telefon: {data.telefon}</p>
                <p>E-mail: {data.email}</p>
            </div>
        </article>
    )
}

export default SpecificContact