import axios from 'axios';

const KEY = 'AIzaSyA_vEu-wG2lxosEs3s8csbsHNHEan0NlSg';

//GET GET https://www.googleapis.com/youtube/v3/captions/id

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        kind: 'youtube#caption',
        maxResults: 5,
        key: KEY
    }
})

/*{
    "kind": "youtube#caption",
    "etag": etag,
    "id": string,
    "snippet": {
      "videoId": string,
      "lastUpdated": datetime,
      "trackKind": string,
      "language": string,
      "name": string,
      "audioTrackType": string,
      "isCC": boolean,
      "isLarge": boolean,
      "isEasyReader": boolean,
      "isDraft": boolean,
      "isAutoSynced": boolean,
      "status": string,
      "failureReason": string
    }
  }*/