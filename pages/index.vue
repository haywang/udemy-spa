<template>
  <div>
    <!-- 课程顶部信息 -->
    <TopContainer />

    <!-- 这里可以添加更多的课程内容部分 -->
    <div class="container mx-auto px-4 py-8">
      <!-- 后续可以添加其他部分，如：
      - 课程大纲
      - 课程要求
      - 讲师信息
      - 学生评价
      等等
      -->
    </div>
  </div>
</template>

<script setup>
import TopContainer from '~/components/course/TopContainer.vue'
definePageMeta({
  layout: 'default'
})
</script>
