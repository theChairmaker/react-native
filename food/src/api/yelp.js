import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer HDYT58BmwUH4XZtUyI88oksM9rZLcdKtVXQSDP3gRXU4ByUR-tmnuYAOWmINkNkriAl-L2hrGlVZcbNkPJZ-s_zBdd6S3Liu-goBE_PucbxEh0vYxYKZJ-SlQ2z0XnYx',
  },
});
