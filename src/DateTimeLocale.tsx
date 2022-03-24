declare var manywho: any;

import * as React from 'react';

export default class DateTimeLocale extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {

        if (this.props.contentValue) {
            // format the date using React formatter into dt string
            let dt = new Date(this.props.contentValue);

            return <span>{dt.toLocaleString()}</span>;
        } else {
            return null;
        }
    }
}

manywho.component.register('DateTimeLocale', DateTimeLocale);
