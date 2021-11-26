import Link from 'next/link'

export const getStaticProps = async()=>{
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await res.json()
    console.log(data)
    return{
        props : { data }
    }
}


const AllCategory =({data})=>{
console.log(data)

    return(
    <div>
        {data.categories.map(themas =>(
            <div key = {themas.idCategory}>
                <Link href={`/thema/${themas.strCategory}`}>{themas.strCategory}</Link>
            </div>
        ))}


            </div>
)


}
export default AllCategory