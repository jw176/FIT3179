const spec_gender = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: 150,
    title: {
        text: "Developer Gender",
        color: "white",
        fontSize: 16,
        subtitlePadding: 10,
        subtitle: [""],
        subtitleFontSize: 16,
    },
    data: {
        values: [
            {
                key: "Self-describe",
                value: 279.0,
                percent: 0.00393773023019491,
            },
            {
                key: "Multiple-select",
                value: 692.0,
                percent: 0.00976670006915727,
            },
            {
                key: "Non-binary, genderqueer, or gender non-conforming",
                value: 704.0,
                percent: 0.009936064810240921,
            },
            {
                key: "Prefer not to say",
                value: 1172.0,
                percent: 0.016541289712503352,
            },
            { key: "Woman", value: 3399.0, percent: 0.04797256291194445 },
            { key: "Man", value: 64607.0, percent: 0.9118456522659592 },
        ],
    },
    mark: {
        type: "arc",
        innerRadius: 0,
        outerRadius: 65,
        stroke: "transparent",
        strokeWidth: 1,
    },
    encoding: {
        theta: { field: "value", type: "quantitative" },
        color: {
            field: "key",
            type: "nominal",
            legend: {
                labelColor: "white",
                labelFontSize: 9,
                labelLimit: 300,
                symbolSize: 100,
                rowPadding: 7,
                title: ["Gender"],
                titleLineHeight: 24,
                titleFontSize: 16,
                titleLimit: 300,
                titleFontWeight: 500,
                titleColor: "grey",
                titlePadding: 14,
            },
        },
        tooltip: [
            { field: "key", title: "Gender" },
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
                "#25fc50",
                "#25fcf8",
                "#fc25d5",
                "#fcbc25",
                "#fc4225",
                "#b762fc",
                "#536ffc",
                "#b1fc25"
            ],
        },
    },
};
vegaEmbed("#gender_vis", spec_gender, { mode: "vega-lite" })
    .then(console.log)
    .catch(console.warn);
