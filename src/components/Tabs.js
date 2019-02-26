import React,{Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import InstrumentTrack from './InstrumentTrack';
//import GetIcon from './GetIcons';
import GetIcon from './IconsLib';


class TrackTabs extends Component{
    constructor(props, ref){
        super(props,ref);
        this.state = { tabIndex:0, userTrigger:false};
        this.autoTrigger=null;        
        this.renderOutput = this.renderOutput.bind(this);
        this.updateTheActiveTab = this.updateTheActiveTab.bind(this);
    };

    componentWillMount(){
        if ((this.props.autoTrigger === true) && (this.state.tabIndex !== this.props.activeTrack)) {
            this.setState({
                tabIndex: this.props.activeTrack,
                userTrigger: false
            });
        }
    }
    componentDidUpdate(){
        this.autoTrigger= true;
    }

    updateTheActiveTab(index){
        this.autoTrigger = false;
        this.setState({ 
            tabIndex: index,
            userTrigger: true
        }); // just setting the state so that it resluts in the whole component reload        
    }

    renderOutput(allTracks){
        var activeTabIndex = 0;
        if ((this.state.userTrigger === true)&& (this.autoTrigger === false)) {
            activeTabIndex = this.state.tabIndex;
        }
        else{
            activeTabIndex = this.props.activeTrack;
        }

        var tabList = allTracks.map((track) =>
            <Tab key={track.trackName + 'Tab'}><GetIcon iconName={track.trackName} color="#000000"/></Tab>
        );

        var tabPanels = allTracks.map((track) =>
            <TabPanel key={track.trackName + 'Panel'} ><InstrumentTrack track={track} /></TabPanel>
        );
        //activeTabIndex = props.activeTrack;

        return (
            <div>
                <Tabs selectedIndex={activeTabIndex} onSelect={tabIndex => this.updateTheActiveTab(tabIndex)}>
                    <TabList>
                        {tabList}
                    </TabList>
                    {tabPanels}
                </Tabs>
            </div>
        );
    }
    


    render(props) {
        return(
          <div>{this.renderOutput(this.props.tracks)}</div>  
        );
}

}



export default TrackTabs;