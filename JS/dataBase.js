const listOfGift = [
    {
       nameOfGift:"Lipstick",
       genderSuits:"female",
       situationSuits:["valentine","8/3","20/10","christmas", "birthday"],
       characteristicsSuits:"Cosmetics",
       minPrice:200000,
       maxPrice:500000,
       imageLink:"images/Lipstick.jpg",
       addressLink:["https://www.google.com/maps/place/Topcosstore/@21.0181627,105.8499292,15z/data=!4m5!3m4!1s0x0:0x729e701c2f600425!8m2!3d21.0181627!4d105.8499292",
                    "https://www.google.com/maps/place/CoCo+Shop+Ch%C3%B9a+B%E1%BB%99c/@21.008633,105.826179,15z/data=!4m5!3m4!1s0x0:0x9690fbbeed04191e!8m2!3d21.008633!4d105.826179", 
                    "https://www.google.com/maps/place/Sammi+Shop+Ch%C3%B9a+B%E1%BB%99c/@21.0072264,105.8258708,16.48z/data=!4m5!3m4!1s0x3135ac7fd708ac17:0x51b8b368767ded6a!8m2!3d21.007167!4d105.829235"],
    },
 
    {
       nameOfGift:"SkinCare",
       genderSuits:"female",
       situationSuits:["valentine","8/3","20/10","christmas", "birthday"],
       characteristicsSuits:"Cosmetics",
       minPrice:200000,
       maxPrice:1000000,
       imageLink:"images/SkinCare.jpg",
       addressLink:["https://www.google.com/maps/place/M%E1%BB%B9+ph%E1%BA%A9m+Felice/@21.0192943,105.8151717,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7b2aa0b9a7:0xf9024b1180ec3434!8m2!3d21.0192893!4d105.8173604",
                    "https://www.google.com/maps/place/JENNY+SHOPP/@21.0127237,105.8640058,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abfa3a9a90e9:0x6c186d27d033f984!8m2!3d21.0127187!4d105.8661945",
                    "https://www.google.com/maps/place/Beauty+Garden+(H%E1%BB%87+Th%E1%BB%91ng+M%E1%BB%B9+Ph%E1%BA%A9m+Ch%C3%ADnh+H%C3%A3ng)/@21.009346,105.8224643,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ac81dd7be501:0x7d168e4eae4098e5!8m2!3d21.009341!4d105.824653"],
    },
 
    {
       nameOfGift:"FacialMask",
       genderSuits:"female",
       situationSuits:["valentine","8/3","20/10","christmas", "birthday"],
       characteristicsSuits:"Cosmetics",
       minPrice:300000,
       maxPrice:600000,
       imageLink:"images/FacialMask.jpg",
       addressLink:["https://www.google.com/maps/place/Beauty+Garden+(H%E1%BB%87+Th%E1%BB%91ng+M%E1%BB%B9+Ph%E1%BA%A9m+Ch%C3%ADnh+H%C3%A3ng)/@21.009346,105.8224643,17z/data=!4m5!3m4!1s0x3135ac81dd7be501:0x7d168e4eae4098e5!8m2!3d21.009341!4d105.824653", 
                    "https://www.google.com/maps/place/CHEAPIE/@21.013631,105.8489183,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8ca213afcd:0xefd24d04a102823!8m2!3d21.013631!4d105.851107",
                    "https://www.google.com/maps/place/Hufuholic+-+M%E1%BB%B9+ph%E1%BA%A9m+ch%C3%ADnh+h%C3%A3ng+uy+t%C3%ADn/@21.0258196,105.8281424,15z/data=!4m5!3m4!1s0x0:0xbf48fcd191e0f1cb!8m2!3d21.0258196!4d105.8281424"],
    },
 
    {
       nameOfGift:"FacialPowder",
       genderSuits:"female",
       situationSuits:["valentine","8/3","20/10","christmas", "birthday"],
       characteristicsSuits:"Cosmetics",
       minPrice:50000,
       maxPrice:100000,
       imageLink:"images/FacialPowder.jpg",
       addressLink:["https://www.google.com/maps/place/CoCo+Shop+Ch%C3%B9a+B%E1%BB%99c/@21.008633,105.826179,15z/data=!4m5!3m4!1s0x0:0x9690fbbeed04191e!8m2!3d21.008633!4d105.826179",
                    "https://www.google.com/maps/place/Mint+Cosmetics+-+CS2+Nguy%E1%BB%85n+Ch%C3%AD+Thanh/@21.018068,105.8067923,15z/data=!4m5!3m4!1s0x0:0xafdd64842abf7afa!8m2!3d21.018068!4d105.8067923",
                    "https://www.google.com/maps/place/C%E1%BB%ADa+H%C3%A0ng+M%E1%BB%B9+Ph%E1%BA%A9m+H%E1%BA%A1nh+Store/@21.0305661,105.8419334,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abbf517f31f7:0xd060378f4f03bf40!8m2!3d21.0305661!4d105.8441221"],
    },

    {
        nameOfGift:"Shirts",
        genderSuits:"both",
        situationSuits:"AllEvents",
        characteristicsSuits:"Clothes",
        minPrice:50000,
        maxPrice:300000,
        imageLink:"images/Shirts.jpg",
        addressLink:["https://www.google.com/maps/place/Uniqlo+Hanoi+Flagship/@21.0064256,105.829484,17z/data=!4m8!1m2!2m1!1zdW5pcWxvIG5lYXIgUGjhuqFtIE5n4buNYyBUaOG6oWNoLCDEkOG7kW5nIMSQYSwgSGFub2k!3m4!1s0x3135ad256515dcd5:0x350771387ff1b3d5!8m2!3d21.0063485!4d105.8317644",
                     "https://www.google.com/maps/place/CANIFA+L%C3%AA+%C4%90%E1%BA%A1i+H%C3%A0nh/@21.01054,105.8470373,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8bab484083:0xf8670dbdfd57189f!8m2!3d21.01054!4d105.849226",
                     "https://www.google.com/maps/place/Trung+T%C3%A2m+Th%E1%BB%9Di+Trang+Xu%E1%BA%A5t+Kh%E1%BA%A9u+M2/@21.0143399,105.8156385,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7ccf39bb93:0xac5755932e58cdc9!8m2!3d21.0143399!4d105.8178272"],
     },

     {
        nameOfGift:"Skirts",
        genderSuits:"female",
        situationSuits:["8/3","20/10","christmas", "birthday"],
        characteristicsSuits:"Clothes",
        minPrice:300000,
        maxPrice:2000000,
        imageLink:"images/Skirts.jpg",
        addressLink:["https://www.google.com/maps/place/Eva+De+Eva/@21.013297,105.8173853,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7cfdc253ed:0xc61e9f90be5a7342!8m2!3d21.013297!4d105.819574", 
                     "https://www.google.com/maps/place/Th%E1%BB%9Di+trang+NEM/@21.029982,105.8138822,17z/data=!3m1!4b1!4m5!3m4!1s0x3135aba990478abf:0x509cbbeb6c83f262!8m2!3d21.029982!4d105.8160709",
                     "https://www.google.com/maps/place/CANIFA+43+Th%C3%A1i+H%C3%A0/@21.0112094,105.819426,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7d08330ef1:0xaae4fc77b8dbe2c0!8m2!3d21.0112094!4d105.8216147"],
     },

     {
        nameOfGift:"Shoes",
        genderSuits:"both",
        situationSuits:"AllEvents",
        characteristicsSuits:"Clothes",
        minPrice:800000,
        maxPrice:4000000,
        imageLink:"images/Shoes.jpg",
        addressLink:["https://www.google.com/maps/place/Adidas+Stadium+X%C3%A3+%C4%90%C3%A0n/@21.0163746,105.8301267,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abb70872f755:0x542afae34d850afc!8m2!3d21.0163696!4d105.8323154", 
                     "https://www.google.com/maps/place/Nike+shop+hanoi/@21.030208,105.8445427,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7c0bf0d98f:0xd98a4663445df907!8m2!3d21.030203!4d105.8467314", 
                     "https://www.google.com/maps/place/Bitis+Hunter+Independence+Store/@21.0266428,105.842998,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab96c098a3d7:0x8f61872c46da79ef!8m2!3d21.0266378!4d105.8451867"],
     },

     {
        nameOfGift:"HighHeels",
        genderSuits:"female",
        situationSuits:["valentine","8/3","20/10","christmas", "birthday"],
        characteristicsSuits:["Clothes"],
        minPrice:1500000,
        maxPrice:3000000,
        imageLink:"images/HighHeels.jpg",
        addressLink:["https://www.google.com/maps/place/Christina-Q+112B5+N%C3%BAi+Tr%C3%BAc/@21.027066,105.8173013,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7373759329:0x212e2cfe899f55c9!8m2!3d21.027061!4d105.81949",
                     "https://www.google.com/maps/place/CHARLES+%26+KEITH/@21.0271101,105.8019804,14z/data=!4m8!1m2!2m1!1scharles+%26+keith!3m4!1s0x3135ab68842d505d:0x1dbff2abf4c8cebd!8m2!3d21.0235358!4d105.8088928",
                     "https://www.google.com/maps/place/Pedro+Vincom+Tr%E1%BA%A7n+Duy+H%C6%B0ng/@21.005115,105.7920443,17z/data=!3m1!4b1!4m5!3m4!1s0x3135adf9622175fb:0xa00fa560ad2223fa!8m2!3d21.00511!4d105.794233"],
     },

     {
        nameOfGift:"Watch",
        genderSuits:"both",
        situationSuits:["christmas", "birthday", "anniversary"],
        characteristicsSuits:"Accessories",
        minPrice:2000000,
        maxPrice:10000000,
        imageLink:"images/Watch.jpg",
        addressLink:["https://www.google.com/maps/place/Casio+VietNam+Store/@21.005115,105.7920443,17z/data=!4m5!3m4!1s0x3134555305aa9105:0xdc5a3ee35bdbc1ae!8m2!3d21.0404145!4d105.76443",
                     "https://www.google.com/maps/place/Bello+L%C3%AA+Th%C3%A1i+T%E1%BB%95+-+%C4%90%E1%BB%93ng+h%E1%BB%93+G-SHOCK+ch%C3%ADnh+h%C3%A3ng+Casio+Nh%E1%BA%ADt+B%E1%BA%A3n/@21.0265457,105.8492358,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab0bcd54aeeb:0x29f7de51b5b47306!8m2!3d21.0265407!4d105.8514245",
                     "https://www.google.com/maps/place/Showroom+G-SHOCK+ch%C3%ADnh+h%C3%A3ng+Casio+Nh%E1%BA%ADt+B%E1%BA%A3n/@21.029177,105.7977663,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab43f96b258b:0x2f2df1fde8b99a72!8m2!3d21.029172!4d105.799955"],
     },

     {
        nameOfGift:"Fragrance",
        genderSuits:"both",
        situationSuits:"AllEvents",
        characteristicsSuits:"Accessories",
        minPrice:1000000,
        maxPrice:3000000,
        imageLink:"images/Fragrance.jpg",
        addressLink:["https://www.google.com/maps/place/Th%E1%BA%BF+Gi%E1%BB%9Bi+N%C6%B0%E1%BB%9Bc+Hoa/@21.0317536,105.8217856,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abcefdcc49e1:0xb44c3c035c16443a!8m2!3d21.0317486!4d105.8239743",
                     "https://www.google.com/maps/place/Rosa+Perfume/@21.015241,105.8467373,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8b1e23fa87:0x37d363e7a4de6bc4!8m2!3d21.015236!4d105.848926",
                     "https://www.google.com/maps/place/ZARA/@21.0117006,105.8493367,18z/data=!3m1!5s0x3135ab8ba7e8fd91:0xcf7ee1e53d65544d!4m5!3m4!1s0x3135ab8ba8897b99:0xe6b93e0f7677a11b!8m2!3d21.0114953!4d105.8494708"],
     },

     {
        nameOfGift:"Bracelet",
        genderSuits:"both",
        situationSuits:["valentine", "anniversary"],
        characteristicsSuits:"Accessories",
        minPrice:200000,
        maxPrice:2000000,
        imageLink:"images/Bracelet.jpg",
        addressLink:["https://www.google.com/maps/place/Helios/@21.0027024,105.8458223,15z/data=!4m2!3m1!1s0x0:0x20f3d8958ff11c6f?sa=X&ved=2ahUKEwjV-JSdnODoAhVVA4gKHUteDH0Q_BIwDHoECBcQCA",
                     "https://www.google.com/maps/place/Fiona+accessories+-+Chi+nh%C3%A1nh+Ho%C3%A0ng+C%E1%BA%A7u/@21.0191939,105.8246827,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab0caad5156f:0xfad30340154d2772!8m2!3d21.0191889!4d105.8268714",
                     "https://www.google.com/maps/place/Hanakotoba+Shop/@21.0348607,105.8517388,15z/data=!4m5!3m4!1s0x0:0x34553159a87aadb6!8m2!3d21.0348607!4d105.8517388"],
     },

     {
        nameOfGift:"Ring",
        genderSuits:"female",
        situationSuits:["valentine" , "anniversary"],
        characteristicsSuits:"Accessories",
        minPrice:1000000,
        maxPrice:4000000,
        imageLink:"images/Ring.jpg",
        addressLink:["https://www.google.com/maps/place/PNJ+X%C3%A3+%C4%90%C3%A0n/@21.0163403,105.829697,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab82353cdf2b:0xea672d77b7bb9928!8m2!3d21.0163353!4d105.8318857",
                     "https://www.google.com/maps/place/Skymond+Luxury/@21.019488,105.8262807,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab2e6358b22f:0xadf7e0bb3ecc97aa!8m2!3d21.019483!4d105.8284694",
                     "https://www.google.com/maps/place/Trang+s%E1%BB%A9c+DTJ/@21.0108588,105.8232926,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7e374db16d:0x26b0baa7941294ff!8m2!3d21.0108538!4d105.8254813"],
     },

     {
        nameOfGift:"Flowers",
        genderSuits:"female",
        situationSuits:["valentine","8/3","20/10", "birthday", "anniversary"],
        characteristicsSuits:"SimpleGift",
        minPrice:200000,
        maxPrice:1000000,
        imageLink:"images/Flowers.jpg",
        addressLink:["https://www.google.com/maps/place/Shop+Hoa+T%C6%B0%C6%A1i+Andy/@20.9807784,105.7782909,17z/data=!3m1!4b1!4m5!3m4!1s0x3134533295234e99:0x30c2e21c60f29f38!8m2!3d20.9807734!4d105.7804796",
                     "https://www.google.com/maps/place/38+Degree+flowers/@21.027313,105.8409823,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab971979b637:0x59b2fb6ec89b42fa!8m2!3d21.027308!4d105.843171",
                     "https://www.google.com/maps/place/M%C3%A9taphore+Boutique/@21.0254904,105.8556378,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abeb97bf6f3f:0xf9b0df33234a95f0!8m2!3d21.0254854!4d105.8578265"],
     },

     {
        nameOfGift:"Books",
        genderSuits:"both",
        situationSuits:"AllEvents",
        characteristicsSuits:"SimpleGift",
        minPrice:100000,
        maxPrice:500000,
        imageLink:"images/Books.jpg",
        addressLink:["https://www.google.com/maps/place/Nh%C3%A0+S%C3%A1ch+C%C3%A1+Ch%C3%A9p/@21.0298249,105.8351451,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab98f6b819cb:0xa79daf2bad31165c!8m2!3d21.0298199!4d105.8373338",
                     "https://www.google.com/maps/place/Nh%C3%A0+s%C3%A1ch+Ti%E1%BA%BFn+Th%E1%BB%8D/@20.9927458,105.8023597,17z/data=!3m1!4b1!4m5!3m4!1s0x3135adae3b930961:0x46cd1bd64dc632cc!8m2!3d20.9927408!4d105.8045484",
                     "https://www.google.com/maps/place/Nha%CC%80+sa%CC%81ch+Ti%C3%AA%CC%80n+Phong+Th%E1%BB%A7y+L%E1%BB%A3i/@21.0075241,105.8219004,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ac819ba8aee5:0x9c7032b815901df8!8m2!3d21.0075191!4d105.8240891"],
     },

     {
        nameOfGift:"Cake",
        genderSuits:"both",
        situationSuits:["birthday", "christmas", "anniversary"],
        characteristicsSuits:"Food",
        minPrice:300000,
        maxPrice:600000,
        imageLink:"images/Cake.jpg",
        addressLink:["https://www.google.com/maps/place/Thu+Huong+Bakery/@21.014293,105.8495911,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8cdb2c4133:0x41cb97f653d653f0!8m2!3d21.014288!4d105.8517798",
                     "https://www.google.com/maps/place/Anh+Hoa+Bakery/@21.0126828,105.8098494,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab6219ce9d31:0x504bc25eaf2a87dc!8m2!3d21.0126778!4d105.8120381",
                     "https://www.google.com/maps/place/Paris+Gateaux/@21.0267993,105.8210484,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab76b2263f41:0x776275d3a1a2e0ce!8m2!3d21.0267943!4d105.8232371"],
     },

     {
        nameOfGift:"MileTea",
        genderSuits:"both",
        situationSuits:"AllEvents",
        characteristicsSuits:"Food",
        minPrice:40000,
        maxPrice:70000,
        imageLink:"images/MilkTea.jpg",
        addressLink:["https://www.google.com/maps/place/Gong+Cha+Giang+Vo/@21.0267993,105.8210484,17z/data=!4m5!3m4!1s0x3135ab71386706ef:0x34182b5ecfb04382!8m2!3d21.0257056!4d105.8218591",
                     "https://www.google.com/maps/place/Ding+Tea/@21.019385,105.8255609,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab783787f37b:0xcbf842191c32c548!8m2!3d21.01938!4d105.8277496",
                     "https://www.google.com/maps/place/The+Alley+Milktea/@21.0147506,105.7990979,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab9eb3a3ba0d:0x3e3e08a0ee47c26e!8m2!3d21.0147456!4d105.8012866"],
     },

     {
        nameOfGift:"Chocolate",
        genderSuits:"both",
        situationSuits:["valentine", "christmas"],
        characteristicsSuits:"Food",
        minPrice:200000,
        maxPrice:500000,
        imageLink:"images/Chocolate.jpg",
        addressLink:["https://www.google.com/maps/place/Mama+Chocolate/@21.044984,105.8029691,17z/data=!4m5!3m4!1s0x3135ab3d5a7241c9:0x5cf5173772f4c44d!8m2!3d21.044984!4d105.8051578",
                     "https://www.google.com/maps/place/Sweeties+Chocolate+Shop+@+Vincom+Ha+Noi/@21.0115011,105.8471571,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8c5d95f0c9:0x4a8c3defb00d4ea4!8m2!3d21.0115011!4d105.8493458",
                     "https://www.google.com/maps/place/D'art+Chocolate/@21.0309099,105.8537675,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abf2a33203a5:0x11b44e68404c94e9!8m2!3d21.0309099!4d105.8559562"],
     },

     {
        nameOfGift:"Wine",
        genderSuits:"male",
        situationSuits:["christmas", "birthday", "anniversary"],
        characteristicsSuits:"Food",
        minPrice:1500000,
        maxPrice:3000000,
        imageLink:"images/Wine.jpg",
        addressLink:["https://www.google.com/maps/place/Foreign+Hanoi+Liquor+Stores/@20.998451,105.8189482,17z/data=!3m1!4b1!4m5!3m4!1s0x317528b2ec88d235:0xc117ac5c5e24240a!8m2!3d20.998446!4d105.8211369",
                     "https://www.google.com/maps/place/C%C3%B4ng+ty+C%E1%BB%93n+r%C6%B0%E1%BB%A3u+H%C3%A0+N%E1%BB%99i/@21.0146425,105.8548272,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abf3c7423fb7:0xfb78234a7600f2ff!8m2!3d21.0146375!4d105.8570159",
                     "https://www.google.com/maps/place/Shop+R%C6%B0%E1%BB%A3u+H%C3%B9ng+%C3%81nh/@21.0312433,105.8444186,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abbe00906a4b:0xd3110f0b842b6c39!8m2!3d21.0312383!4d105.8466073"],
     },
    ]