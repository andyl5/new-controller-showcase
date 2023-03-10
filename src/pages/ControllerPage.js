import data from '../data.json'
import { useParams } from "react-router-dom"

import Carousel from 'react-bootstrap/Carousel';

function ControllerPage(){
    let { _brand, _console, _controller} = useParams()
    const brandName = _brand
    const consoleName = _console
    const controllerName = _controller
    const controllerDetails = data.brands.find(brand => brand.name === brandName).consoles.find(console => console.name === consoleName).controllers.find(controller => controller.name === controllerName)


    return (
        <div className="container text-center">
            <h1>{controllerName} variations</h1>
            <Carousel variant="dark" indicators={false} interval={null}>
                {controllerDetails.variations.map((variation, index) => (
                    <Carousel.Item key={index}>
                        <img src={variation.image} alt={variation.name} style={{height:"400px"}}></img>
                        <h2>{variation.name}</h2>
                        <p>{variation.release_info}</p>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}
export default ControllerPage