import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Input.css';

export default class InputDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: "", weight: "", symbol: "" }
    }
    handlechange = (e) => {
        this.setState({ name: e.target.value });
    }
    handlechange2 = (e) => {
        this.setState({ weight: e.target.value })
    }
    handlechange3 = (e) => {
        this.setState({ symbol: e.target.value })
    }
    details = (e) => {

        this.props.parentCallBack(this.state);
        e.preventDefault();

    }
    render() {
        return (
            <div className="bgimg">
                <Card className="card">
                    <Card.Body>
                        <Card.Title>ADD ELEMENT</Card.Title>
                        <Card.Text>
                            <form>
                                <div>
                                    <label>
                                        Name: <input type="text" name="name" onChange={this.handlechange} />
                                    </label>
                                </div>
                                <br />
                                <div>
                                    <label>
                                        weight: <input type="text" name="weight" onChange={this.handlechange2} />
                                    </label>
                                </div>
                                <br />
                                <div>
                                    <label>
                                        symbol: <input type="symbol" name="symbol" onChange={this.handlechange3} />
                                    </label>
                                </div>
                                <Button variant="primary" onClick={this.details}>Submit</Button>
                            </form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}