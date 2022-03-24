declare var manywho: any;

import * as React from 'react';
import * as ReactDom from 'react-dom';

// the contentValue will have the lookup value
//
class LookupValue extends React.Component<any, any> {
    // myRef : any;
    // parentId : any;
    constructor(props: any) {
        super(props);
        // this.myRef = React.createRef();
    }

    componentDidMount() {
        // var me = ReactDom.findDOMNode(this);
        // var parentTable = $(this.myRef.current).closest('table').attr('id');
        this.forceUpdate();
        // this.parentId = $(this.refs.me).closest('table').attr('id')
    }

    getAttributeValue(attributes: any, attributePrefix: string,  columnId: string) {
        for (const key in attributes) {
            if (key === attributePrefix + '_' + columnId) {
                return attributes[key];
            }
        }
        return null;
    }

    getValueFromList(list: any , keyAttribute: string , resultAttribute: string, key: string) {
        let val: string = '';
        let hit: boolean = false;

        for (let iPos = 0 ; iPos < list.length ; iPos ++) {
            val = '';
            const item = list[iPos];

            for (let pPos = 0 ; pPos < item.properties.length ; pPos++) {
                const prop = item.properties[pPos];
                if (prop.developerName === resultAttribute) {
                    val = prop.contentValue;
                }
                if (prop.developerName === keyAttribute) {
                    if (prop.contentValue === key) {
                        hit = true;
                    }
                }
            }
            if (hit === true) {
                return val;
            }

        }

        return '';
    }

	   render() {
        const me = ReactDom.findDOMNode(this);
        let label: string = '';
        if (this.props.contentValue && me) {
            // iterate up looking for the element with class .table-container, it will have the table's id value on it
            let maxLevels = 10;
            let parent: HTMLElement = me.parentElement;
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

            const listComponentName = this.getAttributeValue(table.attributes, 'LookupListComponent', propertyId);
            const listKeyAtribute = this.getAttributeValue(table.attributes, 'LookupListKeyAttribute', propertyId);
            const listResultAttribute = this.getAttributeValue(table.attributes, 'LookupListResultAttribute', propertyId);

            if (listComponentName) {
                const list = manywho.model.getComponentByName(listComponentName,   this.props.flowKey);
                if (list) {
                    label = this.getValueFromList(list.objectData, listKeyAtribute, listResultAttribute, this.props.contentValue);
                }
            }
        }
        return <span>{label}</span>;
    }
}

manywho.component.register('LookupValue', LookupValue);

export default LookupValue;
