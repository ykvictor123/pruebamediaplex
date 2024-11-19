import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center p-4 bg-red-50 rounded-lg">
      <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
      <p className="text-red-700">{message}</p>
    </div>
  );
}