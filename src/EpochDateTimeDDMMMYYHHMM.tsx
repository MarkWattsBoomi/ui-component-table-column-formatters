declare var manywho: any;

import * as React from 'react';

class EpochDateTimeDDMMMYYHHMM extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {

        if (this.props.contentValue) {
            const secval = this.props.contentValue;
            let seconds: number = Number.parseInt(this.props.contentValue);

            // handle java epoch with decimal point
            if (secval.indexOf('.') >= 0) {
                seconds = seconds * 1000;
            }

            const ed: Date = new Date(seconds);
            // format the date using React formatter into dt string
            const dt = new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            }).format(ed);

            return <span>{dt}</span>;
        } else {
            return null;
        }
    }
}

manywho.component.register('EpochDateTimeDDMMMYYHHMM', EpochDateTimeDDMMMYYHHMM);

export default EpochDateTimeDDMMMYYHHMM;
