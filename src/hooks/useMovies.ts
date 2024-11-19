import { useState, useEffect } from 'react';
import { Movie } from '../types/movie';
import { mockMovies } from '../data/mockMovies';

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Filter only ready movies
        const readyMovies = mockMovies.filter(movie => movie.status === 'Ready');
        setMovies(readyMovies);
      } catch (err) {
        setError('Failed to fetch movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
}