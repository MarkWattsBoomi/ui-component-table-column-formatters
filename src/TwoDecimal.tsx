declare var manywho: any;

import * as React from 'react';

export default class TwoDecimal extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {
        const value: number = this.props.contentValue || 0;
        const displayValue: string = (Math.round(value * 100) / 100).toFixed(2);
        return(
            <div>
                {displayValue}
            </div>
        );
    }
}

manywho.component.register('TwoDecimal', TwoDecimal);
