import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatYear(date: Date = new Date()): number {
  return date.getFullYear();
}
