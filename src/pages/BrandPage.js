import data from '../data.json'
import { NavLink, useParams} from 'react-router-dom'

import Card from 'react-bootstrap/Card'


function BrandPage(){
    let { _brand } = useParams()
    const brandName = _brand
    const consoleList = data.brands.find(brand => brand.name === brandName).consoles

    return (
        // <div>
        //     <h1>{_brand}</h1>
        //     <div className="row">
        //         {consoleList.map((console, index) => (
        //             <NavLink to={console.name} className="col-2 text-decoration-none">
        //                 <Card key={index}>
        //                     <Card.Img variant='top' src={console.image} className='align-items-center justify-content-center'/>
        //                     <Card.Body className='text-center'>
        //                         <Card.Title>{console.name}</Card.Title>
        //                     </Card.Body>
        //                 </Card>
        //             </NavLink>
        //             ))}
        //     </div>
        // </div>

        <div>
        <h1>{_brand}</h1>
        <div className="row">
            {consoleList.map((console, index) => (
                <NavLink to={console.name} className="col-2 text-decoration-none" key={index}>
                    <Card style={{ width: '200px', height: '200px' }}>
                        <Card.Img 
                            variant='top' 
                            src={console.image} 
                            style={{ width: '100%', height: '80%', objectFit: 'contain' }}
                        />
                        <Card.Body className='text-center' style={{ height: '20%' }}>
                            <Card.Title>{console.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </NavLink>
            ))}
        </div>
    </div>
    )
}
export default BrandPage