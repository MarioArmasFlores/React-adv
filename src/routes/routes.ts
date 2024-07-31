import { lazy, LazyExoticComponent } from "react";
import { NoLazyLoad } from "../01-lazyload/pages/NoLazyLoad";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
// import { LazyLayout } from '../01-lazyload/layout/LazyLayout';

type JSXComponent = () => JSX.Element;


interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name:string;
}


const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */  '../01-lazyload/layout/LazyLayout'))


export const routes: Route[] = [
    {
        to: '/lazyload',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy Layout - Dash' 
    },
    {
        to: '/no-lazy',
        path: '/no-lazy',
        Component: NoLazyLoad,
        name: 'NoLazy' 
    },
   
];