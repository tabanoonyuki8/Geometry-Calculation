document.getElementById('btn-blog').addEventListener("click",function(){
   const showPara= document.getElementById("btn-blog");
   showPara.innerHTML=`
   
   <h3>what is DOM? purpose of DOM?</h3>
   <br>
   <p class="text-2xl font-semibold">DOM stands for "Document Object Model." It is a programming interface provided by web browsers that allows scripts (typically written in JavaScript) to dynamically access and manipulate the content, structure, and style of HTML documents.

   In simpler terms, the DOM is a representation of a web page's structure that allows you to interact with and modify the various elements and content on the page. Each element in an HTML document, such as headings, paragraphs, images, forms, etc., is represented as an object in the DOM. These objects can be accessed, modified, added, or removed using JavaScript, enabling you to create dynamic and interactive web applications.
   
   </p>
   <br><br><br>
   <h3>What is callback function?</h3>
   <br>
   <p class="text-2xl font-semibold">A callback function is a function that is passed as an argument to another function and is intended to be executed after a certain task has been completed or an event has occurred. Callback functions are commonly used in asynchronous programming to handle actions that might take some time to complete, such as fetching data from a server, reading a file, or waiting for user input. They allow you to define what should happen next once a specific task is finished.</p>
   `
})