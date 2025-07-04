/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as AppAppTagIndexImport } from './routes/_app/app/tag/index'
import { Route as AppAppSettingsIndexImport } from './routes/_app/app/settings/index'
import { Route as AppAppRecipesIndexImport } from './routes/_app/app/recipes/index'
import { Route as AppAppIngredientsIndexImport } from './routes/_app/app/ingredients/index'
import { Route as AppAppRecipesCreateImport } from './routes/_app/app/recipes/create'
import { Route as AppAppTagTagIdIndexImport } from './routes/_app/app/tag/$tagId/index'
import { Route as AppAppRecipesRecipeIdIndexImport } from './routes/_app/app/recipes/$recipeId/index'
import { Route as AppAppRecipesRecipeIdUpdateImport } from './routes/_app/app/recipes/$recipeId/update'

// Create Virtual Routes

const AppLazyImport = createFileRoute('/_app')()

// Create/Update Routes

const AppLazyRoute = AppLazyImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/_app.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AppAppTagIndexRoute = AppAppTagIndexImport.update({
  id: '/app/tag/',
  path: '/app/tag/',
  getParentRoute: () => AppLazyRoute,
} as any)

const AppAppSettingsIndexRoute = AppAppSettingsIndexImport.update({
  id: '/app/settings/',
  path: '/app/settings/',
  getParentRoute: () => AppLazyRoute,
} as any)

const AppAppRecipesIndexRoute = AppAppRecipesIndexImport.update({
  id: '/app/recipes/',
  path: '/app/recipes/',
  getParentRoute: () => AppLazyRoute,
} as any)

const AppAppIngredientsIndexRoute = AppAppIngredientsIndexImport.update({
  id: '/app/ingredients/',
  path: '/app/ingredients/',
  getParentRoute: () => AppLazyRoute,
} as any)

const AppAppRecipesCreateRoute = AppAppRecipesCreateImport.update({
  id: '/app/recipes/create',
  path: '/app/recipes/create',
  getParentRoute: () => AppLazyRoute,
} as any)

const AppAppTagTagIdIndexRoute = AppAppTagTagIdIndexImport.update({
  id: '/app/tag/$tagId/',
  path: '/app/tag/$tagId/',
  getParentRoute: () => AppLazyRoute,
} as any)

const AppAppRecipesRecipeIdIndexRoute = AppAppRecipesRecipeIdIndexImport.update(
  {
    id: '/app/recipes/$recipeId/',
    path: '/app/recipes/$recipeId/',
    getParentRoute: () => AppLazyRoute,
  } as any,
)

const AppAppRecipesRecipeIdUpdateRoute =
  AppAppRecipesRecipeIdUpdateImport.update({
    id: '/app/recipes/$recipeId/update',
    path: '/app/recipes/$recipeId/update',
    getParentRoute: () => AppLazyRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppLazyImport
      parentRoute: typeof rootRoute
    }
    '/_app/app/recipes/create': {
      id: '/_app/app/recipes/create'
      path: '/app/recipes/create'
      fullPath: '/app/recipes/create'
      preLoaderRoute: typeof AppAppRecipesCreateImport
      parentRoute: typeof AppLazyImport
    }
    '/_app/app/ingredients/': {
      id: '/_app/app/ingredients/'
      path: '/app/ingredients'
      fullPath: '/app/ingredients'
      preLoaderRoute: typeof AppAppIngredientsIndexImport
      parentRoute: typeof AppLazyImport
    }
    '/_app/app/recipes/': {
      id: '/_app/app/recipes/'
      path: '/app/recipes'
      fullPath: '/app/recipes'
      preLoaderRoute: typeof AppAppRecipesIndexImport
      parentRoute: typeof AppLazyImport
    }
    '/_app/app/settings/': {
      id: '/_app/app/settings/'
      path: '/app/settings'
      fullPath: '/app/settings'
      preLoaderRoute: typeof AppAppSettingsIndexImport
      parentRoute: typeof AppLazyImport
    }
    '/_app/app/tag/': {
      id: '/_app/app/tag/'
      path: '/app/tag'
      fullPath: '/app/tag'
      preLoaderRoute: typeof AppAppTagIndexImport
      parentRoute: typeof AppLazyImport
    }
    '/_app/app/recipes/$recipeId/update': {
      id: '/_app/app/recipes/$recipeId/update'
      path: '/app/recipes/$recipeId/update'
      fullPath: '/app/recipes/$recipeId/update'
      preLoaderRoute: typeof AppAppRecipesRecipeIdUpdateImport
      parentRoute: typeof AppLazyImport
    }
    '/_app/app/recipes/$recipeId/': {
      id: '/_app/app/recipes/$recipeId/'
      path: '/app/recipes/$recipeId'
      fullPath: '/app/recipes/$recipeId'
      preLoaderRoute: typeof AppAppRecipesRecipeIdIndexImport
      parentRoute: typeof AppLazyImport
    }
    '/_app/app/tag/$tagId/': {
      id: '/_app/app/tag/$tagId/'
      path: '/app/tag/$tagId'
      fullPath: '/app/tag/$tagId'
      preLoaderRoute: typeof AppAppTagTagIdIndexImport
      parentRoute: typeof AppLazyImport
    }
  }
}

// Create and export the route tree

interface AppLazyRouteChildren {
  AppAppRecipesCreateRoute: typeof AppAppRecipesCreateRoute
  AppAppIngredientsIndexRoute: typeof AppAppIngredientsIndexRoute
  AppAppRecipesIndexRoute: typeof AppAppRecipesIndexRoute
  AppAppSettingsIndexRoute: typeof AppAppSettingsIndexRoute
  AppAppTagIndexRoute: typeof AppAppTagIndexRoute
  AppAppRecipesRecipeIdUpdateRoute: typeof AppAppRecipesRecipeIdUpdateRoute
  AppAppRecipesRecipeIdIndexRoute: typeof AppAppRecipesRecipeIdIndexRoute
  AppAppTagTagIdIndexRoute: typeof AppAppTagTagIdIndexRoute
}

const AppLazyRouteChildren: AppLazyRouteChildren = {
  AppAppRecipesCreateRoute: AppAppRecipesCreateRoute,
  AppAppIngredientsIndexRoute: AppAppIngredientsIndexRoute,
  AppAppRecipesIndexRoute: AppAppRecipesIndexRoute,
  AppAppSettingsIndexRoute: AppAppSettingsIndexRoute,
  AppAppTagIndexRoute: AppAppTagIndexRoute,
  AppAppRecipesRecipeIdUpdateRoute: AppAppRecipesRecipeIdUpdateRoute,
  AppAppRecipesRecipeIdIndexRoute: AppAppRecipesRecipeIdIndexRoute,
  AppAppTagTagIdIndexRoute: AppAppTagTagIdIndexRoute,
}

const AppLazyRouteWithChildren =
  AppLazyRoute._addFileChildren(AppLazyRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AppLazyRouteWithChildren
  '/app/recipes/create': typeof AppAppRecipesCreateRoute
  '/app/ingredients': typeof AppAppIngredientsIndexRoute
  '/app/recipes': typeof AppAppRecipesIndexRoute
  '/app/settings': typeof AppAppSettingsIndexRoute
  '/app/tag': typeof AppAppTagIndexRoute
  '/app/recipes/$recipeId/update': typeof AppAppRecipesRecipeIdUpdateRoute
  '/app/recipes/$recipeId': typeof AppAppRecipesRecipeIdIndexRoute
  '/app/tag/$tagId': typeof AppAppTagTagIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AppLazyRouteWithChildren
  '/app/recipes/create': typeof AppAppRecipesCreateRoute
  '/app/ingredients': typeof AppAppIngredientsIndexRoute
  '/app/recipes': typeof AppAppRecipesIndexRoute
  '/app/settings': typeof AppAppSettingsIndexRoute
  '/app/tag': typeof AppAppTagIndexRoute
  '/app/recipes/$recipeId/update': typeof AppAppRecipesRecipeIdUpdateRoute
  '/app/recipes/$recipeId': typeof AppAppRecipesRecipeIdIndexRoute
  '/app/tag/$tagId': typeof AppAppTagTagIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_app': typeof AppLazyRouteWithChildren
  '/_app/app/recipes/create': typeof AppAppRecipesCreateRoute
  '/_app/app/ingredients/': typeof AppAppIngredientsIndexRoute
  '/_app/app/recipes/': typeof AppAppRecipesIndexRoute
  '/_app/app/settings/': typeof AppAppSettingsIndexRoute
  '/_app/app/tag/': typeof AppAppTagIndexRoute
  '/_app/app/recipes/$recipeId/update': typeof AppAppRecipesRecipeIdUpdateRoute
  '/_app/app/recipes/$recipeId/': typeof AppAppRecipesRecipeIdIndexRoute
  '/_app/app/tag/$tagId/': typeof AppAppTagTagIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/app/recipes/create'
    | '/app/ingredients'
    | '/app/recipes'
    | '/app/settings'
    | '/app/tag'
    | '/app/recipes/$recipeId/update'
    | '/app/recipes/$recipeId'
    | '/app/tag/$tagId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/app/recipes/create'
    | '/app/ingredients'
    | '/app/recipes'
    | '/app/settings'
    | '/app/tag'
    | '/app/recipes/$recipeId/update'
    | '/app/recipes/$recipeId'
    | '/app/tag/$tagId'
  id:
    | '__root__'
    | '/'
    | '/_app'
    | '/_app/app/recipes/create'
    | '/_app/app/ingredients/'
    | '/_app/app/recipes/'
    | '/_app/app/settings/'
    | '/_app/app/tag/'
    | '/_app/app/recipes/$recipeId/update'
    | '/_app/app/recipes/$recipeId/'
    | '/_app/app/tag/$tagId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AppLazyRoute: typeof AppLazyRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AppLazyRoute: AppLazyRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_app"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_app": {
      "filePath": "_app.lazy.tsx",
      "children": [
        "/_app/app/recipes/create",
        "/_app/app/ingredients/",
        "/_app/app/recipes/",
        "/_app/app/settings/",
        "/_app/app/tag/",
        "/_app/app/recipes/$recipeId/update",
        "/_app/app/recipes/$recipeId/",
        "/_app/app/tag/$tagId/"
      ]
    },
    "/_app/app/recipes/create": {
      "filePath": "_app/app/recipes/create.tsx",
      "parent": "/_app"
    },
    "/_app/app/ingredients/": {
      "filePath": "_app/app/ingredients/index.tsx",
      "parent": "/_app"
    },
    "/_app/app/recipes/": {
      "filePath": "_app/app/recipes/index.tsx",
      "parent": "/_app"
    },
    "/_app/app/settings/": {
      "filePath": "_app/app/settings/index.tsx",
      "parent": "/_app"
    },
    "/_app/app/tag/": {
      "filePath": "_app/app/tag/index.tsx",
      "parent": "/_app"
    },
    "/_app/app/recipes/$recipeId/update": {
      "filePath": "_app/app/recipes/$recipeId/update.tsx",
      "parent": "/_app"
    },
    "/_app/app/recipes/$recipeId/": {
      "filePath": "_app/app/recipes/$recipeId/index.tsx",
      "parent": "/_app"
    },
    "/_app/app/tag/$tagId/": {
      "filePath": "_app/app/tag/$tagId/index.tsx",
      "parent": "/_app"
    }
  }
}
ROUTE_MANIFEST_END */
