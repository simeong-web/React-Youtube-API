import axios from 'axios';

const KEY = 'AIzaSyDZ5eb94YhqoRhcd-MZj3gXIufcTuug7xU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
