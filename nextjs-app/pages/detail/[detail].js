import Link from "next/link"


export async function getServerSideProps(ctx) {

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${ctx.params.detail}`)
    const details = await res.json()
    return {
        props: { detail: details }
    }
}





const showCategory = ({ detail }) => {

    return (
        <div>
            {detail.meals.map(det => (
                <div>
                    <Link href={`/detail/menu/${det.idMeal}`}>
                        {det.strMeal}
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default showCategory