<template>
  <!-- Course Header Section -->
  <div class="bg-white shadow-sm">
    <div class="container mx-auto px-4 py-8">
      <h1 class="mb-4 text-3xl font-bold">
        Complete Web Development Course 2024
      </h1>
      <p class="mb-4 text-gray-600">
        Learn web development from scratch with practical projects and modern
        technologies
      </p>
      <div class="mb-4 flex items-center space-x-4">
        <span class="text-yellow-400">★★★★★</span>
        <span class="text-gray-600">(4.8 average rating)</span>
        <span class="text-gray-600">10,234 students</span>
      </div>
      <div class="flex items-center space-x-4">
        <img
          src="https://placehold.co/40x40"
          alt="Instructor"
          class="rounded-full"
        />
        <span class="text-gray-700">Created by John Doe</span>
      </div>
    </div>
  </div>

  <!-- Main Content Section -->
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <!-- Left Column - Course Content -->
      <div class="lg:col-span-2">
        <!-- What you'll learn Section -->
        <CourseObjectives />
        <!-- Topic Navigation Section -->
        <TopicNavigation />
        <!-- Course Content Section -->
        <CourseCurriculum />

        <!-- Requirements Section -->
        <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
          <h2 class="mb-4 text-2xl font-bold">Requirements</h2>
          <ul class="list-inside list-disc space-y-2 text-gray-700">
            <li>Basic understanding of HTML and CSS</li>
            <li>A computer with internet access</li>
            <!-- Add more requirements here -->
          </ul>
        </div>

        <!-- Description Section -->
        <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
          <h2 class="mb-4 text-2xl font-bold">Description</h2>
          <div class="prose max-w-none">
            <p class="text-gray-700">
              This comprehensive web development course is designed to take you
              from beginner to professional. You'll learn all the tools and
              technologies needed to build modern, responsive websites.
            </p>
            <!-- Add more description content here -->
          </div>
        </div>
      </div>

      <!-- Right Column - Course Card -->
      <div class="lg:col-span-1">
        <div class="sticky top-4 rounded-lg bg-white p-6 shadow-sm">
          <div class="mb-4">
            <img
              src="https://placehold.co/400x225"
              alt="Course Preview"
              class="w-full rounded-lg"
            />
          </div>
          <div class="mb-4 text-3xl font-bold">$94.99</div>
          <button
            class="mb-4 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Add to cart
          </button>
          <button
            class="w-full rounded-lg border border-blue-600 py-3 font-semibold text-blue-600 hover:bg-blue-50"
          >
            Buy now
          </button>
          <div class="mt-4 text-sm text-gray-600">
            <p>30-Day Money-Back Guarantee</p>
            <p>Full Lifetime Access</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CourseObjectives from './CourseObjectives.vue'
import TopicNavigation from './TopicNavigation.vue'
import CourseCurriculum from './CourseCurriculum.vue'
</script>

<style scoped>
/* Any additional custom styles can be added here */
</style>
