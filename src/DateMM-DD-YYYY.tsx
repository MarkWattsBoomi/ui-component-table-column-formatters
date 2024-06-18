

import React from 'react';
declare const manywho: any;

export class DateDashedMMDDYYYY extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.onEdit = this.onEdit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCommit = this.onCommit.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);

        let dt: Date = new Date(this.props.contentValue);
        if(!isNaN(dt.getTime())){
            this.props.contentFormat;
            this.state = {value: dt, valueFormatted: dt.toISOString().substring(0,10), currentValue: null}
        }
        
    }


    onEdit(e: any) {
        e.stopPropagation();
        this.setState({ currentValue: this.state.value });
        manywho.model.setModal(
            this.props.flowKey, 
            {
                content: <input
                    type="date" 
                    defaultValue={this.state.valueFormatted} 
                    onChange={this.onChange} 
                />,
                onConfirm: this.onCommit,
                onCancel: this.onCloseModal,
                flowKey: this.props.flowKey,
            },
        );
    }

    onChange(e: any){
        let dt: Date = new Date(e.currentTarget.value);
        this.setState({ value: dt, valueFormatted: dt.toISOString().substring(0,10) });
    }

    onCommit(e: any){
        this.props.onCommitted(this.props.id, this.props.propertyId, this.state.value.toISOString());
        manywho.model.setModal(this.props.flowKey, null);
    }

    onCloseModal(e: any){
        this.setState({ value: this.state.currentValue, valueFormatted: this.state.currentValue.toISOString().substring(0,10), currentValue: null });
        manywho.model.setModal(this.props.flowKey, null);
    }

    componentDidMount() {
        this.forceUpdate();
    }

    render() {
        let onClick: any;
        if(this.props.isEditable){
            onClick=this.onEdit;
        }
        if (this.state.value) {
            // format the date using React formatter into dt string
            let dt: string = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            }).format(this.state.value);
            while (dt.indexOf('/') >= 0) {
                dt = dt.replace('/', '-');
            }
            return (
                <span
                    onClick={onClick}
                >
                    {dt}
                </span>
            );
        } else {
            return null;
        }
    }
}


