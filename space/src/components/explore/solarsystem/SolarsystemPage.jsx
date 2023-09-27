import React from 'react'
import solarsystem from '../../../assets/images/solarsystem/solarsystem.jpg'
import { Solarsystem } from '../../../Datas/Exploredata/SolarsystemPagecontent.js'

const SolarsystemPage = () => {
    return (
        <>
            <div className='mb-5 container-fluid'>
                <div className='text-center py-4'>
                    <h1 className='text-light txt-fnt'>Solarsystem</h1>
                </div>
                <div>
                    <div className='bg-dark rounded-3'>
                        <div className='p-3 p-md-5'>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <h3 className='text-light txt-fnt fs-2'>What is Solarsystem ?</h3>
                                    <p className='text-light my-2 font-monospace'>The solar system consists of our Sun, a majestic, life-giving star, orbited by an entourage of eight planets, their moons, and countless asteroids and comets, all bound together by the force of gravity. This intricate cosmic dance showcases the wonders of space, offering a glimpse into the vastness and complexity of the universe beyond.</p>
                                </div>
                                <div className='col-md-4'>
                                    <img className='img-fluid rounded-3' src={solarsystem} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-3 '>
                        {Solarsystem.map((data) => (
                            <>
                                <div className='row gap-2 mb-4'>

                                    {data.firstThree.map((data) => (
                                        <div className='col-md bg-dark rounded-3 p-3 d-flex flex-column'>
                                            <div className='col'>
                                                <h3 className='text-light txt-fnt'>{data.Name}</h3>
                                                <p className='text-light font-monospace'>{data.Summary}</p>
                                            </div>
                                            <div className='col'>
                                                <img src={data.pic} className='img-fluid rounded-3 object-fit-cover h-100' alt="" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='row gap-2 mb-4'>
                                    {data.secondThree.map((data) => (
                                        <div className='col-md bg-dark rounded-3 p-3 d-flex flex-column'>
                                            <div className='col'>
                                                <h3 className='text-light txt-fnt'>{data.Name}</h3>
                                                <p className='text-light font-monospace'>{data.Summary}</p>
                                            </div>
                                            <div className='col'>
                                                <img src={data.pic} className='img-fluid rounded-3 object-fit-cover h-100' alt="" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='row gap-2 mb-4'>
                                    {data.thirdTwo.map((data) => (
                                        <div className='col-md bg-dark rounded-3 p-3 d-flex flex-column'>
                                            <div className='col'>
                                                <h3 className='text-light txt-fnt'>{data.Name}</h3>
                                                <p className='text-light font-monospace'>{data.Summary}</p>
                                            </div>
                                            <div className='col'>
                                                <img src={data.pic} className='img-fluid rounded-3 object-fit-cover h-100' alt="" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}

export default SolarsystemPage