import React, { Component } from "react";
import "./pastOrder.css";
import PastOrderItem from "../PastOrderItem/pastOrderItem";

class PastOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: null,
            items: null,
            price: null,
        }
    }

    componentDidMount = () => {
        this.setState({
            date: this.props.date.split("T")[0],
            items: JSON.parse(this.props.items),
            price: this.props.price,
        });
    }

    render() {
        return (
            <div className="pastOrder">
                <h4 className="orderHeader">Ordered on: {this.props.date.split("T")[0]}</h4>
                {this.state.items ? (
                    this.state.items.map(item => (
                        <PastOrderItem
                            title={item.title}
                            authorFirst={item.authorFirst}
                            authorLast={item.authorLast}
                            price={item.price}
                            imageURL={item.imageURL}
                        />
                    ))
                ) : (
                    <></>
                )}
            </div>
        )
    }
}

export default PastOrder;