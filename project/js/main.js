var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    },
});

const links = document.querySelectorAll('.view_of_windows a');
console.log(links);
const blockLinks = document.querySelectorAll('.view_of_windows');
blockLinks.onclick = function(event) {
    let target = event.target;
    links.forEach(el => el.removeClass('active'));
    this.addClass('active');
    if (target.tagName !== 'A') return;

    activeLink(target);
 };

function activeLink(link) {

    link.classList.add('active');


}