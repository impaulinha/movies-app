export interface Movie {
  id: number
  title: string
  poster_path: string
  release_date: string
  vote_average: number
}
export interface MovieById extends Movie {
  backdrop_path: string
  overview: string
  runtime: number
  genres: {
    id: number
    name: string
  }[]
}
