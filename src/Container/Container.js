import styles from './Container.module.css'

import Form from '../Form/Form';
import TaxInfo from '../TaxInfo/TaxInfo';

function Container() {
    return (
        <div className={styles.container}>
            <Form/>
            <TaxInfo/>
        </div>
    )
}

export default Container;