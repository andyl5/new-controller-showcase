import data from '../data.json'
import { NavLink, useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card'

function ConsolePage(){
    let { _brand, _console } = useParams()
    const brandName = _brand
    const consoleName = _console
    const controllerList = data.brands.find(brand => brand.name === brandName).consoles.find(console => console.name === consoleName).controllers

    return (
        <div>
            <h1>Hello I am all the {consoleName} controllers</h1>
            <div className="row">
                {controllerList.map((controller, index) =>(
                    <NavLink to={controller.name} className="col-3 text-decoration-none">
                        <Card key={index} style={{width: '18rem', height: '18rem'}}>
                            <Card.Img variant="top" src={controller.image}/>
                            <Card.Body className="text-center">
                                <Card.Title>{controller.name}</Card.Title>
                                {/* <Card.Text>{controller.description}</Card.Text> */}
                            </Card.Body>
                        </Card>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
export default ConsolePage