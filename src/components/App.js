import {Component} from 'react';
import {Switch, BrowserRouter,Route} from 'react-router-dom';
import HomeComponent from './HomeComponent';
import HeadingComponent from './HeadingComponent';
import BollywoodComponent from './BollywoodComponent';
import PathNotFoundComponent from './PathNotFoundComponent';
import './../css/app.css';
import ReactPageComponent from './ReactPageComponent';

class App extends Component{
    render(){
        return(
        <>
            <div className = "container">
                <BrowserRouter>
                <HeadingComponent />
                <Switch>
                    <Route path = "/:heading/:id/:subheading/:id" component = {ReactPageComponent} exact/>
                    <Route path = "/:menu/:subheading/:id" component = {ReactPageComponent} exact/>
                    <Route path = "/:heading/:id" component = {BollywoodComponent} exact/>
                    <Route path = "/Home" component = {HomeComponent} exact/>
                    <Route path = "/React-Blog-App" component = {HomeComponent} exact/>
                    <Route path = "/:menu" component = {BollywoodComponent} exact/>
                    <Route path = "/" component = {HomeComponent} exact/>
                    <Route component = {PathNotFoundComponent}/>
                </Switch>
                </BrowserRouter> 
            </div>
        </>
    
        )
    }
}

export default App;