import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/AppLayout.tsx", [
        index("routes/intro.tsx"),
        // route("/projects", "routes/projects.tsx"),
        route('/projects', "layouts/Projects_Layout.tsx", [
            index('routes/projects/index.tsx'),
            route('web', 'routes/projects/web.tsx')
        ]),
        route("/achievements", "routes/achievements.tsx"),
        route("/certificates", "routes/certificates.tsx"),
    ])
] satisfies RouteConfig;
