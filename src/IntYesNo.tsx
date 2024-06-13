

import React from 'react';

export class IntYesNo extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {
        const className: any = 'glyphicon glyphicon-';
        const tooltip: string = '';
        let result: any;

        switch (this.props.contentValue) {
            case '1':
                result = (
                    <span>Yes</span>
                );
                break;

            case '0':
                result = (
                    <span>No</span>
                );
                break;
            default:
                result = (
                    <span/>
                );
                break;
        }

        return result;
    }
}

