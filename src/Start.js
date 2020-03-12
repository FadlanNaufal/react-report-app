import React from 'react';
import Splashscreen from './Splashscreen'

import App from './../App'

export default class Start extends React.Component {

    componentWillMount() {
        this.state = {
            view : <Splashscreen />
        };


        setTimeout(() => {
            //IF FALSE NAVIGATE TO ERROR
            if(true) {
                this.setState({
                    view : <App/>
                })
            } 
        }, 2000) //TIME OF WAITING


    }

    render() {
        return (
            this.state.view
        )
    }
}