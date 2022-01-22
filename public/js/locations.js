// async function newFormHandler(event) {
//     event.preventDefault();
  
//     const title = document.querySelector('input[name="post-title"]').value;
//     const content = document.querySelector('input[name="content"]').value;
  
//     const response = await fetch(`/api/`, {
//       method: 'POST',
//       body: JSON.stringify({
//         title,
//         content
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
  
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   };

  function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  
// document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);