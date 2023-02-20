import data from '../data.json'
import { useParams } from 'react-router-dom';

function Gamecube(){
    let { _brand, _console } = useParams()

    // const brandName = "Nintendo"; // take this value from props
    const brandName = _brand
    const consoleName = _console

    const controllerList = data.brands.find(brand => brand.name === brandName).consoles.find(console => console.name === consoleName).controllers


    return (
        <div>
            <p>What's up I'm testing useParams. {consoleName}</p>
            <h1>Hello I am all the {consoleName} controllers</h1>

            {controllerList.map((controller, index) =>(
                <div key={index}>
                    <h2>{controller.name}</h2>
                    <p>{controller.release_date}</p>
                    <p>{controller.description}</p>
                </div>
            ))}


        </div>
    )
}
export default Gamecube