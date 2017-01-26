import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl/lib/Tabs';
import Button from 'react-mdl/lib/Button';
import DropdownList from 'react-widgets/lib/DropdownList';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import _find from 'lodash/find';
var carMakes = require('../../../../carMakes.json');

(process.env.BROWSER) && require('./SearchTabs.scss');
export default class SearchTabs extends Component{
    state = {
        activeTab:1,
        make: null,
        type: null
    }

    _getTypes = () => {
        debugger;
        return _(carMakes).find({value: this.state.make}).models;
        ;
    }

    render(){
        const { make } = this.state;

        return (
            <div className="cp-Tabs">
                <Tabs
                    activeTab={this.state.activeTab}
                    onChange={tabId => this.setState({ activeTab: tabId})}
                    ripple>
                    <Tab>Used Cars</Tab>
                    <Tab>New Cars</Tab>
                    <Tab>Certified Pre-Owned</Tab>
                </Tabs>
                <section>
                    <div>Content of Tab {this.state.activeTab}</div>
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <DropdownList
                                    placeholder="Enter Car Make"
                                    data={carMakes}
                                    valueField="value"
                                    textField="title"
                                    value={make ? make.value : ""}
                                    caseSensitive={false}
                                    onChange={value => this.setState({make: value})}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <DropdownList
                                    placeholder="Enter Car Model"
                                    data={make ? make.models : []}
                                    valueField="value"
                                    textField="title"
                                    value={this.state.type || ""}
                                    caseSensitive={false}
                                    onChange={value => this.setState({type: value})}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <InputGroup>
                                    <FormControl type="text" placeholder="Entet Zip"/>
                                    <InputGroup.Addon>
                                        <Glyphicon glyph="music" />
                                    </InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>

                        </Col>

                        <Col md={2}>
                            <Button raised colored ripple>Search</Button>
                        </Col>
                    </Row>


                </section>
            </div>
        );
    }
}