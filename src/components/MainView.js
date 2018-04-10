import React from "react";
import './MainView.css';
import {Button} from 'react-bootstrap';

import {Tabs, Tab} from 'material-ui/Tabs';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};
class MainView extends React.Component{

    handleActive = (tab) => {
        alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
    };

    CircularProgressExampleSimple = () => {
        if (this.props.loading) {       //Circular Loading is active until loading = false (data has been loaded)
            return (
                <div>
                    <CircularProgress/>
                </div>
            )
        }
    };

    render(){
        return(
        <div>
            <Tabs>
                <Tab label="Home" >
                    <div>
                        <h1 className={"App-Title"}>Mapsted Test Case #6</h1>
                        <p className={"App-description"}>
                        Coded by Akram Eldamaty
                    </p>
                    </div>
                </Tab>
                <Tab onActive={this.props.getSamsung} label="Samsung Devices" >
                   <p className={"App-Loading"}> {this.CircularProgressExampleSimple()}</p>
                    {!this.props.loading &&          // When loading is false, data is loaded on screen
                    <div>
                        <p className={"App-description"}>
                            <b>Total purchase costs for Samsung manufacture
                                devices:</b>&nbsp;&nbsp;&nbsp; ${this.props.costs}
                        </p>

                    </div>
                    }
                </Tab>

                <Tab onActive={this.props.getItemFortySeven} label="Item Forty-Seven" >
                    <p className={"App-Loading"}> {this.CircularProgressExampleSimple()}</p>
                    {!this.props.loading &&
                    <div>
                        <p className={"App-description"}>
                            <b>Total number of times item (item_id = 47) was
                                purchased:</b> &nbsp;&nbsp;&nbsp;{this.props.itemfortyseven} items
                        </p>
                    </div>
                    }
                </Tab>

                <Tab onActive={this.props.gettotalpurchaseitem} label="Item ID-7" >
                    <p className={"App-Loading"}> {this.CircularProgressExampleSimple()}</p>
                    {!this.props.loading &&
                    <div>
                        <p className={"App-description"}>
                            <b>Total purchase costs for item’s in the category (item_category_id =
                                7):</b> &nbsp;&nbsp;&nbsp;${this.props.totalpurchaseitem}
                        </p>
                    </div>
                    }
                </Tab>

                <Tab onActive={this.props.getTotalOntario} label="Ontario Cost" >
                    <p className={"App-Loading"}> {this.CircularProgressExampleSimple()}</p>
                    {!this.props.loading &&
                    <div>
                        <p className={"App-description"}>
                            <b>Total purchase costs in Ontario:</b> &nbsp;&nbsp;&nbsp;${this.props.totalOntario}
                        </p>
                    </div>
                    }
                </Tab>

                <Tab onActive={this.props.getTotalUnited} label="United States Cost" >
                    <p className={"App-Loading"}> {this.CircularProgressExampleSimple()}</p>
                    {!this.props.loading &&
                    <div>
                        <p className={"App-description"}>
                            <b>Total purchase costs in the United
                                States:</b>&nbsp;&nbsp;&nbsp; ${this.props.totalUnited}
                        </p>
                    </div>
                    }
                </Tab>

                <Tab onActive={this.props.getMaxBuilding} label="Building Max" >
                    <p className={"App-Loading"}> {this.CircularProgressExampleSimple()}</p>
                    {!this.props.loading &&
                    <div>
                        <p className={"App-description"}>
                            <b>Which building (name or id) has the most total purchase costs?
                                :</b> &nbsp;&nbsp;&nbsp;Building number &nbsp;{this.props.maxbuilding}
                        </p>
                    </div>
                    }
                </Tab>

            </Tabs>

            </div>
        );
    }
};


export default MainView;