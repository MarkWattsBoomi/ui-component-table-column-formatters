import React from "react";



export class ThumbNail extends React.Component<any, any> {

    comp: any;

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {

        
        let contentValue: string;
        let width: number;
        if (this.comp) {
            let parent: HTMLElement = this.comp.parentElement;
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
                <div 
                    style={outerStyle}
                    ref={(element: any) => {this.comp = element}}
                >
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

