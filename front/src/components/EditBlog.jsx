import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {Link} from "react-router-dom"

const url = "http://localhost:8000/products/"

export const EditBlog=()=>{

    const [descripcion,setDescripcion]=useState("")
	const [precio,setPrecio]=useState(0)
	const [categoria,setCategoria]=useState("")
	const [detalles,setDetalles]=useState("")
	const [stock,setStock]=useState(0)
	const [stock_minimo,setStockMinimo]=useState(0)


    const navigate=useNavigate()

    const {id} = useParams()

    // procedimiento para actualizar /editar un blog

    const update = async (e)=>{
        e.preventDefault()
        await axios.put(url+id,{
            descripcion:descripcion,
			precio:precio,
			categoria:categoria,
			detalles:detalles,
			stock:stock,
			stock_minimo:stock_minimo
        })
        navigate("/")
    }
    
    useEffect(()=>{
        getBlogById()
		//eslint-disable-next-line
    },[])

    const getBlogById= async()=>{
        const res = await axios.get(url+id)
        setDescripcion (res.data.descripcion)
        setPrecio(res.data.precio)
        setCategoria(res.data.categoria)
        setDetalles(res.data.detalles)
        setStock(res.data.stock)
        setStockMinimo(res.data.stock_minimo)
    }
    
return(
    <div className="container">
		<h2 className="bg-info text-center">Sistema de Productos</h2>
        <h3>Modificar un Producto</h3>
        <form onSubmit={update}>
			<div className="mb-3">
				<label className="form-label col-md-2">Descripcion</label>
				<input
					value={descripcion}
					onChange={(e)=>setDescripcion(e.target.value)}
					 type="text" className="col-md-9" 
					 />
			</div>
            <div className="mb-3">
				<label className="form-label col-md-2">Precio</label>
				<input
					value={precio}
					onChange={(e)=>setPrecio(e.target.value)}
					 type="text" className="" 
					 />
			</div>
            <div className="mb-3">
				<label className="form-label col-md-2">Categoria</label>
				<input
					value={categoria}
					onChange={(e)=>setCategoria(e.target.value)}
					 type="text" className="col-md-9" 
					 />
			</div>
            <div className="mb-3">
				<label className="form-label col-md-2">Proveedor</label>
				<input
					value={detalles}
					onChange={(e)=>setDetalles(e.target.value)}
					 type="text" className="col-md-9" 
					 />
			</div>
            <div className="mb-3">
				<label className="form-label col-md-2">Stock Actual</label>
				<input
					value={stock}
					onChange={(e)=>setStock(e.target.value)}
					 type="text" className="" 
					 />
				<label className="form-label col-md-2 offset-md-1">Stock Minimo</label>
				<input
					value={stock_minimo}
					onChange={(e)=>setStockMinimo(e.target.value)}
					 type="text" className="" 
					 />
			</div>
            
			
			<div className="text-center">
				<button type="submit" className="btn btn-primary">EDITAR</button>&nbsp;
				<Link to="/" className="btn btn-warning mt-2 mb-2 ps-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Volver Atras">Volver al menu anterior</Link>
			</div>
        </form>
		<div className="container-fluid">
			<footer className=" p-3" style={{ width: '100%', height: '60px' , bottom: '0', paddingLeft: '30px', paddingTop: '10px', paddingBottom: '5px', fontSize: '0.8em'}}>
				<p className="text-center bg-warning p-3" style={{}}>Realizado por el grupo 3 de Codo a Codo 4.0 React Comision 22807:<br/><small>Compuesto por Daniel Sebastian Cabrera, Magdalena Arrua, Belen Fernandez, Gabriel Nahuel Quiroga,
				Carla Gleadell, Daniel Enrique Emiro Mauthone, German Borges, Carlos Andres Lovera Rodriguez, Federico Cabrera y Jeferson Borges </small></p>
			</footer>
		</div>
    </div>
)


}