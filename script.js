// script.js

// Hàm tìm kiếm khóa học
function searchCourses() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(card => {
        const courseTitle = card.querySelector('h2').innerText.toLowerCase();
        // Kiểm tra xem tiêu đề khóa học có chứa từ khóa tìm kiếm không
        if (courseTitle.includes(searchInput)) {
            card.style.display = 'block'; // Hiển thị nếu có kết quả
        } else {
            card.style.display = 'none'; // Ẩn nếu không có kết quả
        }
    });
}

// Hàm reset
function resetFilters() {
    const courseCards = document.querySelectorAll('.course-card');
    const searchInput = document.getElementById('search');

    // Khôi phục trạng thái ban đầu cho tất cả khóa học
    courseCards.forEach(card => {
        card.style.display = 'block'; // Hiển thị tất cả khóa học
    });

    // Xóa nội dung ô tìm kiếm
    searchInput.value = '';
}

// Gán sự kiện cho nút tìm kiếm
document.querySelector('.search-button').addEventListener('click', searchCourses);

// Gán sự kiện cho nút reset
document.getElementById('reset').addEventListener('click', resetFilters);

// Gán sự kiện cho ô tìm kiếm để tìm kiếm khi người dùng nhấn Enter
document.getElementById('search').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchCourses();
    }
});
