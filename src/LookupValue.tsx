declare var manywho: any;

import * as React from 'react';
import * as $ from 'jquery';
import * as ReactDom from 'react-dom';


//the contentValue will have the lookup value
//
class LookupValue extends React.Component<any, any> 
{  
    //myRef : any; 
    //parentId : any;
    constructor(props : any)
	{
        super(props);
        //this.myRef = React.createRef();
    }

    componentDidMount() 
    {
        //var me = ReactDom.findDOMNode(this);
        //var parentTable = $(this.myRef.current).closest('table').attr('id');
        this.forceUpdate();
        //this.parentId = $(this.refs.me).closest('table').attr('id')
    }

    getAttributeValue(attributes : any, attributePrefix : string,  columnId : string)
    {
        for(var key in attributes)
        {
            if(key === attributePrefix + "_" + columnId)
            {
                return attributes[key];
            }
        }
        return null;
    }

    getValueFromList(list : any , keyAttribute : string , resultAttribute : string, key : string)
    {
        var val : string = "";
        var hit : boolean = false

        for(var iPos = 0 ; iPos < list.length ; iPos ++)
        {
            val="";
            var item = list[iPos];

            for(var pPos = 0 ; pPos < item.properties.length ; pPos++)
            {
                var prop = item.properties[pPos];
                if(prop.developerName === resultAttribute)
                {
                    val = prop.contentValue;
                }
                if(prop.developerName === keyAttribute)
                {
                    if(prop.contentValue===key)
                    {
                        hit=true;
                    }
                }
            }
            if(hit===true)
            {
                return val;
            }

        }

        return "";
    }

	render()
	{
        var me = ReactDom.findDOMNode(this);
        var label : string = "";
        if(this.props.contentValue && me)
        {
            var componentId = $(me).closest('.table-container').attr('id');
            var table = manywho.model.getComponent(componentId,this.props.flowKey);

            var propertyId = this.props.propertyId;

            var listComponentName = this.getAttributeValue(table.attributes, "LookupListComponent", propertyId);
            var listKeyAtribute = this.getAttributeValue(table.attributes, "LookupListKeyAttribute", propertyId);
            var listResultAttribute = this.getAttributeValue(table.attributes, "LookupListResultAttribute", propertyId);

            
            if(listComponentName)
            {
                var list = manywho.model.getComponentByName(listComponentName,   this.props.flowKey)
                if(list)
                {
                    label = this.getValueFromList(list.objectData, listKeyAtribute, listResultAttribute, this.props.contentValue);
                }
            }
        }
            return <span>{label}</span>;
    }
}

manywho.component.register('LookupValue', LookupValue);

export default LookupValue;