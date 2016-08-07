var TodoApp = React.createClass({
    getInitialState: function () {
        return {items: [], text: ''};
    },
    handlerKeyUp: function (e) {
        if (e.keyCode == 13) {
            let event = e.target.value;
            console.log(event);
            let inputs = arrayInput(this.state.items, event);
            this.setState({
                items: inputs
            });
        }
    },

    render: function () {

        return (
            <div>
                <div className="text-center pos2">
                    <h1>Hello My RDJ</h1>
                    <p>This is {this.props.name},{this.props.children}</p>
                </div>
                <div className="text-center pos2">
                    <input type="text" onKeyDown={this.handlerKeyUp.bind(this)}/>
                </div>
                <Input items={this.state.items}/>
            </div>
        );
    }
});

const Input = React.createClass({
    count: function () {
        return countArray(this.props.items);
    },

    delEvent: function (e) {
        const array = arrayDel(this.props.items, e.target.value);
        this.setState({
            items: array
        });
    },
    change: function (e) {
        const array = changeArray(this.props.items, e.target.value);
        this.setState({
            items: array
        });
    },
    render: function () {
        const flag = this.count();
        return <div>
            {this.props.items.map((e, index)=> {
                return <div className="text-center pos2">
                    <input type="checkbox" onClick={this.change} value={index}/>{e.item}
                    <button type="button" onClick={this.delEvent} value={index}>x</button>
                </div>
            })}
            <div className="text-center pos2">
                {flag} Events Left
                <button className="btn btn-default btn-xs" type="button">All</button>
                <button className="btn btn-default btn-xs" type="button">Active</button>
                <button className="btn btn-default btn-xs" type="button">Complete</button>
            </div>
        </div>
    }
});


ReactDOM.render(<TodoApp name="TODOS">nice to MEET you.</TodoApp>,
    document.getElementById('content'));