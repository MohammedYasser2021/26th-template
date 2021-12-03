$(function () {
  let windowHeight = $(window).height()
  let upperHeight = $('.upper-bar').innerHeight()
  let navHeight = $('nav').innerHeight()
  $('.slider, .carousel-item ').height(windowHeight - (upperHeight + navHeight))
})

// shuffle images

let suffleImgsLis = document.querySelectorAll('.shuffle-imgs li')
let worksImgs = document.querySelectorAll('.works-img img')
let worksImgsContainer = document.querySelector('.works-img')

suffleImgsLis.forEach((ele) => {
  ele.addEventListener('click', function () {
    suffleImgsLis.forEach((el) => {
      el.classList.remove('active')
    })
    ele.classList.add('active')
    worksImgs.forEach((item) => {
      item.style.display = 'none'
    })

    document.querySelectorAll(ele.dataset.filter).forEach((el) => {
      el.style.display = 'block'
    })
    if (ele.dataset.filter !== '.all') {
      worksImgsContainer.classList.remove('works-global')
      worksImgsContainer.classList.add('works-custom')
    } else {
      worksImgsContainer.classList.remove('works-custom')
      worksImgsContainer.classList.add('works-global')
    }
  })
})

// increase numbers
let nums = document.querySelectorAll('.statistics .box .num')
let statsSection = document.querySelector('.statistics')
let start = false

function startCount(ele) {
  let goal = ele.dataset.goal
  let count = setInterval(() => {
    ;+ele.textContent++
    if (ele.textContent === goal) {
      clearInterval(count)
    }
  }, 200 / goal)
}

window.addEventListener('scroll', function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!start) {
      nums.forEach((num) => {
        startCount(num)
      })
    }
    start = true
  }
})

// scroll to top
let scrollBtn = document.querySelector('.scroll-to-top')

window.addEventListener('scroll', function () {
  this.scrollY >= 200
    ? (scrollBtn.style.right = '20px')
    : (scrollBtn.style.right = '-60px')
})

scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
