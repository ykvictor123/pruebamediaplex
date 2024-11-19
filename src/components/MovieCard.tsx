import React from 'react';
import { Film, Video } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative aspect-video">
        <img
          src={movie.thumbnail}
          alt={movie.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Video className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {movie.name}
          </h3>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
            {movie.resolution}p
          </span>
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <Film className="w-4 h-4 mr-1" />
          <span>{(movie.size / 1000000000).toFixed(1)} GB</span>
        </div>
      </div>
    </div>
  );
}