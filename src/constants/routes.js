export const Routes = {
  HOME_PAGE: () => "/",
  WHATS_ON_PAGE: () => "/whats-on",
  ABOUT_PAGE: () => "/about",
  CONTACT_PAGE: () => "/contact",
  LOGIN_PAGE: () => "/login",
  SIGN_UP_PAGE: () => "/sign-up",
  MOVIE_DETAIL_PAGE: id => `/movie/${id}`,
  // Admin Routes
  ADMIN_LOGIN: () => "/admin/login",
  ADMIN_DASHBOARD: () => "/admin/dashboard",
  ADMIN_MOVIES: () => "/admin/movies"
};
