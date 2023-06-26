import { Link } from "react-router-dom"
import { Nav } from "./Navbar.styles"

function Navbar() {
  return (
    <Nav>
			
				<Link to={"/galeries"}>
					Galeries
				</Link>
				<Link to={"/evenements"}>
					Evenements
				</Link>
				<Link to={"/connexion"}>
					Inscription / Connexion
				</Link>
	
			
		</Nav>
  )
}

export default Navbar