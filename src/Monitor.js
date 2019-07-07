import React from "react";
import Clock from "./Clock";
// import Today from "./Today";

class Monitor extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { date: new Date() };
    }

    render()
    {
      return (
        <div  className="container" >
            <Clock Time={this.state.date} />
        </div>
        );
    }
}

export default Monitor