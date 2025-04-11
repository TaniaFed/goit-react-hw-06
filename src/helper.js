const formatPhoneNumber = (value) => {
  const cleaned = value.replace(/\D/g, "").slice(0, 7);

  if (cleaned.length <= 3) return cleaned;
  if (cleaned.length <= 5)
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 5)}-${cleaned.slice(5)}`;
}

const formatName = (name) => {
  return name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export { formatName, formatPhoneNumber };