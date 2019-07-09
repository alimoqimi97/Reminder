import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css.map";
import "./Tyt.css";

class Today extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {todayDate: this.props.Dt};
    }
    render()
    {        
        return (
            <div className="text-center" >
                <p className="date-style font-weight-bolder text-warning animated flipInX  delay-4s" >
                    {
                      this.props.Dt.getFullYear() + "/" +
                      this.props.Dt.getDay() + "/" +
                      this.props.Dt.getMonth() + " "
                    }
                    <span className="fa fa-calendar"> </span>
                </p>
            </div>
        );
    }
}

export default Today