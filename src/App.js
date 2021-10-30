 import './App.css';
 import NavBar  from './components/SharedComponents/NavBar';
 import About from './pages/About';
 import Projects from './pages/Projects';
 import Blogs from './pages/Blogs';
 import Project from './components/ProjectsComponents/Project';
 import Blog from './components/BlogComponents/Blog';
 import Home from './pages/Home';
 import CV from './pages/CV';

 import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path="/about"  component = {About}/>
          <Route path="/work" exact  component = {Projects}/>
          <Route path="/blog" exact component = {Blogs}/>
          <Route path="/cv"  component = {CV}/>
          <Route path="/work/:id" component={Project}/>
          <Route path="/blog/:id" component={Blog}/>
       
        </Switch>       
    </div>
  );
}

export default App;
