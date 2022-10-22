const spec_interpreted = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "A simple bar chart with embedded data.",
    width: 500,
    title: {
        text: ["What languages do developers want to use?"],
        color: "white",
        fontSize: 20,
        subtitlePadding: 20,
        subtitle: [
            "Ratio of how many developers want to work",
            "with a language vs how many already have",
            "",
        ],
        subtitleColor: "grey",
        subtitleFontSize: 16,
    },
    data: {
        values: [
            { name: "APL", value: 1.4074074074074074 },
            { name: "LISP", value: 1.3979706877113867 },
            { name: "TypeScript", value: 1.109124196363946 },
            { name: "Ruby", value: 0.9559579153413261 },
            { name: "R", value: 0.9403846153846153 },
            { name: "Python", value: 0.9052774436322136 },
            { name: "Lua", value: 0.8690909090909091 },
            { name: "SQL", value: 0.7470184315142754 },
            { name: "JavaScript", value: 0.7190127845764682 },
            { name: "Bash/Shell", value: 0.6717394612692131 },
            { name: "Perl", value: 0.6128608923884514 },
            { name: "PowerShell", value: 0.5855238569826835 },
            { name: "PHP", value: 0.5274717361561172 },
            { name: "MATLAB", value: 0.3860736419978126 },
        ],
    },
    encoding: {
        x: {
            field: "name",
            type: "nominal",
            sort: null,
            axis: {
                title: ["Programming Language"],
                titleAngle: 0,
                titlePadding: 20,
                titleFontSize: 14,
                titleColor: "grey",
                labelAngle: -45,
                labelFontSize: 12,
            },
        },
        y: {
            field: "value",
            type: "quantitative",
            axis: {
                title: ["Number of developers"],
                // titleAngle: 0,
                // titleAlign: "right",
                titlePadding: 20,
                titleFontSize: 14,
                titleColor: "grey",
            },
        },
        tooltip: [
            { field: "name", title: "Programming Language" },
            {
                field: "value",
                title: "Number of developers",
                format: ".2f",
            },
        ],
        color: {
            condition: { test: "datum['value'] < 1.0", value: "#fc4225" },
            value: "#93E1D8",
        },
        stroke: {
            condition: { test: "datum['value'] < 1.0", value: "#fc4225" },
            value: "#93E1D8",
        },
    },
    layer: [
        { mark: { type: "bar", width: 2, color: "#93E1D8" } },
        {
            mark: {
                type: "point",
                size: 100,
                fill: "#030b1c",
                stroke: "#93E1D8",
                opacity: 1,
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
vegaEmbed("#interpreted_lollipop_vis", spec_interpreted, { mode: "vega-lite" })
    .then(console.log)
    .catch(console.warn);
