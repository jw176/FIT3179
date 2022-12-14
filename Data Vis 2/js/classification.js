const spec_classification = {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    title: {
        text: "Programming Language Classification",
        color: "white",
        fontSize: 16,
        font: "mononoki",
    },
    width: 700,
    height: 600,
    padding: 5,
    data: [
        {
            name: "tree",
            values: [
                { id: 1, name: "Programming Languages" },
                { id: 2, name: "Compiled Languages", parent: 1 },
                { id: 3, name: "C", parent: 2 },
                { id: 4, name: "C#", parent: 2 },
                { id: 5, name: "C++", parent: 2 },
                { id: 6, name: "COBOL", parent: 2 },
                { id: 7, name: "Clojure", parent: 2 },
                { id: 8, name: "Crystal", parent: 2 },
                { id: 9, name: "Dart", parent: 2 },
                { id: 10, name: "Delphi", parent: 2 },
                { id: 11, name: "Elixir", parent: 2 },
                { id: 12, name: "Erlang", parent: 2 },
                { id: 13, name: "F#", parent: 2 },
                { id: 14, name: "Fortran", parent: 2 },
                { id: 15, name: "Go", parent: 2 },
                { id: 16, name: "Groovy", parent: 2 },
                { id: 17, name: "Haskell", parent: 2 },
                { id: 18, name: "Java", parent: 2 },
                { id: 19, name: "Julia", parent: 2 },
                { id: 20, name: "Kotlin", parent: 2 },
                { id: 21, name: "OCaml", parent: 2 },
                { id: 22, name: "Objective-C", parent: 2 },
                { id: 23, name: "Rust", parent: 2 },
                { id: 24, name: "SAS", parent: 2 },
                { id: 25, name: "Scala", parent: 2 },
                { id: 26, name: "Solidity", parent: 2 },
                { id: 27, name: "Swift", parent: 2 },
                { id: 28, name: "VBA", parent: 2 },
                { id: 29, name: "Assembly", parent: 1 },
                { id: 30, name: "Interpreted Languages", parent: 1 },
                { id: 31, name: "APL", parent: 30 },
                { id: 32, name: "Bash/Shell", parent: 30 },
                { id: 33, name: "JavaScript", parent: 30 },
                { id: 34, name: "LISP", parent: 30 },
                { id: 35, name: "Lua", parent: 30 },
                { id: 36, name: "MATLAB", parent: 30 },
                { id: 37, name: "PHP", parent: 30 },
                { id: 38, name: "Perl", parent: 30 },
                { id: 39, name: "PowerShell", parent: 30 },
                { id: 40, name: "Python", parent: 30 },
                { id: 41, name: "R", parent: 30 },
                { id: 42, name: "Ruby", parent: 30 },
                { id: 43, name: "SQL", parent: 30 },
                { id: 44, name: "TypeScript", parent: 30 },
                { id: 45, name: "Markup Languages", parent: 1 },
                { id: 46, name: "HTML/CSS", parent: 45 },
            ],
            transform: [
                { type: "stratify", key: "id", parentKey: "parent" },
                {
                    type: "tree",
                    method: "tidy",
                    size: [{ signal: "height" }, { signal: "width - 100" }],
                    separation: true,
                    as: ["y", "x", "depth", "children"],
                },
            ],
        },
        {
            name: "links",
            source: "tree",
            transform: [
                { type: "treelinks" },
                { type: "linkpath", orient: "horizontal", shape: "diagonal" },
            ],
        },
    ],
    scales: [
        {
            name: "color",
            type: "linear",
            range: { scheme: "yellowgreenblue" },
            domain: { data: "tree", field: "depth" },
            zero: true,
        },
    ],
    marks: [
        {
            type: "path",
            from: { data: "links" },
            encode: {
                update: { path: { field: "path" }, stroke: { value: "#ccc" } },
            },
        },
        {
            type: "symbol",
            from: { data: "tree" },
            encode: {
                enter: { size: { value: 100 }, stroke: { value: "#fff" } },
                update: {
                    x: { field: "x" },
                    y: { field: "y" },
                    fill: { scale: "color", field: "depth" },
                },
            },
        },
        {
            type: "text",
            from: { data: "tree" },
            encode: {
                enter: {
                    text: { field: "name" },
                    fontSize: { value: 10 },
                    baseline: { value: "middle" },
                    fill: { value: "white" },
                    font: { value: "mononoki" },
                },
                update: {
                    x: { field: "x" },
                    y: { field: "y" },
                    dx: { signal: "datum.children ? -7 : 7" },
                    align: { signal: "datum.children ? 'right' : 'left'" },
                    opacity: { value: 1 },
                },
            },
        },
    ],
    config: {
        font: "mononoki",
    },
};
vegaEmbed("#classification_vis", spec_classification, { mode: "vega" })
    .then(console.log)
    .catch(console.warn);
