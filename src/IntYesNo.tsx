declare var manywho: any;

import * as React from 'react';

class IntYesNo extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {
        let className: any = 'glyphicon glyphicon-';
        let tooltip: string = '';
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

manywho.component.register('IntYesNo', IntYesNo);

export default IntYesNo;
