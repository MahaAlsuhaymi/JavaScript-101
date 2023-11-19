//الارراي لتخزين الكتب
var books = [];

//إضافة كتاب
function addBook(bookId, bookTitle, author, price, quantity) {
  var book = {
    bookId: bookId,
    bookTitle: bookTitle,
    author: author,
    price: price,
    quantity: quantity
  };
  books.push(book);
}

//تعديل كتاب
function editBook(bookId, newBookTitle, newAuthor, newPrice, newQuantity) {
  for (var i = 0; i < books.length; i++) {
    if (books[i].bookId === bookId) {
      books[i].bookTitle = newBookTitle;
      books[i].author = newAuthor;
      books[i].price = newPrice;
      books[i].quantity = newQuantity;
      break;
    }
  }
}

//حذف كتاب
function deleteBook(bookId) {
  for (var i = 0; i < books.length; i++) {
    if (books[i].bookId === bookId) {
      books.splice(i, 1);
      break;
    }
  }
}

//عرض قائمة الكتب
function displayBooks() {
  for (var i = 0; i < books.length; i++) {
    console.log("Book ID: " + books[i].bookId);
    console.log("Book Title: " + books[i].bookTitle);
    console.log("Author: " + books[i].author);
    console.log("Price: " + books[i].price);
    console.log("Quantity: " + books[i].quantity);
    console.log("____________________________");
  }
}

// البحث عن كتاب
function searchBook(searchKey, searchValue) {
  var result = [];
  for (var i = 0; i < books.length; i++) {
    if (books[i][searchKey] === searchValue) {
      result.push(books[i]);
    }
  }
  return result;
}

//بيع كتاب وإصدار الفاتورة
function sellBook(bookTitle, quantity, money) {
  var book = searchBook("bookTitle", bookTitle)[0];

  if (book && book.quantity >= quantity){
      if(book.price * quantity <= money) {
      book.quantity -= quantity;
      var totalPrice = book.price * quantity;
      money -= totalPrice;
      console.log("------الفاتورة------")
      console.log("تم بيع " + quantity + " نسخة من كتاب " + bookTitle);
      console.log("إجمالي السعر: " + totalPrice);
      console.log("الرصيد المتبقي: " + money);
      } else {
        console.log("عذرا الرصيد لا يكفي لاتمام عملية الشراء");
      }
  } else {
    console.log("عذرا هذا الكتاب غير متوفر");
  }
}

//اضافة الكتب
addBook(1, "Start with why", "Simon Sinek", 80.0, 13);
addBook(2, "But how do it know", "J. Clark Scott", 59.9, 22);
addBook(3, "Clean Code", "Robert Cecil Martin", 50.0, 5);
addBook(4, "Zero to One", "Peter Thiel", 45.0, 12);
addBook(5, "You don't know JS", "Kyle Simpson", 39.9, 9);

//عرض الكتب
console.log("قائمة الكتب:");
displayBooks();

//تعديل الكتب
editBook(1, "To Kill a Mockingbird", "Harper Lee", 56, 17);

//عرض الكتب بعد التعديل
console.log("قائمة الكتب بعد التعديل:");
displayBooks();

//حذف كتاب
deleteBook(2);

//عرض الكتب بعد الحذف
console.log("قائمة الكتب بعد الحذف:");
displayBooks();

//البحث عن كتاب
var searchResult = searchBook("Author", "Peter Thiel");
console.log("نتيجة البحث:");
console.log(searchResult); //عرض نتيجةالبحث

//بيع كتاب
sellBook("You don't know JS", 3, 150);