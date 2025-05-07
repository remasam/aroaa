
// يمكن إضافة وظائف إضافية مثل إرسال النموذج أو تفاعل المستخدم.
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("تم إرسال الرسالة بنجاح!");
});
