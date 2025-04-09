<template>
  <header
    class="ud-header ud-text-sm desktop-header-module--header--a5wri desktop-header-module--flex-middle--k0Teb"
    data-purpose="header"
    data-testid="desktop-header"
  >
    <nav
      aria-labelledby="u125-skip-to-content-btn--64"
      class="skip-to-content-button-module--skip-to-content--MnPe4"
      v-if="false"
    >
      <a
        id="u125-skip-to-content-btn--64"
        class="ud-btn ud-btn-medium ud-btn-primary ud-heading-sm skip-to-content-button-module--skip-to-content-btn--iM4H1"
        href="?couponCode=ST13MT80425G3#main-content-anchor"
        ><span
          aria-hidden="true"
          class="skip-to-content-button-module--skip-to-content-shadow--eue1a"
        ></span
        ><span style="margin: 0">Skip to content</span></a
      >
    </nav>
    <a
      href="/"
      class="desktop-header-module--flex-middle--k0Teb desktop-header-module--logo--AwnFF"
      ><img
        src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOTEgMzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjA1IDguMTEyTDcuMDI0IDQuMDU2IDAgOC4xMTJWNC4wNTZMNy4wMjUgMGw3LjAyNiA0LjA1NnY0LjA1NmgtLjAwMXoiIGZpbGw9IiNBNDM1RjAiLz48cGF0aCBkPSJNMCAxMS41MThoMy42OHY4Ljk0MWMwIDIuMzEgMS43MjUgMy40MzYgMy4zNDUgMy40MzYgMS42MzQgMCAzLjM0Ni0xLjE1NiAzLjM0Ni0zLjQ2N3YtOC45MWgzLjY4djkuMTU0YzAgMi4xMjgtLjY2OSAzLjc3LTIuMDA3IDQuODk2LTEuMzM5IDEuMTI1LTMuMDExIDEuNjczLTUuMDUgMS42NzMtMi4wMzcgMC0zLjcxLS41NDctNS4wMTctMS42NzNDLjY2OSAyNC40NDMgMCAyMi44NjIgMCAyMC43NjN2LTkuMjQ1ek00NS44NjYgMjIuNjNjLTEuMTE0Ljk5Mi0yLjM4MyAxLjQ3OC0zLjgzIDEuNDc4LTIuNjQgMC00LjQxLTEuNTA0LTQuNjEtMy44MzNoMTEuODlzLjA4LS43NTIuMDgtMS40NThjMC0yLjE5LS43LTQuMDE1LTIuMTMtNS41MDUtMS4zOTgtMS40OS0zLjIyMi0yLjIyLTUuNDQzLTIuMjItMi4zNDEgMC00LjI1OC43My01Ljc3OSAyLjIyLTEuNDkgMS40OS0yLjI1IDMuNDM2LTIuMjUgNS44N3YuMTJjMCAyLjQwMy43NiA0LjMxOSAyLjI1IDUuNzQ5IDEuNDkgMS40MjkgMy40NjcgMi4xNTkgNS44NyAyLjE1OSAyLjc5NCAwIDUuMDE3LTEuMTAyIDYuNjg1LTMuMDAybC0yLjczMy0xLjU3OHptLTYuOTk0LTcuNDYzYy44Mi0uNjM5IDEuODI1LS45NzMgMi45NS0uOTczIDEuMDY0IDAgMS45NDYuMzM0IDIuNzA3IDEuMDA0LjcyNi42MSAxLjExOCAxLjM1OSAxLjE1MiAyLjIySDM3LjUyYy4xMTgtLjg5LjU2OC0xLjY0IDEuMzUzLTIuMjV6TTgyLjkxIDI5LjI3NkM4MS40MTcgMzIuODAxIDc5Ljg1NSAzNCA3Ny40NiAzNEg3NS44di0zLjI2MmgxLjM0MmMuODI0IDAgMS41OS0uMzEgMi4zMi0xLjk5NGwuNzMtMS42ODYtNi4yOTYtMTUuNTRoMy43NDFsNC40NzEgMTEuMTkyIDQuNTkzLTExLjE5MmgzLjc0bC03LjUzIDE3Ljc1OHpNMjguMzc3IDUuNjQ5djcuMjU3Yy0xLjIwNi0xLjA4LTMuMDgyLTEuNzIzLTQuODk2LTEuNzIzLTIuMTYgMC0zLjk4NC43Ni01LjQ3NCAyLjMxLTEuNDYgMS41MjEtMi4xOSAzLjQwNi0yLjE5IDUuNjg3IDAgMi4yODIuNzMgNC4xNjcgMi4xOSA1LjcxOCAxLjQ5IDEuNTIxIDMuMzE1IDIuMjgyIDUuNDc0IDIuMjgyIDIuNDkgMCA0LjA2NC0uOTc5IDQuODk2LTEuNzQ2djEuNDExaDMuNjVWNS42NWgtMy42NXptLTEuMDk1IDE2Ljg3OGMtLjg4Mi44ODItMi4wMDcgMS4zMzktMy4zMTUgMS4zMzktMS4zMDggMC0yLjM3Mi0uNDU3LTMuMjU0LTEuMzM5LS44NS0uODgyLTEuMjc3LTIuMDA3LTEuMjc3LTMuMzQ1IDAtMS4zMzkuNDI2LTIuNDY0IDEuMjc3LTMuMzQ2Ljg4Mi0uODgyIDEuOTQ2LTEuMzM4IDMuMjU0LTEuMzM4czIuNDMzLjQ1NiAzLjMxNSAxLjMzOGMuOTEyLjg4MiAxLjM3IDIuMDA3IDEuMzcgMy4zNDYgMCAxLjMzOC0uNDU4IDIuNDYzLTEuMzcgMy4zNDV6TTY4LjIyMiAxMS4yMTRjLTIuNzcyIDAtNC4yMTMgMS4xNS01LjIgMi4yNTgtLjM5NS0uNzUzLTEuNTA3LTIuMjU4LTQuMTA1LTIuMjU4LTIuMTk2IDAtMy40OSAxLjExLTQuMTM2IDEuOVYxMS41MmgtMy42MTh2MTUuMzI3aDMuNjE4di04LjgyYzAtMi4wNjggMS4yNzgtMy41NTggMi45OC0zLjU1OCAxLjczNSAwIDIuNzM4IDEuMzA4IDIuNzM4IDMuNDA2djguOTcxaDMuNjE5di04LjgyYzAtMi4wOTggMS4yNDYtMy41NTggMy4wNC0zLjU1OCAxLjczNCAwIDIuNzM3IDEuMzA4IDIuNzM3IDMuNDA1djguOTcyaDMuNjV2LTkuNDg4YzAtMy45OTYtMi4xNDgtNi4xNDItNS4zMjMtNi4xNDJ6IiBmaWxsPSIjMDAwIi8+PC9zdmc+Cg=="
        alt="Udemy"
        width="91"
        height="34"
        loading="lazy"
    /></a>
    <nav
      class="popper-module--popper--mM5Ie desktop-header-module--gap-button--4drhI"
      aria-label="Explore"
    >
      <button
        type="button"
        id="u125-popper-trigger--2"
        aria-expanded="false"
        tabindex="0"
        class="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm js-header-button desktop-header-module--dropdown-button--ipas9"
      >
        <span
          class="ud-text-sm desktop-header-module--dropdown-button-text--Sq73l"
          >Explore</span
        >
      </button>
      <div
        class="popper-module--popper-content--XE9z5 desktop-header-module--dropdown--pZls3"
        id="u125-popper-content--3"
        aria-labelledby="u125-popper-trigger--2"
        data-testid="popup"
        style="top: 100%; left: 0"
        v-if="false"
      >
        <div class="popper-module--animation-wrapper--tM0UK">
          <div
            class="popover-module--popover--HrSFz popover-module--popover-bottom--1ghkR"
          >
            <div class="popover-module--inner--yQvGI">
              <div
                class="list-menu-module--list-menu-container--8oKTW browse-nav-module--nav-container--JbVc5"
                data-testid="browse-nav"
              >
                <div
                  class="js-browse-nav-level-one browse-nav-module--nav--0Iif6"
                  data-testid="browse-nav-list"
                >
                  <h2 class="ud-heading-sm list-menu-module--heading--N3Qvr">
                    Browse Certifications
                  </h2>
                  <ul
                    class="ud-unstyled-list ud-block-list list-menu-module--section--l6I-M"
                  >
                    <li>
                      <a
                        href="/browse/certification/"
                        data-testid="browse-nav-item"
                        id="header-browse-nav-certification_preparation-0"
                        data-id="0"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm list-menu-module--item--OY-R6 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        aria-expanded="false"
                        ><div class="ud-block-list-item-content">
                          Certification preparation
                        </div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                        >
                          <use xlink:href="#icon-next"></use></svg
                      ></a>
                    </li>
                  </ul>
                  <ul
                    class="ud-unstyled-list ud-block-list list-menu-module--section--l6I-M"
                  >
                    <li>
                      <a
                        href="/courses/development/"
                        data-testid="browse-nav-item"
                        id="header-browse-nav-category-288"
                        data-id="288"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm list-menu-module--item--OY-R6 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        aria-expanded="false"
                        ><div class="ud-block-list-item-content">
                          Development
                        </div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                        >
                          <use xlink:href="#icon-next"></use></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="/courses/business/"
                        data-testid="browse-nav-item"
                        id="header-browse-nav-category-268"
                        data-id="268"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm list-menu-module--item--OY-R6 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        aria-expanded="false"
                        ><div class="ud-block-list-item-content">Business</div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                        >
                          <use xlink:href="#icon-next"></use></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="/courses/finance-and-accounting/"
                        data-testid="browse-nav-item"
                        id="header-browse-nav-category-328"
                        data-id="328"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm list-menu-module--item--OY-R6 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        aria-expanded="false"
                        ><div class="ud-block-list-item-content">
                          Finance &amp; Accounting
                        </div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                        >
                          <use xlink:href="#icon-next"></use></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="/courses/it-and-software/"
                        data-testid="browse-nav-item"
                        id="header-browse-nav-category-294"
                        data-id="294"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm list-menu-module--item--OY-R6 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        aria-expanded="false"
                        ><div class="ud-block-list-item-content">
                          IT &amp; Software
                        </div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                        >
                          <use xlink:href="#icon-next"></use></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="/courses/office-productivity/"
                        data-testid="browse-nav-item"
                        id="header-browse-nav-category-292"
                        data-id="292"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm list-menu-module--item--OY-R6 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        aria-expanded="false"
                        ><div class="ud-block-list-item-content">
                          Office Productivity
                        </div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                        >
                          <use xlink:href="#icon-next"></use></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="/courses/personal-development/"
                        data-testid="browse-nav-item"
                        id="header-browse-nav-category-296"
                        data-id="296"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm list-menu-module--item--OY-R6 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        aria-expanded="false"
                        ><div class="ud-block-list-item-content">
                          Personal Development
                        </div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                        >
                          <use xlink:href="#icon-next"></use></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="/courses/design/"
                        data-testid="browse-nav-item"
                        id="header-browse-nav-category-269"
                        data-id="269"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm list-menu-module--item--OY-R6 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        aria-expanded="false"
                        ><div class="ud-block-list-item-content">Design</div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                        >
                          <use xlink:href="#icon-next"></use></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="/courses/marketing/"
                        data-testid="browse-nav-item"
                        id="header-browse-nav-category-290"
                        data-id="290"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm list-menu-module--item--OY-R6 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        aria-expanded="false"
                        ><div class="ud-block-list-item-content">Marketing</div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                        >
                          <use xlink:href="#icon-next"></use></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="/courses/lifestyle/"
                        data-testid="browse-nav-item"
                        id="header-browse-nav-category-274"
                        data-id="274"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm list-menu-module--item--OY-R6 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        aria-expanded="false"
                        ><div class="ud-block-list-item-content">Lifestyle</div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                        >
                          <use xlink:href="#icon-next"></use></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="/courses/photography-and-video/"
                        data-testid="browse-nav-item"
                        id="header-browse-nav-category-273"
                        data-id="273"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm list-menu-module--item--OY-R6 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        aria-expanded="false"
                        ><div class="ud-block-list-item-content">
                          Photography &amp; Video
                        </div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                        >
                          <use xlink:href="#icon-next"></use></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="/courses/health-and-fitness/"
                        data-testid="browse-nav-item"
                        id="header-browse-nav-category-276"
                        data-id="276"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm list-menu-module--item--OY-R6 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        aria-expanded="false"
                        ><div class="ud-block-list-item-content">
                          Health &amp; Fitness
                        </div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                        >
                          <use xlink:href="#icon-next"></use></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="/courses/music/"
                        data-testid="browse-nav-item"
                        id="header-browse-nav-category-278"
                        data-id="278"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm list-menu-module--item--OY-R6 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        aria-expanded="false"
                        ><div class="ud-block-list-item-content">Music</div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                        >
                          <use xlink:href="#icon-next"></use></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="/courses/teaching-and-academics/"
                        data-testid="browse-nav-item"
                        id="header-browse-nav-category-300"
                        data-id="300"
                        class="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm list-menu-module--item--OY-R6 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        aria-expanded="false"
                        ><div class="ud-block-list-item-content">
                          Teaching &amp; Academics
                        </div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                        >
                          <use xlink:href="#icon-next"></use></svg
                      ></a>
                    </li>
                  </ul>
                </div>
                <div
                  id="header-browse-nav-level-two"
                  class="js-browse-nav-level-two browse-nav-module--nav--0Iif6"
                  style="display: none"
                  data-testid="browse-nav-list"
                ></div>
                <div
                  id="header-browse-nav-level-three"
                  class="js-browse-nav-level-three browse-nav-module--nav--0Iif6"
                  style="display: none"
                  data-testid="browse-nav-list"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div
      locale="en_US"
      lang="en"
      class="ud-search-form-autocomplete desktop-header-module--search-bar--49122 ud-form-group"
    >
      <label
        class="ud-sr-only ud-form-label ud-heading-sm"
        for="u125-search-form-autocomplete--4"
        >Search for anything</label
      >
      <form
        action="/courses/search/"
        class="ud-search-form-autocomplete-input-group ud-search-form-autocomplete-input-group-reversed"
      >
        <input type="hidden" name="src" value="ukw" /><input
          type="text"
          aria-invalid="false"
          name="q"
          data-testid="search-input"
          placeholder="Search for anything"
          autocomplete="off"
          value=""
          role="combobox"
          aria-autocomplete="both"
          aria-haspopup="true"
          aria-expanded="false"
          id="u125-search-form-autocomplete--4"
          class="ud-text-input ud-text-input-small ud-text-sm ud-search-form-autocomplete-input js-header-search-field"
        /><button
          type="submit"
          disabled=""
          class="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm ud-btn-disabled ud-btn-icon ud-btn-icon-medium"
          tabindex="-1"
        >
          <svg
            aria-label="Submit search"
            role="img"
            focusable="false"
            class="ud-icon ud-icon-small ud-icon-color-neutral"
          >
            <use xlink:href="#icon-search"></use>
          </svg>
        </button>
      </form>
    </div>
    <div
      class="desktop-header-module--gap-button--4drhI desktop-header-module--group-b-logged-out-variant--Rp4Mg"
    >
      <a
        data-purpose="plans-and-pricing-page-link"
        data-testid="plans-and-pricing-page-link"
        href="/pricing"
        class="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm js-header-button desktop-header-module--dropdown-button--ipas9"
        ><span
          class="ud-text-sm desktop-header-module--dropdown-button-text--Sq73l"
          >Plans &amp; Pricing</span
        ></a
      >
    </div>
    <div
      class="popper-module--popper--mM5Ie desktop-header-module--gap-button--4drhI desktop-header-module--group-c-logged-out-variant--Usvre"
    >
      <a
        data-purpose="try-ufb-dropdown-trigger"
        href="/udemy-business/?locale=en_US&amp;mx_pg=httpcachecontextsme-list&amp;path=request-demo-mx%2F&amp;ref=ufb_header"
        target="_blank"
        rel="noopener"
        id="u125-popper-trigger--12"
        aria-describedby="u125-popper-content--13"
        tabindex="0"
        class="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm js-header-button desktop-header-module--dropdown-button--ipas9"
        ><span
          class="ud-text-sm desktop-header-module--dropdown-button-text--Sq73l"
          >Udemy Business</span
        ></a
      >
      <div
        class="popper-module--popper-content--XE9z5 desktop-header-module--dropdown--pZls3"
        id="u125-popper-content--13"
        data-testid="description"
        style="top: 100%; right: 0px"
        v-if="false"
      >
        <div class="popper-module--animation-wrapper--tM0UK">
          <div
            class="popover-module--popover--HrSFz popover-module--popover-bottom--1ghkR"
          >
            <div class="popover-module--inner--yQvGI">
              <div
                class="ud-header-menu desktop-header-module--menu--oIYSV"
                data-testid="header-menu"
              >
                <div class="panel-menu-module--panel--FrCW7">
                  <div
                    class="ud-heading-lg panel-menu-module--gap-bottom---DDBJ"
                    data-purpose="hook-text"
                  >
                    Get your team access to over 27,000 top Udemy courses,
                    anytime, anywhere.
                  </div>
                  <a
                    data-purpose="try-ufb-button"
                    href="/udemy-business/?locale=en_US&amp;mx_pg=httpcachecontextsme-list&amp;path=request-demo-mx%2F&amp;ref=ufb_header"
                    class="ud-btn ud-btn-medium ud-btn-primary ud-heading-sm panel-menu-module--cta--G-aTQ"
                    target="_blank"
                    rel="noopener"
                    ><span class="ud-btn-label">Try Udemy Business</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="popper-module--popper--mM5Ie desktop-header-module--gap-button--4drhI desktop-header-module--group-a-logged-out-variant--KtpQg"
    >
      <a
        href="/teaching/?ref=teach_header"
        data-purpose="instructor-dropdown"
        data-testid="teach-on-udemy-link"
        id="u125-popper-trigger--14"
        aria-describedby="u125-popper-content--15"
        tabindex="0"
        class="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm js-header-button desktop-header-module--dropdown-button--ipas9"
        ><span
          class="ud-text-sm desktop-header-module--dropdown-button-text--Sq73l"
          >Teach on Udemy</span
        ></a
      >
      <div
        class="popper-module--popper-content--XE9z5 desktop-header-module--dropdown--pZls3"
        id="u125-popper-content--15"
        data-testid="description"
        style="top: 100%; right: 0px"
        v-if="false"
      >
        <div class="popper-module--animation-wrapper--tM0UK">
          <div
            class="popover-module--popover--HrSFz popover-module--popover-bottom--1ghkR"
          >
            <div class="popover-module--inner--yQvGI">
              <div
                class="ud-header-menu desktop-header-module--menu--oIYSV"
                data-testid="header-menu"
              >
                <div class="panel-menu-module--panel--FrCW7">
                  <div
                    class="ud-heading-lg panel-menu-module--gap-bottom---DDBJ"
                  >
                    Turn what you know into an opportunity and reach millions
                    around the world.
                  </div>
                  <a
                    href="/teaching/?ref=teach_header"
                    class="ud-btn ud-btn-medium ud-btn-primary ud-heading-sm panel-menu-module--cta--G-aTQ"
                    data-testid="learn-more-link"
                    ><span class="ud-btn-label">Learn more</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popper-module--popper--mM5Ie">
      <a
        href="/cart/"
        data-testid="cart-icon"
        id="u125-popper-trigger--16"
        aria-expanded="false"
        tabindex="0"
        class="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-medium js-header-button desktop-header-module--dropdown-button--ipas9"
        ><svg
          aria-label="Shopping cart with 0 items"
          role="img"
          focusable="false"
          class="ud-icon ud-icon-small ud-icon-color-neutral"
        >
          <use xlink:href="#icon-cart"></use></svg
      ></a>
      <div
        class="popper-module--popper-content--XE9z5 desktop-header-module--dropdown--pZls3"
        id="u125-popper-content--17"
        aria-labelledby="u125-popper-trigger--16"
        data-testid="popup"
        style="top: 100%; right: 0px"
        v-if="false"
      >
        <div class="popper-module--animation-wrapper--tM0UK">
          <div
            class="popover-module--popover--HrSFz popover-module--popover-bottom--1ghkR"
          >
            <div class="popover-module--inner--yQvGI">
              <div
                class="ud-header-menu desktop-header-module--menu--oIYSV"
                data-testid="header-menu"
              >
                <div class="panel-menu-module--panel--FrCW7">
                  <div
                    class="course-card-skeleton-group-module--skeleton--Y4zI0"
                  >
                    <div class="course-card-skeleton-group-module--row--Q-1LW">
                      <div
                        data-testid="skeleton"
                        data-purpose="course-card-skeleton"
                        class="skeleton-module--skeleton--7T3hc course-card-skeleton-module--skeleton-flexible--tcvBn course-card-skeleton-module--skeleton-small--ZOtHj"
                        style="
                          width: 25.6rem;
                          max-width: 25.6rem;
                          min-width: 25.6rem;
                        "
                      >
                        <span
                          class="block-module--block--Tqs0a course-card-skeleton-module--image--b607E"
                          style="width: 6.4rem; height: 6.4rem"
                        ></span>
                        <div style="flex: 1 1 0%">
                          <span
                            class="block-module--block--Tqs0a course-card-skeleton-module--title--nO73n"
                          ></span
                          ><span
                            class="block-module--block--Tqs0a course-card-skeleton-module--line--xEQ8Z"
                          ></span
                          ><span
                            class="block-module--block--Tqs0a course-card-skeleton-module--line--xEQ8Z"
                          ></span
                          ><span
                            class="block-module--block--Tqs0a course-card-skeleton-module--line--xEQ8Z"
                          ></span>
                        </div>
                        <div class="skeleton-module--shine--rhamL"></div>
                      </div>
                    </div>
                    <div class="course-card-skeleton-group-module--row--Q-1LW">
                      <div
                        data-testid="skeleton"
                        data-purpose="course-card-skeleton"
                        class="skeleton-module--skeleton--7T3hc course-card-skeleton-module--skeleton-flexible--tcvBn course-card-skeleton-module--skeleton-small--ZOtHj"
                        style="
                          width: 25.6rem;
                          max-width: 25.6rem;
                          min-width: 25.6rem;
                        "
                      >
                        <span
                          class="block-module--block--Tqs0a course-card-skeleton-module--image--b607E"
                          style="width: 6.4rem; height: 6.4rem"
                        ></span>
                        <div style="flex: 1 1 0%">
                          <span
                            class="block-module--block--Tqs0a course-card-skeleton-module--title--nO73n"
                          ></span
                          ><span
                            class="block-module--block--Tqs0a course-card-skeleton-module--line--xEQ8Z"
                          ></span
                          ><span
                            class="block-module--block--Tqs0a course-card-skeleton-module--line--xEQ8Z"
                          ></span
                          ><span
                            class="block-module--block--Tqs0a course-card-skeleton-module--line--xEQ8Z"
                          ></span>
                        </div>
                        <div class="skeleton-module--shine--rhamL"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="desktop-header-module--gap-auth-button--f25sS">
      <a
        data-purpose="header-login"
        href="https://www.udemy.com/join/login-popup/?locale=en_US&amp;response_type=html&amp;next=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcome-comprare-bitcoin-con-coinbase-tutorial-coinbase-come-funziona-ita%2F%3FcouponCode%3DST13MT80425G3"
        class="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm"
        ><span class="ud-btn-label">Log in</span></a
      >
    </div>
    <div class="desktop-header-module--gap-auth-button--f25sS">
      <a
        data-purpose="header-signup"
        href="https://www.udemy.com/join/signup-popup/?locale=en_US&amp;response_type=html&amp;next=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcome-comprare-bitcoin-con-coinbase-tutorial-coinbase-come-funziona-ita%2F%3FcouponCode%3DST13MT80425G3"
        class="ud-btn ud-btn-medium ud-btn-primary ud-heading-sm"
        ><span class="ud-btn-label">Sign up</span></a
      >
    </div>
    <div class="desktop-header-module--gap-auth-button--f25sS">
      <button
        type="button"
        class="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm ud-btn-icon ud-btn-icon-medium"
      >
        <svg
          aria-label="Choose a language"
          role="img"
          focusable="false"
          class="ud-icon ud-icon-small ud-icon-color-neutral"
        >
          <use xlink:href="#icon-language"></use>
        </svg>
      </button>
    </div>
    <div
      id="g_id_onload"
      data-testid="g_id_onload"
      data-client_id="700206021005-as1l679sch207mp70msgjhma1krf3k9q.apps.googleusercontent.com"
      data-login_uri="https://www.udemy.com/join/social-complete/google-one-tap/?next=%2Fcourse%2Fcome-comprare-bitcoin-con-coinbase-tutorial-coinbase-come-funziona-ita%2F"
    ></div>
  </header>
</template>

<script setup></script>

<style>
@import '~/assets/css/common.css';
.ud-header {
  box-shadow:
    0 2px 4px rgba(6, 17, 118, 0.08),
    0 4px 12px rgba(6, 17, 118, 0.08);
  z-index: 1010;
}
.ud-instructor-header.ud-header {
  box-shadow: none;
}

.desktop-header-module--header--a5wri {
  background: #fff;
  height: 7.2rem;
  padding: 0 2.4rem;
  position: relative;
  z-index: 1010;
}
.desktop-header-module--mobile-header--EaZjO {
  display: none;
}
.desktop-header-module--mobile-header-placeholder--X9vRI {
  background: #fff;
  height: 5.6rem;
}
.desktop-header-module--flex-middle--k0Teb {
  align-items: center;
  display: flex;
}
.desktop-header-module--search-bar--49122 {
  flex-grow: 1;
  height: 4.8rem;
  border: 1px solid #9194ac;
  border-radius: 100rem;
  background-color: var(--color-white);
  margin: 0 1.2rem;
}
.desktop-header-module--search-bar--49122:hover {
  background-color: var(--color-gray-100);
}
.desktop-header-module--search-bar--49122:focus-within {
  background-color: var(--color-white);
  border-color: #6d28d2;
  /* stylelint-disable-next-line unit-disallowed-list */
  box-shadow: inset 0 0 0 0.5px #6d28d2;
}
/* stylelint-disable-next-line selector-class-pattern */
.desktop-header-module--header--a5wri .js-header-search-field {
  background-color: transparent;
}
/* stylelint-disable-next-line selector-class-pattern */
.desktop-header-module--header--a5wri .js-header-search-field-multi {
  background-color: transparent;
  margin-left: 0.8rem;
}
.desktop-header-module--header--a5wri .ud-search-form-autocomplete {
  max-width: none;
}
.desktop-header-module--logo--AwnFF {
  flex-shrink: 0;
  padding-right: 0.8rem;
}
/* stylelint-disable-next-line selector-class-pattern */
.desktop-header-module--gap-button--4drhI .js-header-button {
  padding: 0 1.2rem;
}
.desktop-header-module--gap-auth-button--f25sS {
  margin-left: 0.8rem;
}
.desktop-header-module--dropdown-button-text--Sq73l {
  color: #303141;
}
.desktop-header-module--dropdown-button--ipas9:hover .ud-icon,
.ud-popper-open .desktop-header-module--dropdown-button-text--Sq73l,
.ud-popper-open .desktop-header-module--dropdown-button--ipas9 .ud-icon,
.desktop-header-module--dropdown-button--ipas9:hover
  .desktop-header-module--dropdown-button-text--Sq73l {
  color: #6d28d2;
}
.desktop-header-module--btn--pCJU- {
  color: #303141;
  margin: 1.2rem 0;
}
.desktop-header-module--dropdown-button--ipas9 {
  margin: 1.2rem 0;
}
.desktop-header-module--dropdown--pZls3 > div > div {
  width: 100%;
}
.desktop-header-module--menu--oIYSV {
  min-width: 28.8rem;
}
.desktop-header-module--header--a5wri
  .desktop-header-module--dropdown-counter-badge--unIZ1,
.desktop-header-module--header--a5wri
  .desktop-header-module--dropdown-dot-badge--90r5I {
  position: absolute;
  font-size: 1.2rem;
  margin: 0;
}
.desktop-header-module--header--a5wri
  .desktop-header-module--dropdown-counter-badge--unIZ1 {
  top: 0;
  left: 50%;
}
.desktop-header-module--header--a5wri
  .desktop-header-module--dropdown-dot-badge--90r5I {
  top: 0.8rem;
  right: 0.8rem;
}
@media (max-width: 67.5em) {
  .desktop-header-module--group-a--N6xgx {
    display: none;
  }
}
@media (max-width: 57.5em) {
  .desktop-header-module--group-b--Zka1Y {
    display: none;
  }
}
@media (max-width: 51.5em) {
  .desktop-header-module--group-c--VwNgF {
    display: none;
  }
}
@media (max-width: 75.06em) {
  .desktop-header-module--group-a-logged-out-variant--KtpQg {
    display: none;
  }
}
@media (max-width: 61.31em) {
  .desktop-header-module--group-b-logged-out-variant--Rp4Mg {
    display: none;
  }
}
@media (max-width: 43.81em) {
  .desktop-header-module--group-c-logged-out-variant--Usvre {
    display: none;
  }
}
@media (max-width: 50rem) {
  .desktop-header-module--header--a5wri {
    display: none;
  }
  .desktop-header-module--mobile-header--EaZjO {
    display: block;
  }
}
@media (max-width: 61.25rem) {
  .desktop-header-module--header-admin--f-FoX {
    display: none;
  }
  .desktop-header-module--mobile-header-admin--XBrGs {
    display: block;
  }
}
.desktop-header-module--mark--adaV7 {
  position: absolute;
  width: 100%;
  left: 0;
}
.desktop-header-module--floating--mGu6y {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow:
    0 2px 4px rgba(6, 17, 118, 0.08),
    0 4px 12px rgba(6, 17, 118, 0.08);
  animation: desktop-header-module--slide-from-top--IZ-uR 250ms
    cubic-bezier(0, 0, 0.38, 0.9) 0ms forwards;
}
.desktop-header-module--visible--5koVj {
  box-shadow:
    0 2px 4px rgba(6, 17, 118, 0.08),
    0 4px 12px rgba(6, 17, 118, 0.08);
}
.desktop-header-module--hidden--qheYi {
  box-shadow: none;
}

.ud-search-form-autocomplete {
  position: relative;
  /* No padding, margin-top at this level for the
     * suggestions with images (MX only) experience
     */
}
.ud-search-form-autocomplete .ud-search-form-autocomplete-input {
  border: 0;
  flex: 1;
}
.ud-search-form-autocomplete .ud-search-form-autocomplete-input:focus {
  box-shadow: none;
}
.ud-search-form-autocomplete .ud-search-form-autocomplete-suggestions {
  background: #fff;
  border: 1px solid #d1d2e0;
  left: 0;
  padding: 1.6rem;
  margin-top: 0.4rem;
  position: absolute;
  right: 0;
  top: 100%;
  transform-origin: top;
  z-index: 1000;
  overflow: auto;
}
.ud-search-form-autocomplete
  .ud-search-form-autocomplete-suggestions-with-image {
  background: #fff;
  border: 1px solid #d1d2e0;
  left: 0;
  padding: 1.6rem;
  margin-top: 0.4rem;
  position: absolute;
  right: 0;
  top: 100%;
  transform-origin: top;
  z-index: 1000;
  overflow: auto;
  padding: 0;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}
.ud-search-form-autocomplete-title {
  display: flex;
  height: 3.2rem;
  padding: 1.2rem 1.2rem 0.8rem 1.2rem;
  align-items: center;
}
.ud-search-form-autocomplete-title-text,
.ud-search-form-autocomplete-title-action {
  width: 100%;
}
.ud-search-form-autocomplete-title-action-text {
  float: right;
  cursor: pointer;
}
.ud-search-form-autocomplete-input-group {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 2.4rem 0 0;
}
.ud-search-form-autocomplete-input-group-reversed {
  flex-direction: row-reverse;
}
/* stylelint-disable-next-line no-descending-specificity */
.ud-search-form-autocomplete-input-group-reversed
  .ud-search-form-autocomplete-input {
  padding: 0 0 0 0.4rem;
}
.ud-search-form-autocomplete-suggestion:hover {
  background-color: #f6f7f9;
}
/** Adds hover for block list item **/
.ud-search-form-autocomplete-suggestion-block-list-item {
  padding-left: 1.2rem;
  padding-right: 0.8rem;
}
.ud-search-form-autocomplete-suggestion-block-list-item:hover {
  background-color: #f6f7f9;
}
@media (max-width: 37.5rem) {
  .ud-search-form-autocomplete-input-group {
    padding: 0;
  }
  .ud-search-form-autocomplete-suggestions,
  .ud-search-form-autocomplete-suggestions-with-image {
    /*
         * For scroll issues on mobile iOS:
         * +40 vh - compensate for keyboard height
         * -6.4 rem - search input height + margin between suggestions popup and input
         */
    height: calc(100vh + 40vh - 6.4rem);
  }
}
@media (prefers-reduced-motion: no-preference) {
  .ud-search-form-autocomplete-suggestions,
  .ud-search-form-autocomplete-suggestions-with-image {
    /* stylelint-disable-next-line max-line-length */
    animation: ud-search-form-autocomplete-expand 150ms
      cubic-bezier(0, 0, 0.38, 0.9);
  }
  .ud-search-form-autocomplete-suggestion {
    /* stylelint-disable-next-line max-line-length */
    animation: ud-search-form-autocomplete-fade-in 150ms linear 150ms forwards;
    opacity: 0;
  }
}
.form-search-bar {
  padding: 0.4rem;
}
/** Layout for each result for auto complete variant **/
.ud-search-form-autocomplete-group {
  display: flex;
  align-items: center;
}
/** Layout for each result for search result **/
.ud-search-form-autocomplete-group-search {
  height: 3.2rem;
}
/** Margin for icons used in result **/
.ud-search-form-autocomplete-group-icon {
  margin-top: 0.6rem;
  margin-left: 0.4rem;
  margin-right: 2rem;
}
.ud-search-form-autocomplete-group-course-img {
  margin-right: 1.6rem;
}
.ud-search-form-autocomplete-group-course-img img {
  border: 1px solid #d1d2e0;
  max-width: none;
}
/** Margin for image used in result **/
.ud-search-form-autocomplete-group-img {
  margin-right: 1.6rem;
}
.ud-search-form-autocomplete-group-img img {
  max-width: none;
}
/** Layout for label AND instructor name **/
.ud-search-form-autocomplete-suggestion-details {
  display: flex;
  margin-top: 0.4rem;
  align-items: center;
  color: #595c73;
}
/** Adds padding between type label and instructor name **/
.ud-search-form-autocomplete-suggestion-instructor-name {
  padding-left: 0.8rem;
}
.ud-search-form-autocomplete-suggestion-focus {
  /* stylelint-disable unit-disallowed-list */
  box-shadow:
    0 0 0 2px var(--color-white),
    0 0 0 4px var(--color-purple-400),
    0 0 2px 5px var(--color-purple-150);
  /* stylelint-enable unit-disallowed-list */
}
.ud-search-form-autocomplete-suggestion-content {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@keyframes ud-search-form-autocomplete-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes ud-search-form-autocomplete-expand {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
</style>
