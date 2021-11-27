import Link from "next/link"

const PageAlldata = ({ data }) => {
    return (
        <div>
            {data.categories.map(datas => (
                <div>
                    <Link href={`/detail/${datas.strCategory}`} key={datas.idCategory}>
                        {datas.strCategory}</Link>
                </div>
            ))}
        </div>
    )
}




// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default PageAlldata