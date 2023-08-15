console.log("Let's get this party started!");

async function getGif(search){
    const key = 'C7o3LTLAaAeaXSpHr3gZEIL2vLgEbci5'
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', { params: { api_key: key , q : search}});
    const resultsLength = res.data.data.length;
    const randomGif = Math.floor(Math.random()*resultsLength);
    const gif = document.createElement('img'); 
    gif.src = res.data.data[randomGif].images.downsized.url;
    const location = document.querySelector('#gif-return')
    location.append(gif);
}

const form = document.querySelector('#gif-search');


form.addEventListener("submit", function(e){
    e.preventDefault();
    const input = document.querySelector('#search');
    getGif(input.value);
    input.value = '';
})

const remove = document.querySelector('#remove')

remove.addEventListener('click', function(e){
    e.preventDefault;
    $('#gif-return').empty();
})

