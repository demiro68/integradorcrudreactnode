// importar la conexion a la base de datos
import db from "../database/db.js"

//sequelize
import { DataTypes } from "sequelize"

const BlogModel = db.define("products",{
   descripcion:{type:DataTypes.STRING},
   precio:{type:DataTypes.DECIMAL(10,2)},
   categoria:{type:DataTypes.STRING},
   detalles:{type:DataTypes.STRING},
   stock:{type:DataTypes.INTEGER},
   stock_minimo:{type:DataTypes.INTEGER}
})

export default BlogModel