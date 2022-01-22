const addPersonalReview = async (event) => {
        console.log("add personal review")
        event.preventDefault();


        const pantry_name = document.querySelector("#pantry-name").value.trim();


        const pantry_address = document.querySelector("#pantry-address").value.trim();
        const comment = document.querySelector("#pantry-comment").value.trim();


        if (pantry_name == null) {
                alert("Must enter in pantry name")
                return;
        } else {
                if (pantry_name && pantry_address && comment) {
                        const response = await fetch('/api/reviews', {
                                method: 'POST',
                                body: JSON.stringify({ pantry_name, pantry_address, comment }),
                                headers: { 'Content-Type': 'application/json' },
                        });

                        if (response.ok) {
                                document.location.replace('/dashboard');
                        } else {
                                alert(response.statusText);
                        }
                }
        }
}

//function to retrieve the comments/reviews based on the user (will be done in route file)


const displayReviews = async () => {
        const reviewData = await fetch("/api/reviews") 
                console.log("look here please work", reviewData)
        
}









document.querySelector('#pf').addEventListener('submit', addPersonalReview);



displayReviews();