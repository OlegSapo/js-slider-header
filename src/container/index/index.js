class Slider {
  static #content = null //посилання на контент картинки
  static #left = null //посилання на кнопку "влево"
  static #right = null //посилання на кнопку "вправо"
  static #count = 1 //посилання на лічильник картинок
  static #max = null //посилання на максим кількість картинок слайдера

  static init = () => {
    this.#content = document.querySelector(
      '.slider__content',
    )
    this.#left = document.querySelector(
      '.slider__button--left',
    )
    this.#right = document.querySelector(
      '.slider__button--right',
    )
    this.#max = this.#content.childElementCount
    this.#left.onclick = () => this.#slide('left')
    this.#right.onclick = () => this.#slide('right')
  }

  static #slide = (side) => {
    const offsetWidth = this.#content.offsetWidth
    const scrollLeft = this.#content.scrollLeft
    const scrollWidth = this.#content.scrollWidth

    let scroll = 0
    if (side === 'left') {
      if (this.#count === 1 || scrollLeft === 0) {
        this.#count = this.#max
        scroll = (this.#count - 1) * offsetWidth
      } else {
        this.#count -= 1
        scroll = (this.#count - 1) * offsetWidth
      }
    }
    if (side === 'right') {
      if (
        this.#count === this.#max ||
        scrollLeft === scrollWidth - offsetWidth
      ) {
        this.#count = 1
        scroll = 0
      } else {
        this.#count += 1
        scroll = (this.#count - 1) * offsetWidth
      }
    }

    this.#content.scrollTo({
      top: 0,
      left: scroll,
      behavior: 'smooth',
    })
  }
}

Slider.init()
// window.slider = Slider

class Header {
  static #height = null //посилання на висоту випадаючого меню
  static #wrapper = null //посилання на елемент wrapper
  static #button = null //посилання на елемент button хедера
  static #isOpen = false //признак закритого або відкритого випадаючого вікна браузера

  static init = () => {
    this.#height = document.querySelector('.header__bottom',).offsetHeight
    this.#wrapper = document.querySelector('.header__wrapper',)
    this.#button = document.querySelector('.header__button',)

    this.#button.onclick = this.#toggle //реакція на клик по кнопці меню
  }

  static #toggle = () => {
    if (this.#isOpen) {
      this.#button.classList.replace('header__button--close', 'header__button--open')
      this.#wrapper.style.height = 0
    } else {
      this.#button.classList.replace('header__button--open', 'header__button--close')
      this.#wrapper.style.height = `${this.#height}px`
    }

    this.#isOpen = !this.#isOpen //перемикаємо признак відкриття вікна меню
  }
}

Header.init()
