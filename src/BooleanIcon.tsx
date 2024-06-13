

import React from 'react';

export class BooleanIcon extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {
	   let className: any = 'glyphicon glyphicon-';
    if (this.props.contentValue === 'true') {
            className += 'ok';
        } else {
            className += 'remove';
        }

    return <span className={className}></span>;
    }
}
