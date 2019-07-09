import React, {Component} from "react";
import "./Tyt.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Reminder extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            title: this.props.title,
            desc: this.props.desc,
            deadLine: this.props.deadLine,
            status: this.props.status
         };

         this.showReminderInfo = this.showReminderInfo.bind(this);
    }

    showReminderInfo()
    {
        var remInfo = this.state;

        this.props.seeButton(remInfo.title,remInfo.desc,remInfo.deadLine,remInfo.status);
    }

    render(){
        // var remInfo = this.state;
        return (
            <div className="bg-light rounded" >
                <h1> {this.props.info.title} </h1>
                <button onClick={this.showReminderInfo} type="button" className="btn btn-info yekan-font font-italic font-weight-bold"> مشاهده </button>
                {/* <button onClick={this.props.seeButton(remInfo.title,remInfo.desc,remInfo.deadLine,remInfo.status)} type="button" className="btn btn-info yekan-font font-italic font-weight-bold"> مشاهده </button> */}
            </div>
        );
    }
}

export default Reminder