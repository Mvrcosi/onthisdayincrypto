import React from 'react';
import CoinsContainer from "./Components/CoinContent/CoinsContainer";

import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';

const App: React.FC = () => {

  return (
    <div className="App">
      <Header />
      <CoinsContainer />
      <Footer />
    </div>
  );
}

export default App;
