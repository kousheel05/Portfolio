document.getElementById("add-link-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const link = document.getElementById("linkInput").value;
  if (link) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link;
    a.textContent = link;
    a.target = "_blank";
    li.appendChild(a);
    document.getElementById("dynamic-links").appendChild(li);
    document.getElementById("linkInput").value = "";
  }
});
