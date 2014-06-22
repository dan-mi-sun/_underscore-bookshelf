 var books =[]

function handleResponse(response) {
  _(response.items).each(function (book) {
    var bookObj = new Book(book);
    books.push(bookObj);
    bookObj.addToBookshelf();
    bookObj.addStar();
  });
}

function Book(book_info) {
  this.image_url = book_info.volumeInfo.imageLinks.smallThumbnail;
  this.title = book_info.volumeInfo.title
  this.rating = book_info.volumeInfo.averageRating;
}

Book.prototype.addToBookshelf = function() {
  var bookshelf = $(document.getElementById("bookshelf"));
  var book_container = $(document.createElement("div"));
  book_container.addClass('book-container');
  var img = $(document.createElement("img"));
  img.attr("src", this.image_url);
  img.data("title", this.title);
  book_container.append(img);
  bookshelf.append(book_container);
}

Book.prototype.addStar = function () {
  var star = $(document.createElement("img"));
  var star_container = $(document.createElement("div"));
  star_container.addClass('star-container');
  star.addClass('star');
  star.data('title', 'star');
  star.attr({src: 'img/star.png',
            height: '30px',
            width: '30px'});
  star_container.append(star);
  $(".book-container").append(star_container);
}
