// تبديل إظهار كلمة المرور
document.getElementById('togglePw').addEventListener('click', function(){
  const pw = document.getElementById('password');
  if(pw.type === 'password'){ pw.type = 'text'; this.textContent = '🙈'; }
  else { pw.type = 'password'; this.textContent = '👁️'; }
});

// نموذج تسجيل (مؤقت — إذا تبي حقيقي نربطه بقاعدة بيانات)
document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const u = document.getElementById('username').value.trim();
  if(!u){ alert('ادخل اسم المستخدم أو البريد'); return; }
  // هنا تقدر تبعث بيانات إلى سيرفرك عبر fetch
  alert('تم محاكاة تسجيل الدخول (هذا نموذج تجريبي).');
});
