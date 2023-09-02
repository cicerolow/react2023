//estilizacao
import "./style.css";

//imagens
// import imgMenu_superior from "../../assets/img/menu_superior.png";
// import imgMenu_inferior from "../../assets/img/menu_inferior.png";
// import imgProd_segundo from "../../assets/img/Prod segundo.png";
// import imgQtd_prod_hora from "../../assets/img/Qtd_prod_hora.png";
// import imgTempo_em_min from "../../assets/img/imgTempo_em_min.png";
// import imgMeta_prop from "../../assets/img/Meta_prop.png";

//rotas
import { Link } from "react-router-dom";

function CadastroUsuario() {
    return(
        <main className="banner">
  {/*indica o conteudo principal*/}
  <aside className="posiciomaneto_menu">
    <Link
      id="menu_barras"
      aria-label="abrir menu"
      aria-controls="menu_lateral"
      aria-expanded="false"
      aria-haspopup="true"
      className="menu_barras"
      to={"#"}
      onClick={mostrarMenu}
    >
      <svg
        width={170}
        height={90}
        viewBox="0 0 170 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={85} cy={45} r={44} stroke="white" strokeWidth={2} />
        <line y1={44} x2={170} y2={44} stroke="white" strokeWidth={2} />
        <line
          x1="85.7107"
          y1="15.9578"
          x2="71.7107"
          y2="30.0999"
          stroke="white"
          strokeWidth={2}
        />
        <line
          x1="99.0473"
          y1="30.2158"
          x2="84.5387"
          y2="15.7072"
          stroke="white"
          strokeWidth={2}
        />
        <line
          x1="85.0437"
          y1="73.5508"
          x2="99.0437"
          y2="59.4087"
          stroke="white"
          strokeWidth={2}
        />
        <line
          x1="71.7071"
          y1="59.2929"
          x2="86.2157"
          y2="73.8015"
          stroke="white"
          strokeWidth={2}
        />
      </svg>
    </Link>
    <nav id="menu_lateral" className="menu_lateral">
      <Link to={"#"}>
        {" "}
        <img src="../img/menu_superior.png" alt="" />
      </Link>
      <Link
        id="menu_cadastro_aberto"
        aria-label="abrir menu"
        aria-controls="menu_lateral_cadastro"
        aria-expanded="false"
        aria-haspopup="true"
        className="menu_cadastro_aberto"
        to={"#"}
        onClick={mostrar_menu_cadastro}
      >
        cadastros &gt;{" "}
      </Link>
      <hr />
      <Link
        id="menu_estoque_aberto"
        aria-label="abrir menu"
        aria-controls="menu_lateral_estoque"
        aria-expanded="false"
        aria-haspopup="true"
        className="menu_estoque_aberto"
        to={"#"}
        onClick={mostrar_menu_estoque}
      >
        estoque &gt;{" "}
      </Link>
      <hr />
      <Link
        id="menu_pedido_aberto"
        aria-label="abrir menu"
        aria-controls="menu_lateral_pedidos"
        aria-expanded="false"
        aria-haspopup="true"
        className="menu_pedido_aberto"
        to={"#"}
        onClick={mostrar_menu_pedidos}
      >
        pedidos &gt;
      </Link>
      <hr />
      <Link
        id="menu_relatorios_aberto"
        aria-label="abrir menu"
        aria-controls="menu_lateral_relatorios"
        aria-expanded="false"
        aria-haspopup="true"
        className="menu_relatorios_aberto"
        to={"#"}
        onClick={mostrar_menu_relatorios}
      >
        relatórios &gt;
      </Link>
      <hr />
      <Link to={"#"}>sair</Link>
      <Link to={"#"}>
        {" "}
        <img src="../img/menu_inferior.png" alt="" />
      </Link>
    </nav>
  </aside>
  {/* MENU CADASTROS */}
  <aside className="posiciomaneto_menu_cadastro">
    <nav id="menu_lateral_cadastro" className="menu_lateral_cadastro">
      <Link to={"#"}>usuários</Link>
      <hr />
      <Link to={"#"}>produtos</Link>
      <hr />
      <Link to={"#"}>dispositivos</Link>
      <hr />
      <Link to={"#"}>fornecedores</Link>
    </nav>
  </aside>
  {/* MENU  ESTOQUE */}
  <aside className="posiciomaneto_menu_estoque">
    <nav id="menu_lateral_estoque" className="menu_lateral_estoque">
      <Link to={"#"}>consulta</Link>
      <hr />
      <Link to={"#"}>entrada</Link>
      <hr />
      <Link to={"#"}>ajustes</Link>
    </nav>
  </aside>
  {/* MENU  PEDIDOS */}
  <aside className="posiciomaneto_menu_pedidos">
    <nav id="menu_lateral_pedidos" className="menu_lateral_pedidos">
      <Link to={"#"}>importar</Link>
      <hr />
      <Link to={"#"}>visualizar</Link>
      <hr />
      <Link to={"#"}>lançar</Link>
    </nav>
  </aside>
  {/* MENU  RELATORIO */}
  <aside className="posiciomaneto_menu_relatorios">
    <nav id="menu_lateral_relatorios" className="menu_lateral_relatorios">
      <Link to={"#"}>movimentação</Link>
      <hr />
      <Link to={"#"}>operadores</Link>
      <hr />
      <Link to={"#"}>estoque</Link>
    </nav>
  </aside>
  <section className="section__formulario">
    {/*tag section indica uma secao*/}
    <form className="formulario-central">
      <div className="div__alinhamento_campos">
        <label htmlFor="input__nome">Nome:</label>
        <input type="text" name="input__nome" id="" />
      </div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input__cpf">CPF:</label>
        <input type="text" name="input__cpf" id="" />
      </div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input__matricula">Matricula:</label>
        <input type="text" name="input__matricula" id="" />
      </div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input__E-mail">E-mail:</label>
        <input type="email" name="input__E-mail" id="" />
      </div>
      <div className="div__alinhamento_funcao_data">
        <div className="div__alinhamento__funcao">
          <label htmlFor="">Função:</label>
          <select name="" id="">
            <option disabled="" selected="" value="">
              Selecione
            </option>
            <option value="">Administrador</option>
            <option value="">Funcionario</option>
            <option value="">Supervisor</option>
          </select>
        </div>
        <div className="div__alinhamento__data">
          <label htmlFor="input__dataadm">Data adm:</label>
          <input
            className="div__alinhamento_campos_data"
            type="date"
            name="input__dataadm"
            id=""
          />
        </div>
      </div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input__senha">Senha:</label>
        <input type="password" name="input__senha" id="" />
      </div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input__confirmarsenha">Confirmar Senha:</label>
        <input type="password" name="input__confirmarsenha" id="" />
      </div>
      <button className="botao_cadastrar" type="submit">
        Cadastrar
      </button>
    </form>
  </section>
</main>

    )
    
}

export default CadastroUsuario;