import React from 'react'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homecontent from './components/layouts/Homecontent'
import { HelmetProvider } from 'react-helmet-async'
import ExploreContent from './components/explore/ExploreContent'
import SolarsystemPage from './components/explore/solarsystem/SolarsystemPage'
import Exoplanet from './components/explore/exoplanet/exoplanet'
import QuizLayout from './components/quiz/QuizLayout'
import Quiz from './components/quiz/Quiz'
import SolarSystem from './components/quiz/QuizStart/SolarSystemquiz'
import ExoplanetsQuiz from './components/quiz/QuizStart/ExoplanetsQuiz'

const App = () => {
	return (
		<>
			<Router>
				<div className='bg-img overflow-x-hidden'>
					<HelmetProvider>
						<div className='container'>
							<Header />
							<Routes>
								<Route path='/' element={<Homecontent />} />
								<Route path='/explore' element={<ExploreContent />} />
								<Route path='/explore/SolarSystem' element={<SolarsystemPage />} />
								<Route path='/explore/Exoplanets' element={<Exoplanet />} />
								<Route path='/quiz' element={<QuizLayout />} />
								<Route path='/quiz/quizsolarsystem' element={<SolarSystem/>} />
								<Route path='/quiz/quizexoplanet' element={<ExoplanetsQuiz/>} />
							</Routes>
						</div>
					</HelmetProvider>
					<Footer />
				</div>
			</Router>
		</>
	)
}

export default App