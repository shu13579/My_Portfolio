import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Route,  Switch, Link} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import SkillSet from './pages/SkillSet';
import Contact from './pages/Contact';
import Test from './pages/Test';

const NotFound = () => <div>404 Not Found</div>;
function App() {
  console.log("Parent component mounted");
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skillset" component={SkillSet} />
        <Route path="/contact" component={Contact} />
        <Route path="/test" component={Test} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
