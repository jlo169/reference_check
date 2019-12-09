import React from 'react';
import './layout.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="headerTitle">
                    <p>GFL Tracker</p>
                </div>
            </div>
        )
    }
}