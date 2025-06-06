import renderFooter from "./components/footer";
import renderNavbar from "./components/navbar";

document.getElementById("navbar")!.innerHTML = renderNavbar();
document.getElementById("footer")!.innerHTML = renderFooter();


// footer element script 
// document.getElementById("year")!.textContent = new Date().getFullYear
document.addEventListener("mousemove",(e) => {
    const orb = document.querySelector(".orb") as HTMLElement
    orb.style.left = `${e.clientX}px`
    orb.style.top = `${e.clientY}px`
})