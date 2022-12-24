let slideIndex = 0; //Khởi tạo vị trí index cho thẻ nào xuất hiện đầu tiên khi load trang lên
showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

function showSlides(n) {
    console.log(slideIndex);
    let i;
    let slides = document.getElementsByClassName("mySlides");
    /**Danh sách slides trả về một mảng các danh sách thẻ có chứa class mySlides */
    console.log(slides);
    // let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 } // Nếu như đã chạy hết slide và để vị trí cuối cùng , thì sẽ quay lại từ đầu
    if (n < 1) { slideIndex = slides.length }//Ngược lại nếu như nhỏ hơn 1 thì sẽ chạy đến vị trí cuối cùng của mảng
    for (i = 0; i < slides.length; i++) { // duyệt mảng cho tất cả các slides biến mất
        slides[i].style.display = "none";
    }
    slideIndex++; // tăng index lên
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6000); // Change image every 2 seconds
}

// const showSlides = (index) =>{
//     //DOM lấy ra toàn bộ các thẻ có chứa class name mySlides
//     let slides = document.getElementsByClassName("mySlides");
//     //Kiểm tra xem index có lớn hơn vị trí cuối cùng của mảng hay không
//     if(index > slides.length) {slideIndex = 1 } // tại sao slideIndex = 1 ? => nếu không set lại thì sẽ chạy vượt qua giới hạn mảng 
//     if(index < slides.length) {slideIndex = slides.length}
// }
