function toggleDropdown() {
    var dropdowns = document.getElementById("dropdowns");
    var content = document.querySelector(".content");
    if (dropdowns.classList.contains("show")) {
        dropdowns.classList.remove("show");
        setTimeout(() => dropdowns.style.display = "none", 100);
        content.style.marginTop = "20px";
    } else {
        dropdowns.style.display = "flex";
        setTimeout(() => dropdowns.classList.add("show"), 100);
        content.style.marginTop = "150px";
    }
}