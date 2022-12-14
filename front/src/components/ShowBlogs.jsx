import axios from "axios"
import { useState,useEffect } from "react"
import {Link} from "react-router-dom"

//const url = "http://localhost:8000/blogs/"
const url = "http://localhost:8000/products/"

const ShowBlogs = ()=>{

    const [blogs,setBlog]= useState([])

    useEffect(()=>{
        getBlogs()
    },[])

//procedimiento para mostrar todos los blogs

const getBlogs = async ()=>{
    const res = await axios.get(url)
   setBlog(res.data)
}

//procedimiento para eliminar un blog
const deleteBlog = async (id)=>{
await axios.delete(`${url}${id}`)
getBlogs()
}
return (
<div className="container">
	
    <div className="row">
        <div className="col">
			<div></div>
			<h2 className="bg-info text-center">Sistema de Productos</h2>
			<nav class="navbar navbar-expand-sm bg-success " >
				<div class="container-fluid">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link" href="/" style={{ color: 'white'}}>Inicio</a> 
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/crear" style={{ color: 'white'}}>Facturar</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/blogs"style={{ color: 'white'}} >Blogs</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className="d-flex flex-row-reverse">

				<Link to="/create" className="btn btn-primary text_right  mt-2 mb-2 ps-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nuevo Reg.">CREAR UN NUEVO REGISTRO</Link>
			</div>
			
			<table className="table table-bordered table-striped">
			<thead className="table-primary">
			<tr>
				<th>Descripcion</th>
				
				<th>Precio</th>
				<th>Categoria</th>
				<th>Proveedor</th>
				<th className="text-center">Stock Actual</th>
				<th className="text-center">Stock Mínimo</th>
				<th className="text-center">Acciones</th>
			</tr>
			</thead>
			<tbody>
				{blogs.map((blog)=>(
				   <tr key= {blog.id}>
						
						<td>{blog.descripcion}</td>
						<td className="text-right">${blog.precio}</td>
						<td>{blog.categoria}</td>
						<td>{blog.detalles}</td>
						<td className="text-center">{blog.stock}</td>
						<td className="text-center">{blog.stock_minimo}</td>
						<td className="text-center">
						<Link to ={`/edit/${blog.id}`} className="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Modif.Reg."><i className="fas fa-edit"></i></Link>&nbsp;
						<button onClick={()=>deleteBlog(blog.id)} className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Eliminar Reg."><i className="fas fa-trash"></i></button>
						</td>

				   </tr>
				))}
			</tbody>
			</table>
        </div>
    </div>
	<div className="container-fluid">
		<footer className=" p-3" style={{ width: '100%', height: '60px' , bottom: '0', paddingLeft: '30px', paddingTop: '10px', paddingBottom: '5px', fontSize: '0.8em'}}>
			<p className="text-center bg-warning p-3" style={{}}>Realizado por el grupo 3 de Codo a Codo 4.0 React Comision 22807:<br/><small>Compuesto por Daniel Sebastian Cabrera, Magdalena Arrua, Belen Fernandez, Gabriel Nahuel Quiroga,
			Carla Gleadell, Daniel Enrique Emiro Mauthone, German Borges, Carlos Andres Lovera Rodriguez, Federico Cabrera y Jeferson Borges </small></p>
		</footer>
	</div>
</div>

)

}

export default ShowBlogs