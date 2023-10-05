function introduction(name) {
    return `Hi, my name is ${name}.`;
}
console.log(introduction ('Ammar'));
/*-----------------------------------------------------------------------------------*/
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage("Ammar", "JavaScript"));
/*-----------------------------------------------------------------------------------*/

function introductionWithLanguageOptional(name = "Ammar", language = "JavaScript") {
return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional());
/*-----------------------------------------------------------------------------------*/