

export default function Contato() {
    return (
      <>
        <div id="contato">
            <h3>Contato</h3>            
            <div className="info">
                <div>
                    <input type="text" className="campo" id="nome" placeholder="Nome" />
                    <input type="text" className="campo" id="sobrenome" placeholder="Sobrenome" />
                </div>

                <div>
                    <input type="text" className="campo" id="email" placeholder="Email" />
                    <input type="text" className="campo" id="fone" placeholder="Telefone" />
                </div>

                <div>
                    <textarea name="msg" className="campotext campo" id="mdg" cols="30" rows="10" placeholder="Mensagem"></textarea>
                </div>
            
            </div>
        </div>
      </>
    );
  }