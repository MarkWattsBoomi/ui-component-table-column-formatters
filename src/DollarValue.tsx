declare var manywho: any;

import * as React from 'react';

class DollarValue extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {
        const value: number = this.props.contentValue;
        const display: string = '$' + value;
        return <span>{display}</span>;
    }
}

manywho.component.register('DollarValue', DollarValue);

export default DollarValue;
