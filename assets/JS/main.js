const appNode = document.querySelector('.app');
const headerNode = document.querySelector('.header');
const headerListNode = document.querySelector('.header-list');
const headerItemsNode = document.getElementsByClassName('.header-item');
const headerLinksNode = document.querySelectorAll('.header-link');
const conatainerNode = document.querySelectorAll('.container');
const jsHeaderLink = document.querySelector('.js-header-link');

headerNode.addEventListener('click', () => {
  headerNode.classList.add('hide')
})


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerItems = $$(".header-item");
const aboutItem = $('.js-about-item');
const dishes = $$(".menu-list__heading");
const aboutSection = $("#about");
const menuSection = $("#menu");
const contactSection = $("#contact");
console.log(headerItems)

// document.onscroll = function() {
//     console.log(document.documentElement.scrollTop);
// }

const app = {
  offsetTop: [50, 780, 1577, 2502],
  handleEvents: function () {
    const _this = this;
    // Xử lí khi ấn vào btn trong header
    // headerItems.forEach((item, index) => {
    //   item.onclick = function () {
    //     $(".header-item.active").classList.remove("active");
    //     item.classList.add("active");
    // };
    // Xử lí khi cuộn xuống phần nhất định
    document.onscroll = function () {
        const currentScrollTop = document.documentElement.scrollTop;

        const scrollGap1 = 780 - currentScrollTop;
        const scrollGap2 = 1577 - currentScrollTop;
        const scrollGap3 = 2502 - currentScrollTop;
        if (scrollGap1 > 0) {
            $(".header-item.active").classList.remove("active");
            aboutItem.classList.add('active');
        } else if ((scrollGap1 < 0) && (scrollGap2 > 0)) {
            $(".header-item.active").classList.remove("active");
            aboutItem.classList.add('active');
        } else if ((scrollGap2 < 0) && ( scrollGap3 > 0)) {
            $(".header-item.active").classList.remove("active");
            aboutItem.classList.add('active');
        } else if ( scrollGap3 < 0) {
            $(".header-item.active").classList.remove("active");
            aboutItem.classList.add('active');
        }
    }

  },
  //hiển thị thông tin ra
  //   render: function() {
  //     const htmls = dishes.map((dish) => {
  //         return  `<h2>${dish.innerText}<h2>`
  //     })
  //     console.log(htmls.join(''));
  //   },
  start: function () {
    // Lắng nghe / xử lý các sự kiện (DOM events)
    this.handleEvents();
    // In ra thực đơn
    // this.render();
  },
};

app.start();
