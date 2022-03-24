declare var manywho: any;

import * as React from 'react';

class Hyperlink extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {
        let tooltip: string = '';

        let value = this.props.contentValue || '';
        let displayValue = value + '%';

        let tooltip: string = value + '%';

        let linkStyle = {
                'font-family' : 'tahoma',
                'color' : '#ffffff',
                'font-size' : '10pt',
                'width' : '100%',
                'text-align' : 'center',
                'position' : 'absolute' as 'absolute',
                'height': '100%',
                'vertical-align': 'middle',
                'line-height': '200%',
                'mix-blend-mode': 'difference',

            };

        let max = 100;
        let min = 0;
        let pos = 60;

        return  <div>
                    <a href={value} target="_blank">{value}</a>
                </div>;
    }
}

// <Tooltip border="#ffffff" radius="5" placement="right" content={tooltip}></Tooltip>

manywho.component.register('Hyperlink', Hyperlink);

export default Hyperlink;
