//Code is not working yet Error:export 'default' (imported as 'Data') was not found in './Data' (possible exports: Data, dataLoader)

import React from 'react'
import { Link, Outlet, Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'

import Home from "./Home"
import Data, { dataLoader } from "./Data"
import Contact from "./Contact"

const ReactRouter = (props) => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route element={<Data />} loader={dataLoader} />
                <Route element={<Contact />} />
            </Route>
        )
    )

    return (
        <div className='main-div'>
            <h1>Learning how to use ReactRouter in Reactjs</h1>
            <RouterProvider router={router} />
        </div>
    )

}

    const Root =()=>{
        return (
            <>
                <div>
                    <Link to="/">Home</Link> 
                    <Link to="/data">Data</Link>
                </div>
                <div>
                    <Outlet />
                </div>
            </>
        )
    } 

    


export default ReactRouter