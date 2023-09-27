import solarsyatem from '../../assets/images/SolarSystem.jpg'
import exoplanet from '../../assets/images/exoplanet.jpg'
import galaxy from '../../assets/images/galaxy.jpg'
import astronomers from '../../assets/images/astronomers.jpg'

export const ExplorePageContent = [
    {
        Heading:"SolarSystem",
        Intro : "Solarsystem is the place where planet arounding star. You can explore our Solarsystem here ! ",
        pic:solarsyatem,
        flex:"",
        aos:"-right"
    },
    {
        Heading:"Exoplanets",
        Intro:"Exoplanets means other planets which is not in our solarsystem. You can explore those planets here !",
        pic:exoplanet,
        flex:"reverse-columns",
        aos:"-left"
    },
    {
        Heading:"Galaxies",
        Intro:"Galaxies is that hold billions of stars, planets, and cosmic wonders. You can explore those Galaxies here !",
        pic:galaxy,
        flex:"",
        aos:"-right"
    },
    {
        Heading:"Astronomers",
        Intro:"An astronomer is a scientist who focuses their studies on a field outside the scope of Earth. learn about them here !",
        pic:astronomers,
        flex:"reverse-columns ",
        aos:"-left"
    }
]