declare var manywho: any;

import * as React from 'react';
import * as ReactDom from 'react-dom';

class Thumbnail extends React.Component<any, any> 
{   
    constructor(props : any)
	{
        super(props);
    }

    componentDidMount() 
    {
        this.forceUpdate();
    }

	render()
	{

        var me = ReactDom.findDOMNode(this);
        var contentValue : string;
        var width : number;
        if(me)
        {
            var parent : HTMLElement = me.parentElement;
            var maxLevels = 10;
            while(!parent.classList.contains("table-container") || maxLevels == 0)
            {
                parent=parent.parentElement;
                maxLevels--;
            }

            if(maxLevels==0)
            {
                return "";
            }

            var componentId = parent.attributes.getNamedItem('id').value;
            var table = manywho.model.getComponent(componentId,this.props.flowKey);

            var propertyId = this.props.propertyId;

            contentValue = this.props.contentValue || "";

            width = table.attributes["image-scaled-width"] || 50;
        }

        var outerStyle : React.CSSProperties = {
            boxSizing: "content-box",
            position : "relative" as "relative",
            display: "grid",
            alignContent: 'middle',
            margin: '0 !important'
        };

        if(contentValue)
        {
            let src="";
            return (
                <div style={outerStyle}>
                    <img src={contentValue} width={width} style={{marginLeft: 'auto', marginRight: 'auto'}}/>
                </div>
                );
        }
        else
        {
            return (
            <div></div>
            );
        }
    }
}

manywho.component.register('Thumbnail', Thumbnail);

export default Thumbnail;