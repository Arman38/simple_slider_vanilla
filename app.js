window.addEventListener("DOMContentLoaded", () => {

    let sliderItems = document.querySelectorAll(".slider-item"),
        sliderCounts = Array.from(sliderItems).length,
        slider = document.getElementById("slider"),
        next = document.querySelector(".next"),
        prev = document.querySelector(".prev");

    function createRounds(count) {
        let rounds = document.querySelector(".rounds")
        for (let i = 0; i < count; i++) {
            let round = document.createElement("div");
            round.classList.add("round-item");
            rounds.appendChild(round);
        }
    }
    createRounds(sliderCounts);


    function hideAllItems() {
        sliderItems.forEach((item, idx) => {
            item.classList.add("hide")
            document.querySelectorAll('.round-item')[idx].classList.remove("active")
        })
    }
    hideAllItems()

    function showItem(n) {
        sliderItems.forEach((item, idx) => {
            if (idx === n) {
                item.classList.remove("hide");
                document.querySelectorAll('.round-item')[idx].classList.add("active")
            }
        });
    }
    showItem(0)

    next.addEventListener("click", () => {
        let activeIdx = Array.from(sliderItems).findIndex(item => !item.classList.contains("hide"))
        sliderItems.forEach((item, idx) => {
            if (activeIdx < sliderCounts - 1) {
                hideAllItems()
                showItem(activeIdx + 1)
            } else {
                activeIdx = -1
            }
        })

    })

    prev.addEventListener("click", () => {
        let activeIdx = Array.from(sliderItems).findIndex(item => !item.classList.contains("hide"))
        sliderItems.forEach((item, idx) => {
            hideAllItems()
            showItem(activeIdx - 1)
            if (activeIdx <= 0) {
                activeIdx = sliderItems.length
            }
        })
    })

    let rnds = document.querySelectorAll(".round-item");
    rnds.forEach((item, idx) => {
        item.addEventListener("click", () => {
            hideAllItems()
            showItem(idx)
        })
    })



    function timer() {
        let activeIdx = Array.from(sliderItems).findIndex(item => !item.classList.contains("hide"))
        if (activeIdx < sliderCounts - 1) {
            hideAllItems()
            showItem(activeIdx + 1)
        }
        else {
            activeIdx = -1
            hideAllItems()
            showItem(activeIdx + 1)
        }
    }

    window.timerId = setInterval(timer, 3000)
    slider.onmouseover = () => clearInterval(window.timerId)
    slider.onmouseleave = () => window.timerId = setInterval(timer, 3000)


})