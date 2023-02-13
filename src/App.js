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
          <Route path="/projects" exact  component = {Projects}/>
          <Route path="/blogs" exact component = {Blogs}/>
          <Route path="/cv"  component = {CV}/>
          <Route path="/projects/:id" component={Project}/>
          <Route path="/blogs/:id" component={Blog}/>
        </Switch>
    </div>
  );
}

export default App;
