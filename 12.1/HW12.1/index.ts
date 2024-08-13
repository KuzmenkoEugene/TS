interface IMovie {
  name: string;
  year: number;
  rating: number;
  awards: number;
}

interface ICategory {
  name: string;
  movies: IMovie[];
}

let moviesValue: IMovie[] = [
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

let categories: ICategory[] = [
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

function filmGenreMovie(
  categories: ICategory[],
  nameCategory: string
): ICategory[] {
  return categories.filter((el) => el.name === nameCategory);
}

function searchRangeMovies(
  movies: IMovie[],
  searchValue: keyof IMovie,
  filterFrom: number,
  filterTo: number
): IMovie[] {
  return movies.filter((el) => {
    const value = el[searchValue];

    if (typeof value === "number") {
      return value >= filterFrom && value <= filterTo;
    }

    return false;
  });
}

function nameMovie(movies: IMovie[], values: string): IMovie[] {
  return movies.filter((el) => el.name === values);
}
