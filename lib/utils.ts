import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date?: string, formatType = "dd/MM/yyy") => {
  try {
    if (!date) return "-";
    return format(new Date(date), formatType);
  } catch (error) {
    console.error("Error formatting date", error);
    return "-";
  }
};

export const formatId = (id: number) => {
  if (id < 10) return `00${id}`;
  if (id < 100) return `0${id}`;

  return id;
};

export const getInitials = (name: string) => {
  if (!name) return "";
  const nameArray = name.split(" ");
  return nameArray
    .map((n) => n.charAt(0))
    .join("")
    .toUpperCase();
};

export function validateEmail(email: string) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}