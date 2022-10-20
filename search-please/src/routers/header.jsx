import { Outlet, Link } from "react-router-dom";
import './header.css'

export default function Header() {
    return (
      <>
        <div id="header">
            <div className="logo">
                <p>
                    <Link to={"/"}>search please</Link>                    
                </p>
            </div>

            <nav className="links">
                <ul>
                    <li>
                        <Link to={"catalogo"}>Catalogo</Link>
                    </li>
                    <li>
                        <Link to={"sobre"}>Sobre</Link>
                    </li>
                    <li>
                        <Link to={"contato"}>Contato</Link>
                    </li>
                </ul>
            </nav>
        </div>

        <div id="detalhe">
            <Outlet/>
        </div>
      </>
    );
  }