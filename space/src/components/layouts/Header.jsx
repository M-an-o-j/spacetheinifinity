import React from 'react'
import { navbar } from '../../Datas/NavbarData'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='d-flex  justify-content-between pt-4 w-md-100 mx-md-auto'>
                    {navbar.map((data) => (
                        <li className='list-unstyled nav-item' key={data.Name}><Link className='text-decoration-none txt-fnt' to={`/${data.Link}`}>{data.Name}</Link></li>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Header