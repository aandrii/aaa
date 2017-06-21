import React from 'react';

import messages from '../messages.json';

import MessagePrevier from './MessagePrevier.jsx'

const InboxPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            messages
        };
    },
    
    hendlePreviewClick(messageId) {
        this.context.router.push(`/inbox/messages/${messageId}`)
    },

    render() {
        const {messages} = this.state;

        const { messageId: selectedMessageId } = this.props.params;

        return (
            <div className='InboxPage'>
                <h2 className="title"> This is messages Inbox Page </h2> 
                <div> 
                    {
                        messages.map(message=>
                            <MessagePrevier
                                key={message.id}
                                selected={message.id === selectedMessageId}
                                onClick={this.hendlePreviewClick.bind(null, message.id)}
                                title={message.subject}
                                senderName={message.senderName}
                            />
                        )
                    }
                </div>  

                <div className="messageContainer">
                    {this.props.children}
                </div>            
            </div>
        );
    }
});

export default InboxPage;