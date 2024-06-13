import React from "react";

export class DateLocale extends React.Component<any, any> {
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

            return <span>{dt.toLocaleDateString()}</span>;
        } else {
            return null;
        }
    }
}


