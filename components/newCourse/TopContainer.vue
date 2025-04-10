<template>
  <div data-testid="top-container" class="top-container dark-background">
    <div class="background-inner-position-container">
      <div class="">
        <div
          class="course-landing-page__main-content course-landing-page__topic-menu dark-background-inner-text-container"
        >
          <div
            class="topic-menu topic-menu--topic-menu--Cgol5 topic-menu-condensed ud-breadcrumb"
          >
            <a class="ud-heading-sm" href="/courses/finance-and-accounting/"
              >Finance &amp; Accounting</a
            ><svg
              aria-hidden="true"
              focusable="false"
              class="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-breadcrumb-icon"
            >
              <use xlink:href="#icon-next"></use></svg
            ><a
              class="ud-heading-sm"
              href="/courses/finance-and-accounting/cryptocurrency-and-blockchain/"
              >Cryptocurrency &amp; Blockchain</a
            ><svg
              aria-hidden="true"
              focusable="false"
              class="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-breadcrumb-icon"
            >
              <use xlink:href="#icon-next"></use></svg
            ><a class="ud-heading-sm" href="/topic/bitcoin/">Bitcoin</a>
          </div>
        </div>
        <div class="course-landing-page__introduction-asset__main" v-if="false">
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
          class="course-landing-page__main-content dark-background-inner-text-container"
        >
          <div class="ud-text-sm clp-lead">
            <h1
              class="ud-heading-xxl clp-lead__title clp-lead__title--small"
              data-purpose="lead-title"
            >
              Coinbase Come Comprare Bitcoin e Guadagnare™?
            </h1>
            <div
              class="ud-text-lg clp-lead__headline"
              data-purpose="lead-headline"
            >
              Come Acquistare e Guadagnare Facilmente Bitcoin Su Coinbase Corso
              Online Completo In Italiano
            </div>
            <div class="clp-lead__badge-ratings-enrollment">
              <div class="clp-lead__element-item clp-lead__element-item--row">
                <a
                  href="#reviews"
                  class="ud-btn ud-btn-medium ud-btn-link ud-heading-sm ud-text-sm styles--rating-wrapper--YkK4n"
                  data-purpose="rating"
                  ><span
                    class="star-rating-module--star-wrapper--i1cJH star-rating-module--medium--Lpe62 star-rating-module--dark-background--jCtxH"
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
                      viewBox="0 0 70 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="u126-star-rating-mask--3"
                        data-purpose="star-rating-mask"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="90%"
                          height="100%"
                          fill="white"
                        ></rect>
                      </mask>
                      <g
                        class="star-rating-module--star-filled--FgjdR"
                        mask="url(#u126-star-rating-mask--3)"
                        data-purpose="star-filled"
                      >
                        <use
                          xlink:href="#icon-rating-star"
                          width="14"
                          height="14"
                          x="0"
                        ></use>
                        <use
                          xlink:href="#icon-rating-star"
                          width="14"
                          height="14"
                          x="14"
                        ></use>
                        <use
                          xlink:href="#icon-rating-star"
                          width="14"
                          height="14"
                          x="28"
                        ></use>
                        <use
                          xlink:href="#icon-rating-star"
                          width="14"
                          height="14"
                          x="42"
                        ></use>
                        <use
                          xlink:href="#icon-rating-star"
                          width="14"
                          height="14"
                          x="56"
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
                        <use
                          xlink:href="#icon-rating-star"
                          width="12"
                          height="12"
                          x="15"
                          y="1"
                        ></use>
                        <use
                          xlink:href="#icon-rating-star"
                          width="12"
                          height="12"
                          x="29"
                          y="1"
                        ></use>
                        <use
                          xlink:href="#icon-rating-star"
                          width="12"
                          height="12"
                          x="43"
                          y="1"
                        ></use>
                        <use
                          xlink:href="#icon-rating-star"
                          width="12"
                          height="12"
                          x="57"
                          y="1"
                        ></use>
                      </g></svg
                  ></span>
                  <span>(50 ratings)</span></a
                >
                <div class="enrollment" data-purpose="enrollment">
                  1,127 students
                </div>
              </div>
            </div>
            <div class="clp-lead__element-item">
              <div
                class="instructor-links--instructor-links--8GNDS"
                data-purpose="instructor-name-top"
              >
                <span class="instructor-links--names--fJWai"
                  ><span class="ud-text-sm">Created by</span>
                  <a
                    class="ud-btn ud-btn-medium ud-btn-link ud-heading-sm ud-text-sm ud-instructor-links"
                    data-position="1"
                    href="#instructor-1"
                    ><span class="ud-btn-label">ACI69 | Trading ™</span></a
                  ></span
                >
              </div>
            </div>
            <div class="clp-lead__element-meta">
              <div class="clp-lead__element-item">
                <div
                  class="last-update-date orange-highlight"
                  data-purpose="last-update-date"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    class="ud-icon ud-icon-xsmall ud-icon-color-neutral last-update-date__icon"
                  >
                    <use xlink:href="#icon-calendar-30"></use></svg
                  ><span>Last updated 3/2025</span>
                </div>
              </div>
              <div
                class="clp-lead__element-item clp-lead__locale"
                data-purpose="lead-course-locale"
              >
                <svg
                  aria-hidden="true"
                  aria-label="Course Language"
                  role="img"
                  focusable="false"
                  class="ud-icon ud-icon-xsmall ud-icon-color-neutral icon"
                >
                  <use xlink:href="#icon-language"></use></svg
                >Italian
              </div>
              <div class="clp-lead__element-item clp-lead__caption">
                <div
                  class="ud-text-sm caption--captions--CfBBJ"
                  data-purpose="caption"
                >
                  <svg
                    aria-hidden="true"
                    aria-label="Closed Captions"
                    role="img"
                    focusable="false"
                    class="ud-icon ud-icon-xsmall ud-icon-color-neutral caption--subtitles-icon--6j6KM"
                  >
                    <use xlink:href="#icon-subtitles"></use></svg
                  ><span>Italian [Auto]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="course-landing-page__main-content course-landing-page__purchase-section__main dark-background-inner-text-container"
          v-if="false"
        >
          <div
            data-purpose="purchase-section"
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
                          for="u126-form-group--65"
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
                            id="u126-form-group--65"
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
        <div
          class="ud-component--course-landing-page--sidebar-container-top-mark"
        >
          <span style="position: relative"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
@media (min-width: 67.5em) {
  .paid-course-landing-page__container .dark-background {
    background-color: #1d1e27;
    padding: 3.2rem 0 3.2rem 0;
  }
  .paid-course-landing-page__container .white-background {
    background-color: #fff;
    padding: 3.2rem 0 3.2rem 0;
  }
  .paid-course-landing-page__container .grey-background {
    background-color: #f6f7f9;
    padding: 3.2rem 0 3.2rem 0;
  }
  .paid-course-landing-page__container .top-container-endorsed {
    padding-bottom: 2.4rem;
  }
  .paid-course-landing-page__container
    .course-landing-page__shortcut_navigation,
  .paid-course-landing-page__container .course-landing-page__main-content {
    max-width: 60rem;
    margin-left: 4.8rem;
    margin-right: 4.8rem;
  }
  .paid-course-landing-page__container .course-landing-page__topic-menu {
    max-width: 60rem;
    margin: 0 4.8rem 1.6rem;
    /**
             * @note:: This is a temporary fix, after webpack5 upgrade, somehow overriding the a tag from the
             * .dark-background-inner-text-container in this file stopped working.
             *  https://github.com/udemy/website-django/blob/470e7333b0386c8689
             * c49b38cb781be5d15a4309/static/src/udemy/js/course-landing-page/paid-course-landing-page.less#L73
             *
             */
  }
  .paid-course-landing-page__container
    .course-landing-page__topic-menu
    .topic-menu {
    position: relative;
    top: -0.8rem;
  }
  .paid-course-landing-page__container
    .course-landing-page__topic-menu-endorsed {
    margin-bottom: 0;
  }
  .paid-course-landing-page__container
    .course-landing-page__introduction-asset__main {
    display: none;
  }
  .paid-course-landing-page__container
    .course-landing-page__purchase-section__main {
    display: none;
  }
  .paid-course-landing-page__container .ud-clp-list-price,
  .paid-course-landing-page__container .ud-clp-percent-discount {
    font-size: 1.6rem;
  }
  .paid-course-landing-page__container .course-landing-page_sidebar-container {
    display: block;
    position: absolute;
    top: 3.2rem;
    margin-left: 69.6rem;
  }
}

.topic-menu-condensed.ud-breadcrumb {
  scroll-padding: 2.4rem;
}
@media (max-width: 37.5rem) {
  .topic-menu-condensed.ud-breadcrumb > a:first-of-type,
  .topic-menu-condensed.ud-breadcrumb svg:first-of-type {
    display: None;
  }
}

.ud-breadcrumb {
  display: flex;
  flex-wrap: nowrap;
  padding: 0.4rem;
  margin: 0 -0.4rem;
  overflow: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: always;
  touch-action: manipulation;
  -webkit-overflow-scrolling: touch;
}
.ud-breadcrumb a {
  padding: 0.4rem 0;
  white-space: nowrap;
  scroll-snap-align: start;
}
.ud-breadcrumb-icon {
  position: relative;
  top: 0.1rem;
  margin: 0.4rem;
}
.topic-menu-condensed.ud-breadcrumb {
  scroll-padding: 2.4rem;
}
@media (max-width: 37.5rem) {
  .topic-menu-condensed.ud-breadcrumb > a:first-of-type,
  .topic-menu-condensed.ud-breadcrumb svg:first-of-type {
    display: None;
  }
}

.clp-lead {
  padding-bottom: 2.4rem;
}
@media (min-width: 37.5625rem) and (max-width: 43.75rem) {
  .clp-lead {
    padding-bottom: 3.2rem;
  }
}
@media (min-width: 43.8125rem) {
  .clp-lead {
    margin-bottom: 0;
    padding-bottom: 0;
  }
}
.clp-lead .clp-lead__element-item:not(:empty) {
  margin-bottom: 0.8rem;
}
@media (min-width: 37.5625rem) {
  .clp-lead .clp-lead__element-item:not(:empty) {
    margin-bottom: 1.6rem;
    margin-right: 0.8rem;
  }
}
.clp-lead .ud-badge {
  margin-right: 0.8rem;
}
.clp-lead .clp-lead__element-item--row {
  display: flex;
  flex-wrap: wrap;
}
.clp-lead .clp-lead__element-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.clp-lead .clp-lead__element-meta {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
@media (min-width: 37.5625rem) and (max-width: 67.44em) {
  .clp-lead .clp-lead__element-meta .clp-lead__element-item:not(:empty) {
    margin-bottom: 0.8rem;
  }
}
@media (min-width: 67.5em) {
  .clp-lead .clp-lead__element-meta {
    align-items: center;
    flex-direction: row;
  }
}
.clp-lead .clp-lead__badge-ratings-enrollment {
  display: flex;
  flex-direction: column;
}
@media (min-width: 37.5625rem) {
  .clp-lead .clp-lead__badge-ratings-enrollment {
    flex-direction: row;
  }
}
.clp-lead .clp-lead__caption,
.clp-lead .clp-lead__locale {
  display: flex;
  margin-right: 1.6rem;
}
.clp-lead .clp-lead__caption .icon,
.clp-lead .clp-lead__locale .icon {
  margin-right: 0.8rem;
  margin-top: 0.2rem;
}
.clp-lead .clp-lead__title {
  margin-bottom: 1.6rem;
}
.clp-lead .clp-lead__title--endorsed {
  margin-bottom: 0.8rem;
}
.clp-lead .clp-lead__endorsement {
  margin-bottom: 0.8rem;
}
.clp-lead .clp-lead__headline {
  margin-bottom: 1.6rem;
}
@media (min-width: 67.5em) {
  .clp-lead .clp-lead__headline {
    margin-bottom: 2.4rem;
  }
}
.clp-lead-endorsed {
  padding-bottom: 0.8rem;
}
@media (min-width: 37.5625rem) and (max-width: 43.75rem) {
  .clp-lead-endorsed {
    padding-bottom: 1.6rem;
  }
}
@media (min-width: 43.8125rem) {
  .clp-lead-endorsed {
    margin-bottom: 0;
    padding-bottom: 0;
  }
}

.star-rating-module--star-wrapper--i1cJH {
  display: inline-flex;
  align-items: center;
}
.star-rating-module--star-wrapper--i1cJH.star-rating-module--large--OJtSv
  > svg {
  width: 10rem;
  height: 2rem;
}
.star-rating-module--star-wrapper--i1cJH.star-rating-module--large--OJtSv.star-rating-module--numeric--qcZmU
  > svg {
  width: 2rem;
}
.star-rating-module--star-wrapper--i1cJH.star-rating-module--large--OJtSv
  .star-rating-module--rating-number--2-qA2 {
  line-height: 1;
}
.star-rating-module--star-wrapper--i1cJH.star-rating-module--medium--Lpe62
  > svg {
  display: block;
  width: 7rem;
  height: 1.6rem;
}
.star-rating-module--star-wrapper--i1cJH.star-rating-module--medium--Lpe62.star-rating-module--numeric--qcZmU
  > svg {
  width: 1.6rem;
}
.star-rating-module--star-wrapper--i1cJH.star-rating-module--small--6dDgp
  > svg {
  display: block;
  width: 6.1rem;
  height: 1.4rem;
}
.star-rating-module--star-wrapper--i1cJH.star-rating-module--small--6dDgp.star-rating-module--numeric--qcZmU
  > svg {
  width: 1.4rem;
}
.star-rating-module--star-filled--FgjdR {
  fill: #c4710d;
}
.star-rating-module--dark-background--jCtxH
  .star-rating-module--star-filled--FgjdR {
  fill: #f69c08;
}
.star-rating-module--star-bordered--A4SZK {
  stroke: #c4710d;
}
.star-rating-module--dark-background--jCtxH
  .star-rating-module--star-bordered--A4SZK {
  stroke: #f69c08;
}
.star-rating-module--rating-number--2-qA2 {
  margin-right: 0.4rem;
  color: #8b4309;
}
.star-rating-module--dark-background--jCtxH
  .star-rating-module--rating-number--2-qA2 {
  color: #f69c08;
}

.enrollment {
  margin-right: 0.8rem;
}

.styles--rating-wrapper--YkK4n {
  margin-right: 0.8rem;
}
@media (min-width: 67.5em) {
  .dark-background-inner-text-container .styles--rating-wrapper--YkK4n {
    color: #c0c4fc;
  }
}
a.styles--rating-wrapper--YkK4n > span:nth-child(2) {
  text-decoration: underline;
}

.last-update-date {
  display: flex;
}

.orange-highlight span {
  color: #c4710d;
}
.orange-highlight .last-update-date__icon {
  fill: #c4710d;
}
.green-highlight span {
  color: #206241;
}
.green-highlight .last-update-date__icon {
  fill: #206241;
}
@media (min-width: 60rem) {
  .orange-highlight span {
    color: #ffcc80;
  }
  .orange-highlight .last-update-date__icon {
    fill: #ffcc80;
  }
  .green-highlight span {
    color: #8cd3b0;
  }
  .green-highlight .last-update-date__icon {
    fill: #8cd3b0;
  }
}
.last-update-date__icon {
  margin-right: 0.8rem;
  margin-top: 0.2rem;
}

.caption--subtitles-icon--6j6KM {
  margin-right: 0.8rem;
}
</style>
