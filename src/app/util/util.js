export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function getInitials(name) {
  // Split the name into words
  const words = name.split(' ');

  // Use the first letter of each word to create the initials
  const initials = words.map((word) => word[0]).join('');

  return initials.toUpperCase();
}

export function getFileExtension(fileName) {
  if (fileName) {
    return fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2);
  }
}
