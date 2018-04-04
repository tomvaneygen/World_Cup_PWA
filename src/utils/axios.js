import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://raw.githubusercontent.com/tomvaneygen/fifa-worldcup-2018/master/data.json',
});

export default instance