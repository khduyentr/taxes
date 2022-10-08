import styles from './TaxInfo.module.css'

function TaxInfo() {
    return (
        <div className={styles.infoContainer}>
            <h1 className={styles.title}>Bảng thu nhập tính thuế và thuế suất</h1>

            <table className={styles.styledTable}>
                <thead>
                    <tr>
                        <th>Bậc</th>
                        <th>Thu nhập tính thuế/tháng (triệu đồng)</th>
                        <th>Thuế suất</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Đến 05</td>
                        <td>5%</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Trên 5 đến 10</td>
                        <td>10%</td>
                    </tr>
        
                    <tr>
                        <td>3</td>
                        <td>Trên 10 đến 18</td>
                        <td>15%</td>
                    </tr>

                    
                    <tr>
                        <td>4</td>
                        <td>Trên 18 đến 32</td>
                        <td>20%</td>
                    </tr>

                    
                    <tr>
                        <td>5</td>
                        <td>Trên 32 đến 52</td>
                        <td>25%</td>
                    </tr>

                    
                    <tr>
                        <td>6</td>
                        <td>Trên 52 đến 80</td>
                        <td>30%</td>
                    </tr>

                    
                    <tr>
                        <td>7</td>
                        <td>Trên 80</td>
                        <td>35%</td>
                    </tr>


                </tbody>
            </table>

            <div className={styles.notice}>
                <h3>Lưu ý</h3>
                <p>Thu nhập tính thuế không phải tổng thu nhập mà người lao động nhận được.</p>
            </div>



        </div>
    );
}

export default TaxInfo;