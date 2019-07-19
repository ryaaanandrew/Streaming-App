import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
    componentDidMount() {
        this.props.fetchStream();
    };
    
    render() {
        return(
            <div>Stream Show</div>
        );
    };
};

const mapStateToProps = (state, ownProps ) => {
    return {
        stream: state.stream[ownProps.match.params.id]
    }
};

export default connect(null, { fetchStream })(StreamShow);