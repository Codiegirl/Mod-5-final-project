const Stylist = require('./models/Stylist')
const User = require('./models/User')
const Sequelize = require('sequelize');
//const faker = require('faker')
//Stylist.sync()


//Stylist.destroyAll()
//const image = faker.image.fashion()
//console.log(image)

const sequelize = require('./models/sequelize')

const  stylists = [
            {"photo": "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/49074792_2138701262866339_7586070051954884608_o.jpg?_nc_cat=104&_nc_eui2=AeEJmDCkKjWukR2u5Rzj0WwU2ww1uyauF_C2CrJhH5gENWGlXkK6OBJa5vDwpm3vBKDAOHOZxwwNsL3dvkHWNk2fYar9ngh9jP68jeEJ2vyXEQ&_nc_oc=AQkUa_1QbTzvDGrb0ddFeg-fV5bzjVqMQpIAKc7-pNwERNNdiCOzM4F1SzwKK8Bpnxg&_nc_pt=1&_nc_ht=scontent-dfw5-1.xx&oh=f9defd4e783d81892efddbcbc2640ad8&oe=5D55DFB0",
            "name": "Jamie",
            "specialty": "Weddings",
            "styling": false,
            "bio": "I love to style weddings.  I have dressed over 100 brides",
            "image1": "https://i.pinimg.com/564x/ee/17/75/ee1775a893b7c37978b8d0fb530be6f2.jpg",
            "image2": "https://i.pinimg.com/564x/02/d5/02/02d5029c178d8713a30a9944367919d6.jpg",
            "image3": "https://i.pinimg.com/564x/14/4c/6f/144c6f7673c299b89259c121abb1e505.jpg"
            },

            { "photo": "https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/49/1481049241-hbz-think-pink-00-index.jpg",
              "name": "Monica",
              "specialty": "Street Style",
              "styling": false,
              "bio": "Street Style is my passion.  I shop at Torrid mostly.",
              "image1": "https://i.pinimg.com/564x/70/f7/ae/70f7ae3278a0a19168c53171c3a0d9ee.jpg",
              "image2": "https://i.pinimg.com/564x/40/c4/be/40c4be6be6004f8eff55fd93f2d43752.jpg",
              "image3": "https://i.pinimg.com/564x/86/e3/50/86e350696f016ba97d89fc1d5fc3b0e7.jpg"
            },

            {"photo": "https://www.bravotv.com/sites/bravo/files/media_mpx/thumbnails/bravo-video.nbcuni.com/image/NBCU_Bravo/341/279/190424_3945133_Engineering_is_Fashion_on_Bravo_s_Project_Ru.jpg",
            "name": "Avi",
            "specialty": "Office",
            "styling": false,
            "bio": "I can help you land that next promotion! Looking good makes you feel good!",
            "image1": "https://i.pinimg.com/564x/50/53/c9/5053c9c8a9684cb3c61dec844d994e50.jpg",
            "image2": "https://i.pinimg.com/564x/10/13/86/101386089b79751e25b7067944ee622e.jpg",
            "image3": "https://i.pinimg.com/564x/3c/fe/16/3cfe16907861427daf532e35638be1f8.jpg"
            },

            {"photo": "http://www.inspirationde.com/wp-content/uploads/2015/01/fashion-photography-by-michael-tang-1420139426k84gn.jpg",
            "name": "Rachel",
            "specialty": "Weddings",
            "styling": false,
            "bio": "I make brides beautiful.",
            "image1": "https://i.pinimg.com/564x/99/f2/de/99f2ded3d950ee5d261619ba76392f20.jpg",
            "image2": "https://i.pinimg.com/564x/63/ee/3d/63ee3db1e39e67a006a3f1508e7306fe.jpg",
            "image3": 'https://i.pinimg.com/564x/96/eb/b0/96ebb07affbda541cff6389325b77921.jpg'
            },

            {"photo": "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/36874230_10108068642238178_6367662064294428672_n.jpg?_nc_cat=104&_nc_oc=AQk0A1SxxIxDnpFjCk12KZJZ9zvWU17eohh6WaxG3GCmYqp3hMfrJrXmhh5bEKJtU64&_nc_ht=scontent-dfw5-1.xx&oh=09f67edad497ac86f3cfca72201c35fb&oe=5D524649",
            "name": "Gova",
            "specialty": "All Occassion",
            "styling": false,
            "bio": "I love to style weddings. ",
            "image1": "https://i.pinimg.com/564x/ec/91/ec/ec91ec00e2a67930c9a7cc1ed92e99eb.jpg",
            "image2": "https://i.pinimg.com/564x/91/f0/73/91f07307638a6337cead0f7f14fffd12.jpg",
            "image3": "https://i.pinimg.com/564x/40/5a/93/405a9345a4211b739ae83f8c90b2bf4d.jpg"

            },

            {"photo": "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/59498831_2223737501081237_6311999756289703936_n.jpg?_nc_cat=105&_nc_oc=AQmlyyylodKa_SeBU7KAJ2lZggQIM5y9NnJa22WhKGDrv-yR3tHkZ3umaZMtuso85eI&_nc_ht=scontent-dfw5-1.xx&oh=a6bb562f910060e59934cf51b1fdba1c&oe=5D59CB5E",
            "name": "Mike",
            "specialty": "Menswear",
            "styling": false,
            "bio": "I can help you learn what to wear, how to wear it and where to buy it!",
            "image1": "https://i.etsystatic.com/17585916/r/il/c20940/1717546107/il_1588xN.1717546107_ik1l.jpg",
            "image2": "https://i.pinimg.com/564x/c8/9a/0f/c89a0f9d18dca03858fd62dbe35df1a3.jpg",
            "image3": "https://i.pinimg.com/564x/6a/e2/1c/6ae21c824baa34ac4ddd57a382508730.jpg"
            },

            {"photo": "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/27331648_1806964449328138_5524203193642089203_n.jpg?_nc_cat=105&_nc_oc=AQkmFk3-7HQvRWA71HDC533i7O7iabStxP1AM6kjLW6EzTj7lRvkzAGvJ6WtMNrIT5A&_nc_ht=scontent-dfw5-1.xx&oh=e1145878188010a275a24f6c0c493f7f&oe=5D9CE115",
            "name": "Marcus",
            "specialty": "All Occassion",
            "styling": false,
            "bio": "Fashion is my air.",
            "image1": "https://i.pinimg.com/564x/19/e1/c5/19e1c5041aa155f445f7fda83e5d1ee0.jpg",
            "image2": "https://i.pinimg.com/564x/5b/fc/73/5bfc7345e6d268bb0a978bf5fc9312ba.jpg",
            "image3": "https://i.pinimg.com/564x/15/0a/63/150a6309c38fd8402f269e230ec4e8cf.jpg"
            },

            {"photo": "https://www.telegraph.co.uk/content/dam/business/2018/01/29/east-fashion_trans_NvBQzQNjv4Bq5owlPY5WrRS8cpq85pESqZEcd6j4l7hgiq7B8pf2fno.jpg?imwidth=450",
            "name": "Nikki",
            "specialty": "Street Style",
            "styling": false,
            "bio": "I love style! Shopping is my passion",
            "image1": "https://i.pinimg.com/564x/7d/db/9a/7ddb9a7f466053e99eb7a318164916de.jpg",
            "image2":  "https://i.pinimg.com/564x/fa/f4/de/faf4de00772719af653aa4d1caf7f73b.jpg",
            "image3": "https://i.pinimg.com/564x/ca/5a/37/ca5a374b2b42fe97230782daa42aa0cd.jpg"
            },

            {"photo": "https://cdn.wearethought.com/media/wysiwyg/SS19/thought-clothing-menswear-organic-ethical-fashion-mens-shirts-fitzroy-stripe-natural-fabrics.jpg",
            "name": "Justin",
            "specialty": "Menswear",
            "styling": false,
            "bio": "Menswear Menswear Menswear",
            "image1": "https://i.pinimg.com/564x/c9/0e/82/c90e82d6e902fb7880f52480f5371ee7.jpg",
            "image2": "https://i.pinimg.com/564x/92/f2/a1/92f2a13c373e968c9ed2750060923c03.jpg",
            "image3": "https://i.pinimg.com/564x/f4/68/44/f46844703afe87b42c27e24c7e82dc3d.jpg"
            },

            {"photo": "https://www.idealworld.tv/gb/common/images/hubpages/fashion-hub/images/fashion-clearance-270319.jpg",
            "name": "Misty",
            "specialty": "All Occasion",
            "styling": false,
            "bio": "I don't watch the news, fashion is my news",
            "image1": "https://i.pinimg.com/564x/ae/f8/cc/aef8ccd1edc7aa3659a790a0815703a9.jpg",
            "image2": "https://i.pinimg.com/564x/84/4d/0b/844d0b93ab29d62aed894f22771ba7d4.jpg",
            "image3": "https://i.pinimg.com/564x/b2/8d/d8/b28dd83c8a75780753048f7f69ec3238.jpg"
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
                .then( () => {
                    stylists.forEach( stylist => Stylist.create(stylist))
                    users.forEach( userAttributes => {
                        let user = User.build(userAttributes)
                        user.password = userAttributes.password
                        user.save()
                    })
                })
        })
    
