'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const input = document.querySelector('.form__input--to');
const btnSubmit = document.querySelector('.submitbtn');




/////////////////////////////////////


btnSubmit.addEventListener('click',function(e){
    e.preventDefault();
    const val = input.value;
    console.log('click');
    console.log(val);   
const renderCountry = function(data){
    const currency = Object.values(data.currencies)[0].name;
    const language = Object.values(data.languages);
    const tz = Object.values(data.timezones);
    const html = `<article class="country">
    <div class="country__data">
    <img class="country__img" src=${data.flags.png} />

       <h3 class="country__name">${data.name.common}</h3>
       <h4 class="country__region">${data.region}</h4>
       <p class="country__row"><span>👫</span>${+data.population}</p>
       <p class="country__row"><span>🗣️</span>${language}</p>
       <p class="country__row"><span>💰</span>${currency}</p>
       <p class="country__row"><span>⌚</span>${tz}</p>

    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend',html);
  countriesContainer.style.opacity = 1;
}


const getCountryAndNeighbours = function(country){
    const request = new XMLHttpRequest();
    request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load',function(){
        const [data] = JSON.parse(this.responseText);
        console.log(data);
    
        renderCountry(data);
        input.value = '';
        // const neighbours = data.borders[0];
        // console.log(neighbours);

        // if (!neighbours) return;

        // const request2 = new XMLHttpRequest();
        // request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbours}`);
        // request2.send();
        // request2.addEventListener('load',function(){
        //     const data2 = JSON.parse(this.responseText);
        //     console.log(data2);
        //     renderCountry(data2);
        // });
    });
    // renderCountry.catch((error) => console.log(error));
};
getCountryAndNeighbours(input.value);
});




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');
// const input = document.querySelector('.form__input--to');
// const btnSubmit = document.querySelector('.submitbtn');




// /////////////////////////////////////
// btnSubmit.addEventListener('click',function(e){
//     e.preventDefault();
//     const val = input.value;
//     console.log('click');
//     console.log(val);   

// const renderCountry = function(data){
//     const currency = Object.values(data.currencies)[0].name;
//     const language = Object.values(data.languages);
//     const tz = Object.values(data.timezones);
//     const html = `<article class="country">
//     <div class="country__data">
//     <img class="country__img" src=${data.flags.png} />

//        <h3 class="country__name">${data.name.common}</h3>
//        <h4 class="country__region">${data.region}</h4>
//        <p class="country__row"><span>👫</span>${+data.population}</p>
//        <p class="country__row"><span>🗣️</span>${language}</p>
//        <p class="country__row"><span>💰</span>${currency}</p>
//        <p class="country__row"><span>⌚</span>${tz}</p>

//     </div>
//   </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend',html);
//   countriesContainer.style.opacity = 1;
// }


// const getCountryAndNeighbours = function(country){
//     const request = new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load',function(){
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
    
//         renderCountry(data);
//         input.value = '';
//         // const neighbours = data.borders[0];
//         // console.log(neighbours);

//         // if (!neighbours) return;

//         // const request2 = new XMLHttpRequest();
//         // request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbours}`);
//         // request2.send();
//         // request2.addEventListener('load',function(){
//         //     const data2 = JSON.parse(this.responseText);
//         //     console.log(data2);
//         //     renderCountry(data2);
//         // });
//     });
// };
// getCountryAndNeighbours(input.value);
// });


