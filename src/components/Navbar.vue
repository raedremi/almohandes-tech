<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function openCategory(id){
  router.push(`/category/${id}`)
}
</script>

<template>
  <nav class="navbar">
    <div class="logo">⚙️ المهندس التقني</div>

    <ul class="menu">

  <li @click="router.push('/')">
    الرئيسية
  </li>
  <li @click="router.push('/categories')">
  الأقسام
</li>

  <li @click="openCategory(1)">
    برامج كمبيوتر
  </li>

  <li @click="openCategory(2)">
    برامج محاسبة
  </li>

  <li @click="openCategory(3)">
    دعم فني
  </li>
  <li @click="router.push('/about')">
  من نحن
</li>
<li @click="router.push('/contact')">
  تواصل معنا
</li>

</ul>
  </nav>
</template>

<style scoped>
.navbar{
  background:#0f172a;
  color:white;

  padding:18px 40px;

  display:flex;
  justify-content:space-between;
  align-items:center;

  box-shadow:0 2px 10px rgba(0,0,0,.1);
}

.logo{
  font-size:28px;
  font-weight:800;
}

.menu{
  display:flex;
  align-items:center;
  gap:25px;

  list-style:none;
  margin:0;
  padding:0;
}

.menu li{
  cursor:pointer;

  font-size:17px;
  font-weight:600;

  transition:.3s;
}

.menu li:hover{
  color:#60a5fa;
}
@media (max-width:768px){

  .navbar{
    flex-direction:column;
    gap:15px;
  }

  .menu{
    flex-wrap:wrap;
    justify-content:center;
    gap:15px;
  }

  .logo{
    font-size:22px;
  }

}
</style>
