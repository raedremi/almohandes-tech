<script setup>
import { ref, computed } from 'vue'
import { lessons } from '../data/lessons'
import { useRouter } from 'vue-router'

const router = useRouter()

const search = ref('')

const filteredLessons = computed(() =>
  lessons.filter(x =>
    x.title
      .toLowerCase()
      .includes(search.value.toLowerCase())
  )
)

function openLesson(id){
  router.push(`/lesson/${id}`)
}
</script>

<template>

  <section class="search-box">

    <input
      v-model="search"
      placeholder="ابحث عن برنامج..."
    />

    <div
      v-if="search"
      class="results"
    >

      <div
        class="result"
        v-for="lesson in filteredLessons"
        :key="lesson.id"
        @click="openLesson(lesson.id)"
      >
        {{ lesson.title }}
      </div>

    </div>

  </section>

</template>

<style scoped>
.search-box{
  max-width:600px;
  margin:40px auto;
}

input{
  width:100%;
  padding:15px;

  border:1px solid #ddd;

  border-radius:10px;

  font-size:16px;
}

.results{
  margin-top:10px;

  background:white;

  border-radius:10px;

  overflow:hidden;

  box-shadow:
  0 4px 15px rgba(0,0,0,.08);
}

.result{
  padding:15px;

  cursor:pointer;

  border-bottom:1px solid #eee;
}

.result:hover{
  background:#f8fafc;
}
</style>