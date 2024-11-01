// Tạo nút "Back to Top"
const button = document.createElement('button');
button.innerText = '⬆️';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.padding = '10px';
button.style.fontSize = '20px';
button.style.backgroundColor = '#FF0000';
button.style.color = '#FFFFFF';
button.style.border = 'none';
button.style.borderRadius = '50%';
button.style.cursor = 'pointer';
button.style.display = 'none'; // Ẩn nút khi chưa cần thiết

// Thêm nút vào trang
document.body.appendChild(button);

// Lắng nghe sự kiện cuộn để hiển thị nút khi cần thiết
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Nếu cuộn xuống quá 300px
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

// Thêm sự kiện click cho nút
button.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
