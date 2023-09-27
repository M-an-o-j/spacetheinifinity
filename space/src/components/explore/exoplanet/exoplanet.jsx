import React from 'react'
import exoplanet from '../../../assets/images/exoplanet.jpg'
import { exoplanets } from '../../../Datas/Exploredata/Exoplanets'

const Exoplanet = () => {
  return (
    <>
      <div>
        <div className='mt-md-5 text-center'>
          <h1 className='txt-fnt text-light'>Exoplanet</h1>
        </div>
        <div className='bg-dark rounded-3 my-5'>
          <div className='p-md-5 p-3 row'>
            <div className='col-md-8'>
              <h2 className='text-light txt-fnt'>What is Exoplanets ?</h2>
              <p className='text-light font-monospace '> Exoplanets are planets that orbit stars beyond our solar system, making them part of distant planetary systems.Scientists detect exoplanets using various methods, such as the transit and radial velocity techniques, enabling them to study these worlds indirectly.Exoplanets come in diverse sizes and compositions, ranging from gas giants to rocky, Earth-like planets. Some exoplanets are located within the habitable zone of their stars, where conditions might support the existence of liquid water and, potentially, life.</p>
            </div>
            <div className='col-md-4'>
              <img src={exoplanet} className='img-fluid rounded-3 w-100 h-100 object-fit-cover' alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className='text-center mb-3'>
            <h2 className='text-light txt-fnt'>List of nearest exoplanets</h2>
          </div>
          <div className='cotainer-fluid overflow-x-scroll'>
            <table className="table rounded-3 table-dark table-striped table-hover">
              <thead>
                <tr>
                  <th scope='col' className='txt-fnt'>Name</th>
                  <th scope='col' className='txt-fnt'>Distance (ly)</th>
                  <th scope='col' className='txt-fnt'>Apparent magnitude</th>
                  <th scope='col' className='txt-fnt'>Mass (solar mass)</th>
                </tr>
              </thead>
              {exoplanets.map((data) => (
                <tbody>
                  <tr>
                    <td className='font-monospace'>{data.Name}</td>
                    <td className='font-monospace'>{data.distance} ly</td>
                    <td className='font-monospace'>{data.magnitude}</td>
                    <td className='font-monospace'>{data.mass}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exoplanet