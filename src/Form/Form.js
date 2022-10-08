import React, {useState} from 'react';

import styles from './Form.module.css';
import calculatePersonalIncomeTax from '../TaxCalculation/TaxCalculation';


function Form() {

    const [tax, setTax] = useState(0);
    const [people, setPeople] = useState(0);
    const [income, setIncome] = useState(0);

    const handleTaxCalculation = () => {
        // if (/^\d+$/.test(income)) {
        //     if (/^\d+$/.test(people)) {
        //         // check số âm
        //         var nPeople = parseInt(people);
        //         var nIncome = parseInt(income);

        //         console.log('Final' + calculatePersonalIncomeTax(30000000, 0));
        //         setTax(calculatePersonalIncomeTax(30000000, 0));

        //     } else {
        //         alert('Số người phụ thuộc không phải là một số!')
        //     }
        // }
        // else {
        //     alert('Tổng thu nhập không phải là một con số!');
        // }

        setTax(calculatePersonalIncomeTax(income, people));
    }

    return (
        <div className={styles.formContainer}>

            <div className={styles.formInfo}>
                <h1 className={styles.title}>
                    Tính thuế thu nhập cá nhân 
                </h1>

                <div className={styles.inputLine}>
                    <p className={styles.formLabel}>Tổng thu nhập: </p>
                    <input 
                        type="text" 
                        className={styles.formInput}
                        value={income}
                        onChange={e => setIncome(e.target.value)}/>
                </div>

                <div className={styles.inputLine}>
                    <p className={styles.formLabel}>Số người phụ thuộc:</p>
                    <input 
                        type="text" 
                        className={styles.formInput}
                        value={people}
                        onChange={e => setPeople(e.target.value)}/>
                </div>

                <button 
                    className={styles.calculateButton}
                    onClick={handleTaxCalculation}>
                    Tính thuế cần đóng
                </button>

                <div className={styles.line}>
                    <p className={styles.formLabel}>Thuế TNCN cần nộp:</p>
                    <p className={styles.taxResult}>
                        {
                            tax + ' VND'
                        }
                    </p>
                </div>
            </div>        
        </div>
    )
}

export default Form;