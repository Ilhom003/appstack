const sidebar = document.querySelector(".sidebar");
const menuBtn = document.querySelector("#sidebar__toggler");
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});
