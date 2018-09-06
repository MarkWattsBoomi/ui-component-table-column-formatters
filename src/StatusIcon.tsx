declare var manywho: any;

import * as React from 'react';
import Tooltip from 'react-simple-tooltip';

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


        return <Tooltip border="#ffffff" radius="5" placement="left" content={tooltip}><span className={className}></span></Tooltip>;
    }
}

manywho.component.register('StatusIcon', StatusIcon);

export default StatusIcon;