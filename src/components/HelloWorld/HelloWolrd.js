import React from 'react';

class HelloWord extends React.Component {
    state = {
        title: this.props.title,
        desc: 'I just want to say, Hello World!',
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.desc}</h3>
            </div>
        );
    }
}

export default HelloWord;