//Color Generator
const tl = document.getElementById("tl");
const tr = document.getElementById("tr");
const bl = document.getElementById("bl");
const br = document.getElementById("br");
const all = document.getElementById("allCorners")
const previewBox = document.getElementById("previewBox");
const cssCode = document.getElementById("cssCode");

function updatePreview() {
    const radius = `${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px`;
    previewBox.style.borderRadius = radius;
    cssCode.textContent = `border-radius: ${radius};`;
}

[tl, tr, br, bl].forEach(input => {
    input.addEventListener("input", updatePreview);
});

all.addEventListener("input", () => {
    tl.value = tr.value = bl.value = br.value = all.value;
    updatePreview();
})

function copyCSS() {
    navigator.clipboard.writeText(cssCode.textContent);
    alert("CSS copied!");
}

updatePreview();

//Box Shadow Generator
const hOffset = document.getElementById("hOffset");
const vOffset = document.getElementById("vOffset");
const blur = document.getElementById("blur");
const spread = document.getElementById("spread");
const shadowColor = document.getElementById("shadowColor");
const shadowPreview = document.getElementById("shadowPreview");
const shadowCode = document.getElementById("shadowCode");

function updateShadowPreview() {
    const shadow = `${hOffset.value}px ${vOffset.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`;
    shadowPreview.style.boxShadow = shadow;
    shadowCode.textContent = `box-shadow: ${shadow};`;
}

[hOffset, vOffset, blur, spread, shadowColor].forEach(input => {
    input.addEventListener("input", updateShadowPreview);
});

function copyShadowCSS() {
    navigator.clipboard.writeText(shadowCode.textContent);
    alert("CSS copied!");
}

updateShadowPreview();

//Gradient Generator
const gradientDirection = document.getElementById("gradientDirection");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const randomBtn = document.getElementById("randomGradient");
const gradientPreview = document.getElementById("gradientPreview");
const gradientCode = document.getElementById("gradientCode");

function updateGradient () {
    let gradient;
    if(gradientDirection.value === "circle") {
        gradient = `radial-gradient(circle, ${color1.value}, ${color2.value})`;
    } else {
        gradient = `linear-gradient(${gradientDirection.value}, ${color1.value}, ${color2.value})`;
    }

    gradientPreview.style.background = gradient;
    gradientCode.textContent = `background: ${gradient}`;
}

[gradientDirection, color1, color2].forEach(el => {
    el.addEventListener("input", updateGradient);
});

randomBtn.addEventListener("click", () => {
    color1.value = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    color2.value = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    updateGradient();
});

function copyGradientCSS() {
    navigator.clipboard.writeText(gradientCode.textContent);
    const btn = event.target;
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "Copy", 2000);
}

updateGradient();