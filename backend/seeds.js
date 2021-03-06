const Stylist = require('./models/Stylist')
const User = require('./models/User')
const Image = require('./models/Image')
const Comment = require('./models/Comment')
const Sequelize = require('sequelize');
//const faker = require('faker')
//Stylist.sync()


//Stylist.destroyAll()
//const image = faker.image.fashion()
//console.log(image)

const sequelize = require('./models/sequelize')

const comments = [
    {
        "message": "Yea, I have this skirt too!",
    },
    {
        "message": "Check Nordstrom!",
    },

    {
        "message": "This is my favorite stylist!",
    },

    {
        "message": "This is my favorite stylist!"
    },

    {
        "message": "Where can I get this?",
    },
    {
        "message": "This is my favorite stylist!"
    },

    {
        "message": "Where can I get this?",
    },

    {
        "message": "Looks great!",
    },

    {
        "message": "Thank you",
    },

    {
        "message": "Great outfit",
    }
]


const  stylists = [
            

            { "photo": "https://www.moma.org/d/assets/W1siZiIsIjIwMTcvMDkvMTUvODN0bXlrZmJ1Zl9tb21hX2l0ZW1zX21vZ2lfMS5qcGciXSxbInAiLCJjb252ZXJ0IiwiLXJlc2l6ZSAxMDI0eDEwMjRcdTAwM2UiXV0/moma_items_mogi_1.jpg?sha=93fc7685a9fc5a27",
              "name": "Monica Grant",
              "specialty": "New York",
              "styling": false,
              "bio": "Stylist as well as personal shopper that specializes in styling clients for all types of special events, or everyday wear. Cultural wear is my passion. I like to have fun and be creative.",
              "image1": "https://i.pinimg.com/564x/54/b5/8d/54b58d244d81ab2bce2d512e76e29fd6.jpg",
                

              "image2": "https://i.pinimg.com/564x/40/c4/be/40c4be6be6004f8eff55fd93f2d43752.jpg",
                
              "image3": "https://i.pinimg.com/564x/86/e3/50/86e350696f016ba97d89fc1d5fc3b0e7.jpg",
                
            },

            {"photo": "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/59908372_10213982621779604_4558565326039547904_n.jpg?_nc_cat=101&_nc_oc=AQlrACveHGLK3MxMM_sBhlh5M1ZKEtcorQZIoOUoyuJ94vxJJtLp-mCnWZwfRJ2lYKw&_nc_ht=scontent-dfw5-1.xx&oh=568f5a9b9ddf9780ca813a1dda8d2e2d&oe=5D542CCC",
            "name": "Patricia Myles",
            "specialty": "Tampa",
            "styling": false,
            "bio": "I want to play a fundamental role in the confidence that stems from wearing accessories perfecty tailored to an ensemble and representative of one's authenticity and empowerment",
            "image1": "https://n.nordstrommedia.com/id/sr3/bdcd23ea-e4a6-4d44-a308-a3022fc35e58.jpeg?trim=color&crop=pad&pad_color=fff&h=540&w=180&dpr=2&quality=60",
            "image2": "https://i.pinimg.com/564x/20/89/77/2089772bfe75abd5abd461b5e4060cfd.jpg",
            "image3": "https://i.pinimg.com/564x/81/83/85/8183852a62ebb5779d215a2d83ee6c08.jpg",
            "image4": "backend/public/daytime.png"
            },

            {"photo": "https://images.asos-media.com/products/oasis-leather-biker-jacket/5617815-1-black?$XXL$&wid=513&fit=constrain",
            "name": "Avi Davis",
            "specialty": "Houston",
            "styling": false,
            "bio": "I will work one-on-one with you and really get to know you and your personal style. I will offer looks for less that are actually stylish and wearable, as well as give you style tips to maximize all of the outfits that I provided!",
            "image1": "https://i.pinimg.com/564x/50/53/c9/5053c9c8a9684cb3c61dec844d994e50.jpg",
                
            "image2": "https://i.pinimg.com/564x/10/13/86/101386089b79751e25b7067944ee622e.jpg",
                
            "image3": "https://i.pinimg.com/564x/3c/fe/16/3cfe16907861427daf532e35638be1f8.jpg",
                
            },

            {"photo": "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/59790407_2473728692650815_298467009794932736_n.jpg?_nc_cat=102&_nc_oc=AQkDucMfEvI1bWaOmrMz4AQ3f8povzdQpP18bQBeqchWKolrlXhPfaZRFnPlXvRj_jo&_nc_ht=scontent-dfw5-1.xx&oh=68525004d08a36dc861c7b8bb5c35a75&oe=5D528ACC",
            "name": "Rochell Flood",
            "specialty": "Houston",
            "styling": false,
            "bio": "I'm a firm believer in looking your best no matter the occasion. Book me for sleek looks with an edge for any event you have planned. Confidence is key when it comes to your personal style and I am here to help you",
            "image1": "https://i.pinimg.com/564x/99/f2/de/99f2ded3d950ee5d261619ba76392f20.jpg",
                
            "image2": "https://i.pinimg.com/564x/63/ee/3d/63ee3db1e39e67a006a3f1508e7306fe.jpg",
                

            "image3": 'https://i.pinimg.com/564x/96/eb/b0/96ebb07affbda541cff6389325b77921.jpg',
                

            },

            {"photo": "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/36874230_10108068642238178_6367662064294428672_n.jpg?_nc_cat=104&_nc_oc=AQk0A1SxxIxDnpFjCk12KZJZ9zvWU17eohh6WaxG3GCmYqp3hMfrJrXmhh5bEKJtU64&_nc_ht=scontent-dfw5-1.xx&oh=09f67edad497ac86f3cfca72201c35fb&oe=5D524649",
            "name": "Carley A.",
            "specialty": "New Orleans",
            "styling": false,
            "bio": "I'm a Personal Stylist and Shopper whose goal is to always make my clients look and feel impeccable in the looks I style for them. It is my pleasure to assist you create your best YOU!",
            "image1": "http://localhost:3000/public/evening.png",
                

            "image2": "http://localhost:3000/public/daytime.png",
                

            "image3": "/public/Screen Shot 2019-05-22 at 9.27.49 PM.png",
                
                
            },

            {"photo": "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/59498831_2223737501081237_6311999756289703936_n.jpg?_nc_cat=105&_nc_oc=AQmlyyylodKa_SeBU7KAJ2lZggQIM5y9NnJa22WhKGDrv-yR3tHkZ3umaZMtuso85eI&_nc_ht=scontent-dfw5-1.xx&oh=a6bb562f910060e59934cf51b1fdba1c&oe=5D59CB5E",
            "name": "Mike Avens",
            "specialty": "Dallas",
            "styling": false,
            "bio": "I can help you learn what to wear, how to wear it and where to buy it! Been doing this for years. I am here to help!",
            "image1": "https://i.etsystatic.com/17585916/r/il/c20940/1717546107/il_1588xN.1717546107_ik1l.jpg",
                

            "image2": "https://i.pinimg.com/564x/c8/9a/0f/c89a0f9d18dca03858fd62dbe35df1a3.jpg",
                

            "image3": "https://i.pinimg.com/564x/6a/e2/1c/6ae21c824baa34ac4ddd57a382508730.jpg",
                

            },

            {"photo": "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/14022297_1259474257410496_1261379200846428355_n.jpg?_nc_cat=105&_nc_oc=AQmetsnxLj6WME-J0hZnqUdKVnpGwwPNwb5dYqt8cZeQBf0QCjhX-6u6zsUs6x2BfsA&_nc_ht=scontent-dfw5-2.xx&oh=1d18370840d27d784b04fdf056c1191c&oe=5D9BBD17",
            "name": "Justin Archield",
            "specialty": "Portland",
            "styling": false,
            "bio": "I believe in investing in a closet full of quality pieces that bring you joy every time you see them. Fashion is my air.",
            "image1": "https://i.pinimg.com/564x/19/e1/c5/19e1c5041aa155f445f7fda83e5d1ee0.jpg",
                

            "image2": "https://i.pinimg.com/564x/5b/fc/73/5bfc7345e6d268bb0a978bf5fc9312ba.jpg",
                
            "image3": "https://i.pinimg.com/564x/15/0a/63/150a6309c38fd8402f269e230ec4e8cf.jpg",
                
            },

            {"photo": "http://localhost:3000/public/nikkiprofile.png",
            "name": "Nikki Gaddis",
            "specialty": "Houston",
            "styling": false,
            "bio": "Fashion is your instant language, it shows you that you can have anything you want in life, if you dress for it. I love style! Shopping is my passion.",
            "image1": "https://i.pinimg.com/564x/7d/db/9a/7ddb9a7f466053e99eb7a318164916de.jpg",
                
            "image2":  "https://i.pinimg.com/564x/fa/f4/de/faf4de00772719af653aa4d1caf7f73b.jpg",
                
            "image3": "https://i.pinimg.com/564x/ca/5a/37/ca5a374b2b42fe97230782daa42aa0cd.jpg",
                
            },

            {"photo": "https://cdn.wearethought.com/media/wysiwyg/SS19/thought-clothing-menswear-organic-ethical-fashion-mens-shirts-fitzroy-stripe-natural-fabrics.jpg",
            "name": "Marcus Jones",
            "specialty": "Chicago",
            "styling": false,
            "bio": "Personal style is your introduction to the world without having to speak - be BOLD! Wanna wear more colour? I'm the one for the job!",
            "image1": "https://i.pinimg.com/564x/c9/0e/82/c90e82d6e902fb7880f52480f5371ee7.jpg",
                
            "image2": "https://i.pinimg.com/564x/92/f2/a1/92f2a13c373e968c9ed2750060923c03.jpg",
                
            "image3": "https://i.pinimg.com/564x/f4/68/44/f46844703afe87b42c27e24c7e82dc3d.jpg",
                
            },

            {"photo": "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/17952879_1847252171967655_6221547841662772864_n.jpg?_nc_cat=105&_nc_oc=AQkqvehS088AU8pIZldIfXByp0MoCbjHSMscrMMAgHMRKsKQtXpc_e4tmOikpbBY-pE&_nc_ht=scontent-dfw5-2.xx&oh=803a726540982d7ddd08e4cfb7a78cfb&oe=5D563995",
            "name": "Misty Archield",
            "specialty": "Portland",
            "styling": false,
            "bio": "I love being able to style my clients as sophisticated and on-point as possible while considering their preferences as well as trends. I don't watch the news, fashion is my news.",
            "image1": "https://i.pinimg.com/564x/ae/f8/cc/aef8ccd1edc7aa3659a790a0815703a9.jpg",
                
            "image2": "https://i.pinimg.com/564x/84/4d/0b/844d0b93ab29d62aed894f22771ba7d4.jpg",
                
            "image3": "https://i.pinimg.com/564x/b2/8d/d8/b28dd83c8a75780753048f7f69ec3238.jpg",
                
            }
    ]

    let users = [
        {"name": "Jackie",
        "image": "https://i.pinimg.com/564x/ae/f8/cc/aef8ccd1edc7aa3659a790a0815703a9.jpg",
            
        "username": "Jackie",
        "password": "1234"

        },
        {"name": "Becky",
        "image": "https://i.pinimg.com/564x/ae/f8/cc/aef8ccd1edc7aa3659a790a0815703a9.jpg",
            
        "username": "Bgirl",
        "password":"2345"
        },

       { "name": "Tom",
        "image": "https://i.pinimg.com/564x/ae/f8/cc/aef8ccd1edc7aa3659a790a0815703a9.jpg",
            
        "username": "TomTom",
        "password": "3456"

        }
    ]
    //when working correctly in postman, will show up immediatly //set fetch get the token/ save in local storage
    sequelize.drop()
        .then( () => {
            sequelize.sync()
                .then( async () => {
                    stylists.forEach( stylist => { 
                        Stylist.create(stylist)
                            .then(stylistInstance => {
                        Image.create({image: stylist.image1, stylistId: stylistInstance.id})
                        Image.create({image: stylist.image2, stylistId: stylistInstance.id})
                        Image.create({image: stylist.image3, stylistId: stylistInstance.id})

                        })
                        
                    })//create images here
                    await Promise.all(users.map( userAttributes => {
                        let user = User.build(userAttributes)
                        user.password = userAttributes.password
                        return user.save()
                    }))

                    comments.forEach( async commentAttributes => {
                        let user = await User.findOne({
                            order: Sequelize.literal('random()')
                        })
                        let image = await Image.findOne({
                            order: Sequelize.literal('random()')
                        })
                        let comment = await Comment.create(commentAttributes)
                        comment.setUser(user)
                        comment.setImage(image)
                    })


                })
        })
    
