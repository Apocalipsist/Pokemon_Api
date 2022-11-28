// console.log('This is main.js')

{   
    let form = document.getElementById('pokeForm');
    console.log(form);

    async function formSubmit(e){
        e.preventDefault();
        // console.log(e);
        let pokeName = e.target.pokeName.value;
        // console.log(pokName)
        let pokemonInfo = await getPokeInfo(pokeName);
        // console.log(pokemonInfo.json())
        pokeCard(pokemonInfo);
        e.target.pokeName.value ='';
    }

    async function getPokeInfo(pokeName){
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        // console.log(response)
        let data = await response.json()
        // console.log(data)
        return data
    
    }

    async function pokeCard(pokeObj){
        let card =document.createElement('div');
        card.className = 'card h-100';
        
        console.log(pokeObj.moves)
        let pokeImage = document.createElement('img');
        pokeImage.className = 'card-img-top';
        pokeImage.src = pokeObj.sprites.front_default;
        card.append(pokeImage);

        let cardBod = document.createElement('div');
        cardBod.className = 'card-body';

        let pokemonName = document.createElement('h4');

        pokemonName.className = 'cardtitle';
        pokemonName.innerHTML = pokeObj.species.name;

        let heightAndWeight = document.createElement('p');
        heightAndWeight.className = 'card-text';
        heightAndWeight.innerHTML = `Height: ${pokeObj.height}m | Weight: ${pokeObj.weight}`

        
        console.log(pokeObj.moves)
        
        // function indexCount(x){
            
        //     function addindex(y){
        //         y =0
        //         y++
        //         x = pokeObj.moves[y]
        //         return indexCount
        //     }

        // attacks.innerHTML = `${moves.move.name}`;
        
        // }

        pokemoves = pokeObj.moves[0]
        // pokemoves1 = pokeObj.moves[1]
        // pokemoves2 = pokeObj.moves[2]
        // pokemoves3 = pokeObj.moves[3]

        // pokeattack = [pokemoves, pokemoves1, pokemoves2, pokemoves3]
        let attacks = document.createElement('p')
        attacks.className = 'card-text'
        // pokeattack.forEach(x => {
        //     attacks.innerHTML = `${x.move.name}`;
        // });
        attacks.innerHTML = `${pokemoves.move.name}`;
        
        // for (let p = 0; p <4; p++){
        //     let move = pokeObj.moves[p]
        //     console.log(move.move)
        // }

        // cardBod.append(image);
        cardBod.append(heightAndWeight);
        
        card.append(cardBod);

        let col = document.createElement('div');
        col.className = 'col-12 col-md-5 col-3 my-4'
        col.append(card);
        cardBod.append(attacks)

        let display = document.getElementById('pokeGallery')
        display.append(col)
    }

    form.addEventListener('submit', formSubmit)

    // function searchEvent(event){
    //     let pokemonName = event.target.pokemonName.value;
    //     let pokeinfo = await (elementToChange){}
    // };
    // fetch(`https://pokeapi.co/api/v2/pokemon/`)
}
