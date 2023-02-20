import data from '../data.json'
import { NavLink, useParams } from 'react-router-dom';

function ConsolePage(){
    let { _brand, _console } = useParams()
    const brandName = _brand
    const consoleName = _console
    const controllerList = data.brands.find(brand => brand.name === brandName).consoles.find(console => console.name === consoleName).controllers

    return (
        <div>
            <h1>Hello I am all the {consoleName} controllers</h1>
            {controllerList.map((controller, index) =>(
                <div key={index}>
                    <NavLink to={controller.name}><h2>{controller.name}</h2></NavLink>
                    <p>{controller.release_date}</p>
                    <p>{controller.description}</p>
                </div>
            ))}
        </div>
    )
}
export default ConsolePage