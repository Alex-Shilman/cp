import React, { Component, PropTypes }   from 'react';
import Promise from 'bluebird';

export default function connectDataFetchers (Component, actionCreators){
    return class DataFetchersWrapper extends Component {

        static propTypes = {
            dispatch : PropTypes.func.isRequired,
            params   : PropTypes.object.isRequired,
            location : PropTypes.shape({
                pathname : PropTypes.string.required,
                search   : PropTypes.string,
                query    : PropTypes.string.object
            }).isRequired
        }

        static fetchData(dispatch, params = {}, query = {}){
            return Promise.all(
                actionCreators.map(actionCreator => dispatch(actionCreator({params,  query})))
            );
        }

        componentDidMount(){
            const { dispatch, params, location: { query }} = this.props;
            DataFetchersWrapper.fetchData(dispatch,  params,  query);
        }

        render(){
            return(
                <Component {...this.props} />
            );
        }

    }
}
