import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Index from '../views/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index,
    redirect: '/typography',
    children: [
      {
        path: 'typography',
        name: 'typography',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/styles/typography.vue'),
      },
      {
        path: 'colors',
        name: 'colors',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/styles/colors.vue'),
      },
      {
        path: 'shadows',
        name: 'shadows',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/styles/shadows.vue'),
      },
      {
        path: 'svg-icons',
        name: 'svg-icons',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/svg-icons.vue'),
      },
      {
        path: 'button',
        name: 'button',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/form-elements/buttons.vue'),
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/form-elements/checkboxes.vue'),
      },
      {
        path: 'input',
        name: 'input',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/form-elements/inputs.vue'),
      },
      {
        path: 'select',
        name: 'select',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/form-elements/selects.vue'),
      },
      {
        path: 'textarea',
        name: 'textarea',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/form-elements/textareas.vue'),
      },
      {
        path: 'toggle',
        name: 'toggle',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/form-elements/toggles.vue'),
      },
      {
        path: 'breadcrumbs',
        name: 'breadcrumbs',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/breadcrumbs.vue'),
      },
      {
        path: 'file-upload',
        name: 'file-upload',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/form-elements/file-upload.vue'),
      },
      {
        path: 'grid-system',
        name: 'grid-system',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/grid-system.vue'),
      },
      {
        path: 'notification',
        name: 'notification',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/notification.vue'),
      },
      {
        path: 'pagination',
        name: 'pagination',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/pagination.vue'),
      },
      {
        path: 'sorted-list',
        name: 'sorted-list',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/sorted-list.vue'),
      },
      {
        path: 'tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/tables.vue'),
      },
      {
        path: 'tabs',
        name: 'tabs',
        component: () => import(/* webpackChunkName: "storybook" */ '../views/tabs.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    component: () => import(/* webpackChunkName: "404" */ '../views/not-found.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
