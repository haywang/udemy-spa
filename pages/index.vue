<template>
  <div>
    <!-- 课程顶部信息 -->
    <TopContainer />

    <!-- 这里可以添加更多的课程内容部分 -->
    <div class="container mx-auto px-4 py-8">
      <CourseDetail />
    </div>
  </div>
</template>

<script setup>
import TopContainer from '~/components/course/TopContainer.vue'
import CourseDetail from '~/components/course/CourseDetail.vue'
definePageMeta({
  layout: 'default'
})
</script>
