import {Component} from 'react';
import BollywoodHeading from './BollywoodComponent/BollywoodHeading';
import './../css/bollywood.css'
import TopPostHeading from './BollywoodComponent/TopPostHeading';
import BollywoodPosts from './BollywoodComponent/BollywoodPosts';
import PostDetailsJson from './../bollywood.json';
import TopPost from './../components/BollywoodComponent/TopPost';
import TopStoryJson from './../topStory.json';
import TopSubPosts from './BollywoodComponent/TopSubPosts';
import TopPostJson from './../topSubPosts.json';
import Menu from './MenuComponent/Menu';
import MenuJson from './../menu.json';

class BollywoodComponent extends Component{
    state = {
        postDetails : PostDetailsJson,
        topStoryDetails : TopStoryJson,
        topPostDetails : TopPostJson,
        menuList : MenuJson,
        routeDetails : this.props.location
        
    }
    render(){
        return(
            <>
            <Menu menuList = {this.state.menuList}/>
            <div className = "bollywood-container">
                <div className = "bollywood">
                    <BollywoodHeading />
                    <BollywoodPosts postDetails = {this.state.postDetails} routeDetails = {this.state.routeDetails}/>
                </div>
                <div className = "topStory">
                    <TopPostHeading />
                    <TopPost topStoryDetails = {this.state.topStoryDetails} routeDetails = {this.state.routeDetails}/>
                    <TopSubPosts topPostDetails = {this.state.topPostDetails} routeDetails = {this.state.routeDetails}/>
                </div>
            </div>
            </>
        )
    }
}

export default BollywoodComponent;