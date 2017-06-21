import React from 'react';
import classNames from 'classnames';
import './MessagePreview.less'

const MessagePrevier = React.createClass({
    render() {
        const {title, senderName, selected, onClick} = this.props;
        const classes = classNames("MessagePrevier", { selected })

        return (
            <div className={classes} onClick={onClick}>
                <div className="title">
                    {title}
                </div>
                <div className="from">
                        {`from ${senderName}`}
                </div>    
            </div>
        );
    }
});

export default MessagePrevier;