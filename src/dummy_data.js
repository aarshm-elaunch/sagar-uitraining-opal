import product from '../src/assets/images/product.png'
import product2 from '../src/assets/images/product2.png'
import product3 from '../src/assets/images/product3.png'
import product4 from '../src/assets/images/product4.png'
import product5 from '../src/assets/images/product5.png'
import product6 from '../src/assets/images/product6.png'
import product7 from '../src/assets/images/product7.png'
import product8 from '../src/assets/images/product8.png'
import user1 from '../src/assets/images/user1.png'
import user3 from '../src/assets/images/user3.png'
import user4 from '../src/assets/images/user4.png'
import podcast1 from '../src/assets/images/podcast_image/img1.png';
import podcast2 from '../src/assets/images/podcast_image/img2.png';
import podcast3 from '../src/assets/images/podcast_image/img3.png';
import podcast4 from '../src/assets/images/podcast_image/img4.png';
import audio1 from '../src/assets/audio/music1.mp3';
import audio2 from '../src/assets/audio/music2.mp3';
import audio3 from '../src/assets/audio/music3.mp3';
import auction_1 from '../src/assets/images/auction_1.png';
import auction_2 from '../src/assets/images/auction_2.png';
import auction_3 from '../src/assets/images/auction_3.png';
import auction_4 from '../src/assets/images/auction_4.png';
import store_img from '../src/assets/images/store/store1.png';

export const product_list = [
    {
        id: 'p1',
        image: product,
        name: "Item name",
        description: "Some item description goes here",
        price: 2000,
        colorName: '#ED5FDD',
        qty: 1,
        fevorite: false,
        total: 2000,
        rating: 3.5,
    },
    {
        id: 'p2',
        image: product2,
        name: "Item name here",
        description: "Some item description goes here",
        price: 2500,
        colorName: '#6B5595',
        qty: 1,
        fevorite: false,
        total: 2500,
        rating: 4,
    },
    {
        id: 'p3',
        image: product3,
        name: "Item name here",
        description: "Some item description goes here",
        price: 2500,
        colorName: '#ED5FDD',
        qty: 1,
        fevorite: false,
        total: 25,
        rating: 2.5,
    },
    {
        id: 'p4',
        image: product4,
        name: "Item name here",
        description: "Some item description goes here",
        price: 2000,
        colorName: '#E7ED9B',
        qty: 1,
        fevorite: false,
        total: 2000,
        rating: 1,
    },
    {
        id: 'p5',
        image: product4,
        name: "Item name here",
        description: "Some item description goes here",
        price: 1500,
        colorName: '#8BDB81',
        qty: 1,
        fevorite: false,
        total: 1500,
        rating: 5,
    },
    {
        id: 'p6',
        image: product6,
        name: "Item name here",
        description: "Some item description goes here",
        price: 3500,
        colorName: '#E7ED9B',
        qty: 1,
        fevorite: false,
        total: 3500,
        rating: 3.5,
    },
    {
        id: 'p7',
        image: product7,
        name: "Item name here",
        description: "Some item description goes here",
        price: 500,
        colorName: '#8BDB81',
        qty: 1,
        fevorite: false,
        total: 500,
        rating: 4,
    },
    {
        id: 'p8',
        image: product8,
        name: "Item name here",
        description: "Some item description goes here",
        price: 2500,
        colorName: '#55BAB9',
        qty: 1,
        fevorite: false,
        total: 2500,
        rating: 4.5,
    },
];

export const user_list = [
    {
        id: 1,
        name: 'Suyog B',
        dp: user1,
        time: 'Now',
        meaage: 'Some message goes here'
    },
    {
        id: 2,
        name: 'Aarsh',
        dp: user4,
        time: 'Yesterday',
        meaage: 'Some message goes here'
    },
    {
        id: 3,
        name: 'Nikunj',
        dp: user3,
        time: 'Yesterday',
        meaage: 'Some message goes here'
    },
    {
        id: 4,
        name: 'Umesh',
        dp: user4,
        time: 'Yesterday',
        meaage: 'Some message goes here'
    },
    {
        id: 5,
        name: 'Sagar B',
        dp: user1,
        time: 'Now',
        meaage: 'Some message goes here'
    },
    {
        id: 6,
        name: 'Suyog A',
        dp: user1,
        time: 'Now',
        meaage: 'Some message goes here'
    },
]

export const podcast_list = [
    {
        img: podcast1,
        title: 'Podcast title goes here',
        detail: 'Aenean vulputate eleifend tellus aenean leo ligula porttitor eu.',
        audio: audio1,
    },
    {
        img: podcast2,
        title: 'Podcast title goes here',
        detail: 'Aenean vulputate eleifend tellus aenean leo ligula porttitor eu.',
        audio: audio2,
    },
    {
        img: podcast3,
        title: 'Podcast title goes here',
        detail: 'Aenean vulputate eleifend tellus aenean leo ligula porttitor eu.',
        audio: audio3,
    },
    {
        img: podcast4,
        title: 'Podcast title goes here',
        detail: 'Aenean vulputate eleifend tellus aenean leo ligula porttitor eu.',
        audio: audio2,
    },
    {
        img: podcast2,
        title: 'Podcast title goes here',
        detail: 'Aenean vulputate eleifend tellus aenean leo ligula porttitor eu.',
        audio: audio3,
    },
    {
        img: podcast3,
        title: 'Podcast title goes here',
        detail: 'Aenean vulputate eleifend tellus aenean leo ligula porttitor eu.',
        audio: audio1,
    },
]

export const home_auction = [
    {
        id: 'auction1',
        img: auction_1,
        title: 'Auction Title Goes Here',
    },
    {
        id: 'auction2',
        img: auction_2,
        title: 'Auction Title Goes Here',
    }
]

export const auction_list = [
    {
        id: 'auction1',
        img: auction_1,
        title: 'Auction Title Goes Here',
    },
    {
        id: 'auction2',
        img: auction_2,
        title: 'Auction Title Goes Here',
    },
    {
        id: 'auction3',
        img: auction_3,
        title: 'Auction Title Goes Here',
    },
    {
        id: 'auction4',
        img: auction_4,
        title: 'Auction Title Goes Here',
    }
]

export const storeList = [
    {
        img: store_img,
        name: 'Store 1',
        description: 'Maecenas tempus tellus ik eget condimentum.',
    },
    {
        img: store_img,
        name: 'Store 2',
        description: 'Maecenas tempus tellus ik eget condimentum.',
    },
    {
        img: store_img,
        name: 'Store 3',
        description: 'Maecenas tempus tellus ik eget condimentum.',
    },
    {
        img: store_img,
        name: 'Store 4',
        description: 'Maecenas tempus tellus ik eget condimentum.',
    },
    {
        img: store_img,
        name: 'Store 5',
        description: 'Maecenas tempus tellus ik eget condimentum.',
    },
    {
        img: store_img,
        name: 'Store 6',
        description: 'Maecenas tempus tellus ik eget condimentum.',
    },
    {
        img: store_img,
        name: 'Store 7',
        description: 'Maecenas tempus tellus ik eget condimentum.',
    },
    {
        img: store_img,
        name: 'Store 8',
        description: 'Maecenas tempus tellus ik eget condimentum.',
    },
    {
        img: store_img,
        name: 'Store 9',
        description: 'Maecenas tempus tellus ik eget condimentum.',
    },
    {
        img: store_img,
        name: 'Store 10',
        description: 'Maecenas tempus tellus ik eget condimentum.',
    },
    {
        img: store_img,
        name: 'Store 11',
        description: 'Maecenas tempus tellus ik eget condimentum.',
    },
    {
        img: store_img,
        name: 'Store 12',
        description: 'Maecenas tempus tellus ik eget condimentum.',
    },

]