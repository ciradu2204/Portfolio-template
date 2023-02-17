 import './App.css';
 import NavBar  from './components/SharedComponents/NavBar';
 import About from './pages/About';
 import Projects from './pages/Projects';
 import Blogs from './pages/Blogs';
 import Blog from './components/BlogComponents/Blog';
 import Home from './pages/Home';
 import CV from './pages/CV';
 import { ThemeProvider, createTheme } from '@mui/material/styles';
 import { Switch, Route } from 'react-router-dom';

function App() {

 const THEME = createTheme({
  typography: {
   "fontFamily": "'Prompt', sans-serif",
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});
  return (
    <ThemeProvider theme={THEME}>
    <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path="/about"  component = {About}/>
          <Route path="/projects" exact  component = {Projects}/>
          <Route path="/blogs" exact component = {Blogs}/>
          <Route path="/cv"  component = {CV}/>
          <Route path="/blogs/:id" component={Blog}/>
        </Switch>
    </div>
    </ThemeProvider>
  );
}

export default App;
