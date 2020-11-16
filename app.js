//create a namespace object to represent our app
const app = {};

const genre = [
    // "classics"
     [
        {
            title: "A Christmas Story",
            url: "assets/best-christmas-movies-a-christmas-story-1566853992.jpg",
            rating: "5 Stars",
            watch: "Prime Video"
        },
        {
            title: "It's a Wonderful Life", 
            url: "assets/best-christmas-movies-its-a-wonderful-life-1566932694.jpg",
            rating: "5 Stars",
            watch: "Netflix"

        },
        {
            title: "The Santa Clause",
            url: "assets/santa-clause-1566935957.jpg",
            rating: "5 Stars",
            watch: "Prime Video"

        },
        {
            title: "Disney's A Christmas Carol",
            url: "assets/christmascarole.jpg",
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
            watch: "Netflix"

        },
         {
            title: "Elf",
            url: "assets/best-christmas-movies-elf-1566934428.jpg",
            rating: "5 Stars",
            watch: "Prime Video"

        },
        {
            title: "The Santa Clause",
            url: "assets/santa-clause-1566935957.jpg",
            rating: "5 Stars",
            watch: "Prime Video"

        },
        {   
            title: "Home Alone",
            url: "assets/home-alone-1566932888.jpg",
            rating: "5 Stars",
            watch: "Disney+"

        }
    
    ],

    // // "Hallmarky":
    [
        {
            title: "A Christmas Prince",
            url: "assets/christmas-prince-movie-poster-1604416503.jpg",
            rating: "5 Stars",
            watch: "Nah,dont do it."

        },
        {
            title: "Holidate",
            url: "assets/holidate.jpg",
            rating: "5 Stars",
            watch: "Nah,dont do it."

        },
        {
            title: "A Royal Christmas",
            url: "assets/a-royal-christmas-1576866783.jpg",
            rating: "5 Stars",
            watch: "Nah,dont do it."

        },
        {   title: "A Gingerbread Romance",
            url: "assets/gingerbread-romance-1576867512.jpg",
            rating:"5 Stars",
            watch: "Nah,dont do it."

        }
    ],
    // // "Adventure": 
    [
        {
            title: "Lethal Weapon",
            url: "assets/best-christmas-movies-lethal-weapon-1566937900.jpg",
            rating: "5 Stars",
            watch: "Netflix"

        },
        {
            title: "3 Godfathers",
            url: "assets/3godfathers.jpg",
            rating: "5 Stars",
            watch: "Prime Video"

        },
        {
            title: "Joyeux Noel",
            url: "assets/joyeaxNoel.jpg",
            rating : "5 Stars",
            watch: "Netflix"

        },
         {
            title: "Trading Places",
            url: "assets/best-christmas-movies-trading-places-1566936952jpg",
            rating: "5 Stars",
            watch: "Prime Video"

        },
    ],
    // "Cartoon":
    [
         {
            title: "Frosty the Snowman",
            url: "assets/christmaswiththekranks-en-121015-1598282349.jpg",
            rating: "5 Stars",
            watch: "Disney+"

        },
         {
            title: "Rudolph the Red-Nosed",
            url: "assets/rudolphthered.jpg",
            rating: "5 Stars",
            watch: "Disney+"

        },
        {
            title: "Arthur Christmas",
            url: "assets/arthur.jpg",
            rating: "5 Stars",
            watch: "Netflix"

        },
         {
            title: "A Charlie Brown Christmas",
            url: "assets/charlie-brown.jpg",
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


//loop through the array that is passed to this method from the ajax response
    //take the data from each art object in the array and render it on the page
    
//create a method which will hold an event listener
//this event listener will listen for every time the user selects a new animal from the dropdown
//(using function expressions here because we want to be confident about the value of "this" within the event listener)
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

        if (chosenGenre === 'Classics') {
            genre[0].forEach((movieObject) => {
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
        if (chosenGenre === 'Adventure') {
            genre[3].forEach((movieObject) => {
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
        if (chosenGenre === 'Cartoon') {
            genre[4].forEach((movieObject) => {
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


        

        
//empty the container before adding new art to it!
       
//call summonArt method within the select event listener and pass in the animal that was chosen so the ajax request can be made with a new animal value as its query argument
        // app.genre(chosenMovie);
        //update the span within the h1 to reflect the animal whose art is on display
        // $('.currentArtAnimal').text(chosenCreature);
        
    });
}
// //define a method which will initialize the app once the document is ready
// app.init = () => {
//     app.dropdownEventListener();
// }
// //check whether the document is ready
// $(function () {
//     //call the initialization method
//     app.init();
// });


app.dropdownEventListener();
