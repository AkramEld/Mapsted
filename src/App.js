import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainView from "./components/MainView"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Button} from 'react-bootstrap'

class App extends Component {
    state={     //declared to be used in functions
        costs:undefined,
        itemtimes:undefined,
        totalpurchaseitem:undefined,
        totalOntario:undefined,
        totalUnited:undefined,
        maxBuilding: undefined,
        error:undefined,
        currentlyLoading: true   //Currently Loading will be false once data is loaded
    };

    //First Function to get Value Needed to Display
    getSamsung = async (e) => {
        this.setState({
            currentlyLoading: true
        });
        const api_call=await fetch('http://jobs.mapsted.com/api/Values/GetAnalyticsData');
        const data=await api_call.json();

        var total=0;
        for(var i=0;i<data.length;i++){             //Loops Through Objects in JSON to get all costs
            if(data[i].manufacturer=="Samsung") {
                for (var j = 0; j < data[i].usage_statistics.session_infos.length; j++) {
                    for (var k = 0; k < data[i].usage_statistics.session_infos[j].purchases.length; k++) {
                        total = total + data[i].usage_statistics.session_infos[j].purchases[k].cost;
                    }
                }
            }
        }

        this.setState({
            costs:total,
            error:"",
            currentlyLoading: false
        });
    };

    //Second Function to get Value Needed to Display
    getItemFortySeven=async(e)=>{
        this.setState({
            currentlyLoading: true
        });
        const api_call=await fetch('http://jobs.mapsted.com/api/Values/GetAnalyticsData');
        const data=await api_call.json();

        var total=0;

        for(var i=0;i<data.length;i++){         //Loops Through Objects in JSON to get all costs
                for (var j = 0; j < data[i].usage_statistics.session_infos.length; j++) {
                    for (var k = 0; k < data[i].usage_statistics.session_infos[j].purchases.length; k++) {
                        if(data[i].usage_statistics.session_infos[j].purchases[k].item_id==47){
                            total=total+1;
                        }

                    }
                }
            }

        this.setState({
            itemtimes:total,
            error:"",
            currentlyLoading: false
        });
    };

    //Third Function to get Value Needed to Display
    gettotalpurchaseitem=async(e)=>{
        this.setState({
            currentlyLoading: true
        });
        const api_call=await fetch('http://jobs.mapsted.com/api/Values/GetAnalyticsData');
        const data=await api_call.json();

        var total=0;


        for(var i=0;i<data.length;i++){         //Loops Through Objects in JSON to get all costs
            for (var j = 0; j < data[i].usage_statistics.session_infos.length; j++) {
                for (var k = 0; k < data[i].usage_statistics.session_infos[j].purchases.length; k++) {
                    if(data[i].usage_statistics.session_infos[j].purchases[k].item_category_id ==7){
                        total=total+data[i].usage_statistics.session_infos[j].purchases[k].cost;
                    }

                }
            }
        }
        this.setState({
            totalpurchaseitem:total,
            error:"",
            currentlyLoading: false
        });
    };

    //Fourth Function to get Value Needed to Display
    getTotalOntario=async(e)=>{
        this.setState({
            currentlyLoading: true
        });
        const api_call=await fetch('http://jobs.mapsted.com/api/Values/GetAnalyticsData');
        const data=await api_call.json();

        const api_calltwo=await fetch('http://jobs.mapsted.com/api/Values/GetBuildingData');
        const buildingdata=await api_calltwo.json();

        var total=0;
        var building=0;

        for(var m=0;m<buildingdata.length;m++) {

            if (buildingdata[m].state === "Ontario") {      //Loops and Finds states as Ontario

                building = buildingdata[m].building_id;   //Sets building Variable as the ID number to be used in next For loop

                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < data[i].usage_statistics.session_infos.length; j++) {
                        for (var k = 0; k < data[i].usage_statistics.session_infos[j].purchases.length; k++) {

                            if (data[i].usage_statistics.session_infos[j].building_id == building) { //When you reach the building ID stored from above do the following

                                total = total + data[i].usage_statistics.session_infos[j].purchases[k].cost;
                            }
                        }
                    }
                }
            }
        }

        this.setState({
            totalOntario:total,
            error:"",
            currentlyLoading: false
        });

    };

    //Fifth Function to get Value Needed to Display
    getTotalUnited=async(e)=>{
        this.setState({
            currentlyLoading: true
        });
        const api_call=await fetch('http://jobs.mapsted.com/api/Values/GetAnalyticsData');
        const data=await api_call.json();

        const api_calltwo=await fetch('http://jobs.mapsted.com/api/Values/GetBuildingData');
        const buildingdata=await api_calltwo.json();

        var total=0;
        var building=0;

        for(var m=0;m<buildingdata.length;m++){

            if(buildingdata[m].country==="United States"){  //Loops and finds when country is equal to U.S

                building=buildingdata[m].building_id;  //Stores Building ID

                for(var i=0;i<data.length;i++){
                    for (var j = 0; j < data[i].usage_statistics.session_infos.length; j++) {
                        for (var k = 0; k < data[i].usage_statistics.session_infos[j].purchases.length; k++) {

                            if(data[i].usage_statistics.session_infos[j].building_id==building){    //Uses Building ID previously stored

                                total=total+data[i].usage_statistics.session_infos[j].purchases[k].cost;
                            }
                        }
                    }
                }
            }
        }

        this.setState({
            totalUnited:total,
            error:"",
            currentlyLoading: false
        });

    };

    //Sixth Function to get Value Needed to Display
    getMaxBuilding=async(e)=>{
        this.setState({
            currentlyLoading: true
        });
        const api_call=await fetch('http://jobs.mapsted.com/api/Values/GetAnalyticsData');
        const data=await api_call.json();

        const api_calltwo=await fetch('http://jobs.mapsted.com/api/Values/GetBuildingData');
        const buildingdata=await api_calltwo.json();

        var total=0;
        var building=0;
        let buildingnum;

        buildingnum=new Array(51+1).join('0').split('').map(parseFloat); //index 0 is blank , creates array of zeros




                for(var i=0;i<data.length;i++){
                    for (var j = 0; j < data[i].usage_statistics.session_infos.length; j++) {
                        for (var k = 0; k < data[i].usage_statistics.session_infos[j].purchases.length; k++) {
                                total=total+data[i].usage_statistics.session_infos[j].purchases[k].cost;
                        }
                        buildingnum[data[i].usage_statistics.session_infos[j].building_id]+=total;//Store cost in correct index (index=building number)
                        total=0;
                    }
                }

    let maxnum=0;
    let index=0;
        for(var i=1;i<buildingnum.length;i++){
           if(buildingnum[i]>maxnum){       //Checks which building has highest cost and saves index number (building number)
               maxnum=buildingnum[i];
               index=i;
           }
        }


        this.setState({
            maxBuilding:index,  //Updates maxBuilding with index number which == building number
            error:"",
            currentlyLoading: false
        });

    };


    render() {

        return (

            <MuiThemeProvider>
            <div className={"background"}>
                <MainView       //Variables set to be used in "MainView"/UI
                    getSamsung={this.getSamsung}
                    getItemFortySeven={this.getItemFortySeven}
                    gettotalpurchaseitem={this.gettotalpurchaseitem}
                    getTotalOntario={this.getTotalOntario}
                    getTotalUnited={this.getTotalUnited}
                    getMaxBuilding={this.getMaxBuilding}
                    costs={this.state.costs}
                    itemfortyseven={this.state.itemtimes}
                    totalpurchaseitem={this.state.totalpurchaseitem}
                    totalOntario={this.state.totalOntario}
                    totalUnited={this.state.totalUnited}
                    maxbuilding={this.state.maxBuilding}
                    loading={this.state.currentlyLoading}
                />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            </MuiThemeProvider>

        );
    }
}

export default App;

