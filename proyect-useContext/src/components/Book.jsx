import { Link } from "react-router-dom"
export default function Book ({item}){
    return (
        <div className="book">
            <Link>
            <img src={item.cover} alt="book"  width="200"/>
            <h2>{item.tittle}</h2>
            <h4>{item.author}</h4>
            <p>{item.intro}</p>
            </Link>
        </div>
    )
}