const spec1 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    data: {
        url: "pie.json",
    },
    hconcat: [
        {
            title: {
                text: ["How do developers work in 2022?"],
                color: "white",
                fontSize: 30,
                subtitlePadding: 10,
                subtitle: [
                    "Based on the Stack Overflow 2022 Developer Survey",
                    "",
                ],
                subtitleColor: "grey",
                subtitleFontSize: 16,
            },
            height: 550,
            width: 780,
            data: {
                url: "hex_map.json",
            },
            encoding: {
                y: { field: "Row", type: "ordinal", axis: null },
                x: { field: "Col", type: "ordinal", axis: null },
                stroke: {
                    condition: {
                        param: "highlight",
                        empty: false,
                        value: "black",
                    },
                    value: null,
                },
            },
            layer: [
                {
                    params: [
                        {
                            name: "highlight",
                            select: {
                                type: "point",
                                encodings: ["Country"],
                                fields: ["Country"],
                                on: "click",
                            },
                        },
                    ],
                    mark: {
                        type: "rect",
                        height: 23,
                        width: 23,
                        // color: "#ff00ff",
                        cornerRadius: 4,
                    },
                    encoding: {
                        color: {
                            field: "RemoteWork",
                            type: "Nominal",
                            legend: {
                                labelColor: "white",
                                labelFontSize: 14,
                                symbolSize: 300,
                                rowPadding: 10,
                                title: [
                                    "Most common developer",
                                    "work type",
                                ],
                                titleLineHeight: 24,
                                titleFontSize: 18,
                                titleLimit: 300,
                                titleColor: "white",
                                titlePadding: 10,
                            },
                            scale: {
                                domain: [
                                    "In-person",
                                    "Hybrid",
                                    "Remote",
                                    "No data available",
                                ],
                                range: [
                                    "cyan",
                                    "#F7FFF7",
                                    "#ff00ff",
                                    "#485665",
                                ],
                            },
                        },
                        tooltip: [
                            { field: "Country", type: "Nominal" },
                            {
                                field: "In-person",
                                type: "Nominal",
                                title: "In-person developers",
                                format: ",",
                            },
                            {
                                field: "Hybrid",
                                type: "Nominal",
                                title: "Hybrid developers",
                                format: ",",
                            },
                            {
                                field: "Remote",
                                type: "Nominal",
                                title: "Remote developers",
                                format: ",",
                            },
                        ],
                    },
                    config: {
                        scale: {
                            bandPaddingInner: 0,
                            bandPaddingOuter: 0,
                        },
                        view: { step: 40 },
                        range: {
                            ramp: { scheme: "yellowgreenblue" },
                        },
                        axis: { domain: false },
                    },
                },
                {
                    mark: {
                        type: "text",
                        color: "#14110F",
                        fontSize: 8,
                    },
                    encoding: {
                        text: { field: "Code", type: "nominal" },
                    },
                },
            ],
        },
        {
            height: 250,
            width: 200,
            title: {
                text: ["Work type breakdown"],
                color: "white",
                fontSize: 20,
                subtitlePadding: 10,
                subtitle: ["Click on a country to see its breakdown", ""],
                subtitleColor: "grey",
                subtitleFontSize: 16,
            },
            transform: [
                {
                    filter: {
                        param: "highlight",
                        empty: false,
                    },
                },
            ],
            layer: [
                {
                    mark: {
                        type: "arc",
                        innerRadius: 0,
                        outerRadius: 80,
                        stroke: "#14110f",
                        strokeWidth: 1,
                    },
                    encoding: {
                        tooltip: [
                            { field: "Country", type: "Nominal" },
                            {
                                field: "developers",
                                type: "quantitative",
                                title: "Developers",
                                format: ",",
                            },
                            {
                                field: "work_type",
                                type: "Nominal",
                                title: "Work type",
                            },
                        ],
                    }
                },
                {
                    mark: { type: "text", outerRadius: 100 },
                    encoding: {
                        text: {
                            field: "developers",
                            type: "quantitative",
                            format: ",",
                        },
                    },
                },
                {
                    mark: {
                        type: "text",
                        align: "center",
                        baseline: "bottom",
                        x: 100,
                        y: 20,
                        stroke: "white",
                        color: "white",
                        fill: "white",
                        fontSize: 16
                    },
                    encoding: {
                        text: {
                            condition: {
                                test: "!isDefined(highlight.Country)",
                                value: "",
                            },
                            value: { expr: "highlight.Country" },
                        },
                    },
                },
            ],
            encoding: {
                theta: {
                    field: "developers",
                    type: "quantitative",
                    stack: true,
                },
                color: {
                    field: "work_type",
                    type: "nominal",
                    legend: null,
                },
            },
        },
    ],
    config: {
        background: "#14110F",
        view: { stroke: "transparent" },
    },
};
vegaEmbed("#remote_work_vis", spec1, { mode: "vega-lite" })
    .then(console.log)
    .catch(console.warn);