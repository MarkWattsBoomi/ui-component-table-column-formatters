import React from "react";

export class DateTimeLocale extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {

        if (this.props.contentValue) {
            // format the date using React formatter into dt string
            const dt = new Date(this.props.contentValue);

            return <span>{dt.toLocaleString()}</span>;
        } else {
            return null;
        }
    }
}

