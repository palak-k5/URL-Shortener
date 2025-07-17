 import App from '../App'
import {createRootRoute} from '@tanstack/react-router'
import { homePageRoute } from './homepage.js'
import { authRoute } from './auth.route.js'
import { dashboardRoute } from './dashboard.js'
export const rootRoute = createRootRoute({
  component: App
})

export const routeTree=rootRoute.addChildren([
     homePageRoute,
     authRoute,
     dashboardRoute
    ])
