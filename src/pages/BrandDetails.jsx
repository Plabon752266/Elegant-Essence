import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import ProductCard from "../components/ProductCard";


const BrandDetails = () => {
    const { name: brandName } = useParams();
    const [data,setData]= useState([])
    const axios = useAxios()
    useEffect(() => {
        axios.get(`/products?brand=${brandName}`)
        .then(res => setData(res.data))
    }, []);

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
            {
                data?.map(d => <ProductCard key={d._id} data ={d}></ProductCard>)
            }
            {
                data.length == 0 && <p>No data found</p>
            }
        </div>
    );
};

export default BrandDetails;