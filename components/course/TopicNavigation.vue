<template>
  <div class="topic-navigation-module--topic-navigation--wCbdV">
    <h2 class="topic-navigation-module--title--HkSbi mb-4 text-2xl font-bold">
      Explore related topics
    </h2>
    <ul
      role="navigation"
      aria-label="Explore related topics"
      class="m-0 flex list-none flex-wrap gap-2 p-0"
    >
      <li v-for="topic in topics" :key="topic.title">
        <a
          :href="topic.href"
          class="ud-btn-small ud-btn-secondary inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 no-underline transition-colors duration-200 ease-in-out hover:bg-gray-200"
        >
          <span class="ud-btn-label">{{ topic.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
// Topic navigation data
const topics = [
  {
    title: 'Bitcoin',
    href: '/topic/bitcoin/'
  },
  {
    title: 'Cryptocurrency & Blockchain',
    href: '/courses/finance-and-accounting/cryptocurrency-and-blockchain/'
  },
  {
    title: 'Finance & Accounting',
    href: '/courses/finance-and-accounting/'
  }
]
</script>
