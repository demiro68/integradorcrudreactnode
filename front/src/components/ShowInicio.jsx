import axios from "axios"
//import { useState,useEffect } from "react"
//import {Link} from "react-router-dom"

const url = "http://localhost:8000/inicio"

const ShowInicio = ()=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form>
                        <h2 className="bg-info text-center">Ingreso al sistema</h2>
                        <label>
                            Usuario:
                            <input type="text" name="user" />
                        </label>
                        <label>
                            Contraseña:
                            <input type="password" name="pass" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    
                    
                </div>
            </div>

        </div>
    )
}

export default ShowInicio