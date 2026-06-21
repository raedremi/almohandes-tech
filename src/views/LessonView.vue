<script setup>
import { useRoute } from 'vue-router'
import { lessons } from '../data/lessons'
import Footer from '../components/Footer.vue'
const route = useRoute()

const lesson = lessons.find(
  x => x.id == route.params.id
)
</script>

<template>

  <div v-if="lesson" class="lesson-page">

    <button
      class="back-btn"
      @click="$router.back()"
    >
      ← رجوع
    </button>

    <img
      :src="lesson.image"
      :alt="lesson.title"
      class="lesson-image"
    />

    <h1>
      {{ lesson.title }}
    </h1>

    <p class="lesson-details">
      {{ lesson.details }}
    </p>

    <div class="actions">

 <a
  v-if="lesson.showVideo"
  :href="lesson.youtube"
  target="_blank"
  class="video-btn"
>
  مشاهدة الشرح
</a>

      <a
        :href="lesson.download"
        target="_blank"
        class="download-btn"
      >
        تحميل البرنامج
      </a>

    </div>

  </div>
<Footer />
</template>
<style scoped>
.lesson-page{
  max-width:900px;
  margin:auto;
  padding:20px;
}

.lesson-page img{
  width:100%;
  max-height:400px;
  object-fit:cover;
}
.lesson-page{
  max-width:1000px;
  margin:auto;
  padding:30px;
}

.lesson-image{
  max-width:500px;
  width:100%;

  margin:auto;

  display:block;
}

.lesson-details{
  font-size:18px;
  line-height:1.8;

  margin:25px 0;
}

.actions{
  display:flex;
  gap:15px;

  flex-wrap:wrap;
}

.video-btn,
.download-btn{
  text-decoration:none;

  padding:12px 20px;

  border-radius:10px;

  color:white;

  font-weight:bold;
}

.video-btn{
  background:#dc2626;
}

.download-btn{
  background:#1e293b;
}

.back-btn{
  margin-bottom:20px;

  border:none;

  background:#f1f5f9;

  padding:10px 15px;

  border-radius:8px;

  cursor:pointer;
}
</style>