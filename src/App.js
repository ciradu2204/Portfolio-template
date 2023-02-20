 import './App.css';
 import NavBar  from './components/Shared/NavBar';
 import About from './pages/About';
 import Projects from './pages/Projects';
 import Blogs from './pages/Blogs';
 import Blog from './components/Blog/Blog';
 import Home from './pages/Home';
 import CV from './pages/CV';
 import { ThemeProvider, createTheme } from '@mui/material/styles';
 import { Switch, Route } from 'react-router-dom';
 import Events from './pages/Events';
 import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
 const location = useLocation()
 const THEME = createTheme({
  typography: {
   "fontFamily": "'Prompt', sans-serif",
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

const capitalizeFirstLetter = (title) => {
  return title.charAt(0).toUpperCase() + title.slice(1);
}

useEffect(() => {
  let title = location.pathname
  document.title = capitalizeFirstLetter(title.substring(1));
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
          <Route path="/events"  component = {Events}/>
          <Route path="/blogs/:id" component={Blog}/>
        </Switch>
    </div>
    </ThemeProvider>
  );
}

export default App;
