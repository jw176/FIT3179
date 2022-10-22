const spec_ethnicity = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: 240,
    title: {
        text: "Developer Ethnicity",
        color: "white",
        fontSize: 16,
        subtitlePadding: 10,
        subtitle: [""],
        subtitleFontSize: 16,
    },
    data: {
        values: [
            {
                key: "I don't know",
                value: 701.0,
                percent: 0.010090105651034919,
            },
            {
                key: "Southeast Asian",
                value: 792.0,
                percent: 0.011399948182053718,
            },
            {
                key: "Self-describe",
                value: 798.0,
                percent: 0.011486311425857156,
            },
            { key: "South Asian", value: 803.0, percent: 0.011558280795693352 },
            {
                key: "South American",
                value: 1112.0,
                percent: 0.016005987851570373,
            },
            { key: "African", value: 1324.0, percent: 0.019057489132625154 },
            {
                key: "Middle Eastern",
                value: 1540.0,
                percent: 0.022166565909548897,
            },
            {
                key: "Prefer not to say",
                value: 1732.0,
                percent: 0.024930189711258887,
            },
            {
                key: "Hispanic or Latino/a",
                value: 1732.0,
                percent: 0.024930189711258887,
            },
            { key: "Other", value: 2073.0, percent: 0.029838500734087572 },
            { key: "Asian", value: 3346.0, percent: 0.04816190229438351 },
            { key: "Indian", value: 5240.0, percent: 0.0754238995883352 },
            { key: "White", value: 13633.0, percent: 0.1962316837953767 },
            { key: "European", value: 14612.0, percent: 0.2103232864093042 },
            { key: "Multiracial", value: 20036.0, percent: 0.2883956588076115 },
        ],
    },
    encoding: {
        x: {
            field: "value",
            type: "quantitative",
            axis: {
                title: ["Number of developers"],
                titleAngle: 0,
                titlePadding: 20,
                titleFontSize: 14,
                titleColor: "grey",
            },
        },
        y: {
            field: "key",
            type: "nominal",
            sort: null,
            axis: {
                title: ["Ethnicity"],
                titleAngle: 0,
                titleAlign: "right",
                titleFontSize: 14,
                titleColor: "grey",
            },
        },
        tooltip: [
            { field: "key", title: "Ethnicity" },
            {
                field: "value",
                title: "Number of developers",
                format: ",",
            },
            {
                field: "percent",
                title: "Percentage of total",
                format: ".2%",
            },
        ],
    },
    layer: [
        {
            mark: {
                type: "bar",
                color: "#93E1D8",
            },
        },
        {
            mark: {
                type: "text",
                align: "left",
                baseline: "middle",
                dx: 3,
                color: "white",
            },
            encoding: {
                text: { field: "percent", type: "quantitative", format: ".2%" },
            },
        },
    ],
    config: {
        background: "transparent",
        font: "mononoki",
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
vegaEmbed("#ethnicity_vis", spec_ethnicity, { mode: "vega-lite" })
    .then(console.log)
    .catch(console.warn);
