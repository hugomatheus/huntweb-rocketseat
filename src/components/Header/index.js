import React from 'react';
import './styles.css';


//stateless component

const Header = () => {
    return <header id="main-header">JSHunter</header>
};


// const Header = () => (
//     <header id="main-header">JSHunter</header>
// );

// Alternativa para stateless component
// Normalmente classe é utilizado quando existe um conceito de estado
// class Header extends Component {
//     render() {
//         return <header id="main-header">JSHunter</header>
//     }
// }

export default Header;