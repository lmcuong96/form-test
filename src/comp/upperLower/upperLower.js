function upperLower(str) {
    return str
        .split("")
        .map((char, index) =>
            index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("");
}

console.log(upperLower("Hello world"));
