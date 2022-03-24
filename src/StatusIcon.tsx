declare var manywho: any;

import * as React from 'react';

class StatusIcon extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.forceUpdate();
    }

	   render() {
        const className: any = 'glyphicon glyphicon-';
        const tooltip: string = '';
        let result: any;

        switch (this.props.contentValue.toLowerCase()) {
            case 's':
                result = (
                    <span
                        className={'glyphicon glyphicon-hourglass'}
                        title={'Staged'}
                    />
                );
                break;

            case 'c':
                result = (
                    <span
                        className={'glyphicon glyphicon-ok'}
                        title={'Complete'}
                    />
                );
                break;

            case 'a':
                result = (
                    <span
                        className={'glyphicon glyphicon-flash'}
                        title={'Active'}
                    />
                );
                break;

            case 'complete':
                result = (
                    <img
                        className="tcf-image"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAd0lEQVR42mNggAKlMIYGpVCG/ygYKMaADGASBkUs/13mcIExiA0TRzHJaQYnVgw3GcTQy2P+bz+JAysGyYFNBRHWXex4MVyheTMrXgxXqJnK+N+4mhkrBslBFEI9o1/MhBWjBBMsGNTiGf7r5DKCMYiNEjzEBjgAU8qK7Su1nYwAAAAASUVORK5CYII="
                        title="Complete"
                    />);
                break;

            case 'error':
                result = (
                    <img
                        className="tcf-image"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAZ0lEQVR42mNggIICGYmGzVwM/5ExSIwBGcAkXilzoGCYOIpJzxTZsWK4ySDGYwV2vBhsKoi4J8cGxugAJg5XeEuGFYzRAUwcrvCqJCteDFYI88x5cRasGCWYYMFwRIgJBaMED7EBDgCQirDFSBNkJAAAAABJRU5ErkJggg=="
                        title="Complete"
                    />);
                break;

            default:
                result = (
                    <span
                        className={'glyphicon glyphicon-option-horizontal'}
                        title={'Not Set'}
                    />
                );
                break;
        }

        return result;
    }
}

manywho.component.register('StatusIcon', StatusIcon);

export default StatusIcon;
