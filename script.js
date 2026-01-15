const url = "https://vijay-fan-club01-default-rtdb.firebaseio.com";

// increment counter
fetch(url, {
  method: "POST",
  body: JSON.stringify({ visit: true })
});

// read counter
fetch(url)
  .then(res => res.json())
  .then(data => {
    document.getElementById("count").innerText =
      data ? Object.keys(data).length : 1;
  });
