const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click", ()=>{
    hundleMenu();
});
function hundleMenu() {
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active")
}
const toggle = document.querySelector('.toggle');
const explanation = document.querySelector('.explanation');

// قم بإخفاء المحتوى في البداية
explanation.style.display = 'none'; // تأكد من أن العنصر مخفي في البداية

toggle.addEventListener('click', function() {
    if (explanation.style.display === 'none' || explanation.style.display === '') {
        explanation.style.display = 'block'; // عرض المحتوى عند الضغط الأول
    } else {
        explanation.style.display = 'none'; // إخفاء المحتوى عند الضغط مرة أخرى
    }
    toggle.classList.toggle('active'); // تغيير حالة السهم
});
