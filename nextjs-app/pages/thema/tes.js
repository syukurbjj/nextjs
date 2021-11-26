import { useState } from "react";
const fetchData = async () => {
    const [categories, setCategories] = useState(null)
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const result = await data.json()
    setCategories(result.categories)

    useEffect(() => {
        fetchData()
    });

    return (
        <div>{categories ? (<div>
            {
                categories.map(category => (<div key={category.idCategory}>
                    {category.strCategory}
                </div>))
            }

        </div>) : <p>loading</p>}
        </div>
    )

}

