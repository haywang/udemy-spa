<template>
  <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
    <span id="objective" class="invisible relative -top-20 block"></span>
    <div data-purpose="course-curriculum">
      <!-- Course Curriculum Header -->
      <h2 class="mb-4 text-2xl font-bold">Course content</h2>
      <div class="mb-4 flex items-center justify-between">
        <div class="text-sm" data-purpose="curriculum-stats">
          <span>
            {{ courseData.totalSections }} sections •
            {{ courseData.totalLectures }} lectures •
            <span>{{ courseData.totalLength }}</span> total length
          </span>
        </div>
        <button
          type="button"
          @click="expandAll"
          class="text-sm font-semibold text-purple-600 hover:text-purple-700"
        >
          <span>{{
            isAllExpanded ? 'Collapse all sections' : 'Expand all sections'
          }}</span>
        </button>
      </div>

      <!-- Course Sections -->
      <div class="space-y-2">
        <div
          v-for="section in courseData.sections"
          :key="section.id"
          class="rounded-lg bg-gray-50"
        >
          <span
            :id="'accordion-panel-' + section.id"
            data-type="checkbox"
            :data-checked="expandedSections.includes(section.id)"
            style="display: none"
          ></span>

          <!-- Section Header -->
          <div
            class="flex w-full cursor-pointer items-center p-4 transition-colors duration-200 hover:bg-gray-100"
            :class="{ 'bg-gray-100': expandedSections.includes(section.id) }"
            @click="toggleSection(section.id)"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              class="h-5 w-5 flex-shrink-0 text-gray-600 transition-transform duration-200"
              :class="{ 'rotate-180': expandedSections.includes(section.id) }"
            >
              <use xlink:href="#icon-expand"></use>
            </svg>
            <div class="ml-4 flex flex-1 items-center justify-between">
              <div class="flex-1">
                <h3 class="text-base font-medium">{{ section.title }}</h3>
                <p class="mt-1 text-sm text-gray-600">{{ section.content }}</p>
              </div>
              <div class="ml-4 text-sm text-gray-600">
                {{ section.lectures.length }} lectures
              </div>
            </div>
          </div>

          <!-- Section Content -->
          <div
            v-show="expandedSections.includes(section.id)"
            role="group"
            class="border-t border-gray-200"
          >
            <ul class="divide-y divide-gray-200">
              <li v-for="(lecture, idx) in section.lectures" :key="idx">
                <div class="flex items-center px-4 py-3 hover:bg-gray-100">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    class="h-4 w-4 flex-shrink-0 text-gray-400"
                  >
                    <use
                      :xlink:href="
                        lecture.type === 'video'
                          ? '#icon-video'
                          : '#icon-article'
                      "
                    ></use>
                  </svg>
                  <div class="ml-4 flex flex-1 items-center justify-between">
                    <div>
                      <span
                        :class="{
                          'text-purple-600 hover:text-purple-700':
                            lecture.isPreviewable
                        }"
                        class="text-sm"
                      >
                        {{ lecture.title }}
                      </span>
                    </div>
                    <div class="ml-4 flex items-center space-x-4 text-sm">
                      <span
                        v-if="lecture.isPreviewable"
                        class="text-purple-600"
                      >
                        Preview
                      </span>
                      <span class="text-gray-500">{{ lecture.duration }}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import courseData from '@/data/courseContent.json'

const expandedSections = ref([1]) // First section expanded by default
const isAllExpanded = computed(() => {
  return courseData.sections.every((section) =>
    expandedSections.value.includes(section.id)
  )
})

const toggleSection = (sectionId) => {
  const index = expandedSections.value.indexOf(sectionId)
  if (index === -1) {
    expandedSections.value.push(sectionId)
  } else {
    expandedSections.value.splice(index, 1)
  }
}

const expandAll = () => {
  if (isAllExpanded.value) {
    expandedSections.value = []
  } else {
    expandedSections.value = courseData.sections.map((section) => section.id)
  }
}
</script>
