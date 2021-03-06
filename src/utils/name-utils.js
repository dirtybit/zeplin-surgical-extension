function lowercaseFirst(s) {

    return s.charAt(0).toLowerCase() + s.substring(1);
}

function uppercaseFirst(s) {

    return s.charAt(0).toUpperCase() + s.substring(1);
}

function joinTokens(components) {
    let name = components.map(uppercaseFirst).join("");

    return lowercaseFirst(name);
}

function tokensForString(str) {
    let tokenizer = /\d+|[a-z]+|[A-Z]+(?![a-z])|[A-Z][a-z]+/g;

    let matchResult = str.match(tokenizer);
    if (!matchResult) {

        return ["invalid", "name"];
    }

    return matchResult.map(function (token) {

        return token.toLowerCase();
    });
}

export function generateName(name) {

    return joinTokens(tokensForString(name));
}