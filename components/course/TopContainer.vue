<template>
  <div data-testid="top-container" class="bg-gray-900 text-white">
    <div class="relative">
      <div class="container mx-auto px-4">
        <!-- 面包屑导航 -->
        <CourseBreadcrumb :categories="breadcrumbData" />

        <!-- 课程预览 -->
        <CoursePreview :previewImage="previewImage" />

        <!-- 课程信息 -->
        <CourseInfo
          :title="courseData.title"
          :headline="courseData.headline"
          :rating="courseData.rating"
          :studentsCount="courseData.studentsCount"
          :instructor="courseData.instructor"
          :lastUpdated="courseData.lastUpdated"
          :language="courseData.language"
          :caption="courseData.caption"
        />

        <!-- 购买区域 -->
        <CoursePurchase />
      </div>
    </div>
  </div>
</template>

<script setup>
const breadcrumbData = [
  { name: 'Finance & Accounting', link: '/courses/finance-and-accounting/' },
  {
    name: 'Cryptocurrency & Blockchain',
    link: '/courses/finance-and-accounting/cryptocurrency-and-blockchain/'
  },
  { name: 'Bitcoin', link: '/topic/bitcoin/' }
]

const previewImage = {
  src: 'https://img-c.udemycdn.com/course/240x135/3524274_d5ed_5.jpg',
  srcSet: {
    '240w': 'https://img-c.udemycdn.com/course/240x135/3524274_d5ed_5.jpg',
    '480w': 'https://img-c.udemycdn.com/course/480x270/3524274_d5ed_5.jpg',
    '750w': 'https://img-c.udemycdn.com/course/750x422/3524274_d5ed_5.jpg'
  }
}

const courseData = {
  title: 'Coinbase Come Comprare Bitcoin e Guadagnare™?',
  headline:
    'Come Acquistare e Guadagnare Facilmente Bitcoin Su Coinbase Corso Online Completo In Italiano',
  rating: {
    score: 4.7,
    count: 50
  },
  studentsCount: 1127,
  instructor: 'ACI69 | Trading ™',
  lastUpdated: '3/2025',
  language: 'Italian',
  caption: 'Italian [Auto]'
}
</script>
