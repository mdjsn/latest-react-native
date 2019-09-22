export enum AppRouteKeys {
    App = 'App'
}

export const TABS = {
    Discover: 'Discover',
    Match: 'Match',
    Search: 'Search',
    Settings: 'Settings',
};

export enum AuthRouteKeys {
    Auth = 'Auth',
}

export const RouteKeys = {
    ...AppRouteKeys,
    ...AuthRouteKeys,
};  