import React from "react";

export class DollarValue extends React.Component<any, any> {
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

