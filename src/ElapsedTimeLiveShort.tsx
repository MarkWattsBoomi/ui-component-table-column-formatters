declare var manywho: any;

import * as React from 'react';
import { iElapsed, TimeHelpers } from './DateTimeHelpers';

class ElapsedTimeLiveShort extends React.Component<any, any> {

  timerID = -1;

  constructor(props: any) {
      super(props);
  }

  componentDidMount() {
      this.forceUpdate();
      this.timerID = window.setInterval(this.timerEvent.bind(this), 1000);
  }

  componentWillUnmount() {
    if (this.timerID >= 0) {
      clearInterval(this.timerID);
      this.timerID = -1;
    }
  }

  timerEvent() {
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

    const elapsed: iElapsed = TimeHelpers.getElapsed(fromDate, new Date());

    let result = '';
    if (elapsed.days > 0) {
          result += elapsed.days + 'd';
      }

    if (elapsed.hours > 0) {
        if (result.length > 0) {
          result += '/';
        }
        result += elapsed.hours + 'h';
      }

    if (elapsed.minutes > 0) {
        if (result.length > 0) {
          result += '/';
        }
        result += elapsed.minutes + 'm';
      }

    if (elapsed.seconds > 0) {
        if (result.length > 0) {
          result += '/';
        }
        result += elapsed.seconds + 's';
      }

    return result;
  }
}

manywho.component.register('ElapsedTimeLiveShort', ElapsedTimeLiveShort);

export default ElapsedTimeLiveShort;
