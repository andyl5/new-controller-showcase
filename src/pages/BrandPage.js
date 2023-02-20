import data from '../data.json'
import { NavLink, Outlet, useParams} from 'react-router-dom'

function BrandPage(){
    let { _brand } = useParams()
    const brandName = _brand
    const consoleList = data.brands.find(brand => brand.name === brandName).consoles

    return (
        <div>
            <h1>{_brand}</h1>
            {consoleList.map((console, index) => (
                <div key={index}>
                    <NavLink to={console.name}>{console.name}</NavLink>
                </div>
            ))}
        </div>
    )
}
export default BrandPage