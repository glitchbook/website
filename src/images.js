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

loop(document.getElementById("ag-selfies"), [
  // Skirt indirect back
  "https://i.ibb.co/HzZ56J3/Xfs-JQvv-Y58o9-Lgm-H82-T7vd2-Bfd-TELFa-T-1-format-jpg-name-medium.jpg",
  // Emo standoffish
  "https://i.ibb.co/Zd0XR1K/IMG-20240128-184449351-format-jpg-name-medium.jpg",
  // Emo smile direct
  "https://i.ibb.co/2kMFd4r/IMG-20240128-183939976-format-jpg-name-medium.jpg"
])

loop(document.getElementById("ag-work"), [
  // Emoji one
  "https://i.ibb.co/5WfMWg2/a54-Thumbnail20012024172-format-jpg-name-medium.jpg",
  // Emoji many
  "https://i.ibb.co/G56spNb/7e3-Thumbnail20012024172-format-jpg-name-medium.jpg",
  // Kitt
  "https://i.ibb.co/pZbQ0Zy/kitt-Thumbnail-format-jpg-name-medium.jpg",
  // Latapals
  "https://i.ibb.co/Y8w4TNG/Twitter-post-4-format-jpg-name-medium.jpg"
])

loop(document.getElementById("ag-captures"), [
  // Truck
  "https://res.cloudinary.com/dzlxuyf7c/image/upload/q_auto,w_1080,c_limit,f_auto/UPLOAD_MEDIA/mp9251oqahoaqwrp50vf",
  // Pride flag
  "https://res.cloudinary.com/dzlxuyf7c/image/upload/q_auto,w_1080,c_limit,f_auto/UPLOAD_MEDIA/cnl2hx0asm5kazo4sigt",
  // Flowers out
  "https://res.cloudinary.com/dzlxuyf7c/image/upload/q_auto,w_1080,c_limit,f_auto/UPLOAD_MEDIA/y48nd0fhlnemlg2cwrl9",
  // Flowers in
  "https://res.cloudinary.com/dzlxuyf7c/image/upload/q_auto,w_1080,c_limit,f_auto/UPLOAD_MEDIA/wugd9dksycle1cuavf5l"
])