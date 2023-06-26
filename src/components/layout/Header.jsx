import Logo from "../atoms/logo/Logo"
import Navbar from "./navbar/Navbar"
import { HeaderContainer } from "./Heder.styles"

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Navbar/>
    </HeaderContainer>
  )
}

export default Header