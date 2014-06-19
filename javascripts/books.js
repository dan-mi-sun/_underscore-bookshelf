 var books =[]

function handleResponse(response) {
  _(response.items).each(function (book) {
    var bookObj = new Book(book);
    books.push(bookObj);
    bookObj.add_to_bookshelf();
  });
}

function Book(book_info) {
  this.image_url = book_info.volumeInfo.imageLinks.smallThumbnail;
  this.title = book_info.volumeInfo.title
  this.rating = book_info.volumeInfo.averageRating;
}

Book.prototype.add_to_bookshelf = function() {
  var bookshelf = $(document.getElementById("bookshelf"));
  var img = $(document.createElement("img"));
  img.attr("src", this.image_url);
  img.data("title", this.title);
  bookshelf.append(img);
}
