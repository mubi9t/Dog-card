let hearts = document.querySelectorAll(".heart");
hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        if (heart.style.fill === "rgb(245, 90, 116)") {
            heart.style.fill = ""
        } else {
            heart.style.fill = "rgb(245, 90, 116)"
        }
    })
})
let dog1 = document.querySelector(".dog1 .dog-picture")
let dog2 = document.querySelector(".dog2 .dog-picture")
let dog3 = document.querySelector(".dog3 .dog-picture")
let dog4 = document.querySelector(".dog4 .dog-picture")
let dog5 = document.querySelector(".dog5 .dog-picture")
let detail = document.querySelector(".container2")
let deatil1 = document.querySelector(".container")
let image = document.querySelector(".image-2")
let back = document.querySelector(".back")
let heading = document.querySelector(".top1 h1")
let subheading = document.querySelector(".top1 p")
let distance = document.querySelector(".top2 h4")
dog1.addEventListener('click', () => {
    detail.style.display = "block"
    deatil1.style.display = "none"
    heading.innerHTML = "Lola"
    subheading.innerHTML = "Jack Russell Terrier"
    distance.innerHTML = "2.5 miles"
    image.style.backgroundImage = "url('one.jfif')"
})
dog2.addEventListener('click', () => {
    detail.style.display = "block"
    deatil1.style.display = "none"
    image.style.backgroundImage = "url('labra.jfif')"
    heading.innerHTML = "Baily"
    distance.innerHTML = "10 miles"
})
dog3.addEventListener('click', () => {
    detail.style.display = "block"
    deatil1.style.display = "none"
    image.style.backgroundImage = "url('rot.webp')"
    heading.innerHTML = "Buddy"
    subheading.innerHTML = "Border colie"
    distance.innerHTML = "33 miles"
})
dog4.addEventListener('click', () => {
    detail.style.display = "block"
    deatil1.style.display = "none"
    image.style.backgroundImage = "url('ger.jfif')";
    heading.innerHTML = "Tucker"
    subheading.innerHTML = "German shepherd"
    distance.innerHTML = "64 miles"
})
dog5.addEventListener('click', () => {
    detail.style.display = "block"
    deatil1.style.display = "none"
    image.style.backgroundImage = "url('labra.jfif')"
    heading.innerHTML = "Buddy"
    subheading.innerHTML = "Border colie"
    distance.innerHTML = "33 miles"
})
back.addEventListener('click', () => {
    detail.style.display = "none"
    deatil1.style.display = "block"
    back.style.cursor = "pointer"
})

