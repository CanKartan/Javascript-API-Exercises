const CardWrapper = document.querySelectorAll(".target");


const options = {
    threshold: 0.3
}

const callBack = (entrys) => {
    entrys.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active")
        } else {
            entry.target.classList.remove("active")
        }
    });
}

const obsorver = new IntersectionObserver(callBack, options);

CardWrapper.forEach((target) => {
    obsorver.observe(target)
})