declare var manywho: any;

import * as React from 'react';
import * as Moment from 'moment';

class ElapsedTimeFriendly extends React.Component<any, any> 
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
            var dt = new Date(this.props.contentValue)
            var elapsed = Moment(dt).fromNow();
            return <span>{elapsed}</span>;
        }
        else
        {
            return null;
        }
    }
}

manywho.component.register('ElapsedTimeFriendly', ElapsedTimeFriendly);

export default ElapsedTimeFriendly;