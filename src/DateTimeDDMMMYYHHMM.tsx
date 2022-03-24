declare var manywho: any;

import * as React from 'react';

class DateTimeDDMMMYYHHMM extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {

        if (this.props.contentValue) {
            // format the date using React formatter into dt string
            let dt = new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            }).format(new Date(this.props.contentValue));

            return <span>{dt}</span>;
        } else {
            return null;
        }
    }
}

manywho.component.register('DateTimeDDMMMYYHHMM', DateTimeDDMMMYYHHMM);

export default DateTimeDDMMMYYHHMM;
