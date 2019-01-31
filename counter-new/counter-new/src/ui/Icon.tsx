import React from 'react';

interface IProps {
    source: string;
    size: number;
}

export default class Icon extends React.PureComponent<IProps> {
    render() {
        const { source, size } = this.props;
        return (
            <img src={'/icons/' + source + '.svg'} width={size} alt="" />
        )
    }
}