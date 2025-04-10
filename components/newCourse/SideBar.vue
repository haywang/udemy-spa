<template>
  <div class="sidebar-container-position-manager">
    <div
      class="course-landing-page_sidebar-container"
      data-purpose="sidebar-container"
    >
      <div
        class="smart-bar-spacer smart-bar-module--smart-bar-spacer--JTyvD"
        data-testid="smart-bar-spacer"
      ></div>
      <div class="sidebar-container--content--V-bFw">
        <div class="sidebar-container--content-group---4Fh5">
          <div class="sidebar-container--introduction-asset--CD5Yt">
            <div class="intro-asset--wrapper--yDCdR">
              <div
                class="intro-asset--asset--uXC50"
                data-purpose="introduction-asset"
              >
                <button
                  type="button"
                  class="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm ud-custom-focus-visible intro-asset--placeholder--5HTOK"
                  aria-label="Play course preview"
                >
                  <span class="intro-asset--img-aspect--3gluH"
                    ><img
                      src="data:image/jpeg;base64,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"
                      alt=""
                      style="
                        background-size: cover;
                        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8zgxGjERaUxaRhhcYosVFGQk2axii/NjPP/FDzxuu9mSRbZTtFiY1fC/4CtspaKSIlO2VNbNBz3oyaSebczj2f+733nO49F+yRtKIaVT5QM1k9PB7wzM7Ne5zP1NBGE63YooqhjYRCQSraxx02K970WLUqn/vX6pfihgK2WuFhRdOzwhPCwdWsZvG2cIuSii4Jnwp363JB4VtLjxX5xeJkkb8s1iPhUbA3CnuSZRwrYyWlq8LycrxqOqf83sd6iSuemZmW2CHejkGYcQJ4mGSMUQboY0jmAXrw0ysrKuT7CvlTrEiuIrPGGjrLJEmRpVvUnFSPS0yIHpeRZs3q/9++Gol+f7G6KwDVT6b51gnOLfjOm+bnoWl+H4HjES4ypfyVAxh8Fz1f0rz74N6As8uSFtuB801ofdCierQgOcTtiQS8nkDDHDRfQ91CsWe/+xzfQ2RdvuoKdvegS867F38AGNNnwvJxPYUAAAAJcEhZcwAACxMAAAsTAQCanBgAAALtSURBVHic7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Bh0SQABe+rNwwAAAABJRU5ErkJggg==');
                      "
                      sizes="(min-width: 1080px) 240px,
                (min-width: 43.8125rem) 600px,
                100vw"
                      width="240"
                      height="135"
                      loading="eager" /></span
                  ><span
                    class="intro-asset--overlay--kOavR intro-asset--gradient--g8COd"
                  ></span
                  ><span class="ud-play-overlay"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      class="ud-icon ud-icon-xxlarge ud-focus-visible-target"
                    >
                      <use xlink:href="#icon-play-overlay"></use></svg></span
                  ><span
                    class="ud-heading-md intro-asset--overlay--kOavR intro-asset--text--tUkoV"
                    >Preview this course</span
                  >
                </button>
              </div>
            </div>
          </div>
          <div
            class="sidebar-container--purchase-section--XWCM-"
            data-client-side-render-only="CSR: purchase_section"
          >
            <div
              class="purchase-section-container--purchase-section-container--mgZp7"
            >
              <div
                class="generic-purchase-section--main-cta-container--LGsJD"
                data-purpose="purchase-section"
              >
                <div class="generic-purchase-section--buy-box-main--W9rN0">
                  <div class="buy-box--buy-box--KeMlj" data-purpose="buy-box">
                    <div class="buy-box--buy-box-item--wT5bJ"></div>
                    <div class="buy-box--buy-box-item--wT5bJ">
                      <div>
                        <div
                          class="base-price-text-module--container--Sfv-5 ud-clp-price-text"
                          data-purpose="price-text-container"
                        >
                          <div
                            class="base-price-text-module--price-part---xQlz ud-clp-discount-price ud-heading-xl"
                            data-purpose="course-price-text"
                          >
                            <span class="ud-sr-only">Current price</span
                            ><span><span>$13.99</span></span>
                          </div>
                          <div
                            class="base-price-text-module--price-part---xQlz base-price-text-module--original-price--C6BJt ud-clp-list-price ud-text-sm"
                            data-purpose="original-price-container"
                          >
                            <div data-purpose="course-old-price-text">
                              <span class="ud-sr-only">Original Price</span
                              ><span
                                ><s><span>$19.99</span></s></span
                              >
                            </div>
                          </div>
                          <div
                            class="base-price-text-module--price-part---xQlz ud-clp-percent-discount ud-text-sm"
                            data-purpose="discount-percentage"
                          >
                            <span class="ud-sr-only">Discount</span
                            ><span>30% off</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="buy-box--buy-box-item--wT5bJ buy-box--discount-expiration--mv7OV"
                    >
                      <div
                        class="discount-expiration--discount-expiration--iSt-e"
                        data-purpose="discount-expiration"
                      >
                        <svg
                          aria-label="alarm"
                          role="img"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-icon-color-neutral discount-expiration--icon--kIpgu"
                        >
                          <use xlink:href="#icon-alarm"></use></svg
                        ><span
                          class="ud-text-sm"
                          data-purpose="safely-set-inner-html:discount-expiration:expiration-text"
                          ><b>1 day</b> left at this price!</span
                        >
                      </div>
                    </div>
                    <div
                      class="buy-box--buy-box-item--wT5bJ buy-box--add-to-cart-button-wrapper--focmP"
                    >
                      <div data-purpose="add-to-cart">
                        <button
                          type="button"
                          data-testid="add-to-cart-button"
                          class="ud-btn ud-btn-large ud-btn-primary ud-heading-md add-to-cart"
                          style="width: 100%"
                        >
                          Add to cart
                        </button>
                        <div
                          role="status"
                          class="ud-sr-only"
                          data-purpose="screen-reader-message"
                        ></div>
                      </div>
                    </div>
                    <div
                      class="buy-button buy-box--buy-box-item--wT5bJ buy-box--buy-button--m373K"
                    >
                      <div>
                        <button
                          type="button"
                          data-purpose="buy-this-course-button"
                          class="ud-btn ud-btn-large ud-btn-secondary ud-heading-md styles--btn--express-checkout--G4Ja4"
                        >
                          <span class="ud-btn-label">Buy now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="generic-purchase-section--local-incentive--4i-xF">
                  <div
                    data-purpose="money-back-guarantee"
                    class="dark-bg-text money-back-guarantee--money-back-guarantee--cDdpL"
                  >
                    <span class="money-back">30-Day Money-Back Guarantee</span>
                  </div>
                </div>
                <div
                  class="generic-purchase-section--available-coupons--F1xik"
                ></div>
                <div class="generic-purchase-section--local-incentive--4i-xF">
                  <div class="incentives--hide-on-tablet--LCtTD">
                    <div class="incentives--incentives-container--mJpmM">
                      <h2
                        class="ud-heading-md incentives--header--yVAQy"
                        data-purpose="header"
                      >
                        This course includes:
                      </h2>
                      <ul class="ud-unstyled-list ud-block-list incentive-list">
                        <li>
                          <div
                            class="ud-block-list-item ud-block-list-item-small ud-block-list-item-tight ud-block-list-item-neutral ud-text-sm"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              class="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-block-list-item-icon"
                            >
                              <use xlink:href="#icon-video"></use>
                            </svg>
                            <div class="ud-block-list-item-content">
                              <span data-purpose="video-content-length"
                                >2 hours on-demand video</span
                              >
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            class="ud-block-list-item ud-block-list-item-small ud-block-list-item-tight ud-block-list-item-neutral ud-text-sm"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              class="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-block-list-item-icon"
                            >
                              <use xlink:href="#icon-article"></use>
                            </svg>
                            <div class="ud-block-list-item-content">
                              <span data-purpose="num-articles">1 article</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            class="ud-block-list-item ud-block-list-item-small ud-block-list-item-tight ud-block-list-item-neutral ud-text-sm"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              class="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-block-list-item-icon"
                            >
                              <use
                                xlink:href="#icon-downloadable-resource"
                              ></use>
                            </svg>
                            <div class="ud-block-list-item-content">
                              <span data-purpose="num-additional-resources"
                                >2 downloadable resources</span
                              >
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            class="ud-block-list-item ud-block-list-item-small ud-block-list-item-tight ud-block-list-item-neutral ud-text-sm"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              class="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-block-list-item-icon"
                            >
                              <use xlink:href="#icon-mobile"></use>
                            </svg>
                            <div class="ud-block-list-item-content">
                              <span data-purpose="devices-access-incentive"
                                >Access on mobile and TV</span
                              >
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            class="ud-block-list-item ud-block-list-item-small ud-block-list-item-tight ud-block-list-item-neutral ud-text-sm"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              class="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-block-list-item-icon"
                            >
                              <use xlink:href="#icon-lifetime"></use>
                            </svg>
                            <div class="ud-block-list-item-content">
                              <span data-purpose="has-lifetime-access"
                                >Full lifetime access</span
                              >
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            class="ud-block-list-item ud-block-list-item-small ud-block-list-item-tight ud-block-list-item-neutral ud-text-sm"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              class="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-block-list-item-icon"
                            >
                              <use xlink:href="#icon-trophy"></use>
                            </svg>
                            <div class="ud-block-list-item-content">
                              <span data-purpose="incentive-certificate"
                                >Certificate of completion</span
                              >
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="generic-purchase-section--ctas--SQfIL">
                  <div
                    class="generic-purchase-section--cta--lphh7"
                    data-client-side-render-only="CSR: course_actions"
                  >
                    <div class="generic-purchase-section--cta-multiple----iAg">
                      <button
                        type="button"
                        data-purpose="social-share-button"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm ud-link-underline ud-link-neutral"
                        aria-label="Share this course"
                      >
                        <span>Share</span></button
                      ><a
                        aria-disabled="false"
                        href="https://www.udemy.com/join/signup-popup/?locale=en_US&amp;response_type=html&amp;return_link=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcome-comprare-bitcoin-con-coinbase-tutorial-coinbase-come-funziona-ita%2F%3FcouponCode%3DST13MT80425G3&amp;source=course_landing_page&amp;ref=&amp;next=%2Fgift%2Fcome-comprare-bitcoin-con-coinbase-tutorial-coinbase-come-funziona-ita%2F%3FcouponCode%3DST13MT80425G3"
                        data-purpose="gift-course"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm ud-link-underline ud-link-neutral"
                        ><span class="ud-btn-label">Gift this course</span></a
                      ><button
                        type="submit"
                        data-purpose="no-coupon-button"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm ud-link-underline ud-link-neutral"
                      >
                        <span class="ud-btn-label">Apply Coupon</span>
                      </button>
                    </div>
                    <div>
                      <div
                        class="redeem-coupon--add-coupon-button--1SH5F"
                      ></div>
                      <div class="redeem-coupon--codes--ZsK6n">
                        <div
                          data-purpose="code"
                          class="redeem-coupon--code--rtYw8"
                        >
                          <div class="redeem-coupon--code-text--ZuJBa">
                            <ul>
                              <li data-purpose="code-text">
                                <b>ST13MT80425G3</b> is applied
                              </li>
                              <li>Udemy coupon</li>
                            </ul>
                          </div>
                          <button
                            type="button"
                            class="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-medium redeem-coupon--code-icon-button--nwf7w"
                          >
                            <svg
                              aria-label="Remove coupon"
                              role="img"
                              focusable="false"
                              class="ud-icon ud-icon-small ud-icon-color-info"
                            >
                              <use xlink:href="#icon-close"></use>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        class="coupon-form--coupon-form-group--BT1jw ud-form-group"
                      >
                        <label
                          class="ud-sr-only ud-form-label ud-heading-sm"
                          for="u126-form-group--67"
                          >Apply coupon</label
                        >
                        <form
                          data-purpose="coupon-form"
                          class="text-input-form-module--text-input-form--tITHD"
                        >
                          <input
                            aria-invalid="false"
                            data-purpose="coupon-input"
                            placeholder="Enter Coupon"
                            id="u126-form-group--67"
                            type="text"
                            class="ud-text-input ud-text-input-medium ud-text-sm"
                            value=""
                          /><button
                            type="submit"
                            data-purpose="coupon-submit"
                            class="ud-btn ud-btn-medium ud-btn-primary ud-heading-sm"
                          >
                            <span class="ud-btn-label">Apply</span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar-container--content-group---4Fh5">
          <div
            class="sidebar-container--buy-for-team--Si42W"
            data-client-side-render-only="CSR: ub_advertisement"
          >
            <div>
              <h2 class="ud-heading-lg buy-for-team--title--4-Aw6">
                Training 2 or more people?
              </h2>
              <p class="ud-text-sm buy-for-team--content--p8nf5">
                Get your team access to 27,000+ top Udemy courses anytime,
                anywhere.
              </p>
              <a
                data-purpose="ufb-link-button"
                href="https://www.udemy.com/udemy-business/?locale=en_US&amp;path=request-demo-mx%2F&amp;ref=marketplace_control_finance-and-accounting&amp;utm_campaign=mx-hooks&amp;utm_content=clp&amp;utm_medium=referral&amp;utm_source=marketplace&amp;utm_term="
                target="_blank"
                class="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm buy-for-team--button--NTJfE"
                ><span class="ud-btn-label">Try Udemy Business</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="course-landing-page_slider-menu-container"
      data-purpose="slider-menu-container"
    >
      <span class="slider-menu--mark--fWNpb"></span>
      <div
        class="slider-menu__free-clp-overrides slider-menu--slider-menu--7jvxj"
        data-purpose="slider-menu"
        data-testid="slider-menu"
      >
        <div
          class="smart-bar-spacer smart-bar-module--smart-bar-spacer--JTyvD"
          data-testid="smart-bar-spacer"
        ></div>
        <div class="slider-menu--slider-menu-container--uGXWY">
          <div class="lead--lead--OrJ81">
            <div class="lead--title--OD3ig" data-purpose="title">
              Coinbase Come Comprare Bitcoin e Guadagnare™?
            </div>
            <div class="lead--info--k4fK9">
              <a
                href="#reviews"
                class="ud-text-sm lead--rating--qzUvS"
                data-purpose="rating"
                ><span
                  class="star-rating-module--star-wrapper--i1cJH star-rating-module--medium--Lpe62 star-rating-module--numeric--qcZmU star-rating-module--dark-background--jCtxH"
                  ><span class="ud-sr-only">Rating: 4.7 out of 5</span
                  ><span
                    class="ud-heading-sm star-rating-module--rating-number--2-qA2"
                    aria-hidden="true"
                    data-purpose="rating-number"
                    >4.7</span
                  ><svg
                    aria-hidden="true"
                    width="100%"
                    height="100%"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="u126-star-rating-mask--20"
                      data-purpose="star-rating-mask"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="white"
                      ></rect>
                    </mask>
                    <g
                      class="star-rating-module--star-filled--FgjdR"
                      mask="url(#u126-star-rating-mask--20)"
                      data-purpose="star-filled"
                    >
                      <use
                        xlink:href="#icon-rating-star"
                        width="14"
                        height="14"
                        x="0"
                      ></use>
                    </g>
                    <g
                      fill="transparent"
                      class="star-rating-module--star-bordered--A4SZK"
                      stroke-width="80"
                      data-purpose="star-bordered"
                    >
                      <use
                        xlink:href="#icon-rating-star"
                        width="12"
                        height="12"
                        x="1"
                        y="1"
                      ></use>
                    </g></svg
                ></span>
                <span>(50 ratings)</span></a
              >
              <div class="ud-text-sm" data-purpose="enrollment">
                <span>1,127 students</span>
              </div>
            </div>
          </div>
          <div
            class="slider-menu--show-transactional-cta-container--82S2m"
            data-purpose="transactional-cta-container"
          >
            <div class="slider-menu--transactional-cta-ctas--uL9-W">
              <div class="slider-menu--price-text-container--y9MV-">
                <div>
                  <div
                    class="base-price-text-module--container--Sfv-5 slider-menu--price-text--5nJ1x ud-clp-price-text"
                    data-purpose="price-text-container"
                  >
                    <div
                      class="base-price-text-module--price-part---xQlz slider-menu-discount-price ud-clp-discount-price ud-heading-lg"
                      data-purpose="course-price-text"
                    >
                      <span class="ud-sr-only">Current price</span
                      ><span><span>$13.99</span></span>
                    </div>
                    <div
                      class="base-price-text-module--price-part---xQlz base-price-text-module--original-price--C6BJt slider-menu-list-price ud-clp-list-price ud-text-sm"
                      data-purpose="original-price-container"
                    >
                      <div data-purpose="course-old-price-text">
                        <span class="ud-sr-only">Original Price</span
                        ><span
                          ><s><span>$19.99</span></s></span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slider-menu--cta-button--xYnRS">
                <div data-purpose="add-to-cart">
                  <button
                    type="button"
                    data-testid="add-to-cart-button"
                    class="ud-btn ud-btn-large ud-btn-brand ud-heading-md add-to-cart"
                    style="width: 100%"
                  >
                    Add to cart
                  </button>
                  <div
                    role="status"
                    class="ud-sr-only"
                    data-purpose="screen-reader-message"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
@import '~/assets/css/common.css';
.sidebar-container--content--V-bFw {
  width: 34rem;
  z-index: 1;
  border-bottom: 1px solid #d1d2e0;
  box-sizing: border-box;
  box-shadow:
    0 2px 4px rgba(6, 17, 118, 0.08),
    0 4px 12px rgba(6, 17, 118, 0.08);
  background-color: #fff;
}
.sidebar-container--content--V-bFw
  > .sidebar-container--content-group---4Fh5:not(:last-child) {
  border-bottom: 1px solid #d1d2e0;
}

.buy-box--purchased-text-banner--IJ2Vg {
  margin-bottom: 2.4rem;
}
.buy-box--buy-box--KeMlj .buy-box--buy-box-item--wT5bJ:not(:empty) {
  margin-bottom: 0.8rem;
}
.buy-box--buy-box--KeMlj
  .buy-box--buy-box-item--wT5bJ.buy-box--add-to-cart-button-wrapper--focmP {
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.buy-box--buy-box--KeMlj
  .buy-box--buy-box-item--wT5bJ.buy-box--add-to-cart-button-wrapper--focmP
  [data-purpose='add-to-cart'] {
  flex: 1;
}
@media (min-width: 67.5em) {
  .buy-box--buy-box--KeMlj
    .buy-box--buy-box-item--wT5bJ.buy-box--buy-button--m373K {
    display: block;
    margin: 0.8rem 0;
  }
}
.buy-box--buy-box--KeMlj
  .buy-box--buy-box-item--wT5bJ.buy-box--discount-expiration--mv7OV {
  margin-top: -0.4rem;
}

.slider-menu--slider-menu--7jvxj {
  background-color: #fff;
  box-shadow:
    0 -2px 4px rgba(6, 17, 118, 0.08),
    0 -4px 12px rgba(6, 17, 118, 0.08);
  overflow: hidden;
  padding: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
  transform: translateY(0);
  transition: transform 250ms cubic-bezier(0, 0, 0.38, 0.9);
}
.slider-menu--slider-menu-loader--gEpHH {
  display: flex;
  flex-direction: column;
}
.slider-menu--slider-menu--7jvxj .smart-bar-spacer {
  display: none;
}
.slider-menu--mark--fWNpb {
  position: relative;
  top: 0;
}
.slider-menu--slider-menu-container--uGXWY {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 6.4rem;
  height: 100%;
  padding: 0.8rem 1.6rem;
}
.slider-menu--slider-menu-container--uGXWY:after {
  top: 0 !important;
}
.slider-menu--price-text-container--y9MV- {
  flex: 0;
}
.slider-menu--price-text--5nJ1x {
  justify-content: flex-end;
  margin-right: 1.6rem;
}
.slider-menu--price-text--5nJ1x .slider-menu-discount-price {
  margin-right: 0;
}
.slider-menu--cta-button--xYnRS {
  flex: 1;
}
.slider-menu--cta-button--xYnRS a + div {
  font-size: 1.2rem;
}
@media (max-width: 43.75rem) {
  .slider-menu--cta-button--xYnRS a + div {
    color: #595c73;
  }
}
.slider-menu--cta-container--rnlYQ {
  justify-content: center;
  display: flex;
  flex: 1;
}
.slider-menu--loading-cta-container--2NV7C {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
@media (max-width: 43.75rem) {
  .slider-menu--loading-cta-container--2NV7C {
    width: 100%;
  }
}
.slider-menu--show-transactional-cta-container--82S2m {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
}
@media (max-width: 43.75rem) {
  .slider-menu--show-transactional-cta-container--82S2m {
    width: 100%;
  }
}
.slider-menu--show-transactional-cta-container--82S2m
  .slider-menu--transactional-cta-ctas--uL9-W {
  align-items: center;
  display: flex;
  justify-content: flex-end;
}
.slider-menu--moneyback-guarantee-text--zVncD {
  font-size: 1.2rem;
  color: #595c73;
  margin-top: 0;
}
.slider-menu--show-subscription-cta--vd8d8,
.slider-menu--show-pp-subscription-cta--NgjIa {
  flex: 1;
  text-align: center;
}
.slider-menu--subscription-button--t8Gg8,
.slider-menu--pp-subscription-button--jvops {
  display: flex;
}
.slider-menu--hide-transactional-cta-container--JKVIW,
.slider-menu--hide-subscription-cta--Ss8Wo,
.slider-menu--hide-pp-subscription-cta--wb7Mu {
  display: none;
}
@media (min-width: 37.5625rem) {
  .slider-menu--slider-menu--7jvxj {
    color: #fff;
    background-color: #1d1e27;
    box-shadow:
      0 -2px 4px rgba(6, 17, 118, 0.08),
      0 -4px 12px rgba(6, 17, 118, 0.16);
    padding: 0;
  }
  .slider-menu--price-text--5nJ1x {
    color: #fff;
  }
  .slider-menu--price-text--5nJ1x .slider-menu-list-price {
    color: #d1d2e0;
  }
  .slider-menu--cta-button--xYnRS {
    flex: 0;
  }
  .slider-menu--cta-button--xYnRS .ud-btn {
    --ud-btn-background-color: var(--color-knockout);
    --ud-btn-focus-background-color: var(--color-gray-150);
    --ud-btn-focus-color: #303141;
    --ud-btn-color: #303141;
  }
  .slider-menu--cta-button--xYnRS .slider-menu--primary-hook--Jf7KU {
    width: auto;
  }
  .slider-menu--cta-button--xYnRS.slider-menu--subscription-button--t8Gg8 {
    flex: none;
  }
  .slider-menu--cta-button--xYnRS.slider-menu--pp-subscription-button--jvops {
    flex: none;
    border: 1px solid #fff;
  }
  .slider-menu--subscription-button--t8Gg8,
  .slider-menu--pp-subscription-button--jvops {
    flex: none;
  }
}
@media (min-width: 67.5em) {
  .slider-menu--slider-menu--7jvxj .smart-bar-spacer {
    display: block;
  }
  .slider-menu--slider-menu--7jvxj {
    box-shadow:
      0 2px 4px rgba(6, 17, 118, 0.08),
      0 4px 12px rgba(6, 17, 118, 0.16);
    top: 0;
    bottom: auto;
    padding: 0;
  }
  .slider-menu--cta-button--xYnRS {
    display: none;
  }
  .slider-menu--price-text-container--y9MV- {
    display: none;
  }
  .slider-menu--show-transactional-cta-container--82S2m,
  .slider-menu--show-subscription-cta--vd8d8,
  .slider-menu--show-pp-subscription-cta--NgjIa {
    display: none;
  }
  .slider-menu--slider-menu-lower--9wS3V {
    transform: translateY(7.2rem);
  }
}

.lead--lead--OrJ81 {
  display: none;
}
@media (min-width: 37.5625rem) {
  .lead--lead--OrJ81 {
    display: block;
    margin-right: 1.6rem;
    flex: 1;
    min-width: 0;
  }
  .lead--title--OD3ig {
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    margin-bottom: 0.4rem;
  }
  .lead--info--k4fK9 {
    display: flex;
    line-height: 1.4rem;
  }
  .lead--badge--QYu-e {
    margin-right: 0.8rem;
  }
  .lead--rating--qzUvS {
    margin-right: 0.8rem;
  }
  a.lead--rating--qzUvS > span:nth-child(2) {
    color: #c0c4fc;
    text-decoration: underline;
  }
}

.intro-asset--asset--uXC50 {
  position: relative;
}
.intro-asset--asset--uXC50 .intro-asset--img-aspect--3gluH {
  display: block;
  padding-bottom: 56.25%;
  position: relative;
}
.intro-asset--asset--uXC50 .intro-asset--img-aspect--3gluH img,
.intro-asset--asset--uXC50 .intro-asset--overlay--kOavR {
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.intro-asset--asset--uXC50 .intro-asset--text--tUkoV {
  align-items: flex-end;
  display: flex;
  justify-content: center;
  padding-bottom: 1.6rem;
}
.intro-asset--asset--uXC50
  .intro-asset--text--tUkoV
  .intro-asset--preview-btn--20f7E {
  color: #303141;
}
.intro-asset--asset--uXC50 .intro-asset--padding-md--yl-Nk {
  padding-bottom: 2.4rem;
}
.intro-asset--asset--uXC50 .intro-asset--placeholder--5HTOK {
  border: 0;
  color: #fff;
  cursor: pointer;
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
}
.intro-asset--asset--uXC50
  .intro-asset--placeholder--5HTOK
  > :not(:first-child) {
  margin-left: 0;
}
.intro-asset--asset--uXC50 .intro-asset--gradient--g8COd {
  background: linear-gradient(
    180deg,
    rgba(29, 30, 39, 0) 0%,
    rgba(29, 30, 39, 0.9) 100%
  );
}
.intro-asset--wrapper--yDCdR {
  width: 100%;
}
.course-landing-page__introduction-asset__main .intro-asset--asset--uXC50 {
  max-width: 60rem;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 37.5625rem) {
  .course-landing-page__introduction-asset__main
    .intro-asset--img-aspect--3gluH
    img,
  .course-landing-page__introduction-asset__main .intro-asset--overlay--kOavR {
    border: 1px solid #303141;
  }
}
.course-landing-page_sidebar-container .intro-asset--asset--uXC50 {
  background-color: #fff;
}
.course-landing-page_sidebar-container .intro-asset--img-aspect--3gluH img,
.course-landing-page_sidebar-container .intro-asset--overlay--kOavR {
  border: 1px solid #d1d2e0;
}

.ud-play-overlay {
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.base-price-text-module--container--Sfv-5 {
  align-items: center;
  color: #303141;
  display: flex;
  flex-flow: row wrap;
}

.base-price-text-module--price-part---xQlz {
  line-height: 1;
  padding: 0.4rem 0;
  margin-right: 0.8rem;
  white-space: nowrap;
}
.base-price-text-module--price-part---xQlz:last-child {
  margin-right: 0;
}
.base-price-text-module--original-price--C6BJt {
  color: #595c73;
}

.sidebar-container--buy-for-team--Si42W,
.sidebar-container--purchase-section--XWCM- {
  padding: 2.4rem;
}

.discount-expiration--discount-expiration--iSt-e {
  display: flex;
  color: #d51c0f;
}
.discount-expiration--discount-expiration--iSt-e
  .discount-expiration--icon--kIpgu {
  margin: 0.1rem 0.4rem 0 0;
}
.paid-course-landing-page__container
  .discount-expiration--discount-expiration--iSt-e
  .discount-expiration--icon--kIpgu {
  color: #d51c0f;
}
@media (min-width: 67.5em) {
  .discount-expiration--discount-expiration--iSt-e {
    color: #d51c0f;
  }
  .paid-course-landing-page__container
    .discount-expiration--discount-expiration--iSt-e
    .discount-expiration--icon--kIpgu {
    color: #d51c0f;
  }
}

.buy-box--purchased-text-banner--IJ2Vg {
  margin-bottom: 2.4rem;
}
.buy-box--buy-box--KeMlj .buy-box--buy-box-item--wT5bJ:not(:empty) {
  margin-bottom: 0.8rem;
}
.buy-box--buy-box--KeMlj
  .buy-box--buy-box-item--wT5bJ.buy-box--add-to-cart-button-wrapper--focmP {
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.buy-box--buy-box--KeMlj
  .buy-box--buy-box-item--wT5bJ.buy-box--add-to-cart-button-wrapper--focmP
  [data-purpose='add-to-cart'] {
  flex: 1;
}
@media (min-width: 67.5em) {
  .buy-box--buy-box--KeMlj
    .buy-box--buy-box-item--wT5bJ.buy-box--buy-button--m373K {
    display: block;
    margin: 0.8rem 0;
  }
}
.buy-box--buy-box--KeMlj
  .buy-box--buy-box-item--wT5bJ.buy-box--discount-expiration--mv7OV {
  margin-top: -0.4rem;
}
@media (min-width: 61.3125rem) {
  .buy-box--free-course--zyJ-p .buy-box--buy-button--m373K {
    display: block !important;
  }
}

.styles--btn--express-checkout--G4Ja4 {
  white-space: nowrap;
  width: 100%;
}

.money-back {
  display: block;
  font-size: 1.2rem;
  margin-top: 1.6rem;
  text-align: center;
}

.ud-block-list .ud-block-list-item {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: auto;
  text-align: left;
  letter-spacing: normal;
  white-space: normal;
}
/* stylelint-disable-next-line no-descending-specificity */
.ud-block-list .ud-block-list-item {
  padding: 0.8rem 0;
}
.ud-block-list .ud-block-list-item-tight {
  padding: 0.4rem 0;
}
.ud-block-list .ud-block-list-item-loose {
  padding: 1.6rem 0;
}
.ud-block-list-item-small .ud-block-list-item-icon,
.ud-block-list-item-small .ud-block-list-item-content {
  min-height: 1.96rem;
}
.ud-block-list-item-large .ud-block-list-item-icon,
.ud-block-list-item-large .ud-block-list-item-content {
  min-height: 2.24rem;
}
.ud-block-list .ud-block-list-item-link {
  color: #6d28d2;
}
.ud-block-list .ud-block-list-item-neutral {
  color: #303141;
}
.ud-block-list-item-content {
  flex: 1;
  /* stylelint-disable-next-line unit-disallowed-list */
  min-width: 1px;
}
.ud-block-list-item-content-loading {
  background: var(--color-gray-200);
}
.ud-block-list-item-icon + .ud-block-list-item-content {
  margin-left: 1.6rem;
}
.ud-block-list-item-content + .ud-block-list-item-icon {
  margin-left: 0.8rem;
}
.ud-block-list-item-icon.ud-notification-counter {
  /* stylelint-disable-next-line unit-disallowed-list */
  margin-top: -0.25em;
}

.incentives--incentives-container--mJpmM {
  padding-top: 1.6rem;
}

.incentives--header--yVAQy {
  margin-bottom: 0.8rem;
}

.generic-purchase-section--main-cta-container--LGsJD
  .generic-purchase-section--cta--lphh7
  + .generic-purchase-section--cta--lphh7 {
  margin-top: 0.8rem;
}
.generic-purchase-section--main-cta-container--LGsJD
  > .generic-purchase-section--subscribe-team-modal-button--pW9Yq {
  margin-bottom: 3.2rem;
}
.generic-purchase-section--main-cta-container--LGsJD.generic-purchase-section--course-taking-variant---Bjv2 {
  display: block;
}
.generic-purchase-section--main-cta-container--LGsJD.generic-purchase-section--course-taking-variant---Bjv2.generic-purchase-section--on-main-content--jvN0M {
  margin-top: 3.2rem;
}
@media (min-width: 61.3125rem) {
  .generic-purchase-section--main-cta-container--LGsJD.generic-purchase-section--course-taking-variant---Bjv2.generic-purchase-section--on-main-content--jvN0M {
    display: none;
    margin-top: 0;
  }
}
.generic-purchase-section--main-cta-container--LGsJD
  > .generic-purchase-section--local-incentive--4i-xF
  + .generic-purchase-section--local-incentive--4i-xF {
  margin-top: -0.8rem;
}
.generic-purchase-section--main-cta-container--LGsJD
  .generic-purchase-section--cta-multiple----iAg {
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.6rem;
}
.generic-purchase-section--main-cta-container--LGsJD
  .generic-purchase-section--cta-multiple----iAg
  > * {
  flex: auto;
}
.generic-purchase-section--main-cta-container--LGsJD
  .generic-purchase-section--available-coupons--F1xik {
  flex-basis: 100%;
}
@media (min-width: 37.5625rem) and (max-width: 67.44em) {
  .generic-purchase-section--main-cta-container--LGsJD {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .generic-purchase-section--main-cta-container--LGsJD
    > .generic-purchase-section--buy-box-main--W9rN0,
  .generic-purchase-section--main-cta-container--LGsJD
    > .generic-purchase-section--local-incentive--4i-xF,
  .generic-purchase-section--main-cta-container--LGsJD
    > .generic-purchase-section--subscribe-team-modal-button--pW9Yq,
  .generic-purchase-section--main-cta-container--LGsJD
    > .generic-purchase-section--ctas--SQfIL {
    flex-basis: 100%;
  }
  .generic-purchase-section--main-cta-container--LGsJD
    .generic-purchase-section--ctas--SQfIL {
    display: flex;
    flex-wrap: wrap;
  }
  .generic-purchase-section--main-cta-container--LGsJD
    .generic-purchase-section--cta--lphh7 {
    flex: 1 1 50%;
    margin-top: 0.8rem;
  }
  .generic-purchase-section--main-cta-container--LGsJD
    .generic-purchase-section--cta--lphh7:nth-child(odd):not(:last-child) {
    padding-right: 0.4rem;
  }
  .generic-purchase-section--main-cta-container--LGsJD
    .generic-purchase-section--cta--lphh7:nth-child(even) {
    padding-left: 0.4rem;
  }
}
.generic-purchase-section--main-cta-container--LGsJD.generic-purchase-section--free-course--gmgaw
  .buy-button {
  display: block !important;
}
@media (min-width: 61.3125rem) {
  .generic-purchase-section--main-cta-container--LGsJD.generic-purchase-section--free-course--gmgaw
    .generic-purchase-section--cta-share--V0S4e {
    display: none;
  }
  .generic-purchase-section--main-cta-container--LGsJD
    > .generic-purchase-section--subscribe-team-modal-button--pW9Yq {
    margin-bottom: 3.2rem;
  }
}

.redeem-coupon--add-coupon-button--1SH5F {
  display: flex;
  flex-direction: column;
}
.redeem-coupon--title--2FKHW {
  margin-bottom: 1.6rem;
}
.redeem-coupon--codes--ZsK6n {
  color: #9194ac;
  margin-bottom: 0.8rem;
}
.redeem-coupon--codes--ZsK6n > div {
  border: 1px dashed #d1d2e0;
  display: flex;
  align-items: center;
}
.redeem-coupon--code--rtYw8 {
  margin-top: 0.8rem;
}
.redeem-coupon--code--rtYw8 .redeem-coupon--code-icon-button--nwf7w {
  height: 4.8rem;
}
.redeem-coupon--code--rtYw8 .redeem-coupon--code-text--ZuJBa {
  font-size: 1.4rem;
  float: left;
  height: 4.8rem;
  width: 100%;
  align-items: center;
  display: flex;
}
.redeem-coupon--code--rtYw8 .redeem-coupon--code-text--ZuJBa > ul {
  list-style: none;
  padding-left: inherit;
  font-size: 1.2rem;
}
.redeem-coupon--code--rtYw8 .redeem-coupon--code-text--ZuJBa > ul > li b {
  font-size: 1.4rem;
}
.redeem-coupon--code--rtYw8 .redeem-coupon--code-text--ZuJBa > ul > * + * {
  margin-top: 0;
}
.redeem-coupon--code-in-checkout-pane--jhrEf {
  color: #9194ac;
}

.text-input-form-module--clear-button--ezXf- {
  border-top: 1px solid #9194ac;
  border-bottom: 1px solid #9194ac;
}
.text-input-form-module--form-with-clear-button--P6jMw input {
  padding-right: 0;
}
.text-input-form-module--text-input-form--tITHD {
  display: flex;
}
.text-input-form-module--text-input-form--tITHD input {
  margin-right: 0.8rem;
  flex: 1;
}
.text-input-form-module--text-input-form--tITHD
  input:focus
  ~ .text-input-form-module--clear-button--ezXf- {
  border-color: #303141;
}

.buy-for-team--title--4-Aw6,
.buy-for-team--content--p8nf5 {
  margin-bottom: 0.8rem;
}
.buy-for-team--button--NTJfE {
  width: 100%;
}
</style>
