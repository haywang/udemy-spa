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
          class="text-sm font-semibold transition-colors duration-200 hover:bg-gray-50"
        >
          <span>{{
            isAllExpanded ? 'Collapse all sections' : 'Expand all sections'
          }}</span>
        </button>
      </div>

      <!-- Course Sections -->
      <div>
        <div
          v-for="section in courseData.sections"
          :key="section.id"
          class="border-b last:border-b-0"
        >
          <span
            :id="'accordion-panel-' + section.id"
            data-type="checkbox"
            :data-checked="expandedSections.includes(section.id)"
            style="display: none"
          ></span>

          <!-- Section Header -->
          <div
            class="flex w-full cursor-pointer items-center justify-between p-4 transition-colors duration-200 hover:bg-gray-50"
            :class="{ 'bg-gray-50': expandedSections.includes(section.id) }"
            @click="toggleSection(section.id)"
          >
            <h3 class="flex-1">
              <button
                type="button"
                :aria-expanded="expandedSections.includes(section.id)"
                class="w-full text-left"
              >
                <span class="text-base font-medium">{{ section.title }}</span>
                <span class="ml-2 hidden text-sm text-gray-600 md:inline-block">
                  {{ section.content }}
                </span>
              </button>
            </h3>
            <svg
              aria-hidden="true"
              focusable="false"
              class="h-5 w-5 transform text-gray-600 transition-transform duration-200"
              :class="{ 'rotate-180': expandedSections.includes(section.id) }"
            >
              <use xlink:href="#icon-expand"></use>
            </svg>
          </div>

          <!-- Section Content -->
          <div v-show="expandedSections.includes(section.id)" role="group">
            <ul class="m-0 list-none divide-y p-0">
              <li v-for="(lecture, idx) in section.lectures" :key="idx">
                <div
                  class="flex items-start p-4 transition-colors duration-200 hover:bg-gray-50"
                  :class="{ 'text-purple-600': lecture.isPreviewable }"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    class="mt-1 mr-4 h-4 w-4 flex-shrink-0"
                  >
                    <use
                      :xlink:href="
                        lecture.type === 'video'
                          ? '#icon-video'
                          : '#icon-article'
                      "
                    ></use>
                  </svg>
                  <div class="flex-1">
                    <div class="flex justify-between">
                      <div>
                        <span v-if="!lecture.isPreviewable">
                          {{ lecture.title }}
                        </span>
                        <button
                          v-else
                          type="button"
                          class="text-purple-600 hover:text-purple-700"
                        >
                          <span>{{ lecture.title }}</span>
                        </button>
                      </div>
                      <div class="hidden text-sm text-gray-500 md:block">
                        <span
                          v-if="lecture.isPreviewable"
                          class="mr-2 text-purple-600"
                          >Preview</span
                        >
                        <span>{{ lecture.duration }}</span>
                      </div>
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
