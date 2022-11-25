import axios from 'axios';
export async function fetchImages(inputValue,pageNr) {

const dataResponse = await axios.get
(`https://pixabay.com/api/?key=29588079-fbc492831fdad231bf7222b96&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
)
    
      return dataResponse.data;
    }
    
