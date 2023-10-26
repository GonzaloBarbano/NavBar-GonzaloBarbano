import { CarWidget } from "../CartWidget/CarWidget"


export const NavBar = () => {
    return (
        <nav className="d-flex justify-content-around align-items-center p-5">
            <div>
                <button className="btn btn-outline-primary mx-2">Inicio</button>
                <button className="btn btn-outline-primary mx-2">Productos</button>
                <button className="btn btn-outline-primary mx-2">Carrito</button>
            </div>
            <div className="d-flex">
                <CarWidget/>
                <p>0</p>
            </div>
        </nav>
    )
}
