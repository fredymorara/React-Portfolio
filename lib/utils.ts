import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function safeUrl(url?: string): string {
  if (!url) return '';
  return encodeURI(decodeURI(url));
}

