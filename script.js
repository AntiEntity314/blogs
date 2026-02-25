fetch('blogs.json')
    .then(response => response.json())
    .then(data =>{
        document.getElementById("Blog1title").textContent = data.title1;
        document.getElementById("Blog1content").textContent = data.content1;
    }
    )