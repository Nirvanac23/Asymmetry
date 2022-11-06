// import pages from js 
import { content as index } from './pages/index.js'
import { content as memory } from './pages/memory.js'
import { content as quizCheck } from './pages/quiz-check.js'
import { content as swiperQuiz } from './pages/swiper-quiz.js'
import { content as form } from './pages/form.js'
import { content as result } from './pages/result.js'

// Where pages loaded(wrapper)
const mainWrapper = document.getElementById('content')

const cartFliper = (cards) => {
  ;[...cards].forEach((card) => {
    card.addEventListener('click', function () {
      card.classList.toggle('is-flipped')
    })
  })
}

const startTimer = (duration, display) => {
  var timer = duration,
    minutes,
    seconds
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    display.textContent = minutes + ':' + seconds

    if (--timer < 0) {
      timer = duration
    }
  }, 1000)
}

const initializeSwipper = () => {
  const swiperEl = document.getElementById('swiper')
  if (swiperEl) {
    const swiper = new Swiper('.mySwiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
}

const initializeMemoryPage = () => {
  window.location.hash = '#memory'
  mainWrapper.innerHTML = memory

  var cards = document.querySelectorAll('.card')
  cartFliper(cards)

  var display = document.querySelector('#time')
  startTimer(300, display)


}

const initializeQuizPage = () => {
  window.location.hash = '#quiz-check'
  mainWrapper.innerHTML = quizCheck
}

const initialFormPage = () => {
  window.location.hash = '#form'
  mainWrapper.innerHTML = form
}

const initializeSwiperQuizPage = () => {
  window.location.hash = '#swiper-quiz'
  mainWrapper.innerHTML = swiperQuiz

  initializeSwipper()
}

const initialResultPage = () => {
  window.location.hash = '#result'
  mainWrapper.innerHTML = result
}

const initialPage = () => {
  window.location.hash = '#index'
  mainWrapper.innerHTML = index
}

// Function to catch hastag in url and print content
const loadInitialPage = () => {
  const hash = window.location.hash

  switch (hash) {
    case '#memory':
      initializeMemoryPage()
      return
    case '#quiz-check':
      initializeQuizPage()
      return
    case '#swiper-quiz':
      initializeSwiperQuizPage()
      return
    case '#form':
      initialFormPage()
      return
    case '#result':
      initialResultPage()
      return
    default:
      initialPage()
  }
}

window.onload = loadInitialPage()

// On click goes to page
const onButtonClick = (pageId) => {
  switch (pageId) {
    case 'memory':
      initializeMemoryPage()
      return
    case 'quiz-check':
      initializeQuizPage()
      return
    case 'swiper-quiz':
      initializeSwiperQuizPage()
      return
    case 'form':
      initialFormPage()
      return
    case 'result':
     initialResultPage()
     return
    default:
      initialPage()
  }
}
// On click check if exist id="btn" and go to page whit his attribute
document.addEventListener('click', function (e) {
  if (e.target && e.target.id == 'btn') {
    const pageId = e.target.getAttribute('data-attr');
    onButtonClick(pageId)
  }
})
