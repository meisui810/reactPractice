　let dom = document.querySelector('#root');

let element = React.createElement(
    'div',{}, [
        React.createElement(
            'h2',{},'Hello'
        ),
        React.createElement(
            'h4',{className: 'alert alert-primary'},
            'React Sample page.'
        ),
        React.createElement(
            'ul',{className: 'list-group'}, [
                React.createElement(
                    'li', {className: 'list-group-item'}, 'file item.'
                ),
                React.createElement(
                    'li', {className: 'list-group-item'}, 'second item.'
                ),
                React.createElement(
                    'li', {className: 'list-group-item'}, 'third item'
                ),
            ]
        ),
    ]
)

ReactDOM.render(element, dom)