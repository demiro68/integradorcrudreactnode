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
		<h2 className="bg-info text-center">Manejo de un Sistema de Productos</h2>
        <h3>Modificar un Producto</h3>
        <form onSubmit={update}>
			<div className="mb-3">
				<label className="form-label">Descripcion</label>
				<input
					value={descripcion}
					onChange={(e)=>setDescripcion(e.target.value)}
					 type="text" className="form-control" 
					 />
			</div>
            <div className="mb-3">
				<label className="form-label">Precio</label>
				<input
					value={precio}
					onChange={(e)=>setPrecio(e.target.value)}
					 type="text" className="form-control" 
					 />
			</div>
            <div className="mb-3">
				<label className="form-label">Categoria</label>
				<input
					value={categoria}
					onChange={(e)=>setCategoria(e.target.value)}
					 type="text" className="form-control" 
					 />
			</div>
            <div className="mb-3">
				<label className="form-label">Proveedor</label>
				<input
					value={detalles}
					onChange={(e)=>setDetalles(e.target.value)}
					 type="text" className="form-control" 
					 />
			</div>
            <div className="mb-3">
				<label className="form-label">Stock Actual</label>
				<input
					value={stock}
					onChange={(e)=>setStock(e.target.value)}
					 type="text" className="form-control" 
					 />
			</div>
            <div className="mb-3">
				<label className="form-label">Stock Minimo</label>
				<input
					value={stock_minimo}
					onChange={(e)=>setStockMinimo(e.target.value)}
					 type="text" className="form-control" 
					 />
			</div>
			
			<div className="text-center">
				<button type="submit" className="btn btn-primary">EDITAR</button>&nbsp;
				<Link to="/" className="btn btn-warning mt-2 mb-2 ps-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Volver Atras">Volver al menu anterior</Link>
			</div>
        </form>
    </div>
)


}