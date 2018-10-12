declare var manywho: any;

import * as React from 'react';

class EpochDateTimeDDMMMYYYYHHMM extends React.Component<any, any> 
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
            var ed : Date = new Date(0);
            var seconds : number = Number.parseInt(this.props.contentValue);
            ed.setUTCSeconds(seconds);
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

manywho.component.register('EpochDateTimeDDMMMYYYYHHMM', EpochDateTimeDDMMMYYYYHHMM);

export default EpochDateTimeDDMMMYYYYHHMM;