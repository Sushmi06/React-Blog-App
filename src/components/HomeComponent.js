import React,{ Component } from 'react';
import HeadTextJson from '../headText.json';
import HeadPartsJson from '../headParts.json';
import latestDetailsJson from '../latestDetails.json';
import LatestArticlesJson from '../latestArticles.json';
import LatestStoriesJson from '../latestStories.json';
import HeadContent from './HomeComponents/HeadContent/HeadContent';
import LatestHeading from './HomeComponents/Latest/LatestHeading';
import Latest from './HomeComponents/Latest/Latest';
import LatestArticlesHeading from './HomeComponents/LatestArticle/LatestArticlesHeading';
import LatestArticles from './HomeComponents/LatestArticle/LatestArticles';
import LatestStoriesHeading from './HomeComponents/LatestStory/LatestStoriesHeading';
import LatestStories from './HomeComponents/LatestStory/LatestStories';
import Menu from './MenuComponent/Menu';
import MenuJson from './../menu.json';

class HomeComponent extends Component{
    state = {
        headText : HeadTextJson,
        headPart : HeadPartsJson,
        latestDetails : latestDetailsJson,
        latestArticleDetails : LatestArticlesJson,
        latestStoryDetails : LatestStoriesJson,
        menuList : MenuJson
    }
    render(){
        return (
            <>
                <Menu menuList = {this.state.menuList}/>
                <HeadContent headTextValues = {this.state.headText} headPartValues = {this.state.headPart}/>
                <LatestHeading />
                <Latest latestDetails = {this.state.latestDetails}/>
                <LatestArticlesHeading />
                <LatestArticles latestArticleDetails = {this.state.latestArticleDetails}/>
                <LatestStoriesHeading/>
                <LatestStories latestStoryDetails = {this.state.latestStoryDetails}/>
            </>
        )
    }
}

export default HomeComponent;