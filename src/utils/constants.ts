export const getLinks = (t: any) => {
    return [
        {
            linkName: t("home"),
            path: "/",
            children: [],
        },
        {
            linkName: t("services.title"),
            path: "/servicesPage",
            children: [
                {
                    linkName: t("services.our-end-to-end-capability-areas"),
                    childPath: "/servicesPage/end-to-end-capability-areas",
                    children: [],
                },
                {
                    linkName: t("services.mobile-development"),
                    childPath: "/servicesPage/mobile-development",
                    children: [],
                },
                {
                    linkName: t("services.strategy-consulting"),
                    childPath: "/servicesPage/strategy-consulting",
                    children: [],
                },
                {
                    linkName: t("services.fixed-bb"),
                    childPath: "/servicesPage/fixed-bb",
                    children: [],
                },
                {
                    linkName: t("services.cloud-deployments"),
                    childPath: "/servicesPage/cloud-deployments",
                    children: [],
                },
            ],
        },
        {
            linkName: t("solutions.title"),
            path: "/solutionsPage",
            children: [
                {
                    linkName: t("solutions.mobile-network-solution"),
                    childPath: "/solutionsPage/mobile-network-solutions",
                    children: [],
                },
                {
                    linkName: t("solutions.radio-transmission-sites"),
                    childPath: "/solutionsPage/radio-transmission-sites",
                    children: [],
                },
                {
                    linkName: t("solutions.traffic-management"),
                    childPath: "/solutionsPage/traffic-management",
                    children: [],
                },
                {
                    linkName: t("solutions.mobile-network-monitoring"),
                    childPath: "/solutionsPage/mobile-network-monitoring",
                    children: [],
                },
                {
                    linkName: t("solutions.multi-dimensional"),
                    childPath: "/solutionsPage/multi-dimensional",
                    children: [],
                },
                {
                    linkName: t("solutions.mobile-network-auditing"),
                    childPath: "/solutionsPage/mobile-network-auditing",
                    children: [],
                },
                {
                    linkName: t("solutions.parental-controller"),
                    childPath: "/solutionsPage/parental-controller",
                    children: [],
                },
                {
                    linkName: t("solutions.value-added-services"),
                    childPath: "/solutionsPage/value-added-services",
                    children: [],
                },
            ],
        },
        {
            linkName: t("partners"),
            path: "/partnersPage",
            children: [],
        },
        {
            linkName: t("contactus"),
            path: "/contactusPage",
            children: [],
        },
    ];
}