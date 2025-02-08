import React from 'react'
import Dashboard from './components/pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Depense from './components/pages/Depense'
import Stock from './components/pages/Stock'
import Prospection from "./components/pages/Prospection"
import Erreur from './components/pages/Erreur'
import PageLayout from './layout/routes/PageLayout'
const App = () => {
        return (
                <div>
                        <Routes>
                                <Route path="/" element={<PageLayout />}>
                                        <Route index element={<Dashboard/>}/>
                                        <Route path='prospection' element={<Prospection/>}/>
                                        <Route path='depense' element={<Depense/>}/>
                                        <Route path='stock' element={<Stock/>}/>
                                </Route>
                                <Route path='*' element={<Erreur/>}/>
                        </Routes>
                </div>
        )
}

export default App
