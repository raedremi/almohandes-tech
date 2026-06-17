<template>
  <footer class="footer">

    <h2>المهندس التقني</h2>

    <p>
      شروحات وبرامج ودعم فني وحلول تقنية.
    </p>

    <div class="links">
      <span>برامج كمبيوتر</span>
      <span>برامج محاسبية</span>
      <span>الدعم الفني</span>
    </div>

    <p class="copy">
      © 2026 جميع الحقوق محفوظة
    </p>

  </footer>
</template>

<style scoped>
.footer{
  background:#0f172a;
  color:white;

  padding:50px 20px;

  text-align:center;
}

.footer h2{
  color:white;
  margin-bottom:15px;
}

.links{
  display:flex;
  justify-content:center;
  gap:25px;

  margin:25px 0;

  flex-wrap:wrap;
}

.copy{
  opacity:.8;
}
</style>