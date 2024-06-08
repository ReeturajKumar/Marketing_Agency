const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://marketing-agency-rytk.onrender.com'
  : 'http://localhost:5000/api';

export default API_URL;
