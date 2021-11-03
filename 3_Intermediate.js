
/********************
INTERMEDIATE 
*********************/

// 1. Write a function that reverses a string. Manually reverse the string, do not use the built in reverse() function
function reverseString(string){

}

// 2. Given the array below, find the mean value. The function contents MUST ONLY BE ONE LINE
const arr = [10, 13, 12, 11, 11, 10, 10, 9, 11, 8]

function mean(data = arr) {
  
}

// Refer to this Library array of objects for the next few questions
const lib = [   
  {
      title: 'Walter Isaacson',
      author: 'Steve Jobs',
      libraryID: 4264,
      hasRead: false
  },
  {
      title:  'The Road Ahead',
      author: 'Bill Gates',
      libraryID: 1254,
      hasRead: true
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryID: 3245,
      hasRead: false
  },
  {
    title:  'How to Avoid a Climate Disaster',
    author: 'Bill Gates',
    libraryID: 3328,
    hasRead: true
  },
];

// 3. Check each book to see if you have read the book. 
//    If the book has been read, display "I already read (book title) by (author)" otherwise, display "I haven't read (book title) by (author)"
function checkBooksThatIReadAlready(library = lib){

}


/* 4. Group books by author should output:

{
  author: 'Bill Gates',
  books: [{ title ... } ... so on and so forth]
}

*/
function groupByAuthor(lib = library){
  
}

//IGNORE THIS
module.exports = { reverseString, mean, checkBooksThatIReadAlready, groupByAuthor }