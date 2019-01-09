declare var manywho: any;

import * as React from 'react';

class StatusIcon extends React.Component<any, any> 
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
        switch(this.props.contentValue.toLowerCase())
        {
            case "":
                className += "option-horizontal";
                tooltip = "Not set"
                break;

            case "s":
                className += "hourglass";
                tooltip = "Staged"
                break;

            case "c":
                className += "ok";
                tooltip = "Complete"
                break;
            
            case "a":
                className += "flash";
                tooltip = "Active"
                break;
        }


        return <span className={className} title={tooltip}></span>;
    }
}

manywho.component.register('StatusIcon', StatusIcon);

export default StatusIcon;