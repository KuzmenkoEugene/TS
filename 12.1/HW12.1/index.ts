interface IMovie {
  name: string;  
  year: number;  
  rating: number; 
  awards: number; 
}

interface Category {
  name: string;   
  movies: IMovie[];
}

enum GridFilterTypeEnum {
  NAME = 'NAME',       
  FROM_TO = 'FROM_TO', 
  VALUE_SEARCH = 'VALUE_SEARCH', 
}

type GridFilterValue<T> = {
  type: GridFilterTypeEnum; 
  filter: Extract<T, string | number>; 
  filterTo?: Extract<T, string | number>; 
};

type GridFilterSetValues<T> = {
  values: T[];
};

abstract class Filters<T> {
  protected filters: GridFilterValue<T>[] = [];
  protected searchValues: GridFilterSetValues<string>[] = []; 

  applyFiltersValue(filters: GridFilterValue<T>[]): void {
    this.filters = filters; 
  }

  applySearchValue(searchValues: GridFilterSetValues<string>[]): void {
    this.searchValues = searchValues; 
  }

  abstract search(): T[]; 
  abstract filter(): T[]; 
}

class MoviesList extends Filters<IMovie> {
  public movies: IMovie[]; 

  constructor(movies: IMovie[]) {
    super();
    this.movies = movies; 
  }

  search(): IMovie[] {
    return this.movies;
  }

  filter(): IMovie[] {

    return this.movies;
  }
}
