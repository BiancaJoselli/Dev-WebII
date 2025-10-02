import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDY1ZjM5NzA1YzUwZmZlODljNzk4ZTAxYTMxMzFkYiIsIm5iZiI6MTc1OTIzMzc2NC41NzUsInN1YiI6IjY4ZGJjNmU0Y2I1NWI5MGIyM2I0MjBmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aaw4AElm8TqwKX51-Dqa3kx1f-Mx3zMi_CUNiakNJmM`,
    },
});

export default api;