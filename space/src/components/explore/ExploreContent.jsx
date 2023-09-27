import React from 'react'
import Explore from './Explore'
import { ExplorePageContent } from '../../Datas/Exploredata/explorepagecontent'

const ExploreContent = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='text-center my-3 my-md-5'>
                    <h1 className='text-light txt-fnt fs-2'>Explore cosmos here !</h1>
                </div>
                <div>
                    <Explore explorecontent={ExplorePageContent} />
                </div>
            </div>
        </>
    )
}

export default ExploreContent