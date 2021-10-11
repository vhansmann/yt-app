import React from 'react';
import youtube from '../apis/youtube';
import youtube_captions from '../apis/youtube_captions';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoSrc = "https://youtube.com/embed/" + video.id.videoId;



    const capsResponse = youtube_captions.get('/captions', {
        params: {
            videoId: video.id.videoId
        }
    });

    return (
        <div>
            <div className='ui embed'>
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>
                    {video.snippet.description}
                </p>
                <p>ID {video.id.videoId}
                </p>
                <p>ID {capsResponse.videoId}
                </p>
            </div>
        </div>
    );
};

export default VideoDetail;