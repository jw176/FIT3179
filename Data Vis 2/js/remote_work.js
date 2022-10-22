const spec1 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    data: {
        url: "pie.json",
    },
    hconcat: [
        {
            title: {
                text: ["Work type per country"],
                color: "white",
                fontSize: 16,
                font: "mononoki",
                subtitlePadding: 10,
                subtitle: [""],
                subtitleColor: "grey",
                subtitleFontSize: 16,
            },
            height: 500,
            width: 650,
            data: {
                url: "hex_map.json",
            },
            encoding: {
                y: { field: "Row", type: "ordinal", axis: null },
                x: { field: "Col", type: "ordinal", axis: null },
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
                        height: 20,
                        width: 20,
                        // color: "#ff00ff",
                        cornerRadius: 3,
                        strokeWidth: 3,
                    },
                    encoding: {
                        color: {
                            field: "RemoteWork",
                            type: "Nominal",
                            legend: {
                                labelColor: "white",
                                labelFontSize: 12,
                                symbolSize: 300,
                                rowPadding: 10,
                                title: ["Most common", "developer work type"],
                                titleLineHeight: 16,
                                titleFontSize: 12,
                                titleLimit: 300,
                                titleColor: "white",
                                titlePadding: 10,
                                orient: "none",
                                legendX: -20,
                                legendY: 380,
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
                        stroke: {
                            condition: {
                                param: "highlight",
                                empty: false,
                                value: "#fc0905",
                            },
                            value: null,
                        },
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
                        font: "sans-serif"
                    },
                    encoding: {
                        text: { field: "Code", type: "nominal" },
                    },
                },
                {
                    data: {
                        values: [
                            {
                                name: "North America",
                                Row: 1,
                                Col: 2,
                            },
                            {
                                name: ["Cental", "America"],
                                Row: 8,
                                Col: 2,
                            },
                            {
                                name: "Caribbean",
                                Row: 4,
                                Col: 6,
                            },
                            {
                                name: "South America",
                                Row: 15,
                                Col: 3,
                            },
                            {
                                name: "Europe",
                                Row: 4,
                                Col: 14,
                            },
                            {
                                name: "Africa",
                                Row: 19,
                                Col: 13,
                            },
                            {
                                name: ["Western", "Asia"],
                                Row: 13,
                                Col: 20,
                            },
                            {
                                name: "Central Asia",
                                Row: 5,
                                Col: 22,
                            },
                            {
                                name: ["Southern", "Asia"],
                                Row: 12,
                                Col: 23,
                            },
                            {
                                name: "Eastern Asia",
                                Row: 6,
                                Col: 28,
                            },
                            {
                                name: ["South East", "Asia"],
                                Row: 10,
                                Col: 28,
                            },
                            {
                                name: "Oceania",
                                Row: 21,
                                Col: 26,
                            },
                        ],
                    },
                    mark: {
                        type: "text",
                        color: "#b5dde5",
                        align: "left",
                        dx: -8,
                        fontSize: 10
                    },
                    encoding: {
                        text: { field: "name", type: "nominal" },
                        // x: { field: "col", type: "quantitative" },
                        // y: { field: "row", type: "quantitative" },
                    },
                },
            ],
        },
        {
            height: 270,
            width: 200,
            title: {
                text: ["Work type breakdown"],
                color: "white",
                fontSize: 16,
                subtitlePadding: 10,
                subtitle: ["Click on a country to", "see its breakdown"],
                subtitleColor: "grey",
                subtitleFontSize: 14,
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
                        outerRadius: 70,
                        stroke: "#04202b",
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
                    },
                },
                {
                    mark: { type: "text", outerRadius: 85 },
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
                        y: 30,
                        stroke: "white",
                        color: "white",
                        fill: "white",
                        fontSize: 16,
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
    resolve: { legend: { color: "independent" } },
    config: {
        background: "transparent",
        view: { stroke: "transparent" },
        font: "mononoki"
    },
};
vegaEmbed("#remote_work_vis", spec1, { mode: "vega-lite" })
    .then(console.log)
    .catch(console.warn);
