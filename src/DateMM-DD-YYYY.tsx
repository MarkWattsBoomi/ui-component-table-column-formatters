

import React from 'react';

export class DateDashedMMDDYYYY extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {

        if (this.props.contentValue) {
            // format the date using React formatter into dt string
            let dt: string = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            }).format(new Date(this.props.contentValue));
            while (dt.indexOf('/') >= 0) {
                dt = dt.replace('/', '-');
            }
            return <span>{dt}</span>;
        } else {
            return null;
        }
    }
}


