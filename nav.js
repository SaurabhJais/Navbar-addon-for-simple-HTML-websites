let n4 = document.querySelectorAll(".n4")
let n5 = document.querySelectorAll(".n5")

let i1 = document.querySelectorAll("#i1")
let i2 = document.querySelectorAll("#i2")
let i3 = document.querySelectorAll("#i3")
let i4 = document.querySelectorAll("#i4")
let i5 = document.querySelectorAll("#i5")

let ids = [i1, i2, i3, i4, i5]


let doResponsive = () => {
    let width = window.innerWidth
    if (width > 990) {
        ids.forEach((item, index) => {
            item.forEach((elem) => {
                elem.className = "m" + (index + 1)
            })

        })


    } else {
        ids.forEach((item, index) => {
            item.forEach((elem) => {
                elem.className = "n" + (index + 1)
            })

        })

    }
}

doResponsive();

window.addEventListener("resize", doResponsive)



n4.forEach((elem) => {
        elem.addEventListener("click", () => {
            if (elem.nextElementSibling.style.display == "") {
                elem.nextElementSibling.style.display = "block"
            } else {
                elem.nextElementSibling.style.display = ""
            }
        })
})





let closeMenu = document.querySelector(".closeMenu")
let nav = document.querySelector("#i1")
let hamberger = document.querySelector("#hamburger")


closeMenu.addEventListener("click", () => {
    nav.style.display = "none"
})

hamberger.addEventListener("click", () => {
    nav.style.display = "block"
})