function getMovies(input) {
    function addMovie(movieName, arr) {
        arr.push({ name: movieName, director: '', date: '' });
    }

    function addDirector(movieName, director, arr) {
        arr.forEach(element => {
            if (element.name === movieName) {
                element.director = director;
            }
        });
    }

    function addDate(movieName, date, arr) {
        arr.forEach(element => {
            if (element.name === movieName) {
                element.date = date;
            }
        });
    }

    let arr = [];

    for (let i = 0; i < input.length; i++) {
        let item = input[i];

        if (item.includes('addMovie')) {
            let [command, ...movieData] = item.split(' ');

            let movieName = movieData.join(' ');
            addMovie(movieName, arr);
        } else if (item.includes('directedBy')) {
            let [movieName, director] = item.split(' directedBy ');
            addDirector(movieName, director, arr);
        } else if (item.includes('onDate')) {
            let [movieName, date] = item.split(' onDate ');
            addDate(movieName, date, arr);
        }
    }

    arr.forEach(x => {
        if (x.name && x.director && x.date) {
            let json = JSON.stringify(x);
            console.log(json);
        }
    })
}

getMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);

getMovies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);