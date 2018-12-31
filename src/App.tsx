import * as React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import Layout from './hoc/Layout/Layout';

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <>
        <Layout>

        </Layout>
      </>

      // <div className="App">
      //   <Header />
      //   <NavigationItems />
      //   {/* <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.tsx</code> and save to reload.
      //   </p> */}
      // </div>
    );
  }
}

export default App;
