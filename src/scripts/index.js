import { applyInputRangeStyle } from "./inputRange.js";
import {listadeálbuns } from "./albumsDataBase.js";
import { renderDarkMode } from "./theme.js";


function creatCardMusic(list){
    const liMusic = document.createElement("li");
    const imgMusic = document.createElement("img");
    const h4Music = document.createElement("h4");
    const divMusic = document.createElement("div");
    const spanMusicBand = document.createElement("span");
    const spanMusicGenre = document.createElement("span");
    const divPrice = document.createElement("div");
    const spanPrice = document.createElement("span");
    const btnCard = document.createElement("button");

    // Hierarquia 

    liMusic.append(imgMusic, h4Music, divMusic, divPrice);
    divMusic.append(spanMusicBand, spanMusicGenre);
    divPrice.append(spanPrice, btnCard);

    // Adicionar Conteúdos Internos 

    imgMusic.src = list.img;
    imgMusic.alt = `Imagem do album ${list.título}`;
    h4Music.innerText = list.título;
    spanMusicBand.innerText = list.banda;
    spanMusicGenre.innerText = list.gênero;
    spanPrice.innerText = `R$ ${list.preço}`;
    btnCard.innerText = `Comprar`;

    // Adicionando Classes 

    liMusic.classList.add("card");
    imgMusic.classList.add("card_img");
    h4Music.classList.add("card_title_album");
    divMusic.classList.add("div_card");
    spanMusicBand.classList.add("card_name_band");
    spanMusicGenre.classList.add("card_genre");
    divPrice.classList.add("div_price");
    spanPrice.classList.add("card_price");
    btnCard.classList.add("card-btn");

    return liMusic;
  }


  function renderCards(listMusic){
    const ulMusicList = document.querySelector(".list_card");

    listMusic.forEach((list, index) => {
        const musicCard = creatCardMusic(list);
        ulMusicList.append(musicCard);
    })
  };


function main(){
    // renderDarkMode();
    applyInputRangeStyle();
    creatCardMusic(listadeálbuns);
    renderCards(listadeálbuns);
}

main();
