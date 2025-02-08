import React from 'react'
import Dashboard from './components/pages/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Depense from './components/pages/depense/Depense'
import Stock from './components/pages/stock/Stock'
import Prospection from "./components/pages/prospection/Prospection"
import Erreur from './components/pages/erreur/Erreur'
import PageLayout from './layout/routes/PageLayout'
import DetailsProspection from './components/pages/prospection/DetailsProspection'
const App = () => {
        return (
                <div>
                        <Routes>
                                <Route path="/" element={<PageLayout />}>
                                        <Route index element={<Dashboard/>}/>
                                                {/* prospection */}
                                        <Route path='prospection' element={<Prospection/>}/>
                                        <Route path='prospection/:id' element={<DetailsProspection/>}/>
                                        <Route path='depense' element={<Depense/>}/>
                                        <Route path='stock' element={<Stock/>}/>
                                </Route>
                                <Route path='*' element={<Erreur/>}/>
                        </Routes>
                </div>
        )
}

export default App
