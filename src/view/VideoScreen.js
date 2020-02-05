import React from 'react';
import styled from "styled-components";
import { useStore } from '../state/YouTube.store';
import YouTube from 'react-youtube';

const VideoScreen = ({ title, sub, video }) => {
  const { selectedVideo, setvideos } = useStore();
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

  
  return (
    <Box>

      <Title>{title}</Title>
      <Screen>{selectedVideo &&
        <YouTube
          videoId={selectedVideo.id.videoId}
          opts={opts}
          onReady={YouTube._onReady}
         
        />
      }
      </Screen>

      <button>-</button>


    </Box>

  );
}

export default VideoScreen;


const Box = styled.div`
width:500px;
   padding: 0.1rem;
   height:500px;
`;
const Screen = styled.div`
  border: 1px solid;
   padding: 0.1rem;
   width:640px;
   height:390px;
`;


const Title = styled.h3`
  text-transform: capitalize;
  // font-size: 1.6rem;
  // line-height: 2.2rem;
  // font-weight: 600;
`;

const Subtitle = styled.h4`
  text-transform: capitalize;
  // font-size: 1.4rem;
  // line-height: 0.8rem;
  // font-weight: 300;
 // padding-top: 0.4rem;
`;