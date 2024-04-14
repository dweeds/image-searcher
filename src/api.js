import axios from 'axios';

const IMG_per_page = 30;

const SearchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization : 'Client-ID uKAEtX7OzbXCdwXTxTY0C-MhsWxUDSbPYVy6hFcZ45Y',
        },
        params: {
            query : term,
            per_page : IMG_per_page,
        }
    })

    return response.data.results;
}

export default SearchImages;