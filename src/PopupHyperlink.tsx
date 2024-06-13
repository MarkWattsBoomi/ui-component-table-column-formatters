

import React from 'react';

export class PopupHyperlink extends React.Component<any, any> 
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
        var tooltip : string = "";

        var value = this.props.contentValue || "";
        var displayValue = value + "%";

        var tooltip : string = value + "%";
        
        var linkStyle = {
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

        return  <div>
                    <a href={value} target="_blank">{value}</a>    
                </div>  
    }
}
