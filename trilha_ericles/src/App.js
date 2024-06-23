import './App.css';
import './Components/Header'
import Header from './Components/Header';
import perfil from './images/perfil.jpg'

function App() {
  return (
    <div className="App">

      <Header/>

      <img src={perfil} className="perfil-logo" alt="perfil" />
      
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <h1 className="title">
          Éricles Fabrício Dias Anselmo
        </h1>

        <h2 className="subtitle">
          Desenvolvedor Front-End
        </h2>
        
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit mauris, lacinia vel arcu nec, rutrum porta est. Fusce tempor ante non leo dapibus, at dictum turpis egestas. Donec non ipsum tortor. In urna nulla, facilisis eu accumsan nec, mattis at eros. Quisque aliquam euismod neque cursus auctor. Ut fermentum justo dui, ac aliquam diam porta nec. Donec non nulla sit amet lectus molestie aliquet. Vestibulum blandit dolor mauris, eget feugiat tortor fermentum quis. Fusce posuere fringilla dui, ut viverra urna. Donec est dolor, semper vel viverra vel, placerat quis urna. Aliquam fringilla rhoncus justo, eu tincidunt erat facilisis quis. Sed libero magna, vulputate a nisi a, rutrum dignissim tellus. Etiam lacinia orci tincidunt elit accumsan scelerisque. Aliquam eget ullamcorper leo.
        </p>
      </header>
    </div>
  );
}

export default App;
