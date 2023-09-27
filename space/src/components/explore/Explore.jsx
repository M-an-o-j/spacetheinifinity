import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MetaData from '../layouts/Metadata';
import arrow from '../../assets/svg/arrow.svg'
import { Link } from 'react-router-dom';

const Explore = ({ explorecontent }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            {console.log(explorecontent)}
            <div className='mb-4'>
                <MetaData title={"Explore"} />
                {explorecontent.map((data) => (
                    <div className={`bg-dark rounded-3 my-2 grid `} data-aos={`fade${data.aos}`}>
                        <div className={`p-4 row ${data.flex}`}>
                            <div className='px-4 col-md-8 d-flex flex-column '>
                                <div>
                                    <h2 className='text-light txt-fnt'>{data.Heading}</h2>
                                    <p className='text-light font-monospace'>{data.Intro}</p>
                                </div>
                                <Link to={`/explore/${data.Heading}`} className='text-decoration-none'>
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <h6 className='text-light me-2'>Click here</h6>
                                        </div>
                                        <div>
                                            <img className='explore-arrow' src={arrow} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='text-end col-md-4 '>
                                <img className='img-fluid w-100 explore-img object-fit-cover rounded-2' src={data.pic} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Explore