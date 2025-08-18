import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// export function generateId() {
//   return Math.random().toString(36).substr(2, 9);
// }


export function formatDate(dateString) {
  if (!dateString) return "N/A"; // fallback if null/undefined

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "N/A"; // fallback if invalid date

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateRequired(value) {
  return value.trim().length > 0;
}

export function sanitizeInput(input) {
  return input.trim().replace(/[<>]/g, '');
}