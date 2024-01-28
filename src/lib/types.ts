

export type MovieData = {
  page: number | string,
  results: MovieResults[],
  total_pages: number,
  total_results: number
}
export type TvData = Omit<MovieData, 'results'> & { results: TvResults[] }

export type PeopleData = { "page": "number", "results": PeopleResults[], "total_pages": "number", "total_results": "number" }

export type MovieResults = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: Array<string>,
  id: string | number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number | string,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number | string,
  vote_count: number | string
}

export type PeopleResults = {
  "adult": "boolean", "gender": "number", "id": "number", "known_for_department": "string", "name": "string", "original_name": "string", "popularity": "number", "profile_path": "string", "known_for": [{
    adult: boolean,
    backdrop_path: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: Array<number>
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
  }]
}

export type TvResults = Omit<MovieResults, "original_title" | "release_date" | "video"> & {
  original_name: string,
  first_air_date: string,
  name: string,
  origin_country: Array<string>
}