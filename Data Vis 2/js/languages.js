console.log("here");
const spec2 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: 1000,
    height: 600,
    description:
        "A scatterplot showing body mass and flipper lengths of penguins.",
    params: [
        {
            name: "limit",
            value: 0.7,
            bind: { input: "range", min: 0.05, max: 0.7, step: 0.01 },
        },
    ],
    layer: [
        {
            data: {
                url: "data/language_data.json",
            },
            mark: {
                type: "point",
                size: 100,
                clip: true
            },
            encoding: {
                x: {
                    field: "have_used",
                    type: "quantitative",
                    axis: {
                        format: "%",
                        title: [
                            "Percentage of developers that",
                            "have used this language",
                            "",
                        ],
                        titlePadding: 20,
                        titleFontSize: 14,
                    },
                    scale: {domain: [0, {expr: "limit"}]},
                },
                y: {
                    field: "want_to_use",
                    type: "quantitative",
                    axis: {
                        format: "%",
                        title: [
                            "Percentage of developers that",
                            "want to use this language",
                        ],
                        titleAngle: 0,
                        titleAlign: "right",
                        titleFontSize: 14,
                    },
                    scale: {domain: [0, {expr: "limit"}]}
                },
                shape: { field: "name", type: "nominal" },
                color: { field: "name", type: "nominal" },
                tooltip: [
                    { field: "name", title: "Language" },
                    {
                        field: "have_used",
                        title: "% of devs that have used it",
                        format: ".2%",
                    },
                    {
                        field: "want_to_use",
                        title: "% of devs that want to use",
                        format: ".2%",
                    },
                ],
            },
        },
        {
            data: {
                values: [
                    { x: 0, y: 0 },
                    { x: 0.7, y: 0.7 },
                ],
            },
            mark: { type: "line", strokeWidth: 1, clip: true },
            encoding: {
                x: { field: "x", type: "quantitative" },
                y: { field: "y", type: "quantitative" },
            },
        },
        {
            data: {
                values: [
                    {
                        x: 0.2,
                        y: 0.65,
                        text: "Languages that more developers want to use than are currently using it",
                    },
                    {
                        x: 0.5,
                        y: 0.05,
                        text: "Languages that less developers want to use than are currently using it",
                    },
                ],
            },
            mark: {
                type: "text",
                color: "white",
                fontSize: 14,
                clip: true
            },
            encoding: {
                x: { field: "x", type: "quantitative" },
                y: { field: "y", type: "quantitative" },
                text: { field: "text", type: "nominal" },
            },
        },
    ],
    config: {
        background: "#14110F",
        view: { stroke: "transparent" },
        title: { color: "#fff", subtitleColor: "#fff" },
        style: {
            "guide-label": { fill: "#fff" },
            "guide-title": { fill: "#fff" },
        },
        axis: { domainColor: "#fff", gridColor: "#888", tickColor: "#fff" },
        axis: {
            domainWidth: 0.5,
            grid: true,
            labelPadding: 2,
            tickSize: 5,
            tickWidth: 0.5,
            titleFontWeight: "normal",
        },
        axisBand: { grid: false },
        axisX: { gridWidth: 0.1 },
        axisY: { gridWidth: 0.1 },
        legend: { labelFontSize: 11, padding: 1, symbolType: "square" },
        range: {
            category: [
                "#25fcf8",
                "#25fc50",
                "#b1fc25",
                "#fcbc25",
                "#fc4225",
                "#fc25d5",
                "#b762fc",
                "#536ffc",
            ],
        },
    },
};
vegaEmbed("#languages_vis", spec2, { mode: "vega-lite" })
    .then(console.log)
    .catch(console.warn);
