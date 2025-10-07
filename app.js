function addToCart(product, price) {
  document.getElementById('productInput').value = product;
  document.getElementById('amountInput').value = price;
  alert(product + " به سبد خرید اضافه شد.");
}
function handlePayment() {
  console.log("🔒 Payment gateway coming soon...");
  alert("درگاه پرداخت به‌زودی فعال می‌شود.");
}
document.getElementById('checkoutForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert("سفارش شما ثبت شد. رسید به ایمیل ارسال می‌شود.");
});