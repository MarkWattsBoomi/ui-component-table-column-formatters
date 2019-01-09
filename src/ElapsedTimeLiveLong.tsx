declare var manywho: any;

import * as React from 'react';

class ElapsedTimeLiveLong extends React.Component<any, any> 
{   

  timerID = -1;

  constructor(props : any)
  {
      super(props);
  }

  componentDidMount() 
  {
      this.forceUpdate();
      this.timerID = window.setInterval(this.timerEvent.bind(this), 1000);
  }

  componentWillUnmount()
  {
    if(this.timerID >= 0)
    {
      clearInterval(this.timerID);
      this.timerID = -1;
    }
  }

  timerEvent()
  {
    this.forceUpdate();
  }

	render()
	{
	   
        if(this.props.contentValue)
        {
            var dt = new Date(this.props.contentValue)
            var elapsed = this.elapsedTime(dt);
            return <span>{elapsed}</span>;
        }
        else
        {
            return null;
        }
  }

  elapsedTime (fromDate : Date) 
  {
    var nTotalDiff = Math.round((new Date()).getTime() / 1000) - (fromDate.getTime() / 1000);
    if (nTotalDiff >= 0) 
    {
      var oDiff : any = {};
      oDiff.days = Math.floor(nTotalDiff / 86400);
      nTotalDiff -= oDiff.days * 86400;
      oDiff.hours = Math.floor(nTotalDiff / 3600);
      nTotalDiff -= oDiff.hours * 3600;
      oDiff.minutes = Math.floor(nTotalDiff / 60);
      nTotalDiff -= oDiff.minutes * 60;
      oDiff.seconds = Math.floor(nTotalDiff);
      
      var result = "";
      if(oDiff.days > 0)
      {
          result += oDiff.days + " days";
      }

      if(oDiff.hours > 0)
      {
        if(result.length > 0)
        {
          result += ", ";
        }
          result += oDiff.hours + " hours";
      }

      if(oDiff.minutes > 0)
      {
        if(result.length > 0)
        {
          result += ", ";
        }
          result += oDiff.minutes + " minutes";
      }

      if(oDiff.seconds > 0)
      {
        if(result.length > 0)
        {
          result += ", ";
        }
          result += oDiff.seconds + " seconds";
      }

      return result;
    } 
    else 
    {
      return "";
    }
  }
}

manywho.component.register('ElapsedTimeLiveLong', ElapsedTimeLiveLong);

export default ElapsedTimeLiveLong;

