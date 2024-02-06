export const BACKGROUND_IMGAE =
    "https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const LOGO_IMAGE =
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const DEFAULT_PROFILE =
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const API_OPTION = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
    },
};

export const NOW_PLAYING_MOVIE_API_LINK =
    "https://api.themoviedb.org/3/movie/now_playing";

export const POPULER_PLAYING_MOVIE_API_LINK =
    "https://api.themoviedb.org/3/movie/popular";

export const TOP_RATED_MOVIE_API_LINK =
    "https://api.themoviedb.org/3/movie/top_rated";

export const UPCOMMING_MOVIE_API_LINK =
    "https://api.themoviedb.org/3/movie/upcoming";

export const POSTER_CDN = "https://image.tmdb.org/t/p/w500/";

export const FOOTER_OTHER_LINKS = [
    "Audio and Subtitles",
    "Media Center",
    "pnvacy",
    "Contact CJs",
    "Audio Description",
    "Investor Relations",
    "Leaal Notices",
    "Help Center",
    "Jobs",
    "Cookie Preterences",
    "Gitt Cards",
    "Terms of Use",
    "Corporate Information",
];

export const SEARCH_API = "https://api.themoviedb.org/3/search/movie?";
