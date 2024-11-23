//bph
const y538 = document.getElementById("y538");
const b538 = document.getElementById("b538");
const o538 = document.getElementById("o538");

b538.addEventListener("click", () => {
    const message1 = "ご参拝しなさい";
    const message2 = "538";
    y538.textContent = message2;
    o538.textContent = message1;
});

const button = document.getElementById("myButton");
const output = document.getElementById("output");
const outputw = document.getElementById("outputw")

button.addEventListener("click", () => {
    const message = "ご参拝しなさい";
    output.textContent = message;
    const messagew = "こんにちは";
    outputw.textContent = messagew;
});