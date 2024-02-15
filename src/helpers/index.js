const getFormattedDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

const getUserProperties = ({
  email,
  phone,
  name: { first, last, title },
  picture: { thumbnail, large },
  dob: { age },
  registered: { date },
  location: { city, country },
  login: { uuid },
  gender,
}) => ({
  id: uuid,
  email,
  phone,
  name: `${title}. ${first} ${last}`,
  thumbnail,
  avatar: large,
  age,
  registeredDate: getFormattedDate(date),
  city,
  country,
  gender,
});

const getRequestHeaders = () => {
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');

  return headers;
}

export { getUserProperties, getFormattedDate, getRequestHeaders };
