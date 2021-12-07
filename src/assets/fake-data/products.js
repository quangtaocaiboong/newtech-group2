const product_01_image_01 = require('../images/products/coffee-ngoai.jpg').default
const product_01_image_02 = require('../images/products/coffee-trong.jpg').default

const product_02_image_01 = require('../images/products/coffee-ngoai.jpg').default
const product_02_image_02 = require('../images/products/coffee-trong.jpg').default

const product_03_image_01 = require('../images/products/coffee-ngoai.jpg').default
const product_03_image_02 = require('../images/products/coffee-trong.jpg').default

const product_04_image_01 = require('../images/products/coffee-ngoai.jpg').default
const product_04_image_02 = require('../images/products/coffee-trong.jpg').default



const products = [
    {
        title: "Coffee White",
        price: '200000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "coffee",
        colors: ["black", "red", "orange"],
        slug: "coffee-white",
        size: ["s", "m", "l", "xl"]
    },
    {
        title: "$coffee-name",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "coffee",
        colors: ["white", "red", "blue"],
        slug: "coffee-name-grid-col-1",
        size: ["s", "m"]
    },
    {
        title: "$coffee-name-grid-col-2",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "coffee",
        colors: ["white", "red", "orange", "yellow"],
        slug: "coffee-name-grid-col-2",
        size: ["m"]
    },
    {
        title: "$coffee-name-grid-col-3",
        price: '194000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "coffee",
        colors: ["white", "orange", "blue"],
        slug: "coffee-name-grid-col-3",
        size: ["xl"]
    },
    
    // 18 products page nó lướt đẹp hơn nhưng lười quá
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const productData = {
    getAllProducts,
    getProducts
}

export default productData