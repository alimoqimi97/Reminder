import React, {Component} from "react";
import Reminder from "./Reminder.js";
import "./Tyt.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import $ from "jquery";

class ReminderMenu extends Component
{
    constructor(props){
        super(props);

        this.state = {
            reminderList: [ {title: "lll",desc: "lll", deadLine: "1111",status: false} ] ,
            curRem: {
                title: "",
                desc: "",
                deadLine: "",
                status: false
            }
        };

        // Refs    //
        this.titNode = null;
        this.descNode = null;
        this.ddlNode = null;

        this.titleRef = element => {this.titNode = element;};
        this.descRef = elem => {this.descNode = elem;};
        this.deadlineRef = el => {this.ddlNode = el;};
        // ---------------      //

        // method bindings  //
        this.fillCurRem = this.fillCurRem.bind(this);
        this.showInfoWindow = this.showInfoWindow.bind(this);
        this.showAddWindow = this.showAddWindow.bind(this);
        this.addReminder = this.addReminder.bind(this);
        this.closeAddWindow = this.closeAddWindow.bind(this);
        this.closeInfowindow = this.closeInfowindow.bind(this);
    }

    fillCurRem(tit,des,ddl,st){

        this.setState({
            curRem: {
                title: tit,
                desc: des,
                deadLine: ddl,
                status: st
            }
        });

        this.showInfoWindow();
    }

    showInfoWindow(){
        var infowindow = $("#infoiwnd");
        infowindow.removeClass("d-none");
        infowindow.addClass("d-block");
    }

    closeInfowindow(){
        $("#infowind").removeClass("d-block").addClass("d-none");
    }


    addReminder(){
        debugger;
        var reminder = { title: this.titNode.value , desc: this.descNode.value, deadLine: this.ddlNode.value , status: false };
        var rl = this.state.reminderList;

        rl.concat(reminder);

        this.setState({reminderList: rl});

        this.closeAddWindow();
    }

    showAddWindow(){
        $("#addwind").removeClass("d-none").addClass("d-block");
    }

    closeAddWindow(){
        $("#addwind").removeClass("d-block").addClass("d-none");
    }
    
    render()
    {
        var cr = this.state.curRem;
        var r = this.state.reminderList;
        var f = this.fillCurRem;

        return (
            <div className="container reminder-menu bg-light rounded" >
                {/* user menu */}
                <div className="container btn-group reminder-panel" >
                    <button onClick={this.showAddWindow} className="btn btn-info fa fa-plus" type="button"></button>
                    <button className="btn btn-info fa fa-pen" type="button"></button>
                    <button className="btn btn-info fa fa-trash" type="button"></button>
                </div>
                {/* ------------------------- */}

                {/* reminders list */}
                <ul className="list-group reminders-list" >
                    {
                        this.state.reminderList.map(function(e,index){
                        return (
                            <li key={index.toString()} className="list-group-item list-group-item-action list-group-item-success" ><Reminder info={r[index]} seeButton={f} /></li>
                        );
                    })
                    }
                </ul>
                {/* ---------------------------- */}

                {/* Add window */}
                <div className="d-none" id="addwind" >
                    <form>
                        <div className="form-group">
                            <label className="yekan-font" >عنوان : </label>
                            <input ref={this.titleRef} type="text" className="form-control" placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <label className="yekan-font" >موعد : </label>
                            <input ref={this.deadlineRef} type="text" className="form-control" placeholder="DeadLine" />
                        </div>
                        <div className="form-group">
                            <label className="yekan-font" >شرح : </label>
                            <textarea ref={this.descRef} type="text" className="form-control" placeholder="Description"></textarea>
                        </div>
                        <button onClick={this.addReminder} type="button" className="btn btn-primary">حله !</button>
                    </form>
                </div>

                {/* ------------------------- */}

                {/* information window */}
                <div id="infowind" className="d-none" >
                    <h1>عنوان : {cr.title}</h1>
                    <p>شرح :  {cr.desc} </p>
                    <b>موعد :  {cr.deadline} </b>
                    <i> وضعیت : {cr.status && "expired!"}</i>
                    <button onClick={this.closeInfowindow()} type="button" className="btn btn-outline-info"> Ok </button>
                </div>
            </div>
        );
    }

}

export default ReminderMenu