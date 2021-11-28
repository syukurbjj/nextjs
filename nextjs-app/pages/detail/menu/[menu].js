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
        <div className="container">
            <div className="row">

            {datas.map(dat => (
                <div>
                    
                   <h1> {dat.strMeal} </h1>
                   <img src={dat.strMealThumb} className="img-fluid"></img>
                   <li class="list-group-item">{dat.strInstructions}</li>
                   <iframe 
                  src={`https://www.youtube.com/embed/${dat.strYoutube.split("=")[1]}`}
                  frameBorder="0"
                  width="500"
                  height="500"
                />
                </div>
            ))}
            </div>
        </div>
    )

}

export default menuMeal