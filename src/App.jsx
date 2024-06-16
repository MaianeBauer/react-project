import React from "react";

import Article from "./components/Article/Article";

import Navbar from "./components/Navbar/Navbar";

import article1Img from "./assets/img/article1.jpg";
import article2Img from "./assets/img/article2.jpg";
import article3Img from "./assets/img/article3.jpg";
import article4Img from "./assets/img/article4.jpg";
import Counter from "./components/Counter/Counter";

import "./styles/App.css";
 class App extends React.Component{
render() { 
  return (
    <div>
  <Navbar />
  <Counter />
  <section id="article">
    <Article title="Comunicação Eficaz" provider="A base para qualquer equipe de sucesso"
    description="Comunicação aberta, honesta e frequente é crucial para evitar mal-entendidos, construir confiança e garantir que todos estejam na mesma página, isso inclui comunicação verbal e não verbal, escuta ativa, feedback construtivo e resolução de conflitos de forma eficaz"
    tumbanail={article1Img}/>
    <Article title="Metas e Objetivos Compartilhados" provider="Todos os membros da equipe devem ter uma compreensão clara dos objetivos gerais e das metas individuais" 
    description="Isso cria um senso de direção e propósito comum, motivando a equipe a trabalhar em conjunto para alcançar os resultados desejados, metas claras e bem definidas também ajudam a medir o progresso e celebrar as conquistas."
    tumbanail={article2Img}/>
    <Article title="Confiança e Respeito Mútuo" provider="Um ambiente de confiança e respeito permite que os membros da equipe se sintam confortáveis para compartilhar ideias, correr riscos e se apoiar mutuamente" description ="Valorizar as diferenças e pontos fortes de cada indivíduo é essencial para criar uma equipe coesa e produtiva, a confiança também é fundamental para delegar tarefas, dar e receber feedback e tomar decisões juntos"
     tumbanail={article3Img}/>
    <Article title="Compromisso e Responsabilidade" provider="Todos os membros da equipe devem estar comprometidos com o sucesso da equipe e assumir a responsabilidade por suas ações." description="Isso significa ser proativo, confiável e contribuir ativamente para o projeto, também é importante ser responsável por seus erros e aprender com eles, buscando sempre a melhoria individual e da equipe como um todo."
     tumbanail={ article4Img }/>
  </section>
  


  </div>
  );
}
 }
 export default App;