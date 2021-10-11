import axios from 'axios';

const KEY = 'AIzaSyCtgnDaLG9Z2i3NsSD84los-Py9TGDNgAU';

//GET https://www.googleapis.com/youtube/v3/search

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})


