//estilizacao
import "./style.css";

//imagens
import imgLogo from "../../assets/img/LOGO.png";
import imgMenu_inferior from "../../assets/img/menu_inferior.png";

//rotas
import { Link } from "react-router-dom";

function QuemSomos() {
    return(
        <main className="banner">
  {/*indica o conteudo principal*/}
  <section className="section_formulario">
    {/*tag section indica uma secao*/}
    <div className="div_quemsomos">
      <div className="alinhamento_quemsomos">
        <h3>Quem somos</h3>
      </div>
      <div className="alinhamento_logo_texto">
        <div className="alinhamento_central">
          <img src={imgLogo} alt="" />
        </div>
        <div className="alinhamento_texto">
          <p>
            A GastSix (ou G6) é uma empresa que uniu alunos do SENAI Informática
            e chegou com o intuito de otimizar a operação da montadora
            Volkswagen.
          </p>
          <p>
            A ideia do nome veio pela referência do Grupo 6 (com os integrantes
            Cícero, Edgard, Emily, Felipe, Luciane e Pedro).
          </p>
          <p>
            “Gast” em alemão, em sua tradução é “cliente” ou “convidado”. O que
            representa bem a ideia do projeto. Somos um grupo do Senai convidado
            pela Fundação Grupo Volkswagen para esse projeto acontecer.
          </p>
          <p>6 pessoas no grupo dedicadas ao procedimento do projeto.</p>
        </div>
      </div>
    </div>
  </section>
</main>

    )
    
}

export default QuemSomos;