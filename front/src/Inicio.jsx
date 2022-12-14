//importar los componentes

import ShowInicio from "./components/ShowBlogs"
//import {EditBlog} from "./components/EditBlog"
//import {CreateBlog} from "./components/CreateBlog" 

import {BrowserRouter, Routes,Route} from "react-router-dom"

function Inicio() {
    return (
        <div className="Inicio">
            <header className="Inicio-header">
            </header>
            <BrowserRouter>
                <Routes>
                    <Route path='/inicio' element={<ShowInicio/>}    />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Inicio;
