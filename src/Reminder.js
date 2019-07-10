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
            <div className="rounded " >
                <h4 className="d-inline-block" > {this.props.info.title} </h4>
                <p className="d-inline-block element-center" > {this.props.info.desc} </p>
                <b className="d-inline-block" > {this.props.info.deadLine} </b>
                <button onClick={this.showReminderInfo} type="button" className="btn btn-info yekan-font font-italic font-weight-bold float-right"> مشاهده </button>
                {/* <button onClick={this.props.seeButton(remInfo.title,remInfo.desc,remInfo.deadLine,remInfo.status)} type="button" className="btn btn-info yekan-font font-italic font-weight-bold"> مشاهده </button> */}
            </div>
        );
    }
}

export default Reminder