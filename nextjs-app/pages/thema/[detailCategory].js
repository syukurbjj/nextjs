import  { useRouter } from "next/router"

export async function getStaticPaths() {
    return{
        paths : [{params : {detailCategory : 'Beef'}}], 
        fallback : true

    }
}

export const getStaticProps = async(contex)=>{
    // console.log(contex)
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${contex.params.detailCategory}`)
    const data = await res.json()
    console.log(data)
    return{
        props : {data}
    }
}


const detailCategory =({data})=>{
console.log(data)

return(<div>
    {data.meals.map(datas => (
        <div key={datas.idMeal}>
            {datas.strMeal}
        </div>
    ))}
</div>)

}
export default detailCategory