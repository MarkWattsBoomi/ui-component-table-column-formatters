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
        for (let key in attributes) {
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
            let item = list[iPos];

            for (let pPos = 0 ; pPos < item.properties.length ; pPos++) {
                let prop = item.properties[pPos];
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
        let me = ReactDom.findDOMNode(this);
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
            let componentId = parent.attributes.getNamedItem('id').value;
            let table = manywho.model.getComponent(componentId, this.props.flowKey);

            let propertyId = this.props.propertyId;

            let listComponentName = this.getAttributeValue(table.attributes, 'LookupListComponent', propertyId);
            let listKeyAtribute = this.getAttributeValue(table.attributes, 'LookupListKeyAttribute', propertyId);
            let listResultAttribute = this.getAttributeValue(table.attributes, 'LookupListResultAttribute', propertyId);

            if (listComponentName) {
                let list = manywho.model.getComponentByName(listComponentName,   this.props.flowKey);
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
