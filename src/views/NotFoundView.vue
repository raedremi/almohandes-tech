<template>

  <div class="notfound">

    <h1>404</h1>

    <h2>الصفحة غير موجودة</h2>

    <button
      @click="$router.push('/')"
    >
      العودة للرئيسية
    </button>

  </div>

</template>

<style scoped>
.notfound{
  text-align:center;

  padding:100px 20px;
}

.notfound h1{
  font-size:100px;

  margin-bottom:20px;
}

.notfound button{
  border:none;

  padding:12px 20px;

  border-radius:10px;

  cursor:pointer;

  background:#1e293b;

  color:white;
}
</style>