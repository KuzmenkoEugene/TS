var moviesValue = [
    {
        name: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        awards: 21,
    },
    {
        name: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        awards: 43,
    },
    {
        name: "The Lord of the Rings: The Return of the King",
        year: 2003,
        rating: 8.9,
        awards: 189,
    },
    {
        name: "The Dark Knight Rises",
        year: 2012,
        rating: 8.4,
        awards: 46,
    },
    {
        name: "Harry Potter and the Prisoner of Azkaban",
        year: 2004,
        rating: 7.9,
        awards: 42,
    },
    {
        name: "Dune",
        year: 2021,
        rating: 8.0,
        awards: 35,
    },
];
var categories = [
    {
        name: "thriller",
        movies: [
            {
                name: "Se7en",
                year: 1995,
                rating: 8.6,
                awards: 34,
            },
            {
                name: "Zodiac",
                year: 2007,
                rating: 7.7,
                awards: 71,
            },
        ],
    },
    {
        name: "comedy",
        movies: [
            {
                name: "Superbad",
                year: 2007,
                rating: 7.6,
                awards: 19,
            },
            {
                name: "The Grand Budapest Hotel",
                year: 2014,
                rating: 8.1,
                awards: 135,
            },
        ],
    },
];
function filmGenreMovie(categories, nameCategory) {
    return categories.filter(function (el) { return el.name === nameCategory; });
}
function searchRangeMovies(movies, searchValue, filterFrom, filterTo) {
    return movies.filter(function (el) {
        var value = el[searchValue];
        if (typeof value === "number") {
            return value >= filterFrom && value <= filterTo;
        }
        return false;
    });
}
function nameMovie(movies, values) {
    return movies.filter(function (el) { return el.name === values; });
}
