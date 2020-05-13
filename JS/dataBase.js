const listOfGift = [
   {
      nameOfGift: "Lipstick",
      genderSuits: "female",
      vietnameseName: "Son",
      relationShips: ["Mother", "Girlfriend", "Wife", "Relatives", "Co-worker"],
      situationSuits: ["valentine", "8/3", "20/10", "christmas", "birthday"],
      characteristicsSuits: "Cosmetics",
      minPrice: 200000,
      maxPrice: 500000,
      imageLink: "Html/images/Lipstick.jpg",
      shopInfo: [{ name: "TopcosStore", address: "120 Bùi Thị Xuân, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/Topcosstore/@21.0181627,105.8499292,15z/data=!4m5!3m4!1s0x0:0x729e701c2f600425!8m2!3d21.0181627!4d105.8499292" },
      { name: "CoCo Shop", address: "80 Chùa Bộc, Quang Trung, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/CoCo+Shop+Ch%C3%B9a+B%E1%BB%99c/@21.008633,105.826179,15z/data=!4m5!3m4!1s0x0:0x9690fbbeed04191e!8m2!3d21.008633!4d105.826179" },
      { name: "Sammi Shop", address: "73 Chùa Bộc, Quang Trung, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Sammi+Shop+Ch%C3%B9a+B%E1%BB%99c/@21.0072264,105.8258708,16z/data=!4m5!3m4!1s0x3135ac7fd708ac17:0x51b8b368767ded6a!8m2!3d21.007167!4d105.829235" }
      ]
   },

   {
      nameOfGift: "SkinCare",
      genderSuits: "female",
      vietnameseName: "Dưỡng da",
      relationShips: ["Mother", "Girlfriend", "Wife", "Relatives", "Boss", "Co-worker"],
      situationSuits: ["valentine", "8/3", "20/10", "christmas", "birthday"],
      characteristicsSuits: "Cosmetics",
      minPrice: 400000,
      maxPrice: 1000000,
      imageLink: "Html/images/SkinCare.jpg",
      shopInfo: [{ name: "Mỹ phẩm Felice", address: "57 Láng Hạ, Chợ Dừa, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/M%E1%BB%B9+ph%E1%BA%A9m+Felice/@21.0192893,105.8151717,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7b2aa0b9a7:0xf9024b1180ec3434!8m2!3d21.0192893!4d105.8173604" },
      { name: "JENNY SHOPP", address: "710 Đường Bạch Đằng, Bạch Đằng, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/JENNY+SHOPP/@21.0127187,105.8640058,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abfa3a9a90e9:0x6c186d27d033f984!8m2!3d21.0127187!4d105.8661945" },
      { name: "Beauty Garden", address: "152 Chùa Bộc Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Beauty+Garden+(H%E1%BB%87+Th%E1%BB%91ng+M%E1%BB%B9+Ph%E1%BA%A9m+Ch%C3%ADnh+H%C3%A3ng)/@21.009341,105.8224643,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ac81dd7be501:0x7d168e4eae4098e5!8m2!3d21.009341!4d105.824653" }]
   },

   {
      nameOfGift: "FacialMask",
      genderSuits: "female",
      vietnameseName: "Mặt nạ",
      relationShips: ["Mother", "Girlfriend", "Wife", "Relatives", "Co-worker"],
      situationSuits: ["valentine", "8/3", "20/10", "christmas", "birthday"],
      characteristicsSuits: "Cosmetics",
      minPrice: 300000,
      maxPrice: 600000,
      imageLink: "Html/images/FacialMask.jpg",
      shopInfo: [{ name: "Beauty Garden", address: "152 Chùa Bộc Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Beauty+Garden+(H%E1%BB%87+Th%E1%BB%91ng+M%E1%BB%B9+Ph%E1%BA%A9m+Ch%C3%ADnh+H%C3%A3ng)/@21.009341,105.8224643,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ac81dd7be501:0x7d168e4eae4098e5!8m2!3d21.009341!4d105.824653" },
      { name: "CHEAPIE", address: "81 Mai Hắc Đế, Bùi Thị Xuân, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/CHEAPIE/@21.013631,105.8489183,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8ca213afcd:0xefd24d04a102823!8m2!3d21.013631!4d105.851107" },
      { name: "Hufuholic", address: "10 Ngõ 160 Hào Nam, Chợ Dừa, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Hufuholic+-+M%E1%BB%B9+ph%E1%BA%A9m+ch%C3%ADnh+h%C3%A3ng+uy+t%C3%ADn/@21.0258196,105.8281424,15z/data=!4m5!3m4!1s0x0:0xbf48fcd191e0f1cb!8m2!3d21.0258196!4d105.8281424" }]
   },

   {
      nameOfGift: "FacialPowder",
      genderSuits: "female",
      vietnameseName: "Phấn trang điểm",
      relationShips: ["Mother", "Girlfriend", "Wife", "Relatives", "Co-worker"],
      situationSuits: ["valentine", "8/3", "20/10", "christmas", "birthday"],
      characteristicsSuits: "Cosmetics",
      minPrice: 50000,
      maxPrice: 100000,
      imageLink: "Html/images/FacialPowder.jpg",
      shopInfo: [{ name: "CoCo Shop", address: "80 Chùa Bộc, Quang Trung, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/CoCo+Shop+Ch%C3%B9a+B%E1%BB%99c/@21.008633,105.826179,15z/data=!4m5!3m4!1s0x0:0x9690fbbeed04191e!8m2!3d21.008633!4d105.826179" },
      { name: "Mint Cosmetics", address: "ngõ 72 Nguyễn Chí Thanh, Láng Thượng, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Mint+Cosmetics+-+CS2+Nguy%E1%BB%85n+Ch%C3%AD+Thanh/@21.018068,105.8067923,15z/data=!4m5!3m4!1s0x0:0xafdd64842abf7afa!8m2!3d21.018068!4d105.8067923" },
      { name: "Hạnh Store", address: "95 Lý Nam Đế, Cửa Đông, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/C%E1%BB%ADa+H%C3%A0ng+M%E1%BB%B9+Ph%E1%BA%A9m+H%E1%BA%A1nh+Store/@21.0305661,105.8419334,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abbf517f31f7:0xd060378f4f03bf40!8m2!3d21.0305661!4d105.8441221" }]
   },
   {
      nameOfGift: "Shirts",
      genderSuits: "both",
      vietnameseName: "Áo",
      relationShips: ["Father", "Boyfriend", "Husband", "Mother", "Girlfriend", "Wife", "Relatives", "Co-worker"],
      situationSuits: "AllEvents",
      characteristicsSuits: "Clothes",
      minPrice: 50000,
      maxPrice: 300000,
      imageLink: "Html/images/Shirts.jpg",
      shopInfo: [{ name: "Uniqlo Hanoi Flagship", address: "102 Phạm Ngọc Thạch, Kim Liên, Đống Đa, Hà Nội, Vietnam", link: "https://www.google.com/maps/place/Uniqlo+Hanoi+Flagship/@21.0064256,105.829484,17z/data=!4m8!1m2!2m1!1zdW5pcWxvIG5lYXIgUGjhuqFtIE5n4buNYyBUaOG6oWNoLCDEkOG7kW5nIMSQYSwgSGFub2k!3m4!1s0x3135ad256515dcd5:0x350771387ff1b3d5!8m2!3d21.0063485!4d105.8317644" },
      { name: "CANIFA", address: "25 Phố Lê Đại Hành, Lê Đại Hành, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/CANIFA+L%C3%AA+%C4%90%E1%BA%A1i+H%C3%A0nh/@21.01054,105.8470373,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8bab484083:0xf8670dbdfd57189f!8m2!3d21.01054!4d105.849226" },
      { name: "Trung Tâm Thời Trang Xuất Khẩu M2", address: "163 Thái Hà, Láng Hạ, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Trung+T%C3%A2m+Th%E1%BB%9Di+Trang+Xu%E1%BA%A5t+Kh%E1%BA%A9u+M2/@21.0143399,105.8156385,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7ccf39bb93:0xac5755932e58cdc9!8m2!3d21.0143399!4d105.8178272" }]
   },

   {
      nameOfGift: "Skirts",
      genderSuits: "female",
      vietnameseName: "Váy",
      relationShips: ["Mother", "Girlfriend", "Wife", "Relatives"],
      situationSuits: ["8/3", "20/10", "christmas", "birthday"],
      characteristicsSuits: "Clothes",
      minPrice: 300000,
      maxPrice: 2000000,
      imageLink: "Html/images/Skirts.jpg",
      shopInfo: [{ name: "Eva De Eva", address: "133 Thái Hà, Trung Liệt, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/Eva+De+Eva/@21.013297,105.8173853,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7cfdc253ed:0xc61e9f90be5a7342!8m2!3d21.013297!4d105.819574" },
      { name: "Thời trang NEM", address: "56 Kim Mã, Ngọc Khánh, Ba Đình, Hà Nội", link: "https://www.google.com/maps/place/Th%E1%BB%9Di+trang+NEM/@21.029982,105.8138822,17z/data=!3m1!4b1!4m5!3m4!1s0x3135aba990478abf:0x509cbbeb6c83f262!8m2!3d21.029982!4d105.8160709" },
      { name: "CANIFA", address: "43 Thái Hà, Trung Liệt, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/CANIFA+43+Th%C3%A1i+H%C3%A0/@21.0112094,105.819426,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7d08330ef1:0xaae4fc77b8dbe2c0!8m2!3d21.0112094!4d105.8216147" }]
   },

   {
      nameOfGift: "Shoes",
      genderSuits: "both",
      vietnameseName: "Giày",
      relationShips: ["Father", "Boyfriend", "Husband", "Mother", "Girlfriend", "Wife", "Relatives"],
      situationSuits: "AllEvents",
      characteristicsSuits: "Clothes",
      minPrice: 800000,
      maxPrice: 4000000,
      imageLink: "Html/images/Shoes.jpg",
      shopInfo: [{ name: "Adidas Stadium", address: "460 Xã Đàn, Nam Đồng, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Adidas+Stadium+X%C3%A3+%C4%90%C3%A0n/@21.0163696,105.8301267,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abb70872f755:0x542afae34d850afc!8m2!3d21.0163696!4d105.8323154" },
      { name: "Nike ", address: "86 Hàng Bông, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/Nike+shop+hanoi/@21.030203,105.8445427,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7c0bf0d98f:0xd98a4663445df907!8m2!3d21.030203!4d105.8467314" },
      { name: "Bitis Store", address: "68 Hai Bà Trưng, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/Bitis+Hunter+Independence+Store/@21.0266378,105.842998,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab96c098a3d7:0x8f61872c46da79ef!8m2!3d21.0266378!4d105.8451867" }]
   },

   {
      nameOfGift: "HighHeels",
      genderSuits: "female",
      vietnameseName: "Giày cao gót",
      relationShips: ["Mother", "Girlfriend", "Wife", "Relatives"],
      situationSuits: ["valentine", "8/3", "20/10", "christmas", "birthday"],
      characteristicsSuits: ["Clothes"],
      minPrice: 1500000,
      maxPrice: 3000000,
      imageLink: "Html/images/HighHeels.jpg",
      shopInfo: [{ name: "Christina-Q ", address: "112/B5 Núi Trúc, Giảng Võ, Hà Nội", link: "https://www.google.com/maps/place/Christina-Q+112B5+N%C3%BAi+Tr%C3%BAc/@21.027061,105.8173013,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7373759329:0x212e2cfe899f55c9!8m2!3d21.027061!4d105.81949" },
      { name: "CHARLES & KEITH", address: "Vincom Center, 54A Nguyễn Chí Thanh, Láng Thượng, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/CHARLES+%26+KEITH/@21.0271101,105.8019804,14z/data=!4m8!1m2!2m1!1scharles+%26+keith!3m4!1s0x3135ab68842d505d:0x1dbff2abf4c8cebd!8m2!3d21.0235358!4d105.8088928" },
      { name: "Pedro", address: "119 Trần Duy Hưng, Trung Hoà, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Pedro+Vincom+Tr%E1%BA%A7n+Duy+H%C6%B0ng/@21.00511,105.7920443,17z/data=!3m1!4b1!4m5!3m4!1s0x3135adf9622175fb:0xa00fa560ad2223fa!8m2!3d21.00511!4d105.794233" }]
   },

   {
      nameOfGift: "Watch",
      genderSuits: "both",
      vietnameseName: "Đồng hồ",
      relationShips: ["Father", "Boyfriend", "Husband", "Mother", "Girlfriend", "Wife", "Relatives", "Boss"],
      situationSuits: ["christmas", "birthday", "anniversary"],
      characteristicsSuits: "Accessories",
      minPrice: 2000000,
      maxPrice: 10000000,
      imageLink: "Html/images/Watch.jpg",
      shopInfo: [{ name: "Casio VietNam Store", address: "171 Đường Hồ Tùng Mậu, Cầu Diễn, Từ Liêm, Hà Nội", link: "https://www.google.com/maps/place/Casio+VietNam+Store/@21.0419957,105.759789,14.43z/data=!4m5!3m4!1s0x3134555305aa9105:0xdc5a3ee35bdbc1ae!8m2!3d21.0404145!4d105.76443" },
      { name: "Bello", address: "46 Lê Thái Tổ, Hàng Trống, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/Bello+L%C3%AA+Th%C3%A1i+T%E1%BB%95+-+%C4%90%E1%BB%93ng+h%E1%BB%93+G-SHOCK+ch%C3%ADnh+h%C3%A3ng+Casio+Nh%E1%BA%ADt+B%E1%BA%A3n/@21.0265407,105.8492358,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab0bcd54aeeb:0x29f7de51b5b47306!8m2!3d21.0265407!4d105.8514245" },
      { name: "Showroom G-SHOCK chính hãng Casio Nhật Bản", address: "473 Nguyễn Khang, quận Cầu Giấy, Hà Nội", link: "https://www.google.com/maps/place/Showroom+G-SHOCK+ch%C3%ADnh+h%C3%A3ng+Casio+Nh%E1%BA%ADt+B%E1%BA%A3n/@21.029172,105.7977663,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab43f96b258b:0x2f2df1fde8b99a72!8m2!3d21.029172!4d105.799955" }]
   },

   {
      nameOfGift: "Fragrance",
      genderSuits: "both",
      vietnameseName: "Nước hoa",
      relationShips: ["Boyfriend", "Husband", "Girlfriend", "Wife", "Relatives", "Co-worker"],
      situationSuits: "AllEvents",
      characteristicsSuits: "Accessories",
      minPrice: 1000000,
      maxPrice: 3000000,
      imageLink: "Html/images/Fragrance.jpg",
      shopInfo: [{ name: "Thế Giới Nước Hoa", address: "216 Kim Mã, Ba Đình, Hà Nội", link: "https://www.google.com/maps/place/Th%E1%BA%BF+Gi%E1%BB%9Bi+N%C6%B0%E1%BB%9Bc+Hoa/@21.0317486,105.8217856,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abcefdcc49e1:0xb44c3c035c16443a!8m2!3d21.0317486!4d105.8239743" },
      { name: "Rosa Perfume", address: "70 Tuệ Tĩnh, Nguyễn Du, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/Rosa+Perfume/@21.015236,105.8467373,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8b1e23fa87:0x37d363e7a4de6bc4!8m2!3d21.015236!4d105.848926" },
      { name: "ZARA", address: "191 Bà Triệu, Lê Đại Hành, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/ZARA/@21.0117006,105.8493367,18z/data=!3m1!5s0x3135ab8ba7e8fd91:0xcf7ee1e53d65544d!4m5!3m4!1s0x3135ab8ba8897b99:0xe6b93e0f7677a11b!8m2!3d21.0114953!4d105.8494708" }]
   },

   {
      nameOfGift: "Bracelet",
      genderSuits: "both",
      vietnameseName: "Vòng tay",
      relationShips: ["Boyfriend", "Husband", "Mother", "Girlfriend", "Wife"],
      situationSuits: ["valentine", "anniversary"],
      characteristicsSuits: "Accessories",
      minPrice: 200000,
      maxPrice: 2000000,
      imageLink: "Html/images/Bracelet.jpg",
      shopInfo: [{ name: "Helios", address: "Số 104, 4 Ngõ Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/Helios/@21.0027024,105.8458223,15z/data=!4m5!3m4!1s0x0:0x20f3d8958ff11c6f!8m2!3d21.0027024!4d105.8458223" },
      { name: "Fiona Accessories", address: "69A Ngõ 9 - Hoàng Cầu, Chợ Dừa, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Fiona+accessories+-+Chi+nh%C3%A1nh+Ho%C3%A0ng+C%E1%BA%A7u/@21.0191889,105.8246827,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab0caad5156f:0xfad30340154d2772!8m2!3d21.0191889!4d105.8268714" },
      { name: "Hanakotoba Shop", address: "36 Lương Ngọc Quyến, Hàng Buồm, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/Hanakotoba+Shop/@21.0348607,105.8517388,15z/data=!4m5!3m4!1s0x0:0x34553159a87aadb6!8m2!3d21.0348607!4d105.8517388" }]
   },

   {
      nameOfGift: "Ring",
      genderSuits: "female",
      vietnameseName: "Nhẫn",
      relationShips: ["Mother", "Girlfriend", "Wife"],
      situationSuits: ["valentine", "anniversary"],
      characteristicsSuits: "Accessories",
      minPrice: 1000000,
      maxPrice: 4000000,
      imageLink: "Html/images/Ring.jpg",
      shopInfo: [{ name: "PNJ", address: "243 Xã Đàn, Nam Đồng, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/PNJ+X%C3%A3+%C4%90%C3%A0n/@21.0163353,105.829697,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab82353cdf2b:0xea672d77b7bb9928!8m2!3d21.0163353!4d105.8318857" },
      { name: "Skymond Luxury", address: "79 Ô Chợ Dừa, Chợ Dừa, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Skymond+Luxury/@21.019483,105.8262807,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab2e6358b22f:0xadf7e0bb3ecc97aa!8m2!3d21.019483!4d105.8284694" },
      { name: "Trang sức DTJ", address: "153 Tây Sơn, Quang Trung, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Trang+s%E1%BB%A9c+DTJ/@21.0108538,105.8232926,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7e374db16d:0x26b0baa7941294ff!8m2!3d21.0108538!4d105.8254813" }]
   },

   {
      nameOfGift: "Flowers",
      genderSuits: "female",
      vietnameseName: "Hoa",
      relationShips: ["Mother", "Girlfriend", "Wife", "Boss"],
      situationSuits: ["valentine", "8/3", "20/10", "birthday", "anniversary"],
      characteristicsSuits: "Gift",
      minPrice: 200000,
      maxPrice: 1000000,
      imageLink: "Html/images/Flowers.jpg",
      shopInfo: [{ name: "Shop Hoa Tươi Andy", address: "31 Đường 18M, P. Mộ Lao, Hà Đông, Hà Nội", link: "https://www.google.com/maps/place/Shop+Hoa+T%C6%B0%C6%A1i+Andy/@20.9807734,105.7782909,17z/data=!3m1!4b1!4m5!3m4!1s0x3134533295234e99:0x30c2e21c60f29f38!8m2!3d20.9807734!4d105.7804796" },
      { name: "38 Degree", address: "65b Hai Bà Trưng, Cửa Nam, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/38+Degree+flowers/@21.027308,105.8409823,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab971979b637:0x59b2fb6ec89b42fa!8m2!3d21.027308!4d105.843171" },
      { name: "Métaphore Boutique", address: "4 Lý Đạo Thành, Tràng Tiền, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/M%C3%A9taphore+Boutique/@21.0254854,105.8556378,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abeb97bf6f3f:0xf9b0df33234a95f0!8m2!3d21.0254854!4d105.8578265" }]
   },

   {
      nameOfGift: "Books",
      genderSuits: "both",
      vietnameseName: "Sách",
      relationShips: ["Father", "Boyfriend", "Husband", "Mother", "Girlfriend", "Wife", "Relatives", "Co-worker"],
      situationSuits: "AllEvents",
      characteristicsSuits: "Gift",
      minPrice: 100000,
      maxPrice: 500000,
      imageLink: "Html/images/Books.jpg",
      shopInfo: [{ name: "Nhà Sách Cá Chép", address: "115 Phố Nguyễn Thái Học, Văn Miếu, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Nh%C3%A0+S%C3%A1ch+C%C3%A1+Ch%C3%A9p/@21.0298199,105.8351451,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab98f6b819cb:0xa79daf2bad31165c!8m2!3d21.0298199!4d105.8373338" },
      { name: "Nhà sách Tiến Thọ", address: "424 Nguyễn Trãi, Thanh Xuân Trung, Thanh Xuân, Hà Nội", link: "https://www.google.com/maps/place/Nh%C3%A0+s%C3%A1ch+Ti%E1%BA%BFn+Th%E1%BB%8D/@20.9927408,105.8023597,17z/data=!3m1!4b1!4m5!3m4!1s0x3135adae3b930961:0x46cd1bd64dc632cc!8m2!3d20.9927408!4d105.8045484" },
      { name: "Nhà sách Tiền Phong", address: "Cổng trường Đại học Thủy Lợi, Tây Sơn, Trung Liệt, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Nha%CC%80+sa%CC%81ch+Ti%C3%AA%CC%80n+Phong+Th%E1%BB%A7y+L%E1%BB%A3i/@21.0075191,105.8219004,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ac819ba8aee5:0x9c7032b815901df8!8m2!3d21.0075191!4d105.8240891" }]
   },

   {
      nameOfGift: "Cake",
      genderSuits: "both",
      vietnameseName: "Bánh Gato",
      relationShips: ["Father", "Boyfriend", "Husband", "Mother", "Girlfriend", "Wife", "Relatives", "Boss", "Co-worker"],
      situationSuits: ["birthday", "christmas", "anniversary"],
      characteristicsSuits: "Food",
      minPrice: 300000,
      maxPrice: 600000,
      imageLink: "Html/images/Cake.jpg",
      shopInfo: [{ name: "Thu Huong Bakery", address: "149 Huế, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/Thu+Huong+Bakery/@21.014288,105.8495911,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8cdb2c4133:0x41cb97f653d653f0!8m2!3d21.014288!4d105.8517798" },
      { name: "Anh Hoa Bakery", address: "Số 78 Láng Hạ, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Anh+Hoa+Bakery/@21.0126778,105.8098494,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab6219ce9d31:0x504bc25eaf2a87dc!8m2!3d21.0126778!4d105.8120381" },
      { name: "Paris Gateaux", address: "124-144 Phố Giảng Võ, Giảng Võ, Ba Đình, Hà Nội", link: "https://www.google.com/maps/place/Paris+Gateaux/@21.0267943,105.8210484,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab76b2263f41:0x776275d3a1a2e0ce!8m2!3d21.0267943!4d105.8232371" }]
   },

   {
      nameOfGift: "MilkTea",
      genderSuits: "both",
      vietnameseName: "Trà sữa",
      relationShips: ["Boyfriend", "Girlfriend", "Relatives", "Co-worker"],
      situationSuits: "AllEvents",
      characteristicsSuits: "Food",
      minPrice: 40000,
      maxPrice: 70000,
      imageLink: "Html/images/MilkTea.jpg",
      shopInfo: [{ name: "Gong Cha", address: "D2 Phố Giảng Võ, Giảng Võ, Ba Đình, Hà Nội", link: "https://www.google.com/maps/place/Gong+Cha+Giang+Vo/@21.0267993,105.8210484,17z/data=!4m5!3m4!1s0x3135ab71386706ef:0x34182b5ecfb04382!8m2!3d21.0257056!4d105.8218591" },
      { name: "Ding Tea", address: "82-84 Ô Chợ Dừa, Chợ Dừa, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Ding+Tea/@21.01938,105.8255609,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab783787f37b:0xcbf842191c32c548!8m2!3d21.01938!4d105.8277496" },
      { name: "The Alley", address: "23 Trung Hòa, Trung Hoà, Cầu Giấy, Hà Nội", link: "https://www.google.com/maps/place/The+Alley+Milktea/@21.0147456,105.7990979,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab9eb3a3ba0d:0x3e3e08a0ee47c26e!8m2!3d21.0147456!4d105.8012866" }]
   },

   {
      nameOfGift: "Chocolate",
      genderSuits: "both",
      vietnameseName: "Socola",
      relationShips: ["Boyfriend", "Husband", "Girlfriend", "Wife"],
      situationSuits: ["valentine", "christmas"],
      characteristicsSuits: "Food",
      minPrice: 200000,
      maxPrice: 500000,
      imageLink: "Html/images/Chocolate.jpg",
      shopInfo: [{ name: "Mama Chocolate", address: "24 Nguyễn Đình Hoàn, Nghĩa Đô, Cầu Giấy, Hà Nội", link: "https://www.google.com/maps/place/Mama+Chocolate/@21.044984,105.8029691,17z/data=!4m5!3m4!1s0x3135ab3d5a7241c9:0x5cf5173772f4c44d!8m2!3d21.044984!4d105.8051578" },
      { name: "Sweeties Chocolate ", address: "191 Ba Trieu, Le Dai Hanh, Hai Ba Trung, Hanoi", link: "https://www.google.com/maps/place/Sweeties+Chocolate+Shop+@+Vincom+Ha+Noi/@21.0115011,105.8471571,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8c5d95f0c9:0x4a8c3defb00d4ea4!8m2!3d21.0115011!4d105.8493458" },
      { name: "D'art Chocolate", address: "18A Hàng Vôi, Lý Thái Tổ, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/D'art+Chocolate/@21.0309099,105.8537675,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abf2a33203a5:0x11b44e68404c94e9!8m2!3d21.0309099!4d105.8559562" }]
   },

   {
      nameOfGift: "Wine",
      genderSuits: "male",
      vietnameseName: "Rượu",
      relationShips: ["Father", "Husband", "Relatives", "Boss", "Co-worker"],
      situationSuits: ["christmas", "birthday", "anniversary"],
      characteristicsSuits: "Food",
      minPrice: 1500000,
      maxPrice: 3000000,
      imageLink: "Html/images/Wine.jpg",
      shopInfo: [{ name: "Foreign Hanoi Liquor Stores", address: "247 Hoàng Văn Thái, Khương Trung, Thanh Xuân, Hà Nội", link: "https://www.google.com/maps/place/Foreign+Hanoi+Liquor+Stores/@20.998446,105.8189482,17z/data=!3m1!4b1!4m5!3m4!1s0x317528b2ec88d235:0xc117ac5c5e24240a!8m2!3d20.998446!4d105.8211369" },
      { name: "Công ty Cồn rượu Hà Nội", address: "94 Lò Đúc, Phạm Đình Hổ, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/C%C3%B4ng+ty+C%E1%BB%93n+r%C6%B0%E1%BB%A3u+H%C3%A0+N%E1%BB%99i/@21.0146375,105.8548272,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abf3c7423fb7:0xfb78234a7600f2ff!8m2!3d21.0146375!4d105.8570159" },
      { name: "Shop Rượu Hùng Ánh", address: "1 Hàng Da, Cửa Đông, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/Shop+R%C6%B0%E1%BB%A3u+H%C3%B9ng+%C3%81nh/@21.0312383,105.8444186,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abbe00906a4b:0xd3110f0b842b6c39!8m2!3d21.0312383!4d105.8466073" }]
   },

   {
      nameOfGift: "Tie",
      genderSuits: "male",
      vietnameseName: "Cavat",
      relationShips: ["Father", "Husband", "Relatives", "Boss", "Co-worker"],
      situationSuits: ["christmas", "birthday", "anniversary"],
      characteristicsSuits: "Accessories",
      minPrice: 200000,
      maxPrice: 1000000,
      imageLink: "Html/images/Tie.jpg",
      shopInfo: [{ name: "Adam Store", address: "82 Huế, Phố Huế, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/Adam+Store/@21.0129425,105.8496663,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8d3ed37a2f:0x9d6f0b2cc2eec918!8m2!3d21.0129375!4d105.851855" },
      { name: "Cavat Hà Nội", address: "Số 16 Ngõ Hòa Bình 4, Minh Khai, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/C%C3%A0+V%E1%BA%A1t+Nam+,+Cavat+H%C3%A0+N%E1%BB%99i/@20.9951308,105.8457484,15z/data=!4m8!1m2!2m1!1zY8OgIHbhuqF0IG5hbSBow6AgbuG7mWk!3m4!1s0x3135ad73c1aab2d5:0xeb34acf69745eea1!8m2!3d20.995227!4d105.854097" },
      { name: "REMMY", address: "Số 2 Nguyễn Du, Hàng Bài, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/REMMY/@21.0184385,105.8491455,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abfea878220b:0x7f46382efad421fc!8m2!3d21.0184335!4d105.8513342" }]
   },

   {
      nameOfGift: "Belt",
      genderSuits: "male",
      vietnameseName: "Thắt lưng",
      relationShips: ["Father", "Boyfriend", "Husband", "Relatives", "Boss", "Co-worker"],
      situationSuits: ["christmas", "birthday", "anniversary"],
      characteristicsSuits: "Accessories",
      minPrice: 300000,
      maxPrice: 1000000,
      imageLink: "Html/images/Belt.jpg",
      shopInfo: [{ name: "Adam Store", address: "82 Huế, Phố Huế, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/Adam+Store/@21.0129425,105.8496663,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8d3ed37a2f:0x9d6f0b2cc2eec918!8m2!3d21.0129375!4d105.851855" },
      { name: "Laforce", address: "158 Thái Hà, Đống Đa, Hà Nội, Hà Nội", link: "https://www.google.com/maps/place/Leather+furniture+Laforce/@21.01314,105.8177683,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7d01bdcf5b:0x2951f6c5aecd8735!8m2!3d21.013135!4d105.819957" },
      { name: "Tâm Anh Shop", address: "86 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội", link: "https://www.google.com/maps/place/T%C3%A2m+Anh+Shop/@21.031299,105.7981143,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab413713b73b:0x3ae0b8e73a0174f2!8m2!3d21.031294!4d105.800303" }]
   },

   {
      nameOfGift: "Wallet",
      genderSuits: "male",
      vietnameseName: "Ví",
      relationShips: ["Father", "Boyfriend", "Husband"],
      situationSuits: ["christmas", "birthday", "anniversary"],
      characteristicsSuits: "Accessories",
      minPrice: 400000,
      maxPrice: 1500000,
      imageLink: "Html/images/Wallet.jpg",
      shopInfo: [{ name: "EFORA", address: "458 Phố Minh Khai, Mai Động, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/Efora/@20.9930356,105.8671667,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ac1b44afe451:0xd230c0ff56ce3704!8m2!3d20.9930306!4d105.8693554" },
      { name: "Laforce", address: "158 Thái Hà, Đống Đa, Hà Nội, Hà Nội", link: "https://www.google.com/maps/place/Leather+furniture+Laforce/@21.01314,105.8177683,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7d01bdcf5b:0x2951f6c5aecd8735!8m2!3d21.013135!4d105.819957" },
      { name: "Tâm Anh Shop", address: "86 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội", link: "https://www.google.com/maps/place/T%C3%A2m+Anh+Shop/@21.031299,105.7981143,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab413713b73b:0x3ae0b8e73a0174f2!8m2!3d21.031294!4d105.800303" }]
   },

   {
      nameOfGift: "Hat",
      genderSuits: "both",
      vietnameseName: "Mũ",
      relationShips: ["Father", "Boyfriend", "Husband", "Mother", "Girlfriend", "Wife", "Relatives", "Co-worker"],
      situationSuits: ["christmas", "birthday"],
      characteristicsSuits: "Accessories",
      minPrice: 500000,
      maxPrice: 1000000,
      imageLink: "Html/images/Hat.jpg",
      shopInfo: [{ name: "KayyStore", address: "97 Đào Tấn, Ngọc Khánh, Ba Đình, Hà Nội", link: "https://www.google.com/maps/place/KayyStore/@21.0335237,105.8039185,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab38f63bec7d:0x21b84f7ae0763b76!8m2!3d21.0335187!4d105.8061072" },
      { name: "BLackShop", address: "473 Ngõ 192 - Lê Trọng Tấn, Định Công, Thanh Xuân, Hà Nội", link: "https://www.google.com/maps/place/BLackShop+-+Expert+Caps,+snapback+hats+beautiful/@20.9848317,105.8220237,17z/data=!3m1!4b1!4m5!3m4!1s0x3135acf4ed2a5b85:0xf3439f276f68d229!8m2!3d20.9848267!4d105.8242124" },
      { name: "Nón Sơn", address: "236 Hàng Bông, Cửa Nam, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/N%C3%B3n+S%C6%A1n/@21.02826,105.8409763,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab9707002417:0x129c39ed0f52f1b7!8m2!3d21.028255!4d105.843165" }]
   },

   {
      nameOfGift: "Purse",
      genderSuits: "female",
      vietnameseName: "Ví nữ",
      relationShips: ["Mother", "Girlfriend", "Wife", "Relatives"],
      situationSuits: ["christmas", "birthday", "anniversary", "8/3", "20/10"],
      characteristicsSuits: "Accessories",
      minPrice: 2500000,
      maxPrice: 5000000,
      imageLink: "Html/images/Purse.jpg",
      shopInfo: [{ name: "CHARLES & KEITH", address: "Vincom Center, 54A Nguyễn Chí Thanh, Láng Thượng, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/CHARLES+%26+KEITH/@21.0271101,105.8019804,14z/data=!4m8!1m2!2m1!1scharles+%26+keith!3m4!1s0x3135ab68842d505d:0x1dbff2abf4c8cebd!8m2!3d21.0235358!4d105.8088928" },
      { name: "Pedro", address: "119 Trần Duy Hưng, Trung Hoà, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Pedro+Vincom+Tr%E1%BA%A7n+Duy+H%C6%B0ng/@21.00511,105.7920443,17z/data=!3m1!4b1!4m5!3m4!1s0x3135adf9622175fb:0xa00fa560ad2223fa!8m2!3d21.00511!4d105.794233" },
      { name: "Furla", address: "191 Bà Triệu, Lê Đại Hành, Hà Nội, Vietnam", link: "https://www.google.com/maps/place/Furla/@21.0113686,105.8471059,17z/data=!3m2!4b1!5s0x3135ab8ba7e8fd91:0xcf7ee1e594a5bec2!4m5!3m4!1s0x3135ab8ba71d3d7f:0x1fec213e84037adf!8m2!3d21.0113636!4d105.8492946" }]
   },

   {
      nameOfGift: "Smartphone",
      genderSuits: "both",
      vietnameseName: "Điện thoại",
      relationShips: ["Father", "Boyfriend", "Husband", "Mother", "Girlfriend", "Wife", "Relatives"],
      situationSuits: ["christmas", "birthday"],
      characteristicsSuits: "Electronic",
      minPrice: 4000000,
      maxPrice: 30000000,
      imageLink: "Html/images/Smartphone.jpg",
      shopInfo: [{ name: "Cellphone S", address: "21 Thái Hà, P. Trung Liệt, Q. Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Cellphone+S+-+21+Th%C3%A1i+H%C3%A0/@21.0134098,105.8172136,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7ce2c036cf:0x724c1e25fed4bd09!8m2!3d21.0134048!4d105.8194023" },
      { name: "FPT Shop", address: "216 Thái Hà, Trung Liệt, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/FPT+Shop/@21.0139649,105.8169794,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7ce695b175:0x2ce421dd9fc922e5!8m2!3d21.0139599!4d105.8191681" },
      { name: "Thế Giới Di Động", address: "60 Đại Cồ Việt, Lê Đại Hành, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/Th%E1%BA%BF+Gi%E1%BB%9Bi+Di+%C4%90%E1%BB%99ng/@21.008367,105.8454753,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8a0e15270b:0x81addb4c0fde9246!8m2!3d21.008362!4d105.847664" }]
   },

   {
      nameOfGift: "Tablet",
      genderSuits: "both",
      vietnameseName: "Máy tính bảng",
      relationShips: ["Father", "Boyfriend", "Husband", "Mother", "Girlfriend", "Wife", "Relatives", "Boss"],
      situationSuits: ["christmas", "birthday"],
      characteristicsSuits: "Electronic",
      minPrice: 7000000,
      maxPrice: 20000000,
      imageLink: "Html/images/Tablet.jpg",
      shopInfo: [{ name: "Cellphone S", address: "21 Thái Hà, P. Trung Liệt, Q. Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Cellphone+S+-+21+Th%C3%A1i+H%C3%A0/@21.0134098,105.8172136,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7ce2c036cf:0x724c1e25fed4bd09!8m2!3d21.0134048!4d105.8194023" },
      { name: "FPT Shop", address: "216 Thái Hà, Trung Liệt, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/FPT+Shop/@21.0139649,105.8169794,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7ce695b175:0x2ce421dd9fc922e5!8m2!3d21.0139599!4d105.8191681" },
      { name: "Thế Giới Di Động", address: "60 Đại Cồ Việt, Lê Đại Hành, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/Th%E1%BA%BF+Gi%E1%BB%9Bi+Di+%C4%90%E1%BB%99ng/@21.008367,105.8454753,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8a0e15270b:0x81addb4c0fde9246!8m2!3d21.008362!4d105.847664" }]
   },

   {
      nameOfGift: "Cookies",
      genderSuits: "both",
      vietnameseName: "Bánh kẹo",
      relationShips: ["Father", "Boyfriend", "Husband", "Mother", "Girlfriend", "Wife", "Relatives", "Boss", "Co-worker"],
      situationSuits: ["christmas", "birthday", "tet"],
      characteristicsSuits: "Food",
      minPrice: 200000,
      maxPrice: 600000,
      imageLink: "Html/images/Cookies.jpg",
      shopInfo: [{ name: "Cửa hàng Bách Linh", address: "33 Thợ Nhuộm, Hàng Bông, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/C%C3%B4ng+Ty+Tnhh+B%C3%A1ch+Linh/@21.0279047,105.8422583,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab94dba3a24d:0x9cd8e44065edf42f!8m2!3d21.0278997!4d105.844447" },
      { name: "Occident Mart", address: "T6 Times City Building, SO - 05A, Phố Minh Khai, Vĩnh Phú, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/Occident+Mart/@20.9959276,105.8666875,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ac04c388a0bd:0x2903406ab5c2d7cc!8m2!3d20.9959226!4d105.8688762" },
      { name: "LOTTE Mart", address: "Lotte Center Hanoi, 54 Liễu Giai, Cống Vị, Ba Đình, Hà Nội", link: "https://www.google.com/maps/place/LOTTE+Mart/@21.007659,105.767101,13z/data=!4m8!1m2!2m1!1slotte+mart!3m4!1s0x3135ab6c93b61439:0x6a6bc262254f572f!8m2!3d21.0321757!4d105.8124268" }]
   },

   {
      nameOfGift: "Tickets",
      genderSuits: "both",
      vietnameseName: "Vé du lịch",
      relationShips: ["Father", "Boyfriend", "Husband", "Mother", "Girlfriend", "Wife", "Relatives"],
      situationSuits: ["christmas", "birthday", "anniversary", "tet"],
      characteristicsSuits: "Gift",
      minPrice: 10000000,
      maxPrice: 40000000,
      imageLink: "Html/images/Tickets.jpg",
      shopInfo: [{ name: "Viettravel", address: "3 Hai Bà Trưng, Phan Chu Trinh, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/Vietravel+Hanoi/@21.022971,105.8546502,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abd2a4f1a4af:0x510d5ca52c9844bb!8m2!3d21.022966!4d105.8568389" },
      { name: "BestPrice Travel", address: "12 Ngõ Bà Triệu, Lê Đại Hành, Hai Ba Trung Dist, Hà Nội", link: "https://www.google.com/maps/place/BestPrice+Travel/@21.012847,105.8462133,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ac6c2cc7ac69:0x5ce29006574d093d!8m2!3d21.012842!4d105.848402" },
      { name: "Tổng Công Ty Du Lịch Hà Nội", address: "Số 18 Lý Thường Kiệt, Phan Chu Trinh, Hoàn Kiếm, Hà Nội", link: "https://www.google.com/maps/place/T%E1%BB%95ng+C%C3%B4ng+Ty+Du+L%E1%BB%8Bch+H%C3%A0+N%E1%BB%99i/@21.0219917,105.8532869,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abf17e3a68db:0xec2f817ebf13c2f2!8m2!3d21.0219867!4d105.8554756" }]
   },

   {
      nameOfGift: "Pottery",
      genderSuits: "both",
      vietnameseName: "Đồ gốm sứ",
      relationShips: ["Father", "Mother", "Relatives", "Boss"],
      situationSuits: ["christmas", "birthday", "anniversary", "tet"],
      characteristicsSuits: "Gift",
      minPrice: 3000000,
      maxPrice: 20000000,
      imageLink: "Html/images/Pottery.jpg",
      shopInfo: [{ name: "Gốm Sứ Bát Tràng", address: "Bát Tràng, Gia Lâm, Gia Lâm Hà Nội", link: "https://www.google.com/maps/place/G%E1%BB%91m+S%E1%BB%A9+B%C3%A1t+Tr%C3%A0ng/@20.9773841,105.9114339,17z/data=!3m1!4b1!4m5!3m4!1s0x3135aee79afe4a13:0xd8b249d1178f40b!8m2!3d20.9773791!4d105.9136226" },
      { name: "Ceramics Minh Quang", address: "251 Giang Cao, Bát Tràng, Gia Lâm, Hà Nội", link: "https://www.google.com/maps/place/Ceramics+Minh+Quang/@20.9783439,105.9110115,17z/data=!3m1!4b1!4m5!3m4!1s0x3135aedc0415070d:0xf209d935315771fa!8m2!3d20.9783389!4d105.9132002" },
      { name: "Gốm Sứ Vạn An Lộc ", address: "Xóm 3, Thôn, Bát Tràng, Gia Lâm, Hà Nội", link: "https://www.google.com/maps/place/G%E1%BB%91m+S%E1%BB%A9+V%E1%BA%A1n+An+L%E1%BB%99c+-+B%C3%A1t+Tr%C3%A0ng/@20.9762076,105.9098297,17z/data=!3m1!4b1!4m5!3m4!1s0x3135af4623cb43fd:0xf1911a2ebed9b11c!8m2!3d20.9762026!4d105.9120184" }]
   },

   {
      nameOfGift: "Pet",
      genderSuits: "both",
      vietnameseName: "Thú nuôi",
      relationShips: ["Father", "Boyfriend", "Husband", "Mother", "Girlfriend", "Wife", "Relatives",],
      situationSuits: ["christmas", "birthday"],
      characteristicsSuits: "Gift",
      minPrice: 4000000,
      maxPrice: 20000000,
      imageLink: "Html/images/Pet.jpg",
      shopInfo: [{ name: "Pet Mart", address: "3 Đại Cồ Việt, Lê Đại Hành, Hai Bà Trưng, Hà Nội", link: "https://www.google.com/maps/place/Pet+Mart+%C4%90%E1%BA%A1i+C%E1%BB%93+Vi%E1%BB%87t+-+C%E1%BB%ADa+H%C3%A0ng+Th%C3%BA+C%C6%B0ng/@21.008496,105.8490824,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab2efcc686d5:0xc5f3b6c4719b4a3e!8m2!3d21.008491!4d105.8512711" },
      { name: "Lolipet", address: "số 10/10, ngõ 45 Nguyên Hồng, Láng Hạ, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/Lolipet+Petshop/@21.0175565,105.8094352,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab6d835af2cd:0x7ae22c01ff41b64c!8m2!3d21.0175515!4d105.8116239" },
      { name: "Kún Miu Pet", address: "135 An Trạch, Chợ Dừa, Đống Đa, Hà Nội", link: "https://www.google.com/maps/place/K%C3%BAn+Miu+Pet+shop+%26+Grooming/@21.0273827,105.826609,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab9e10fe01f9:0xb508a3b55d30f8e6!8m2!3d21.0273777!4d105.8287977" }]
   },

   {
      nameOfGift: "Plant",
      genderSuits: "both",
      vietnameseName: "Cây cảnh",
      relationShips: ["Father", "Boyfriend", "Husband", "Mother", "Girlfriend", "Wife", "Relatives", "Boss", "Co-worker"],
      situationSuits: ["christmas", "birthday", "tet"],
      characteristicsSuits: "Gift",
      minPrice: 100000,
      maxPrice: 2000000,
      imageLink: "Html/images/Plant.jpg",
      shopInfo: [{ name: "Cây cảnh Hà Nội", address: "628 Hoàng Hoa Thám, Bưởi, Ba Đình, Hà Nội", link: "https://www.google.com/maps/place/C%C3%A2y+c%E1%BA%A3nh+H%C3%A0+N%E1%BB%99i+-+C%C6%A1+s%E1%BB%9F+2/@21.0471035,105.8071371,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab0150cd0979:0x193dfe49ae0d2ff2!8m2!3d21.0470985!4d105.8093258" },
      { name: "Web cây cảnh", address: "Số 60, Ngõ 235, Yên Hòa, Cầu Giấy, Hà Nội", link: "https://www.google.com/maps/place/Web+c%C3%A2y+c%E1%BA%A3nh+-+B%C3%A1n+c%C3%A2y+c%E1%BA%A3nh,+ch%C4%83m+s%C3%B3c,+thi%E1%BA%BFt+k%E1%BA%BF/@21.02171,105.7906833,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab506260a04f:0xa97effe60af09306!8m2!3d21.021705!4d105.792872" },
      { name: "ViNaTrees", address: "74 Trung Kính, Yên Hoà, Cầu Giấy, Hà Nội", link: "https://www.google.com/maps/place/VINATREES/@21.015432,105.7928845,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab583465a3c1:0xcabd0abef13553c3!8m2!3d21.015427!4d105.7950732" }]
   },
]

const eVents = [
   {
      Name: "valentine",
      vieName: "Lễ Tình Nhân",
      prvAnswer:["Wife","Girlfriend"],
      linkImage: "Html/images/Valentine.jpg"
      
   },

   {
      Name: "20/10",
      vieName: "Ngày phụ nữ Việt Nam 20/10",
      prvAnswer:["Wife","Girlfriend","Mother","Co-worker","Boss","Relatives"],
      linkImage: "Html/images/20-10.jpg"
   },

   {
      Name: "8/3",
      vieName: "Quốc tế phụ nữ",
      prvAnswer:["Wife","Girlfriend","Mother","Co-worker","Boss","Relatives"],
      linkImage: "Html/images/8-3.jpg"
   },

   {
      Name: "christmas",
      vieName: "Lễ Giáng Sinh",
      prvAnswer:"all",
      linkImage: "Html/images/Christmas.jpg"
   },

   {
      Name: "tet",
      vieName: "Ngày Tết",
      prvAnswer:"all",
      linkImage: "Html/images/Tet.jpg"
   },

   {
      Name: "birthday",
      vieName: "Sinh nhật",
      prvAnswer:"all",
      linkImage: "Html/images/Birthday.jpg"
   },

   {
      Name: "anniversary",
      vieName: "Kỉ niệm",
      prvAnswer:"all",
      linkImage: "Html/images/Anniversary.jpg"
   },

   {
      Name: "AllEvents",
      vieName: "Phù hợp cho mọi ngày",
      prvAnswer:"all",
      linkImage: "Html/images/AllEvents.jpg",
   },
]

const Gender = [
   {
      Name: "male",
      vieName: "Nam",
      linkImage: "Html/images/male.png"
   },

   {
      Name: "female",
      vieName: "Nữ",
      linkImage: "Html/images/female.png"
   },

   {
      Name: "both",
      vieName: "Cả hai",
      linkImage: "Html/images/gender-equality.png"
   }
]

const Relationships = [
   {
      Name: "Father",
      vieName: "Bố",
      prvAnswer:["male"],
      linkImage: "Html/images/Father.jpg"
   },

   {
      Name: "Mother",
      vieName: "Mẹ",
      prvAnswer:["female"],
      linkImage: "Html/images/Mother.jpg"
   },

   {
      Name: "Husband",
      vieName: "Chồng",
      prvAnswer:["male"],
      linkImage: "Html/images/Husband.jpg"
   },

   {
      Name: "Wife",
      vieName: "Vợ",
      prvAnswer:["female"],
      linkImage: "Html/images/Wife.jpg"
   },

   {
      Name: "Boyfriend",
      vieName: "Bạn trai",
      prvAnswer:["male"],
      linkImage: "Html/images/Boyfriend.jpg"
   },

   {
      Name: "Girlfriend",
      vieName: "Bạn gái",
      prvAnswer:["female"],
      linkImage: "Html/images/Girlfriend.jpg"
   },

   {
      Name: "Co-worker",
      vieName: "Đồng nghiệp",
      prvAnswer:["female","both","male"],
      linkImage: "Html/images/Co-worker.jpg"
   },

   {
      Name: "Boss",
      vieName: "Sếp",
      prvAnswer:["female","both","male"],
      linkImage: "Html/images/Boss.jpg"
   },

   {
      Name: "Relatives",
      vieName: "Người thân",
      prvAnswer:["female","both","male"],
      linkImage: "Html/images/Relatives.jpg"
   }
]

const step=["index.html","Question 1.html","Question 2.html","Question 3.html","Question 4.html","List Result.html","Your Choiced Gift.html"]