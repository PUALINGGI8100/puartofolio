import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/AppLayout.tsx", [
        index("routes/intro.tsx"),
        route('/projects', "layouts/Projects_Layout.tsx", [
            index('routes/projects/index.tsx'),
            route('web', 'routes/projects/web.tsx')
        ]),
        route("/achievements", "routes/achievements.tsx"),
        route("/certificates", "layouts/Certificates_Layout.tsx", [
            index("routes/certificates/index.tsx"),
            route("cna", "routes/certificates/cna.tsx"),
            route("ibm", "routes/certificates/ibm.tsx"),
            route("dts", "routes/certificates/dts.tsx"),
            route("g", "routes/certificates/g.tsx"),
            route("dql", "routes/certificates/dql.tsx"),
        ]),
    ])
] satisfies RouteConfig;
