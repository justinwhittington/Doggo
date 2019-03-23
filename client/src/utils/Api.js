
import axios from "axios";
const BASEURL = 'https://dog.ceo/api/breeds/image/random';


export default {
  random: function() {
    return axios.get(BASEURL);
  },
  getBreed: function(query) {
      return axios.get('https://dog.ceo/api/breed/' + query + '/images/random/10');  
  } 
};
