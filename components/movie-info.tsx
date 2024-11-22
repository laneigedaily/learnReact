import { API_URL } from "../app/(home)/page";

async function getMovies(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movies = await getMovies(id);
  return <h6>{JSON.stringify(movies)}</h6>;
}
