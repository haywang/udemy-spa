<template>
  <section
    aria-label="Marketing notification from Udemy"
    data-testid="smart-bar-container"
  >
    <div
      class="smart-bar-module--smart-bar--dotFm smart-bar-module--smart-bar--yellow--UZ-T9"
      data-testid="smart-bar"
    >
      <div class="smart-bar-module--smart-bar__content_wrapper--PRZqf">
        <div class="smart-bar-module--smart-bar__content--ocOCr">
          <div
            class="ud-text-sm smart-bar-module--basic-bar-content--eTuvA"
            data-testid="basic-with-timer"
          >
            <span role="presentation" data-testid="smart-bar-copy"
              ><span
                class="ud-text-bold ud-text-with-links smart-bar-module--smart-bar__title--1xYZY"
                data-purpose="smart-bar-title"
                data-testid="smart-bar-title"
                >Learning can take you places</span
              ><span
                class="ud-text-with-links"
                role="presentation"
                data-purpose="smart-bar-subtitle"
                data-testid="smart-bar-subtitle"
                >| Start moving toward your goals with courses from
                $13.99.</span
              ></span
            >
            <span
              class="ud-heading-sm smart-bar-module--smart-bar-timer--2yTbH"
              data-testid="smart-bar-timer"
              data-client-side-render-only="CSR: component"
              ><span data-testid="timer-x-days-left">1 day left!</span></span
            >
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          class="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-medium smart-bar-module--smart-bar__close--sAz1T"
          data-testid="smart-bar-hide"
        >
          <svg
            aria-label="Close"
            role="img"
            focusable="false"
            class="ud-icon ud-icon-small"
          >
            <use xlink:href="#icon-close"></use>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
@import '~/assets/css/common.css';
.smart-bar-module--smart-bar--dotFm {
  color: #303141;
  display: flex;
  position: relative;
  z-index: 1010;
}
.smart-bar-module--smart-bar--dotFm a:hover {
  color: #4a4c64;
}
.smart-bar-module--smart-bar--dotFm u {
  text-decoration: underline;
  text-underline-offset: 0.4rem;
  text-decoration-color: #af72fd;
}
.smart-bar-module--smart-bar--dotFm a {
  color: #303141;
  font-weight: inherit;
}
.smart-bar-module--basic-bar-content--eTuvA {
  text-align: left;
}
@media (min-width: 43.8125rem) {
  .smart-bar-module--basic-bar-content--eTuvA,
  .udlite-in-udheavy .smart-bar-module--basic-bar-content--eTuvA {
    font-size: 1.6rem;
  }
  .smart-bar-module--smart-bar-timer--2yTbH,
  .udlite-in-udheavy .smart-bar-module--smart-bar-timer--2yTbH {
    font-size: clamp(
      1.65rem,
      calc(1.65rem + (1.8 - 1.65) * calc((100vw - 36rem) / (144 - 36))),
      1.8rem
    );
  }
}
@media (min-width: 61.3125rem) {
  .smart-bar-module--basic-bar-content--eTuvA {
    text-align: center;
  }
}
@media (min-width: 37.5625rem) {
  .smart-bar-module--smart-bar-timer--2yTbH {
    display: block;
  }
}
.smart-bar-module--smart-bar--mobile--ltGs8 {
  flex-direction: column;
}
.smart-bar-module--smart-bar__close--sAz1T:hover {
  color: #4a4c64;
}
.smart-bar-module--smart-bar__close--sAz1T {
  color: #303141;
  margin: 0.8rem;
}
.smart-bar-module--smart-bar--dotFm
  .smart-bar-module--smart-bar__close_hidden--KltAd {
  opacity: 0;
  pointer-events: none;
  transition: opacity 250ms ease-in-out;
}
.smart-bar-module--smart-bar--dotFm
  .smart-bar-module--smart-bar__close_wrapper--aa1X0 {
  display: flex;
}
.smart-bar-module--smart-bar__content_wrapper--PRZqf {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.smart-bar-module--smart-bar__content_wrapper--mobile--l3hsR {
  align-items: flex-start;
}
.smart-bar-module--smart-bar__content--with-button--SrKej {
  margin-left: 4.8rem;
}
.smart-bar-module--smart-bar__content--mobile--1H9Az {
  flex-grow: 1;
}
.smart-bar-module--smart-bar__content--mobile--1H9Az {
  padding-left: 1.6rem;
}
.smart-bar-module--smart-bar__content_wrapper--mobile--l3hsR {
  align-items: flex-start;
}
.smart-bar-module--smart-bar__content--with-button--SrKej {
  margin-left: 4.8rem;
}
.smart-bar-module--smart-bar__content--mobile--1H9Az {
  flex-grow: 1;
}
.smart-bar-module--smart-bar__content--ocOCr {
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  padding-left: 2.4rem;
}
.smart-bar-module--smart-bar__cta-button--e3RdV {
  flex-shrink: 0;
  margin-left: 1.6rem;
  margin-right: 1.6rem;
}
.smart-bar-module--smart-bar__cta-button-wrapper--WVX4N {
  margin-left: 1.6rem;
}
.smart-bar-module--smart-bar__cta-button-wrapper--WVX4N a,
.smart-bar-module--smart-bar__cta-button-wrapper--WVX4N a:hover {
  color: #fff;
  font-weight: bold;
}
.smart-bar-module--smart-bar__cta-button-wrapper--mobile--8BtWo {
  flex-grow: 1;
  margin-left: 1.6rem;
  margin-right: 1.6rem;
  margin-bottom: 1.6rem;
}
.smart-bar-module--smart-bar__cta-button-wrapper--mobile--8BtWo
  .smart-bar-module--smart-bar__cta-button--e3RdV {
  width: 100%;
}
.smart-bar-module--smart-bar__title--1xYZY {
  margin-right: 0.4rem;
}
.smart-bar-module--smart-bar--sticky--ysdPI {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1030;
}
.smart-bar-module--smart-bar-spacer--JTyvD {
  visibility: hidden;
  opacity: 0;
}
.smart-bar-module--smart-bar--yellow--UZ-T9 {
  background: #c2e9eb;
}
.smart-bar-module--smart-bar--yellow_purple---HuhG {
  background: #c2e9eb;
}
.smart-bar-module--smart-bar--orange--ROyeD {
  background: #ffcc80;
}
.smart-bar-module--smart-bar--teal--sb6dA {
  background: #5022c3;
}
.smart-bar-module--smart-bar--teal--sb6dA
  .smart-bar-module--smart-bar__cta-button-wrapper--WVX4N
  a,
.smart-bar-module--smart-bar--teal--sb6dA
  .smart-bar-module--smart-bar__cta-button-wrapper--WVX4N
  a:hover {
  color: #303141;
}
.smart-bar-module--smart-bar--purple--eTNbL {
  background: #5022c3;
}
.smart-bar-module--smart-bar--black--72dqn {
  color: #fff;
  background: #1d1e27;
}
.smart-bar-module--smart-bar--teal--sb6dA,
.smart-bar-module--smart-bar--purple--eTNbL,
.smart-bar-module--smart-bar--teal--sb6dA a,
.smart-bar-module--smart-bar--purple--eTNbL a,
.smart-bar-module--smart-bar--teal--sb6dA
  .smart-bar-module--smart-bar__close--sAz1T,
.smart-bar-module--smart-bar--purple--eTNbL
  .smart-bar-module--smart-bar__close--sAz1T {
  color: #fff;
}
.smart-bar-module--smart-bar--teal--sb6dA a:hover,
.smart-bar-module--smart-bar--purple--eTNbL a:hover,
.smart-bar-module--smart-bar--teal--sb6dA
  .smart-bar-module--smart-bar__close--sAz1T:hover,
.smart-bar-module--smart-bar--purple--eTNbL
  .smart-bar-module--smart-bar__close--sAz1T:hover {
  color: #e0e0e0;
}
</style>
