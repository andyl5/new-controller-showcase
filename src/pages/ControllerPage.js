import data from '../data.json'
import { useParams } from "react-router-dom"

function ControllerPage(){
    let { _brand, _console, _controller} = useParams()
    const brandName = _brand
    const consoleName = _console
    const controllerName = _controller
    const controllerDetails = data.brands.find(brand => brand.name === brandName).consoles.find(console => console.name === consoleName).controllers.find(controller => controller.name === controllerName)



    return (
        <div>
            <h1>{controllerName} variations</h1>
            {controllerDetails.variations.map((variation, index) => (
                <div key={index}>
                    <h2>{variation.name}</h2>
                    <p>{variation.release_info}</p>
                </div>
            ))}
        </div>
    )
}
export default ControllerPage