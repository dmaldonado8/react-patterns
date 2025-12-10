import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('compound', 'routes/compound.tsx'),
  route('single-responsibility', 'routes/single-responsibility.tsx'),
] satisfies RouteConfig;
