import { MovieData } from "@/lib/types";

type Data = {
    Response: MovieData,
    error: Error | null,
}

type TmdbError = {
    success: boolean,
    status_code: number,
    status_message: string,
}

export const getMoviesByQueryAndPage = async (query: string, page: number) => {

    try {
        const response = await fetch(`${process.env.BASE_URL}/movie/${query}?api_key=${process.env.API_KEY}&page=${page}`)
        if (!response.ok) {
            const errors: TmdbError = await response.json()
            throw new Error(errors.status_message)
        }
        const data: MovieData = await response.json();
        return data;
    } catch (error) {
        throw new Error(error as string)
}
}