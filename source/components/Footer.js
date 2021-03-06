import React, { Component } from 'react';

import links from '../theme/assets/links';

export default class Footer extends Component {
    render () {
        const linksJSX = links.map((link) => {
            return (
                <li key = { link.id }>
                    { link.message }
                </li>
            );
        });

        return (
            <div className = 'footer'>
                <ul>{linksJSX}</ul>
            </div>
        );
    }
}
