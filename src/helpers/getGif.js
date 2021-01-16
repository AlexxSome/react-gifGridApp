export const getGifs = async (category) => {
        
    const apiKey = 'lOoyQ2qLL2LMsA4JxAVu2WjtNNBOmVbg';
    const url = `https://api.giphy.com/v1/gifs/search?limit=6&api_key=lOoyQ2qLL2LMsA4JxAVu2WjtNNBOmVbg&q=${encodeURI(category)}`;
    const resp = await fetch (url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return {
        id:     img.id,
        title:  img.title,
        url:    img.images?.downsized_medium.url
        }
    });

    return gifs;
}