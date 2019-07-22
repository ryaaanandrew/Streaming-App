import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import flv from 'flv.js';
import { fetchStream } from '../../actions';

const VideoContainer = styled.div`
    margin-left: 4rem;
    width: 80%;
`

const VideoContent = styled.div`
    width: 90%;
`

const VideoHeader = styled.div`
    font-size: 3rem;
    padding: 2rem 3rem;
`

const VideoDescription = styled.p`
    padding: 2rem 3rem;
    border-top: 1px solid lightgrey;
`

const Video = styled.video`
    width: 90%;
`


class StreamShow extends Component {
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        
        this.props.fetchStream(id);
        this.buildPlayer();
    };

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer = () => {
        const { id } = this.props.match.params;

        if (this.player || !this.props.stream) {
            return;
        }

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();  
    };

    render() {
        if(!this.props.stream) {
            return <div>Loading...</div>
        }

        const { title, description } = this.props.stream;

        return (
            <VideoContainer>
            <Video ref={this.videoRef} controls/>
                <VideoContent>
                    <VideoHeader>{title}</VideoHeader>
                    <VideoDescription>{description}</VideoDescription>
                </VideoContent>
            </VideoContainer>
        );
    };
};

const mapStateToProps = (state, ownProps ) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);