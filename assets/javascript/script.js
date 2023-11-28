const navbar_bar_el = document.getElementById("navbar_bar");
const mobile_menu_close_btn_el = document.getElementById("mobile_menu_close_btn");
const navbar_ul_el = document.getElementById("navbar_ul");
//
if (navbar_bar_el) {
    navbar_bar_el.addEventListener("click", () => {
        navbar_ul_el.classList.add("active");
    });
}
//
if (mobile_menu_close_btn_el) {
    mobile_menu_close_btn_el.addEventListener("click", ()=> {
        navbar_ul_el.classList.remove("active");
    });
}