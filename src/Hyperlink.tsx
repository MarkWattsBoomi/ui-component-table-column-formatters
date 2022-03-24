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

        const value = this.props.contentValue || '';
        const displayValue = value + '%';

        const tooltip: string = value + '%';

        const linkStyle = {
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

        const max = 100;
        const min = 0;
        const pos = 60;

        return  <div>
                    <a href={value} target="_blank">{value}</a>
                </div>;
    }
}

// <Tooltip border="#ffffff" radius="5" placement="right" content={tooltip}></Tooltip>

manywho.component.register('Hyperlink', Hyperlink);

export default Hyperlink;
