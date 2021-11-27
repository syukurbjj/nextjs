export async function getServerSideProps(context) {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + context.params.menu)
    const data = await res.json()

    return {
        props: {
            datas: data.meals
        }, // will be passed to the page component as props
    }
}


const menuMeal = ({ datas }) => {
    return (
        <div>
            {datas.map(dat => (
                <div>
                    {dat.strMeal}
                </div>
            ))}
        </div>
    )

}

export default menuMeal