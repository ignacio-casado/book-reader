import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/store";

export default function View(){
    const [item, setItem] = useState({})
    const params = useParams();
    const store = useAppContext();
    useEffect(()=>{
        const book = store.getItem(params.bookId);
        setItem(book)
    }, []);
    if(!item){
        return<div>Item not found</div>
    }
    return(
        <Layout>
           <h2>{item?.tittle}</h2> 
           <div>{item?.cover? <img src={item.cover} alt="pic" width="400"/>: ""}</div>
        </Layout>
    )
}