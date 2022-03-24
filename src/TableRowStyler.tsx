declare var manywho: any;

import * as React from 'react';
import * as ReactDom from 'react-dom';

class TableRowStyler extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.getParentTableElement = this.getParentTableElement.bind(this);
        this.getParentTableComponentId = this.getParentTableComponentId.bind(this);
        this.getParentRowElement = this.getParentRowElement.bind(this);
    }

    componentDidMount() {
        this.forceUpdate();
    }

    getAttributeValue(attributes: any, attributeName: string): any {
        for (const key in attributes) {
            if (key === attributeName) {
                return attributes[key];
            }
        }
        return null;
    }

	   render() {
        const me = ReactDom.findDOMNode(this);
        const value: any = this.props.contentValue;
        if (me) {
            const tableElement: HTMLElement = this.getParentTableElement();
            const rowElement: HTMLElement = this.getParentRowElement();

            const tableComponentId: string = this.getParentTableComponentId(tableElement);
            const table = manywho.model.getComponent(tableComponentId, this.props.flowKey);

            const argstr = this.getAttributeValue(table.attributes, 'trfConfig');
            const args = JSON.parse(argstr);

            console.log(args);

            if (args[value]) {
                rowElement.classList.add(args[value]);
            }

        }

        return <span>{value}</span>;
    }

    getParentTableElement(): HTMLElement | undefined {
        const me = ReactDom.findDOMNode(this);
        let maxLevels = 10;
        let parent: HTMLElement = me.parentElement;
        while (!parent.classList.contains('table-container') || maxLevels == 0) {
            parent = parent.parentElement;
            maxLevels--;
        }

        if (maxLevels == 0) {
            return undefined;
        }

        return parent;

    }

    getParentRowElement(): HTMLElement | undefined {
        const me = ReactDom.findDOMNode(this);
        let maxLevels = 10;
        let parent: HTMLElement = me.parentElement;
        while (parent.tagName.toLowerCase() !== 'tr' || maxLevels == 0) {
            parent = parent.parentElement;
            maxLevels--;
        }

        if (maxLevels == 0) {
            return undefined;
        }

        return parent;

    }

    getParentTableComponentId(table: HTMLElement): string {
        const componentId: string = table.attributes.getNamedItem('id').value;

        return componentId;
    }
}

manywho.component.register('TableRowStyler', TableRowStyler);

export default TableRowStyler;
