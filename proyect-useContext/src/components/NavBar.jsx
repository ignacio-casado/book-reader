import { Link } from "react-router-dom"
export default function NavBar(){
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/"><a className="home">HOME</a></Link>

                <Link to="/create"><a className="create">CREATE</a></Link>   
            </div>
            
        </nav>
    )
}