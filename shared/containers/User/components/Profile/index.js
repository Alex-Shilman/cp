import React, { Component } from 'react';
import Panel                from 'react-bootstrap/lib/Panel';
import PanelGroup           from 'react-bootstrap/lib/PanelGroup'

export default class Profile extends Component {
    render(){
        return (
            <div className="cp-Profile">
                <PanelGroup>
                    <Panel header="header one">
                        Hello There
                    </Panel>

                    <Panel header="header two">
                        Hello There
                    </Panel>
                </PanelGroup>
            </div>
        );
    }
}