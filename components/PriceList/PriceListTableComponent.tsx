import styles from '../../styles/PriceListTableComponent.module.css'

function PriceListTableComponent(){
    return(
        <table>
            <tbody className={styles.label}>
                <tr>
                    <td colSpan={3} className={styles.labelTd}>
                        <span className={styles.tdHeader}>Example Price list</span>
                        <button className={styles.tdButton}>+</button>
                    </td>
                </tr>
            </tbody>
            <tbody className={styles.hiden}>
            <tr>
                <td colSpan={3} className={styles.labelTd}>
                    <span className={styles.tdHeader}>Example Price list</span>
                    <button className={styles.tdButton}>+</button>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

export default PriceListTableComponent