import React, { useEffect, useState } from 'react'
import title from '../../assets/images/title.png'
import earth from '../../assets/images/earth.png'

const Title = () => {
    const [jello, setJello] = useState("")
    const [titleslide, setTitleslide] = useState("")

    useEffect(() => {
        setJello("jello-vertical")
        setTitleslide("slide-in-left")
    },[])
    

    return (
        <>
            <div className="container-fluid py-5">
                <div className='d-flex flex-column flex-md-row align-items-center'>
                    <div>
                        <img className={`${titleslide} img-fluid`} src={title} alt="" />
                    </div>
                    <div>
                        <img className={`${jello} img-fluid`} src={earth} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Title