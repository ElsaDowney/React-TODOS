const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const IndexRoute = ReactRouter.IndexRoute;

var TodoApp = React.createClass({
    getInitialState: function () {
        return {items: []};
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
                </div>
                <div className="text-center pos2">
                    <input type="text" className=" text-center pos2 form-control"
                           placeholder="TODOS with you for 365 Days XD"
                           onKeyDown={this.handlerKeyUp.bind(this)}/>
                </div>
                {this.props.children && React.cloneElement(this.props.children, {
                    items: this.state.items
                })}
            </div>
        );
    }
});


const All = React.createClass({
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
            <link to="/"></link>
            {this.props.items.map((e, index)=> {
                return <div className="pos4">
                    <input type="checkbox" checked={!e.flag}
                           onClick={this.change} value={index}/>{e.item}
                    <button type="button" onClick={this.delEvent} value={index}>x</button>
                </div>
            })}
            <div className="text-center pos2">
                {flag} Events Left
                <Link to="/All">
                    <button className="btn btn-default btn-xs" type="button">All</button>
                </Link>
                <Link to="/Active">
                    <button className="btn btn-default btn-xs" type="button">Active</button>
                </Link>
                <button className="btn btn-default btn-xs" type="button">Complete</button>
            </div>
        </div>
    }
});


const Active = React.createClass({
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
                if (e.flag === true) {
                    return <div className="pos4">
                        <input type="checkbox"  checked={!e.flag}
                               onClick={this.change} value={index}/>{e.item}
                        <button type="button" onClick={this.delEvent} value={index}>x</button>
                    </div>
                }
            })}
            <div className="text-center pos2">
                {flag} Events Left
                <Link to="/All">
                    <button className="btn btn-default btn-xs" type="button">All</button>
                </Link>
                <Link to="/Active">
                    <button className="btn btn-default btn-xs" type="button">Active</button>
                </Link>
                <Link to="/Complete">
                    <button className="btn btn-default btn-xs" type="button">Complete</button>
                </Link>
            </div>
        </div>
    }
});

const Complete = React.createClass({
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
        console.log(this.props.items);
        return <div>

            {this.props.items.map((e, index)=> {
                if (e.flag === false) {
                    return <div className="pos4">
                        <input type="checkbox"  checked={!e.flag}
                               onClick={this.change} value={index}/>{e.item}
                        <button type="button" onClick={this.delEvent} value={index}>x</button>
                    </div>
                }
            })}
            <div className="text-center pos2">
                {flag} Events Left
                <Link to="/All">
                    <button className="btn btn-default btn-xs" type="button">All</button>
                </Link>
                <Link to="/Active">
                    <button className="btn btn-default btn-xs" type="button">Active</button>
                </Link>
                <Link to="/Complete">
                    <button className="btn btn-default btn-xs" type="button">Complete</button>
                </Link>
            </div>
        </div>
    }
});

const Input = React.createClass({

    render: function () {
        return <div>

            <div className="text-center pos2">
                <Link to="/All">
                    <button className="btn btn-default btn-xs" type="button">All</button>
                </Link>
                <Link to="/Active">
                    <button className="btn btn-default btn-xs" type="button">Active</button>
                </Link>
                <Link to="/Complete">
                    <button className="btn btn-default btn-xs" type="button">Complete</button>
                </Link>
            </div>

        </div>
    }
});


ReactDOM.render(<Router>
        <Route path="/" component={TodoApp}>
            <IndexRoute component={Input}/>
            <Route path="All" component={All}/>
            <Route path="Active" component={Active}/>
            <Route path="Complete" component={Complete}/>
        </Route>
    </Router>,
    document.getElementById('content'));