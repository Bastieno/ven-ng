import mongoose from 'mongoose';
import moment from 'moment';

const category1Id = mongoose.Types.ObjectId();
const category2Id = mongoose.Types.ObjectId();
const category3Id = mongoose.Types.ObjectId();
const category4Id = mongoose.Types.ObjectId();
const category5Id = mongoose.Types.ObjectId();

export const categories = [
  {
    _id: category1Id,
    name: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  },
  {
    _id: category2Id,
    name: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  },
  {
    _id: category3Id,
    name: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  },
  {
    _id: category4Id,
    name: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  },
  {
    _id: category5Id,
    name: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  }
];


export const SHOP_DATA = [
  {
    _id: category1Id,
    name: 'hats',
    items: [
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25,
        category: category1Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18,
        category: category1Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35,
        category: category1Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25,
        category: category1Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18,
        category: category1Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14,
        category: category1Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18,
        category: category1Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14,
        category: category1Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16,
        category: category1Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      }
    ]
  },
  {
    _id: category2Id,
    name: 'sneakers',
    items: [
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220,
        category: category2Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280,
        category: category2Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110,
        category: category2Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
        category: category2Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160,
        category: category2Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160,
        category: category2Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190,
        category: category2Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200,
        category: category2Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      }
    ]
  },
  {
    _id: category3Id,
    name: 'jackets',
    items: [
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
        category: category3Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
        category: category3Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90,
        category: category3Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165,
        category: category3Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
        category: category3Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      }
    ]
  },
  {
    _id: category4Id,
    name: 'womens',
    items: [
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25,
        category: category4Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20,
        category: category4Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80,
        category: category4Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80,
        category: category4Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
        category: category4Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135,
        category: category4Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20,
        category: category4Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      }
    ]
  },
  {
    _id: category5Id,
    name: 'mens',
    items: [
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
        category: category5Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
        category: category5Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
        category: category5Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
        category: category5Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
        category: category5Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
        category: category5Id,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
      }
    ]
  }
];
