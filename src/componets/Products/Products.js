import { useContext } from "react";
import { DataContext } from "../Context/DataContext";


const Products = () => {
const {data} = useContext(DataContext);
  
    return data.map((Products)=>{
        return(
            <div className="card">
                <img src={Products.img}></img>
                <h3>{Products.title}</h3>
                <h4>{Products.precio}$</h4>
                <button>Comprar</button>
            </div>
        );
    });
};

export default Products;