import React from 'react';
import './styles.css';

import Header from './components/Header';
import Main from './pages/main';
import Routes from './routes';

const App = () => (
      <div className="App">
          <Header/>
          <Routes test={10}/>
      </div>
);

// Padrão quando é criado o projeto react
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
