import { Link } from "react-router-dom"
export default function NavBar(){
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <Link to="/">HOME</Link>
                <Link to="/create">CREATE</Link>
             
            </div>
            
        </nav>
    )
}