<script setup>
import { useRoute } from 'vue-router'
// import { categories, lessons } from '../data/posts'
import { categories } from '../data/categories'
import { lessons } from '../data/lessons'
import Footer from '../components/Footer.vue'
const route = useRoute()

const category = categories.find(
  x => x.id == route.params.id
)

const categoryLessons = lessons.filter(
  x => x.categoryId == route.params.id
)
</script>

<template>

  <div class="container">

    <h1>
      {{ category?.title }}
    </h1>

    <p>
      {{ category?.description }}
    </p>

    <div class="cards">

      <div
        class="card"
        v-for="lesson in categoryLessons"
        :key="lesson.id"
      >
        <img
          :src="lesson.image"
          :alt="lesson.title"
        />

        <h3>
          {{ lesson.title }}
        </h3>

        <p>
          {{ lesson.shortDescription }}
        </p>
        <div class="buttons">

  <a
    :href="lesson.download"
    target="_blank"
    class="download-btn"
  >
    تحميل البرنامج
  </a>

  <!-- <a
    :href="lesson.youtube"
    target="_blank"
    class="video-btn"
  >
    مشاهدة الشرح
  </a> -->
<a
  v-if="lesson.showVideo"
  :href="lesson.youtube"
  target="_blank"
  class="video-btn"
>
  مشاهدة الشرح
</a>

</div>
      </div>

    </div>

  </div>
<Footer />
</template>

<style scoped>

.container{
  max-width:1200px;
  margin:auto;
  padding:20px;
}

.cards{
  display:grid;

  grid-template-columns:
  repeat(auto-fit,minmax(280px,1fr));

  gap:25px;

  margin-top:30px;
}

.card{
  background:white;

  border-radius:15px;

  overflow:hidden;

  box-shadow:
  0 4px 15px rgba(0,0,0,.08);

  transition:.3s;
}

.card:hover{
  transform:translateY(-5px);

  box-shadow:
  0 8px 20px rgba(0,0,0,.15);
}

.card img{
  width:100%;
  height:220px;
  object-fit: cover;

  padding:15px;

  background:#fafafa;
}

.card h3{
  font-size:26px;

  font-weight:700;

  color:#0f172a;

  margin:15px 0;
}

.card p{
  color:#666;

  line-height:1.8;

  padding:0 20px;

  min-height:70px;
}

.buttons{
  display:flex;
  gap:10px;
  justify-content:center;
  margin-top:15px;
}

/* .download-btn,
.video-btn{
  padding:10px 18px;
  border-radius:10px;
  text-decoration:none;
  color:white;
  font-weight:700;
} */
.download-btn,
.video-btn{
  padding:12px 20px;

  border-radius:12px;

  font-size:15px;
color:white;
  font-weight:700;
}
.download-btn{
  background:#0f172a;
}

.video-btn{
  background:#dc2626;
}
.lesson-btn{
  margin:15px;

  background:#1e293b;

  color:white;

  border:none;

  padding:10px 15px;

  border-radius:8px;

  cursor:pointer;
}
</style>