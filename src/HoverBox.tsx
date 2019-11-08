declare var manywho: any;

import * as React from 'react';
import * as ReactDom from 'react-dom';

class HoverBox extends React.Component<any, any> 
{   
    isOverButton: boolean = false;
    isOverDialog: boolean=false;

    hoverBoxShown: boolean=false; //change to false

    constructor(props : any)
	{
        super(props);
        this.getParentTableElement = this.getParentTableElement.bind(this);
        this.getParentTableComponentId = this.getParentTableComponentId.bind(this);
        this.getParentRowElement = this.getParentRowElement.bind(this);
        this.overButton = this.overButton.bind(this);
        this.outButton = this.outButton.bind(this);
        this.overDialog = this.overDialog.bind(this);
        this.outDialog = this.outDialog.bind(this);
        this.calcShown = this.calcShown.bind(this);
        
    }

    componentDidMount() 
    {
        this.forceUpdate();
    }

    getAttributeValue(attributes : any, attributeName : string ) : any
    {
        for(var key in attributes)
        {
            if(key === attributeName)
            {
                return attributes[key];
            }
        }
        return null;
    }

    overButton() {
        if(this.isOverButton === false) {
            this.isOverButton=true;
            this.calcShown();
        }
    }

    outButton(e: any) {
        
        //let element = e.toElement || e.relatedTarget;
        //if (element.parentNode == this || element == this) {
        //   return;
        //}
        if(this.isOverButton === true) {
            this.isOverButton=false;
            this.calcShown();
        }
    }

    overDialog() {
        if(this.isOverDialog === false) {
            this.isOverDialog=true;
            this.calcShown();
        }
    }

    outDialog() {
        if(this.isOverDialog === true) {
            this.isOverDialog=false;
            this.calcShown();
        }
    }

    calcShown() {
        if(this.isOverButton === true || this.isOverDialog === true) {
            if(this.hoverBoxShown === false) {
                this.hoverBoxShown = true;
                this.forceUpdate();
            }
        }
        else {
            if(this.hoverBoxShown === true) {
                this.hoverBoxShown = false;
                this.forceUpdate();
            }
        }
    }


	render()
	{
        let hoverBox: any;
        let me = ReactDom.findDOMNode(this);
        let icon: string;
        let position: string;
        
        const value: any = this.props.contentValue;
        if(me) {
            const tableElement: HTMLElement = this.getParentTableElement();
            //const rowElement: HTMLElement = this.getParentRowElement();
            const tdElement: HTMLElement = this.getParentTDElement();
            //modify td
            tdElement.style.position="relative";
            tdElement.style.height="100%";
            tdElement.style.padding="0px";


            const tableComponentId: string = this.getParentTableComponentId(tableElement);
            const table = manywho.model.getComponent(tableComponentId,this.props.flowKey);

            icon = this.getAttributeValue(table.attributes, "hoverboxIcon") || "question-sign";
            position = this.getAttributeValue(table.attributes, "hoverboxPosition") || "left";
            let left: string;
            let right: string;
            let top: string;
            let bottom: string;

            switch(position.toLowerCase()) {
                case "left":
                    right = "calc(100% + 5px)";
                    top = "calc(-50%)";
                    break;
                    
                case "lower-left":
                    right = "calc(100% + 5px)";
                    top = "calc(50% + 5px);";
                    break;

                case "upper-left":
                    right = "calc(100% + 5px)";
                    bottom = "calc(50% + 5px)";
                    break;

                case "above":
                    right = "calc(-50%)";
                    bottom = "calc(100% + 5px)";
                    break;

                case "below":
                    right = "calc(-50%)";
                    top = "calc(100% + 5px)";
                    break;

                case "right":
                    left = "calc(100% + 5px)";
                    top = "calc(-50%)";
                    break;
                    
                case "lower-right":
                    left = "calc(100% + 5px)";
                    top = "calc(50% + 5px);";
                    break;

                case "upper-right":
                    left = "calc(100% + 5px)";
                    bottom = "calc(50% + 5px)";
                    break;
            }

            if(this.hoverBoxShown===true) {
                hoverBox = (
                    <div
                        className="hoverbox-dialog"
                        style={{
                            display: "flex",
                            position: "absolute",
                            left,
                            right,
                            top,
                            bottom,
                            backgroundColor: "#fefefe",
                            border: "2px solid #000",
                            borderRadius: "5px",
                            padding: "20px",
                            zIndex: 100
                        }}
                        onMouseEnter={this.overDialog}
                        onMouseLeave={this.outDialog}
                        dangerouslySetInnerHTML={{__html: value}}
                    />
                );
            }

        }
        
        return (
            <div
                className="hoverbox"
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center"
                }}
                onMouseLeave={this.outButton}
            >         
                <div
                    className="hoverbox-button"
                    style={{
                        position: "relative",
                        backgroundColor: "#43c35f",
                        padding: "10px",
                        borderRadius: "50%",
                        display: "flex",
                        margin: "auto"
                    }}
                    onMouseEnter={this.overButton}
                >
                    {hoverBox}
                    <span
                        className={"glyphicon glyphicon-" + icon + " hoverbox-icon"} 
                        style={{
                            color: "white",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "-2px"
                            //pointerEvents: "none"
                        }}
                        //onMouseEnter={this.showHoverBox}
                    />
                </div>
            </div>
        );
    }

    getParentTableElement() : HTMLElement | undefined
    {
        let me = ReactDom.findDOMNode(this);
        var maxLevels = 10;
        var parent : HTMLElement = me.parentElement;
        while(!parent.classList.contains("table-container") || maxLevels == 0)
        {
            parent=parent.parentElement;
            maxLevels--;
        }

        if(maxLevels==0)
        {
            return undefined;
        }
        
        return parent;

    }

    getParentTDElement() : HTMLElement | undefined
    {
        let me = ReactDom.findDOMNode(this);
        var maxLevels = 10;
        var parent : HTMLElement = me.parentElement;
        while( parent.tagName.toLowerCase() !=="td" || maxLevels == 0)
        {
            parent=parent.parentElement;
            maxLevels--;
        }

        if(maxLevels==0)
        {
            return undefined;
        }
        
        return parent;

    }

    getParentRowElement() : HTMLElement | undefined
    {
        let me = ReactDom.findDOMNode(this);
        var maxLevels = 10;
        var parent : HTMLElement = me.parentElement;
        while( parent.tagName.toLowerCase() !=="tr" || maxLevels == 0)
        {
            parent=parent.parentElement;
            maxLevels--;
        }

        if(maxLevels==0)
        {
            return undefined;
        }
        
        return parent;

    }

    getParentTableComponentId(table: HTMLElement) : string
    {
        var componentId: string = table.attributes.getNamedItem('id').value;
        
        return componentId;
    }
}

manywho.component.register('HoverBox', HoverBox);

export default HoverBox;