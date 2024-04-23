export const getLinks = (t: any) => {
    return [
        {
            linkName: t("home"),
            path: "/",
            children: [],
        },
        {
            linkName: t("services.title"),
            path: "/services",
            children: [
                {
                    linkName: t("services.our-end-to-end-capability-areas"),
                    childPath: "/services/end-to-end-capability-areas",
                    children: [],
                },
                {
                    linkName: t("services.mobile-development"),
                    childPath: "/services/mobile-development",
                    children: [],
                },
                {
                    linkName: t("services.strategy-consulting"),
                    childPath: "/services/strategy-consulting",
                    children: [],
                },
                {
                    linkName: t("services.fixed-bb"),
                    childPath: "/services/fixed-bb",
                    children: [],
                },
                {
                    linkName: t("services.cloud-deployments"),
                    childPath: "/services/cloud-deployments",
                    children: [],
                },
            ],
        },
        {
            linkName: t("solutions.title"),
            path: "/solutions",
            children: [
                {
                    linkName: t("solutions.mobile-network-solution"),
                    childPath: "/solutions/mobile-network-solutions",
                    children: [],
                },
                {
                    linkName: t("solutions.radio-transmission-sites"),
                    childPath: "/solutions/radio-transmission-sites",
                    children: [],
                },
                {
                    linkName: t("solutions.traffic-management"),
                    childPath: "/solutions/traffic-management",
                    children: [],
                },
                {
                    linkName: t("solutions.mobile-network-monitoring"),
                    childPath: "/solutions/mobile-network-monitoring",
                    children: [],
                },
                {
                    linkName: t("solutions.multi-dimensional"),
                    childPath: "/solutions/multi-dimensional",
                    children: [],
                },
                {
                    linkName: t("solutions.mobile-network-auditing"),
                    childPath: "/solutions/mobile-network-auditing",
                    children: [],
                },
                {
                    linkName: t("solutions.parental-controller"),
                    childPath: "/solutions/parental-controller",
                    children: [],
                },
                {
                    linkName: t("solutions.value-added-services"),
                    childPath: "/solutions/value-added-services",
                    children: [],
                },
            ],
        },
        {
            linkName: t("partners"),
            path: "/partners",
            children: [],
        },
        {
            linkName: t("contactus"),
            path: "/contactus",
            children: [],
        },
    ];
}