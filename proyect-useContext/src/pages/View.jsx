import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/store";

export default function View(){
    const [item, setItem] = useState(null)
    const params = useParams();
    const store = useAppContext();
    useEffect(()=>{
        const book = store.getItem(params.bookId);
        setItem(book)
    }, []);
    if(!item){
        return <Layout>Item not found</Layout>
    }
    return(
        <Layout>
           <h2 className="tittle">{item?.tittle}</h2> 
           <div>{item?.cover? <img src={item?.cover} alt="pic" width="400"/>: ""}</div>
            <div>{item ?.author}</div>
            <div>{item ?.intro}</div>
            <div>{item ?.completed ? "Leido" : "Por terminar"}</div>
            <div>{item ?.review}</div>
        </Layout>
    )
}