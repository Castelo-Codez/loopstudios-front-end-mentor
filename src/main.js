import "./style/base.scss";
const $mobileListOpener = document.querySelector("#mobile-list-opener");
const $mobileLinks = document.querySelector("#mobile-links");
const $mobileListCloser = document.querySelector("#mobile-list-closer");
$mobileListOpener.addEventListener("click", (e) => {
    $mobileLinks.classList.add("active");
    document.body.style.overflow = "hidden";
});

$mobileListCloser.addEventListener("click", (e) => {
    $mobileLinks.classList.remove("active");
    document.body.style.overflow = "auto";
});
