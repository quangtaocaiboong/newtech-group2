const img1 = require("../images/slider/slide_1.png").default
const img2 = require("../images/slider/slide_2.png").default
const img3 = require("../images/slider/slide_3.png").default

const heroSliderData = [
    {
        title: "Black Ivory Coffee",
        description: "With a 2021 approximate allocation of 215 kg (474 LBS), Black Ivory Coffee is the world's rarest coffee and is sold primarily to select five star hotels.",
        img: img1,
        color: "red",
        path: "/catalog/black-ivory-coffee"
    },
    {
        title: "Jamaican Blue Mountain",
        description: "Grown on the top of the Blue Mountains of Jamaica, this is one of the most expensive coffee in the world. Only a limited amount of Blue Mountain coffee bean is produced yearly.",
        img: img2,
        path: "/catalog/jamaican-blue-mountain",
        color: "org"
    },
    {
        title: "Tuskish Coffee",
        description: "A must and trademark in every corner of the Ottoman empire. The preparation up to the serving of Turkish coffee has a character of its own",
        img: img3,
        path: "/catalog/tuskish-coffee",
        color: "red-wine"
    }
]

export default heroSliderData