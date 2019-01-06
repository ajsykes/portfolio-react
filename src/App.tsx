import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './components/containers/Home/Home';
import About from './components/containers/About/About';
import Projects from './components/containers/Projects/Projects';
import Reading from './components/containers/Reading/Reading';
import Learning from './components/containers/Learning/Learning';

// import logo from './logo.svg';

class App extends React.Component {
  public render() {

    let routes = (
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/learning" component={Learning} />
        <Route path="/reading" component={Reading}/>
        <Route path="/" component={Home}/>
        <Redirect to="/"/>
      </Switch>
    )

    return (
      <>
        <Layout>
          {routes}
        </Layout>
      </>
    );
  }
}

export default App;
