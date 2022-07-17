const CollegeName = document.getElementById("clg-name").value;
const Location = document.getElementById("location").value;
const Name = document.getElementById("name").value;
const GenerateCard = document.getElementById("generateCard");

GenerateCard.addeventListener("click", gen);

function generateCard() {
    const Name = document.getElementById("name").value;
    const CollegeName = document.getElementById("clg-name").value;
    const Location = document.getElementById("location").value;

    const name = document.getElementById("Name");
    const collegeName = document.getElementById("ClgName");
    const location = document.getElementById("Location");
    name.innerHTML = Name;
    collegeName.innerHTML = CollegeName;
    location.innerHTML = Location;
}

function loadImage(event) {
    const Image = document.getElementById("displayedImg");
    Image.src = URL.createObjectURL(event.target.files[0]);
}