import React from "react";
import Today from "./Today";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./cssanimation/cssanimation.css";
import "./Animate.css";
// import "fontawesome";
import $ from "jquery";
import "./Tyt.css";
import "popper.js";

class Clock extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {currentTime: new Date(), now: "" , timeId: 0};

        this.setTimeInClock = this.setTimeInClock.bind(this);
        this.checkTime = this.checkTime.bind(this);
        this.insertAnimationForTime = this.insertAnimationForTime.bind(this);
    }

    componentWillMount()
    {
        var id = setInterval(this.setTimeInClock,1000);
        this.setState({timeId: id});
    }

    setTimeInClock()
    {
        var time = this.state.currentTime;
        var sec = time.getSeconds();

        ++sec;

        time.setSeconds(sec);


        var str = this.checkTime(time);

        // var str = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

        this.setState({currentTime: time,now: str});
    }
    checkTime(tim)
    {
        var hourstr = tim.getHours(),minstr = tim.getMinutes() , secstr = tim.getSeconds();

        if(tim.getHours() < 10)
        {
            hourstr = "0" + tim.getHours();
        }
        if(tim.getMinutes() < 10)
        {
            minstr += "0" + tim.getMinutes();
        }
        if(tim.getSeconds() < 10)
        {
            secstr = "0" + tim.getSeconds();
        }

        return (hourstr + ":" + minstr + ":" + secstr);
    }

    insertAnimationForTime(cls)
    {
        debugger;
        $(".clock-background h3")
    }
    render()
    {
        return (
            <div className="clock-background animated infinitive fadeInDown delay-1s">
                <h3 id="time" className="text-capitalize font-italic font-weight-bolder animated infinitive flipInY delay-3s" >
                    {
                        this.state.now
                    }
                </h3>
                <Today Dt={this.state.currentTime} />
            </div>
        );
    }
}

export default Clock