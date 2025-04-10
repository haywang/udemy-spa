<template>
  <div
    class="topic-navigation-module--topic-navigation--wCbdV"
    data-client-side-render-only="CSR: component"
  >
    <h2 class="topic-navigation-module--title--HkSbi ud-heading-xl">
      Explore related topics
    </h2>
    <ul
      role="navigation"
      aria-label="Explore related topics"
      class="ud-unstyled-list link-group-module--group--NYihO"
    >
      <li>
        <a
          href="/topic/bitcoin/"
          class="ud-btn ud-btn-small ud-btn-secondary ud-heading-sm link-group-module--item--MnRKX"
          ><span class="ud-btn-label">Bitcoin</span></a
        >
      </li>
      <li>
        <a
          href="/courses/finance-and-accounting/cryptocurrency-and-blockchain/"
          class="ud-btn ud-btn-small ud-btn-secondary ud-heading-sm link-group-module--item--MnRKX"
          ><span class="ud-btn-label">Cryptocurrency &amp; Blockchain</span></a
        >
      </li>
      <li>
        <a
          href="/courses/finance-and-accounting/"
          class="ud-btn ud-btn-small ud-btn-secondary ud-heading-sm link-group-module--item--MnRKX"
          ><span class="ud-btn-label">Finance &amp; Accounting</span></a
        >
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
@import '~/assets/css/common.css';
.topic-navigation-module--title--HkSbi {
  margin-bottom: 1.6rem;
}
.topic-navigation-module--topic-navigation--wCbdV {
  margin-bottom: 3.2rem;
}

/* link-group-module */

.link-group-module--group--NYihO {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}
.link-group-module--item--MnRKX {
  --ud-btn-color: #303141;
  --ud-btn-border: 1px solid var(--color-gray-300);
  --ud-btn-background-color: #fff;
  --ud-btn-focus-color: #303141;
  --ud-btn-focus-background-color: #f6f7f9;
}
</style>
