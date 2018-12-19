declare var manywho: any;

import * as React from 'react';
import Tooltip from 'react-simple-tooltip';

class PercentProgressBar extends React.Component<any, any> 
{   
    constructor(props : any)
	{
        super(props);
    }

    componentDidMount() 
    {
        this.forceUpdate();
    }

	render()
	{
        var className : any = "glyphicon glyphicon-";
        var tooltip : string = "";

        var value = parseInt(this.props.contentValue) || 0;
        var displayValue = value + "%";

        var tooltip : string = value + "%";
        
        var outerStyle = {
                "border" : "2px solid #adadad",
                "border-radius":"5px",
                "background-color":"#e3e3e3",
                "width":"100px",
                "height":"30px",
                "box-sizing": "content-box",
                "position" : "relative" as "relative",
            };

        var barStyle = {
            "border" : "none",
            "border-radius":"4px",
            "background-color":"#7D9ACF",
            "width": displayValue,
            "text-align" : "centre",
            "height": "100%",
            };

        var captionStyle = {
                "font-family" : "tahoma",
                "color" : "#ffffff",
                "font-size" : "10pt",
                "width" : "100%",
                "text-align" : "center",
                "position" : "absolute" as "absolute",
                "height": "100%",
                "vertical-align": "middle",
                "line-height": "200%",
                "mix-blend-mode": "difference",

            };

        var max = 100;
        var min = 0;
        var pos = 60;

        return  <div style={outerStyle}>
                    <div role="progressbar" aria-valuenow={pos} aria-valuemin={min} aria-valuemax={max} style={barStyle}>
                        <span style={captionStyle}>{displayValue}</span>
                    </div>     
                </div> 

    }
}

//<Tooltip border="#ffffff" radius="5" placement="right" content={tooltip}></Tooltip>

manywho.component.register('PercentProgressBar', PercentProgressBar);

export default PercentProgressBar;