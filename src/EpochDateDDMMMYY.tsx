declare var manywho: any;

import * as React from 'react';

class EpochDateDDMMMYY extends React.Component<any, any> 
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
	   
        if(this.props.contentValue)
        {
            
            var seconds : number = Number.parseInt(this.props.contentValue);
            var ed : Date = new Date(seconds);

            //format the date using React formatter into dt string
            var dt = new Intl.DateTimeFormat('en-GB', {   
                year: 'numeric', 
                month: 'long', 
                day: '2-digit'
            }).format(ed);
            
            return <span>{dt}</span>;
        }
        else
        {
            return null;
        }
    }
}

manywho.component.register('EpochDateDDMMMYY', EpochDateDDMMMYY);

export default EpochDateDDMMMYY;