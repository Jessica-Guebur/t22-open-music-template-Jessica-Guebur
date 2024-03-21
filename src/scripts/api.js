const fetchMusic = async (listId) => {
    const url = `https://openmusic-fake-api.onrender.com/api/musics`;


    const data = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
    return data
}


const processMusicData = (musicData) => {
    const titulo = musicData.título;
    const gênero = musicData.gênero;
    const banda = musicData.banda;
    const preco = musicData.preço;
    const img = musicData.img;

    const musicObj = {
        título: titulo,
        gênero: gênero,
        banda: banda,
        preço: preco,
        img: img,
    }
    return musicObj;
    console.log(musicObj)
}


export const mountMusicArray = async (list) => {
    const musicArray = [];

    for(let i = 0; i < list; i++){
        const musicData = await fetchMusic(i+1);
        const musicObj = processMusicData(musicData);
        musicArray.push(musicObj);
    }
    return musicArray
};