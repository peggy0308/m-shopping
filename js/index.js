window.addEventListener('load', function () {

    let searchContentBg = document.querySelector('.search-content-bg');
    let searchContent = document.querySelector('.search-content');
    let classify = document.querySelector('.classify');
    let classifySvg = classify.querySelector('svg');
    let searchBg = document.querySelector('.search-bg');
    let shopcar = document.querySelector('.shopcar');
    let shopcarSvg = shopcar.querySelector('svg');
    let headertop = document.querySelector('.headertop');

    document.addEventListener('scroll', function () {
        // // 獲取滾動條垂直方向滾動了多少
        let top = document.documentElement.scrollTop || document.body.scrollTop;

        if (top >= 30) {
            searchContentBg.style.display = 'block';
            searchContentBg.className = 'search-content-bg animate__animated animate__fadeInDown';
            classifySvg.style.fill = '#c81623';
            searchBg.style.background = 'rgb(235, 235, 235)';
            shopcarSvg.style.fill = '#c81623';
            headertop.style.display = 'block';
            headertop.className = 'headertop animate__animated animate__fadeIn';
        } else {
            searchContentBg.className = 'search-content-bg animate__animated animate__fadeOutUp';
            classifySvg.style.fill = 'white';
            searchBg.style.background = 'white';
            shopcarSvg.style.fill = 'white';
            headertop.className = 'headertop animate__animated animate__fadeOut';
        }
    })


    function scrollToTop() {
        window.scrollTo({
            top: 0, 
            behavior: "smooth" 
        });
    }

    // function scrollToTop() {
    //     window.scrollTo(0, 0);
    // }
    headertop.addEventListener("click", scrollToTop);


    let classifyNav = document.querySelector('.classify-nav');
    let backbtnNav = document.querySelector('.backbtn-nav');
    let classifyNavSearch = document.querySelector('.classify-nav-search');

    classify.addEventListener('click', function () { 
        classifyNav.style.display = 'block';
        classifyNav.className = 'classify-nav animate__animated animate__slideInLeft animate__faster';
    })
    
    backbtnNav.addEventListener('click', function () {       
        classifyNav.className = 'classify-nav animate__animated animate__slideOutLeft animate__faster';
    })

    classifyNavSearch.addEventListener('click', function () {       
        searchCover.style.display = 'block';
        searchCover.className = 'searchcover animate__animated animate__slideInDown animate__faster';
    })


    let searchContentForm = document.querySelector('.search-content-form');
    let searchCover = document.querySelector('.searchcover');
    let backBtn = document.querySelector('.backbtn');

    searchContentForm.addEventListener('click', function () {
        searchCover.style.display = 'block';
        searchCover.className = 'searchcover animate__animated animate__slideInDown animate__faster';
    })

    backBtn.addEventListener('click', function () {
        searchCover.className = 'searchcover animate__animated animate__slideOutLeft animate__faster';
        classifyNav.style.display = 'none';
    })


    let tabList = document.querySelector('.classify-nav-bdleft');
    let lis = tabList.querySelectorAll('span');
    let classifyNavBdright = document.querySelectorAll('.classify-nav-bdright');
    
    for (let i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('click', function () {
            for (let i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'cis';
            let index = this.getAttribute('index');
            console.log(index);
            for (let i = 0; i < classifyNavBdright.length; i++) {
                classifyNavBdright[i].style.display = 'none';
            }
            classifyNavBdright[index].style.display = 'block';
        })
    }


    let bottomNav = document.querySelector('.bottom-nav');
    let lisNav = bottomNav.querySelectorAll('li');

    for (let i = 0; i < lisNav.length; i++) {
        lisNav[i].setAttribute('index', i);
        lisNav[i].addEventListener('click', function () {
            for (let i = 0; i < lisNav.length; i++) {
                lisNav[i].className = '';
            }
            this.className = 'selected';
        })
    }


    var swiper = new Swiper(".bannerSwiper", {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        autoplay: {
            delay: 3000,
        },
    });

    var swiper = new Swiper(".navSwiper", {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

})