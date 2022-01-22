// async function newFormHandler(event) {
//     event.preventDefault();
  
//     const response = fetch(`/api/locations`, {
//         method: 'GET',
//         body: JSON.stringify({
//             address,
//             pantry_name,
//             content,
//             city,
//             zip,
//             state,
//             hours_op,
//             phone
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         console.log(response);
//     } else {
//         alert(response.statusText);
//     }
//   };
  
// document.querySelector('#search-form').addEventListener('submit', newFormHandler);