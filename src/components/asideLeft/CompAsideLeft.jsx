import React, { Component } from 'react'
import { AsideLeft, Checkbox } from './StyleAsideLeft';
import { Link } from 'react-router-dom';
import CreateAds from '../createAds/CreateAds';

class CompAsideLeft extends Component {
    constructor(props) {
        super(props);
    }

    handleLink = () => {
        <CreateAds />
    }

    render() {
        return (
            <AsideLeft>
                <div>
                    <label for="price">For prices</label>
                    <div> <input type="range" min="0" max="100" name="price" onChange={this.props.data} /></div>
                    <span>{this.props.price} $</span>
                </div>
                <div>
                    <label for="status-sell">show me sold</label>
                    <Checkbox type="checkbox" name="status-sell" onChange={this.props.venta} />
                </div>
                <h2>You can see the fields</h2>
                <select onChange={this.props.fields}>
                    <option>Fields</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="type">Type</option>
                    <option value="photo">Photo</option>
                    <option value="createdAt">CreatedAt</option>
                    <option value="updatedAt">UpdatedAt</option>
                </select>
                <input type="number" min="1" max="50" onChange={this.props.limit} />
                <div>
                    <Link to="/edit" onClick={this.handleLink}>
                        <h4>You can create your ads</h4>
                    </Link>
                </div>
            </AsideLeft>
        )
    }
}

export default CompAsideLeft;