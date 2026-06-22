<template>
  <section class="hero">

    <div class="overlay">

      <h1>
المهندس التقني للمعلوماتية
</h1>


<p>
شروحات تقنية وبرامج كمبيوتر وبرامج محاسبية ودعم فني للمستخدم العربي
</p>

 
    </div>

  </section>
</template>

<style scoped>
.hero{
  height:500px;

  background-image:
  linear-gradient(
    rgba(15,23,42,.75),
    rgba(15,23,42,.75)
  ),
  url('/images/hero.jpg');

  background-size:cover;
  background-position:center;

  display:flex;
  justify-content:center;
  align-items:center;

  text-align:center;
}

.overlay{
  color:white;
  max-width:800px;
  padding:20px;
}

.overlay h1{
  color:white;
  font-size:35px;
  font-weight:800;
  margin-bottom:50px;
}

.overlay p{
  font-size:24px;
  line-height:1.8;
  margin-bottom:30px;
}

.overlay button{
  background:#2563eb;

  color:white;

  border:none;

  padding:16px 35px;

  border-radius:12px;

  font-size:18px;

  cursor:pointer;

  transition:.3s;
}

.overlay button:hover{
  transform:translateY(-3px);
}
@media (max-width:768px){

  .hero{
    height:450px;
  }

  .overlay h1{
    font-size:48px;
    line-height:1.1;
  }

  .overlay p{
    font-size:20px;
  }

}
</style>
