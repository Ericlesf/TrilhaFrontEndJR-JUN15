import './App.css';
import './Components/Header'
import Header from './Components/Header';
import perfil from './images/perfil.jpg'

function App() {
  return (
    <div className="App">

      <Header />

      

      <header className="App-header">
        <img src={perfil} className="perfil-logo" alt="perfil" />

        <h1 className="title">
          Éricles Fabrício Dias Anselmo
        </h1>

        <h2 className="subtitle">
          Desenvolvedor Front-End
        </h2>

        <p>
          Busco uma oportunidade como desenvolvedor front-end ou mobile, onde possa aplicar e expandir minhas habilidades em HTML, CSS e JavaScript, além de bibliotecas modernas como React e React Native. Com um forte foco na criação de interfaces intuitivas e experiências de usuário envolventes, almejo integrar uma equipe de desenvolvimento inovadora. Meu objetivo é utilizar boas práticas de design para desenvolver soluções eficientes, acessíveis e impactantes. Estou continuamente aprimorando minhas competências técnicas e buscando novos desafios que me permitam aprender e contribuir de forma significativa para projetos dinâmicos e de alta performance.
        </p>
      </header>
    </div>
  );
}

export default App;
