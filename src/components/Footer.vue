<template>
  <footer class="footer">

    <h2>المهندس التقني للمعلوماتية</h2>

    <p>
      شروحات وبرامج ودعم فني وحلول تقنية للمستخدم العربي.
    </p>

    <div class="links">
      <span>برامج كمبيوتر</span>
      <span>برامج محاسبية</span>
      <span>الدعم الفني</span>
    </div>

    <div class="contact-links">

      
      <a
        href="https://wa.me/966596276143"
        target="_blank"
      >
       واتساب فرع السعودية :00966596276143
      </a>
      <a
        href="https://wa.me/963982188637"
        target="_blank"
      >
        واتساب فرع سوريا:00963982188637 
      </a>


       <a
        href="https://wa.me/971507684824"
        target="_blank"
      >
       واتساب فرع الامارات :00971507684824
      </a>

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

.contact-links{
  display:flex;
  flex-direction:column;
  gap:10px;

  margin-bottom:25px;
}

.contact-links a{
  color:white;
  text-decoration:none;
}

.contact-links a:hover{
  text-decoration:underline;
}
</style>