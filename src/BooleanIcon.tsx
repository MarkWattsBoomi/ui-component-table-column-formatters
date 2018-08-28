declare var manywho: any;

import * as React from 'react';

class BooleanIcon extends React.Component<any, any> 
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
        if(this.props.contentValue === "true")
        {
            className += "ok";
        }
        else
        {
            className += "remove";
        }

        return <span className={className}></span>;
    }
}

manywho.component.register('BooleanIcon', BooleanIcon);

export default BooleanIcon;