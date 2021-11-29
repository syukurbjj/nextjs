import Link from "next/link"
import styles from "../styles/Home.module.css"
import Image from 'next/image';
const PageAlldata = ({ data }) => {
    return (


        <div className="container">
            <div className="row">
                <div className={styles.flexcontainer}>

                    {data.categories.map(datas => (
                        <div className="card" style={{ width: "18rem;", marginTop: "10px" }}>
                            <img src={datas.strCategoryThumb} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title" style={{color : "red;" }}><Link style={{color : "red !important;" }} href={`/detail/${datas.strCategory}`}  key={datas.idCategory}>
                                    {datas.strCategory}</Link></h5>
                            </div>
                            </div>
            ))}

                        </div> 
    
  </div>
            </div>

            )
}




            // This gets called on every request
            export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            const data = await res.json()

            // Pass data to the page via props
            return {props: {data} }
}

            export default PageAlldata