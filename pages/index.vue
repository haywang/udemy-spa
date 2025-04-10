<template>
  <div class="paid-course-landing-page__container" id="main-content-anchor">
    <TopContainer />
    <SideBar />
    <div class="paid-course-landing-page__body">
      <div class="course-landing-page__main-content">
        <Learn />
      </div>
    </div>
    <!-- 这里可以添加更多的课程内容部分 -->
    <!-- <div class="container mx-auto px-4 py-8">
      <CourseDetail />
    </div> -->
  </div>
</template>

<script setup>
import TopContainer from '~/components/newCourse/TopContainer.vue'
import SideBar from '~/components/newCourse/SideBar.vue'
import Learn from '~/components/newCourse/Learn.vue'
definePageMeta({
  layout: 'default'
})
</script>

<style>
@import '~/assets/css/common.css';
.paid-course-landing-page__container {
  position: relative;
}
.paid-course-landing-page__container p,
.paid-course-landing-page__container h1,
.paid-course-landing-page__container h2,
.paid-course-landing-page__container h3,
.paid-course-landing-page__container h4,
.paid-course-landing-page__container h5,
.paid-course-landing-page__container h6,
.paid-course-landing-page__container ul,
.paid-course-landing-page__container ol {
  max-width: 108.4rem;
}
.paid-course-landing-page__container .course-landing-page__shortcut_navigation,
.paid-course-landing-page__container .course-landing-page__main-content {
  margin-left: 2.4rem;
  margin-right: 2.4rem;
}
@media (max-width: 43.75rem) {
  .paid-course-landing-page__container
    .course-landing-page__shortcut_navigation,
  .paid-course-landing-page__container .course-landing-page__main-content {
    margin-top: 2.4rem;
  }
}
.paid-course-landing-page__container .course-landing-page__nav_container {
  display: block;
}
.paid-course-landing-page__container .top-container {
  padding-top: 0.8rem;
}
@media (min-width: 37.5625rem) and (max-width: 67.44em) {
  .paid-course-landing-page__container .top-container {
    padding-top: 1.6rem;
  }
}
@media (min-width: 67.5em) {
  .paid-course-landing-page__container .top-container {
    padding-top: 2.4rem;
  }
}
.paid-course-landing-page__container .background-inner-position-container {
  margin: 0 auto;
  max-width: 108.4rem;
}
@media screen and (min-width: 73.75em) {
  .paid-course-landing-page__container .background-inner-position-container {
    max-width: 118.4rem;
  }
}
@media (min-width: 67.5em) {
  .paid-course-landing-page__container .dark-background-inner-text-container {
    color: #fff;
    /**
                This is for:
                - TopicMenu Breadcrumbs
                - Rating component in the dark background
                - Instructor links

                TODO: a tag override stopped working after webpack5 upgrade. We published a quick fix but we'll need
                to fix this properly.
             */
  }
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    .ud-btn {
    border-color: #fff;
    color: #fff;
  }
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    .ud-btn-link {
    color: #c0c4fc;
  }
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    .ud-btn-primary,
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    .ud-btn-secondary {
    --ud-btn-focus-background-color: color-mix(in sRGB, #fff 12%, transparent);
    --ud-btn-background-color: transparent;
    --ud-btn-border: 1px solid #fff;
  }
  .paid-course-landing-page__container .dark-background-inner-text-container a,
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    :global(.ud-instructor-links) {
    color: #c0c4fc;
  }
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    .ud-block-list-item,
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    .ud-icon {
    color: #fff;
  }
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    .ud-clp-price-text {
    color: #fff;
  }
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    .clp-component-render
    .ud-clp-available-coupon-code {
    color: #fff;
  }
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    .clp-component-render
    .ud-clp-apply-available-coupon-code {
    color: #fff;
  }
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    .ud-clp-list-price {
    color: #d1d2e0;
  }
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    .ud-clp-redeem-coupon {
    color: #ffb7b2;
  }
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    .ud-text-input,
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    .ud-fake-toggle-input {
    border-color: #fff;
  }
  .paid-course-landing-page__container
    .dark-background-inner-text-container
    span[data-checked='checked']
    ~ :global(.ud-accordion-panel-toggler)
    .ud-fake-toggle-radio-small {
    background: #fff;
    box-shadow: 0 0 0 0.2rem #1d1e27 inset;
  }
}
.paid-course-landing-page__container .paid-course-landing-page__body {
  margin: 0 auto;
  max-width: 108.4rem;
}
@media screen and (min-width: 73.75em) {
  .paid-course-landing-page__container .paid-course-landing-page__body {
    max-width: 118.4rem;
  }
}
@media screen and (min-width: 37.5625rem) {
  .paid-course-landing-page__container .paid-course-landing-page__body {
    padding-top: 3.2rem;
  }
}
.paid-course-landing-page__container .course-landing-page__topic-menu {
  margin-bottom: 0.8rem;
}
.paid-course-landing-page__container
  .course-landing-page__introduction-asset__main {
  margin-bottom: 2.4rem;
}
.paid-course-landing-page__container
  .course-landing-page__introduction-asset__main-endorsed {
  margin-bottom: 1.6rem;
}
.paid-course-landing-page__container .sidebar-container-position-manager {
  margin: 0 auto;
  max-width: 108.4rem;
}
@media screen and (min-width: 73.75em) {
  .paid-course-landing-page__container .sidebar-container-position-manager {
    max-width: 118.4rem;
  }
}
.paid-course-landing-page__container .course-landing-page_sidebar-container {
  display: none;
}
@media (min-width: 37.5625rem) and (max-width: 67.44em) {
  .paid-course-landing-page__container .course-landing-page__topic-menu {
    margin-bottom: 1.6rem;
  }
  .paid-course-landing-page__container
    .course-landing-page__introduction-asset__main {
    margin-bottom: 3.2rem;
  }
  .paid-course-landing-page__container
    .course-landing-page__introduction-asset__main-endorsed {
    margin-bottom: 2.4rem;
  }
}
@media (min-width: 43.8125rem) and (max-width: 67.44em) {
  .paid-course-landing-page__container
    .course-landing-page__shortcut_navigation,
  .paid-course-landing-page__container .course-landing-page__main-content {
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 3.2rem;
  }
  .paid-course-landing-page__container .course-landing-page__topic-menu {
    padding-bottom: 0;
  }
  .paid-course-landing-page__container .course-landing-page__lead-endorsed {
    padding-bottom: 1.6rem;
  }
  .paid-course-landing-page__container .money-back {
    margin-top: 0;
  }
  .paid-course-landing-page__container .purchase-section-separator {
    margin: 3.2rem 0;
  }
}
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
@media (min-width: 67.5em) and (min-width: 67.5em) {
  .paid-course-landing-page__container
    .course-landing-page__topic-menu.dark-background-inner-text-container
    a {
    color: #c0c4fc;
  }
}
@media (min-width: 73.75em) {
  .paid-course-landing-page__container p,
  .paid-course-landing-page__container h1,
  .paid-course-landing-page__container h2,
  .paid-course-landing-page__container h3,
  .paid-course-landing-page__container h4,
  .paid-course-landing-page__container h5,
  .paid-course-landing-page__container h6,
  .paid-course-landing-page__container ul,
  .paid-course-landing-page__container ol {
    max-width: 118.4rem;
  }
  .paid-course-landing-page__container
    .course-landing-page__shortcut_navigation,
  .paid-course-landing-page__container .course-landing-page__main-content {
    max-width: 70rem;
  }
  .paid-course-landing-page__container .course-landing-page_sidebar-container {
    margin-left: 79.6rem;
  }
}
.paid-course-landing-page__container .course-certification-unit {
  padding-top: 0;
}
</style>
