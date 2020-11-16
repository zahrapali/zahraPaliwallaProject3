//create a namespace object to represent our app
const app = {};
// create an array with objects to pull movie information and genres from 
const genre = [
    // "classics"
     [
        {
            title: "A Christmas Story",
            url: "assets/best-christmas-movies-a-christmas-story-1566853992.jpg",
            alt: 'Image of a boy with large black glasses',
            rating: "5 Stars",
            watch: "Prime Video"
        },
        {
            title: "It's a Wonderful Life", 
            url: "assets/best-christmas-movies-its-a-wonderful-life-1566932694.jpg",
            alt: 'a family of five hugging',
            rating: "5 Stars",
            watch: "Netflix"

        },
        {
            title: "The Santa Clause",
            url: "assets/santa-clause-1566935957.jpg",
            rating: "5 Stars",
            alt: 'man in a large red suit with a small boy next to him',
            watch: "Prime Video"

        },
        {
            title: "Disney's A Christmas Carol",
            url: "assets/christmascarole.jpg",
            alt: 'an old man flying with a clock in the background',
            rating: "5 Stars",
            watch: "Disney+"

        },

    ],
    // "Feel Good":     
    [
         {
            title: "Christmas with the Kranks",
            url: "assets/christmaswiththekranks-en-121015-1598282349.jpg",
            rating: "5 Stars",
            alt: 'a women and man looking suspicious',
            watch: "Netflix"

        },
         {
            title: "Elf",
            url: "assets/best-christmas-movies-elf-1566934428.jpg",
            rating: "5 Stars",
            alt: 'a tall man wearing an elf costume',
            watch: "Prime Video"

        },
        {
            title: "The Santa Clause",
            url: "assets/santa-clause-1566935957.jpg",
            rating: "5 Stars",
            alt: 'man in a large red suit with a small boy next to him',
            watch: "Prime Video"

        },
        {   
            title: "Home Alone",
            url: "assets/home-alone-1566932888.jpg",
            rating: "5 Stars",
            alt: 'a boy with his hands on his face looking confused or scared',
            watch: "Disney+"

        }
    
    ],

    // // "Hallmarky":
    [
        {
            title: "A Christmas Prince",
            url: "assets/christmas-prince-movie-poster-1604416503.jpg",
            alt: 'a women and a man wearing fancy clothes',
            rating: "5 Stars",
            watch: "Nah,dont do it."

        },
        {
            title: "Holidate",
            url: "assets/holidate.jpg",
            alt: 'an women and a man looking confused with a christmass decoration in the back',
            rating: "5 Stars",
            watch: "Nah,dont do it."

        },
        {
            title: "A Royal Christmas",
            url: "assets/a-royal-christmas-1576866783.jpg",
            alt: 'a women in a long white dress on a long red staircase with a man in a fancy suit helping her walk down the stairs',
            rating: "5 Stars",
            watch: "Nah,dont do it."

        },
        {   title: "A Gingerbread Romance",
            url: "assets/gingerbread-romance-1576867512.jpg",
            alt: 'a women watching a screen smiling with a kitchen and gingerbread house in the background ',
            rating:"5 Stars",
            watch: "Nah,dont do it."

        }
    ],
    // // "Adventure": 
    [
        {
            title: "Lethal Weapon",
            url: "assets/best-christmas-movies-lethal-weapon-1566937900.jpg",
            alt: 'a man with a yellow mask on',
            rating: "5 Stars",
            watch: "Netflix"

        },
        {
            title: "3 Godfathers",
            url: "assets/3godfathers.jpg",
            alt: 'three men in old timey clothes with guns',
            rating: "5 Stars",
            watch: "Prime Video"

        },
        {
            title: "Joyeux Noel",
            url: "assets/joyeaxNoel.jpg",
            alt: '3 men in military clothes walking',
            rating : "5 Stars",
            watch: "Netflix"

        },
         {
            title: "Trading Places",
            url: "assets/best-christmas-movies-trading-places-1566936952jpg",
            alt: 'skyline of a city and a man looking excited',
            rating: "5 Stars",
            watch: "Prime Video"

        },
    ],
    // "Cartoon":
    [
         {
            title: "Frosty the Snowman",
            url: "assets/frostythesnowman.jpg",
            alt: 'snowman with a top hat smoking with santa clause in the background',

            rating: "5 Stars",
            watch: "Disney+"

        },
         {
            title: "Rudolph the Red-Nosed",
            url: "assets/rudolphthered.jpg",
            alt: 'a deer with a red nose with a santa clause in the background',
            rating: "5 Stars",
            watch: "Disney+"

        },
        {
            title: "Arthur Christmas",
            url: "assets/arthur.jpg",
            alt: 'a man in a green sweater, snatascause, a child in blue pajams, and old man and a reindeer',
            rating: "5 Stars",
            watch: "Netflix"

        },
         {
            title: "A Charlie Brown Christmas",
            url: "assets/charlie-brown.jpg",
            alt: 'a small boy with a brown hat with a small white dog with a tree and little red house with lights in the background',
            rating: "5 Stars",
             watch: "Disney+"

        },
    ]

]

// genre.forEach((movieGenre) => {
//     movieGenre.forEach((movieObject) => {
//         console.log(movieObject)
//         let eachMovie = `
//         <div class="piece">
//           <h2>${movieObject.title}</h2>
//           <img src=${movieObject.url}/>
//           <p class="artist">${movieObject.rating}</p>
//        </div>
//       `;
      
//         $('#artwork').append(eachMovie);
//     })
// })

// connect drop down menu selector with the correct array (objects) to present when it is selected// I tried to make this more clean by adding a const value, but I 

app.dropdownEventListener = function () {
    $('#movieType').on('change', function () {
        $('#artwork').empty();
        const chosenGenre = $(this).val();
    
        if ( chosenGenre === 'Feel Good'){
            genre[1].forEach((movieObject) => {
                // console.log(movieObject)
                let eachMovie = `
        <div class="piece">
          <h2>${movieObject.title}</h2>
          <img src=${movieObject.url}/>
          <p class="artist">${movieObject.rating}</p>
                  <p class="artist">${movieObject.watch}</p>

       </div>
      `;
                $('#artwork').append(eachMovie);
            })
            

        }

        if (chosenGenre === 'Hallmarky') {
            genre[2].forEach((movieObject) => {
                let eachMovie = `
        <div class="piece">
          <h2>${movieObject.title}</h2>
          <img src=${movieObject.url}/>
          <p class="artist">${movieObject.rating}</p>
            <p class="artist">${movieObject.watch}</p>

       </div>
      `;
                $('#artwork').append(eachMovie);
            })


        }

        if (chosenGenre === 'Classics') {
            genre[0].forEach((movieObject) => {
                let eachMovie = `
        <div class="piece">
          <h2>${movieObject.title}</h2>
          <img src=${movieObject.url} alt=${movieObject.alt}/>
          <p class="artist">${movieObject.rating}</p>
        <p class="artist">${movieObject.watch}</p>

       </div>
      `;
                $('#artwork').append(eachMovie);
            })


        }
        if (chosenGenre === 'Adventure') {
            genre[3].forEach((movieObject) => {
                let eachMovie = `
        <div class="piece">
          <h2>${movieObject.title}</h2>
          <img src=${movieObject.url}/>
          <p class="artist">${movieObject.rating}</p>
        <p class="artist">${movieObject.watch}</p>

       </div>
      `;
                $('#artwork').append(eachMovie);
            })


        }
        if (chosenGenre === 'Cartoon') {
            genre[4].forEach((movieObject) => {
                let eachMovie = `
        <div class="piece">
          <h2>${movieObject.title}</h2>
          <img src=${movieObject.url}/>
          <p class="artist">${movieObject.rating}</p>
        <p class="artist">${movieObject.watch}</p>

       </div>
      `;
                $('#artwork').append(eachMovie);
            })


        }


        

        

        
    });
}

//call function

app.dropdownEventListener();
