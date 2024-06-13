

import React from 'react';

export class ElapsedTime extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {

        if (this.props.contentValue) {
            const dt = new Date(this.props.contentValue);
            const elapsed = this.elapsedTime(dt);
            return <span>{elapsed}</span>;
        } else {
            return null;
        }
  }

    elapsedTime(fromDate: Date) {
    let nTotalDiff = Math.round((new Date()).getTime() / 1000) - (fromDate.getTime() / 1000);
    if (nTotalDiff >= 0) {
      const oDiff: any = {};
      oDiff.days = Math.floor(nTotalDiff / 86400);
      nTotalDiff -= oDiff.days * 86400;
      oDiff.hours = Math.floor(nTotalDiff / 3600);
      nTotalDiff -= oDiff.hours * 3600;
      oDiff.minutes = Math.floor(nTotalDiff / 60);
      nTotalDiff -= oDiff.minutes * 60;
      oDiff.seconds = Math.floor(nTotalDiff);

      let result = '';
      if (oDiff.days > 0) {
          result += oDiff.days + ' days';
      }

      if (oDiff.hours > 0) {
        if (result.length > 0) {
          result += ', ';
        }
        result += oDiff.hours + ' hours';
      }

      if (oDiff.minutes > 0) {
        if (result.length > 0) {
          result += ', ';
        }
        result += oDiff.minutes + ' minutes';
      }

      if (oDiff.seconds > 0) {
        if (result.length > 0) {
          result += ', ';
        }
        result += oDiff.seconds + ' seconds';
      }

      return result;
    } else {
      return '';
    }
  }
}


