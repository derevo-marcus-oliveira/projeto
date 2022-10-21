import { Outlet, Link } from "react-router-dom";
import './header.css'

export default function Header() {
    return (
      <>
        <div id="container">
            <div id="header">
                <div className="logo">
                    <p>search please</p>
                </div>
                <div className="container-header">
                   
                    <div className="area1">
                        <input type="text" className="campo" />
                        <button type="submit" className="pesquisa">
                           <Link to={""}>
                                <i class="fa-solid fa-magnifying-glass"></i>
                           </Link>
                        </button>

                        <div className="perfilUsuario">

                            <p>Fulano de Tal</p>
                            <div className="perfil">

                            </div>
                        </div>

                    </div>
                    <div className="area2">

                    </div>

                </div>
            </div>
    
            <div id="detalhe">
                
            </div>
        </div>
      </>
    );
  }