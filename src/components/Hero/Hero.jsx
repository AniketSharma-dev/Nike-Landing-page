import React from 'react'

const Hero = () => {

    const ShowImags = [
        {
            name: "ACG Air Zoom Gaiadome Gore-Tex",
            description: "Gore-Tex shoe designed.",
            imageUrl: "https://storage.googleapis.com/kagglesdsdata/datasets/3656054/6348735/acg-air-zoom-gaiadome-gore-tex-shoes-JWxGVN.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20241104%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241104T043203Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=3700730bb86aa6b4425e8e20ca652419cb1179f4a2ee30bb5ccda1e766e898bdb4573bc26523f07beaf0b1a987b68ae6984c23267acea3f347954b0dfb4a59735b8d0676ebf6558de408fc9b53917e53dd0e7b87be225a0f50cfc6f26d312034a3b55797a3cea0ac08bb8489e0fe586d665af0f31890e85eeefaca521f7486c745405ec0e76ef03536056b4fb87aa2d9bf5d2a588166cf512d5227ad2848568f35a34994ec494dab7fb4fe1edd5c23829164f062165557cd7287e727528beeba7d04340b7fa3de74d7ca2a1dcd4db3fe694902d01f2dd1bec166c7200a7d3ac45b7e6f86f7d5ace92e869188775e2eb973ca357a130bde389df89b782beaefda"
        },
        {
            name: "Air Flight Lite Mid Men's Shoes",
            description: "Lightweight, mid-top shoes.",
            imageUrl: "https://storage.googleapis.com/kagglesdsdata/datasets/3656054/6348735/air-flight-lite-mid-mens-shoes-MK82PV.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20241104%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241104T181424Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=67d2520f465dfcc55a3ca11131bdd3dc118b884d83838e2d881efc3b39dec33b05834b33525357dddbe7e3ba1de993caef7cad082d5aca39f34befaf8c6d4bba1479cdebf46bce7f6bab69aed017a1631239fbb31a47cc87b55b0c7cebb15a1e7f955446d14f798eaade710083eb79b4a0955827c78ddd11b873b15ff6cd490cf5551a88aa79da6a9f79d96f2687eb9a3b827abfec2bd96188c2f92a746bec52f4285b341c98cb208edb29e2d4c63a3a8383cffbb7c259b006c38c8cd957a608f27d20f44a155b96bbdb23bcbd92d518c9a52b4bea12fa8c946abd3ee83fb6a2696c51c596a125dafd07ff843ce675b90a083f9712caf18111d7956b9c060883"
        },
        {
            name: "Air Force 1 '07 LV8 Men's Shoes",
            description: "Classic Air Force 1.",
            imageUrl: "https://storage.googleapis.com/kagglesdsdata/datasets/3656054/6348735/air-force-1-07-lv8-mens-shoes-7bCM7s.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20241104%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241104T181430Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=6b66fe05c6b1cdedb5470615630dfeca77ac7520c1014c716107a1469d4095f05b1a0310a632eaa35893021a3f60d6c4f988799d2ad3d5009df2104438f5eec3f706e0e6e3fab3c43cf6e066657c5e29df6156a7e2e8b4ab1cac417577829d08a3f45a1636c89636f4dfd333d0d08dfbe86b51477ae27d4190b6eaf0f994d0ce5781154b3aa5681d0b9b0762ab98d420000c123236d1cd863dbba9620e73d1ce435de0fc2dbc87c767d0612055668f9ad853b5c8b6fabb8796293769408cdc84df8d9956e1200018c915b386089d3ec1aefc304e0ccc78bedbed5020c05f6754c00dbecf27b96d19a48fb7c91270a4bc81ea2edb598e80a25313bf0f9ee2a540"
        },
        {
            name: "Air Force 1 '07 LX Men's Shoes",
            description: "Premium LX Air Force 1.",
            imageUrl: "https://storage.googleapis.com/kagglesdsdata/datasets/3656054/6348735/air-force-1-07-lx-mens-shoes-D2ZCMj.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20241104%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241104T181356Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=155344430577be0100418bb602f89e4ab06b52dfa58312908aa31172cbb2a430367abfc84c406399623748210e333882ccd6300d07f563995213d743954812449ddb72e6e6ddbb29831d78e0b53666abfcc68fd750d7b47f6d33f72b8d1af557648b012e4a9e1ca08ba56a3e261fff986e92daef1eaa7784f0a5be87231b5956d761b73fcbd2bf7675c814ee327d0425f6850f1db9c9a010c7415d0013bada0a903e2ab708b95f7df96684f6c752cb7e6767151d3f756d0f1cc649916d7be893cd5477dcd5006287addf99a9c98b12c57bea9a94e09c9ba4d90ba58ddd3ae6a95a2a32e2a2aee6baab648060a38b859e43bdd6649f4781efcffe8f50d47d1363"
        },
        {
            name: "Air Force 1 '07 Men's Shoes",
            description: "Standard Air Force 1.",
            imageUrl: "https://storage.googleapis.com/kagglesdsdata/datasets/3656054/6348735/air-force-1-07-mens-shoes-6HPpcT.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20241104%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241104T181442Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=84e9ea38d9e73b9f04c7941b8a4d21087622df89f4ddc55326eb9f9053d389ae417100bc892b6978ba1c46b33296347826fc78ca9a574991b10f9a2123aeb07625b8d2a4adb959c59feb8423afd8a4e51e24698c5a0d8e02de862e6630882990a524b354ae67256fd9b32cff931215203265fdec42af6e60658e4a3f278f4c58ca9d9d3878bfe8decd84a09b69b9cc64ea672b96c40d74fabe15f9f40533d9ad8a0180088014ddfc354b0c47dda2cb0d587dc72fc64761b0491f95ea43ff3314cb7234e0d5518b99880487fa53323dec7ad74fe05c8b44c87700fd5425edabbadafa10ee98c2c6cbcd2a0f22a31c7e4a215bdc8b0158054bd5726d62932e053d"
        }
    ]

    return (
        <section className="w-full h-full">
            <div style={{ height: `calc(100vh - 97.65px)` }} className="w-full flex flex-col sm:flex-row">
                <div className="w-2/5 h-full px-20 py-20">
                    <h6>Explore The Limited Edition</h6>
                    <h1 className="text-7xl font-semibold  mt-2">NIKE LIMITED EDITION</h1>
                    <p className="my-5 pr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora quae quasi ipsam quo ipsum dolores quod maiores, illum nostrum quia excepturi aperiam minima quam dolore velit rerum, pariatur deserunt?</p>
                    <button className="btn m-4 bg-black py-4 px-10 font-semibold text-white">SHOP NOW</button>
                </div>
                <div className="scrollbarHidden w-3/5 h-full flex justify-start items-center  overflow-x-auto">
                    <div className="flex flex-nowrap ">
                        {
                            ShowImags.map((elem) => (
                                <div key={elem.name} className="relative w-[350px] h-[500px] mr-4 rounded-xl inline-block shadow-2xl bg-[#F5F5F5] overflow-hidden">
                                    <img loading='lazy' className="object-cover h-full rounded-xl transform -rotate-12 -translate-x-3" src={elem.imageUrl} alt={elem.name} />
                                    <h6 className="p-4 text-sm absolute bottom-16 rounded-bl-xl rounded-t-xl right-0 text-white bg-black">{elem.description}</h6>
                                    <h4 className="p-5 bg-[#D0D4D5] rounded-tl-xl rounded-b-xl text-black absolute bottom-0 right-0">{elem.name}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero