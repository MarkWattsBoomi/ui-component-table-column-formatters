declare var manywho: any;

import * as React from 'react';
import * as ReactDom from 'react-dom';

class Thumbnail extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {

        const me = ReactDom.findDOMNode(this);
        let contentValue: string;
        let width: number;
        if (me) {
            let parent: HTMLElement = me.parentElement;
            let maxLevels = 10;
            while (!parent.classList.contains('table-container') || maxLevels == 0) {
                parent = parent.parentElement;
                maxLevels--;
            }

            if (maxLevels == 0) {
                return '';
            }

            const componentId = parent.attributes.getNamedItem('id').value;
            const table = manywho.model.getComponent(componentId, this.props.flowKey);

            const propertyId = this.props.propertyId;

            contentValue = this.props.contentValue || '';

            width = table.attributes['image-scaled-width'] || 50;
        }

        const outerStyle: React.CSSProperties = {
            boxSizing: 'content-box',
            position : 'relative' as 'relative',
            display: 'table-cell',
            alignContent: 'middle',
            margin: '0 !important'        };

        if (contentValue) {
            const src = '';
            return (
                <div style={outerStyle}>
                    <img src={contentValue} style={{marginLeft: 'auto', marginRight: 'auto', height: '150px', width: 'auto'}}/>
                </div>
                );
        } else {
            return (
            <div></div>
            );
        }
    }
}

manywho.component.register('Thumbnail', Thumbnail);

export default Thumbnail;
