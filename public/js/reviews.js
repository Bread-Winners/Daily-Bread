const addPersonalReview = async (event) => {
        event.preventDefault();


        const pantry_name = document.querySelector("#pantry-name").value.trim();


        const pantry_address = document.querySelector("#pantry-address").value.trim();
        const comment = document.querySelector("#pantry-comment").value.trim();
        const tableBody = document.querySelector("#example");

        var example = document.createElement("h4")
        example.textContent = pantry_name.value
        tableBody.appendChild(example);

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

document.querySelector('#pf').addEventListener('submit', addPersonalReview);