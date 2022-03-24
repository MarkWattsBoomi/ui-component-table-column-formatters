declare var manywho: any;

import * as React from 'react';
import * as ReactDom from 'react-dom';
import './Ranking.css';

// the contentValue will have the lookup value
//
class Ranking extends React.Component<any, any> {
    table: any;

    constructor(props: any) {
        super(props);
        // this.myRef = React.createRef();
    }

    componentDidMount() {
        this.getTable = this.getTable.bind(this);
        this.voteUp = this.voteUp.bind(this);
        this.voteDown = this.voteDown.bind(this);

        this.getTable();

        this.forceUpdate();

    }

    getTable() {
        let maxLevels = 10;
        const me = ReactDom.findDOMNode(this);
        let parent: HTMLElement = me.parentElement;
        while (!parent.classList.contains('table-container') || maxLevels == 0) {
            parent = parent.parentElement;
            maxLevels--;
        }

        if (maxLevels == 0) {
            return '';
        }
        const componentId = parent.attributes.getNamedItem('id').value;
        this.table = manywho.model.getComponent(componentId, this.props.flowKey);
    }

    getTableRow(rowId: string): any {
        let row: any;
        const model: any = manywho.model.getComponent(this.table.id, this.props.flowKey);
        if (model) {
           model.objectData.forEach((rw: any) => {
                if (rw.internalId === rowId) {
                    row = rw;
                }
           });
        }
        return row;
    }

    voteUp(e: any) {
        const onVoteUp: string = this.getAttributeValue(this.table.attributes, 'onVoteUp', '');
        if (onVoteUp.length > 0) {
            const outcome: any = this.getOutcome(onVoteUp);
            if (outcome) {
                const rowState: any = this.getTableRow(this.props.id);
                const newState = { objectData: [rowState] };
                manywho.state.setComponent(this.table.id, newState,  this.props.flowKey, true);
                manywho.component.onOutcome(outcome, null, this.props.flowKey);
            }
        }
    }

    voteDown(e: any) {
        const onVoteDown = this.getAttributeValue(this.table.attributes, 'onVoteUp', '');
        if (onVoteDown.length > 0) {
            const outcome: any = this.getOutcome(onVoteDown);
            if (outcome) {
                // manywho.component.onOutcome(outcome,null,this.props.flowKey);
                const rowState: any = this.getTableRow(this.props.id);
            }
        }
    }

    getAttributeValue(attributes: any, attribute: string, defaultValue: string) {
        if (attributes[attribute]) {
            return attributes[attribute];
        } else {
            return defaultValue;
        }
    }

    getOutcome(outcomeName: string) {
        let outcome: any;
        let outcomes: any[] = manywho.model.getOutcomes(this.table.id, this.props.flowKey);
        outcomes.forEach((oc: any) => {
            if (oc.developerName === outcomeName) {
                outcome = oc;
            }
        });

        outcomes = manywho.model.getOutcomes(null, this.props.flowKey);
        outcomes.forEach((oc: any) => {
            if (oc.developerName === outcomeName) {
                outcome = oc;
            }
        });
        return outcome;
    }

	   render() {
        const currentVotes: number = parseInt(this.props.contentValue);
        return (
            <div
                className="ranking"
            >
                <span
                    className="ranking-label"
                >
                    {currentVotes}
                </span>
            </div>
        );
    }
}

manywho.component.register('Ranking', Ranking);

export default Ranking;
