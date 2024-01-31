const loop = (element, imageset) => {
  imageset.forEach(image => (new Image()).src = image)
  
  let last = ""
  let i = 0, t = () => {
    const cheese = document.createElement("div")
    cheese.style.backgroundImage = `url(${imageset[i % imageset.length]})`

    let usable = imageset.filter(l => l !== last)
    let random = usable[Math.floor(Math.random() * usable.length)]

    cheese.style.backgroundImage = `url(${random})`
    last = random

    element.getElementsByClassName("ag-card-images")[0].append(cheese)

    const ani = cheese.animate([{ opacity: 0 }, {}], {
      easing: "ease-in-out",
      duration: i == 0 ? 0 : 400,
    })
    ani.onfinish = () => {
      i++
      const ani2 = cheese.animate([{ opacity: 0 }], {
        easing: "ease-in-out",
        duration: 400,
        delay: 2500
      })
      ani2.onfinish = () => {
        cheese.remove()
        cheese.style.display = "none"
      }
      const ani3 = cheese.animate([], { duration: 2500 })
      ani3.onfinish = () => t(element)
    }
  }
  t()
}

loop(document.getElementById("ag1"), [
  "https://i.ibb.co/b7VMMKw/GDRx-PMVXQAAx-Tq-format-jpg-name-large.jpg",
  "https://i.ibb.co/58YghQ6/F7xx-JYVWEAA1-MXB-format-jpg-name-medium.jpg",
  "https://i.ibb.co/tYcqDr1/F2fa-Pk0-XMAEw-Uu-P-format-jpg-name-large.jpg",
  "https://i.ibb.co/Zd0XR1K/IMG-20240128-184449351.jpg",
  "https://i.ibb.co/2kMFd4r/IMG-20240128-183939976.jpg"
])
loop(document.getElementById("ag2"), [
  "https://i.ibb.co/nkHWFRM/GDZ8jdz-Xc-AAa-Dwv-format-png-name-4096x4096.png",
  "https://i.ibb.co/7bdBGJF/GDmj-Ksy-W4-AA009f-format-jpg-name-large.jpg",
  "https://i.ibb.co/1ZbkqJK/Thumbnail20012024172.png",
  "https://i.ibb.co/0fKL6tj/ce8-Thumbnail20012024172.png",
  "https://i.ibb.co/5WfMWg2/a54-Thumbnail20012024172.png",
  "https://i.ibb.co/G56spNb/7e3-Thumbnail20012024172.png"
])
loop(document.getElementById("ag3"), [
  "https://res.cloudinary.com/dzlxuyf7c/image/upload/q_auto,w_1080,c_limit,f_auto/UPLOAD_MEDIA/mp9251oqahoaqwrp50vf",
  "https://res.cloudinary.com/dzlxuyf7c/image/upload/q_auto,w_1080,c_limit,f_auto/UPLOAD_MEDIA/cnl2hx0asm5kazo4sigt",
  "https://res.cloudinary.com/dzlxuyf7c/image/upload/q_auto,w_1080,c_limit,f_auto/UPLOAD_MEDIA/y48nd0fhlnemlg2cwrl9",
  "https://res.cloudinary.com/dzlxuyf7c/image/upload/q_auto,w_1080,c_limit,f_auto/UPLOAD_MEDIA/wugd9dksycle1cuavf5l"
])