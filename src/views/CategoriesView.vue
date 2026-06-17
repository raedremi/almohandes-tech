<script setup>
import { categories } from '../data/categories'

import { useRouter } from 'vue-router'

const router = useRouter()

function openCategory(id){
  router.push(`/category/${id}`)
}
</script>

<template>

  <div class="container">

    <h1>الأقسام</h1>

    <div class="cards">

      <div
        class="card"
        v-for="category in categories"
        :key="category.id"
        @click="openCategory(category.id)"
      >
  <div class="icon">
  {{
    category.id === 1
      ? '💻'
      : category.id === 2
      ? '📊'
      : '🛠️'
  }}
</div>
        <h2>
          {{ category.title }}
        </h2>

        <p>
          {{ category.description }}
        </p>

      </div>

    </div>

  </div>

</template>

<style scoped>
.container{
  padding:40px;
}

.cards{
  display:grid;
  grid-template-columns:
  repeat(auto-fit,minmax(300px,1fr));

  gap:25px;
}

.card{
  padding:35px;

  border-radius:20px;

  background:white;

  cursor:pointer;

  text-align:center;

  box-shadow:
  0 5px 20px rgba(0,0,0,.08);

  transition:.3s;
}

.card:hover{
  transform:translateY(-8px);

  box-shadow:
  0 15px 35px rgba(0,0,0,.15);
}

.icon{
  font-size:50px;

  margin-bottom:15px;
}

.card h2{
  color:#0f172a;

  margin-bottom:10px;
}

.card p{
  color:#666;

  font-size:16px;
}
</style>