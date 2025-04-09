const formatPhoneNumber = (value) => {
  const cleaned = value.replace(/\D/g, "");

  const match = cleaned.match(/^(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return value;
}

const formatName = (name) => {
  return name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export { formatName, formatPhoneNumber };