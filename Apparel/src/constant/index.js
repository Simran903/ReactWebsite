import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2,cloth4 , cloth5, cloth6, cloth7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home", id:"1" },
    { href: "#about-us", label: "About Us", id:"2" },
    { href: "#products", label: "Products", id:"3" },
    { href: "#contact-us", label: "Contact Us", id:"4" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '2k+', label: 'Brands', id:"1" },
    { value: '1000+', label: 'Shops', id:"2" },
    { value: '300k+', label: 'Customers', id:"3" },
];

export const products = [
    {
        imgURL: cloth4,
        name: "Marvel: Wakanda Heritage",
        price: "₹ 1699",
    },
    {
        imgURL: cloth5,
        name: "Pink Panther: Hustler",
        price: "₹ 899",
    },
    {
        imgURL: cloth6,
        name: "F.R.I.E.N.D.S: Doodles",
        price: "₹ 1399",
    },
    {
        imgURL: cloth7,
        name: "Stranger Things: Bicycles of Stranger Things",
        price: "₹ 1199",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Rachel Green',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Joey Tribbiani',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "OUR STORES",
        links: [
            { name: "Delhi", link: "/" },
            { name: "Mumbai", link: "/" },
            { name: "Bangalore", link: "/" },
            { name: "Ahmedabad", link: "/" },
            { name: "Haryana", link: "/" },
            { name: "Indore", link: "/" },
        ],
    },
    {
        title: "HELP",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "GET IN TOUCH",
        links: [
            { name: "customer@clothes.com", link: "mailto:customer@clothes.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];