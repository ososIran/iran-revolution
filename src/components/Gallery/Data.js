
export default function GetImages(category = "all") {

    const rev_aazar =
        [
            "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi4jrK2XwAMOR-I.jpg",
            "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi6zVx2XwAEF3Z9.jpg",
            "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi_xhiyWAAg2rXi.jpg",
            // "https://ik.imagekit.io/hcdblkujo/revolutionary_art/photo_2022-12-03_02-21-47.jpg",
            "https://ik.imagekit.io/hcdblkujo/revolutionary_art/v.jpg",
            "https://ik.imagekit.io/hcdblkujo/revolutionary_art/FjAAa1dXEA0JGgR.jpg",
            "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi-9kMvXgAIYLZP.jpg",
            "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi-9kMvXgAIYLZP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670156736512",
            "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi51nJyXoAEv_X-.jpg",
            // "https://ik.imagekit.io/hcdblkujo/revolutionary_art/FijeyemXwAETraU.jpg",
            "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi_W4NtXkA05ZaH.jpg",
            "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi1Z3d4WQAARmOe.jpg",
            "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi-9kMvXgAIYLZP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670156736512"
            ,
            // "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Figtv6nVEAEsZRs.jpg",
            // "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi6HEO7X0AEUA5t.jpg",
            // "https://ik.imagekit.io/hcdblkujo/revolutionary_art/FimGy34WQAAOPAv.jpg",
            // "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi6hsLNWIAESHiO.jpg",
            "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi9a12NXgAEtrth.jpg",
            "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi-9kMvXgAIYLZP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670156736512"
            ,
            // "https://ik.imagekit.io/hcdblkujo/revolutionary_art/FisgEO5WYAAuuzS.jpg",
            // "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fije57xXgAEY3vF.jpg",
            // "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fije4aDXoAAcY4U.jpg",
            "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi-9kMvXgAIYLZP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670156736512"
        ]


    const help = [
        "assets/ایران/20.webp",
        "assets/صدای ما باشید/18.webp",
        "assets/صدای ما باشید/20.webp",
        "assets/صدای ما باشید/19.webp",
        "assets/صدای ما باشید/17.webp",
        "assets/صدای ما باشید/10.webp",
        "assets/صدای ما باشید/13.webp",
        "assets/صدای ما باشید/12.webp",
        "assets/صدای ما باشید/15.webp",
        "assets/صدای ما باشید/11.webp",
        "assets/صدای ما باشید/16.webp",
        "assets/صدای ما باشید/14.webp",
    ]

    const images = [
        "https://ik.imagekit.io/hcdblkujo/revolutionary_art/Fi_OrZ4XoAAuKrw.jpg",
        "https://ik.imagekit.io/hcdblkujo/revolutionary_art/FirgUnMVUAIllZH.jpg",

        "assets/صدای ما باشید/18.webp",
        "assets/صدای ما باشید/20.webp",
        "assets/صدای ما باشید/19.webp",
        "assets/صدای ما باشید/17.webp",
        "assets/صدای ما باشید/10.webp",
        "assets/صدای ما باشید/13.webp",
        "assets/صدای ما باشید/12.webp",
        "assets/صدای ما باشید/15.webp",
        "assets/صدای ما باشید/11.webp",
        "assets/صدای ما باشید/16.webp",
        "assets/صدای ما باشید/14.webp",
        "assets/مهسا امینی/13.webp",
        "assets/مهسا امینی/11.webp",
        "assets/مهسا امینی/15.webp",
        "assets/مهسا امینی/19.webp",
        "assets/مهسا امینی/10.webp",
        "assets/مهسا امینی/24.webp",
        "assets/مهسا امینی/26.webp",
        "assets/مهسا امینی/20.webp",
        "assets/مهسا امینی/25.webp",
        "assets/مهسا امینی/23.webp",
        "assets/مهسا امینی/22.webp",
        "assets/مهسا امینی/12.webp",
        "assets/مهسا امینی/14.webp",
        "assets/مهسا امینی/18.webp",
        "assets/مهسا امینی/17.webp",
        "assets/مهسا امینی/16.webp",
        "assets/مهسا امینی/21.webp",
        "assets/مهسا امینی/27.webp",
        "assets/ایران/13.webp",
        "assets/ایران/20.webp",
        "assets/ایران/12.webp",
        "assets/ایران/11.webp",
        "assets/ایران/14.webp",
        "assets/ایران/19.webp",
        "assets/ایران/17.webp",
        "assets/ایران/15.webp",
        "assets/ایران/16.webp",
        "assets/ایران/21.webp",
        "assets/ایران/18.webp",
        "assets/ایران/1.webp",
        "assets/پرچم/12.webp",
        "assets/پرچم/11.webp",
        "assets/پرچم/13.webp",
        "assets/پرچم/10.webp",
        "assets/پوستر خام/17.webp",
        "assets/پوستر خام/16.webp",
        "assets/پوستر خام/11.webp",
        "assets/پوستر خام/15.webp",
        "assets/پوستر خام/14.webp",
        "assets/پوستر خام/13.webp",
        "assets/پوستر خام/36.webp",
        "assets/پوستر خام/10.webp",
        "assets/پوستر خام/27.webp",
        "assets/پوستر خام/23.webp",
        "assets/پوستر خام/30.webp",
        "assets/پوستر خام/21.webp",
        "assets/پوستر خام/22.webp",
        "assets/پوستر خام/12.webp",
        "assets/پوستر خام/32.webp",
        "assets/پوستر خام/34.webp",
        "assets/پوستر خام/37.webp",
        "assets/پوستر خام/38.webp",
        "assets/پوستر خام/19.webp",
        "assets/پوستر خام/18.webp",
        "assets/پوستر خام/31.webp",
        "assets/پوستر خام/45.webp",
        "assets/پوستر خام/44.webp",
        "assets/پوستر خام/24.webp",
        "assets/پوستر خام/25.webp",
        "assets/پوستر خام/28.webp",
        "assets/پوستر خام/43.webp",
        "assets/پوستر خام/33.webp",
        "assets/پوستر خام/40.webp",
        "assets/پوستر خام/41.webp",
        "assets/پوستر خام/35.webp",
        "assets/پوستر خام/39.webp",
        "assets/پوستر خام/29.webp",
        "assets/پوستر خام/42.webp",
        "assets/پوستر خام/20.webp",
        "assets/پوستر خام/26.webp",
        "assets/زن زندگی آزادی/77.webp",
        "assets/زن زندگی آزادی/55.webp",
        "assets/زن زندگی آزادی/51.webp",
        "assets/زن زندگی آزادی/50.webp",
        "assets/زن زندگی آزادی/48.webp",
        "assets/زن زندگی آزادی/49.webp",
        "assets/زن زندگی آزادی/42.webp",
        "assets/زن زندگی آزادی/47.webp",
        "assets/زن زندگی آزادی/34.webp",
        "assets/زن زندگی آزادی/44.webp",
        "assets/زن زندگی آزادی/35.webp",
        "assets/زن زندگی آزادی/12.webp",
        "assets/زن زندگی آزادی/32.webp",
        "assets/زن زندگی آزادی/43.webp",
        "assets/زن زندگی آزادی/28.webp",
        "assets/زن زندگی آزادی/33.webp",
        "assets/زن زندگی آزادی/27.webp",
        "assets/زن زندگی آزادی/20.webp",
        "assets/زن زندگی آزادی/25.webp",
        "assets/زن زندگی آزادی/21.webp",
        "assets/زن زندگی آزادی/37.webp",
        "assets/زن زندگی آزادی/38.webp",
        "assets/زن زندگی آزادی/23.webp",
        "assets/زن زندگی آزادی/16.webp",
        "assets/زن زندگی آزادی/45.webp",
        "assets/زن زندگی آزادی/13.webp",
        "assets/زن زندگی آزادی/36.webp",
        "assets/زن زندگی آزادی/19.webp",
        "assets/زن زندگی آزادی/68.webp",
        "assets/زن زندگی آزادی/17.webp",
        "assets/زن زندگی آزادی/53.webp",
        "assets/زن زندگی آزادی/22.webp",
        "assets/زن زندگی آزادی/63.webp",
        "assets/زن زندگی آزادی/18.webp",
        "assets/زن زندگی آزادی/54.webp",
        "assets/زن زندگی آزادی/69.webp",
        "assets/زن زندگی آزادی/39.webp",
        "assets/زن زندگی آزادی/70.webp",
        "assets/زن زندگی آزادی/59.webp",
        "assets/زن زندگی آزادی/10.webp",
        "assets/زن زندگی آزادی/46.webp",
        "assets/زن زندگی آزادی/71.webp",
        "assets/زن زندگی آزادی/66.webp",
        "assets/زن زندگی آزادی/40.webp",
        "assets/زن زندگی آزادی/41.webp",
        "assets/زن زندگی آزادی/60.webp",
        "assets/زن زندگی آزادی/31.webp",
        "assets/زن زندگی آزادی/62.webp",
        "assets/زن زندگی آزادی/29.webp",
        "assets/زن زندگی آزادی/72.webp",
        "assets/زن زندگی آزادی/11.webp",
        "assets/زن زندگی آزادی/24.webp",
        "assets/زن زندگی آزادی/57.webp",
        "assets/زن زندگی آزادی/30.webp",
        "assets/زن زندگی آزادی/65.webp",
        "assets/زن زندگی آزادی/74.webp",
        "assets/زن زندگی آزادی/73.webp",
        "assets/زن زندگی آزادی/76.webp",
        "assets/زن زندگی آزادی/67.webp",
        "assets/زن زندگی آزادی/58.webp",
        "assets/زن زندگی آزادی/26.webp",
        "assets/زن زندگی آزادی/15.webp",
        "assets/زن زندگی آزادی/56.webp",
        "assets/زن زندگی آزادی/75.webp",
        "assets/زن زندگی آزادی/64.webp",
        "assets/زن زندگی آزادی/14.webp",
        "assets/زن زندگی آزادی/52.webp",
        "assets/زن زندگی آزادی/61.webp",
        "assets/حجاب اجباری/17.webp",
        "assets/حجاب اجباری/10.webp",
        "assets/حجاب اجباری/12.webp",
        "assets/حجاب اجباری/16.webp",
        "assets/حجاب اجباری/22.webp",
        "assets/حجاب اجباری/21.webp",
        "assets/حجاب اجباری/11.webp",
        "assets/حجاب اجباری/13.webp",
        "assets/حجاب اجباری/14.webp",
        "assets/حجاب اجباری/19.webp",
        "assets/حجاب اجباری/20.webp",
        "assets/حجاب اجباری/18.webp",
        "assets/حجاب اجباری/15.webp",
    ]


    const human_chain = [
        "assets/زندانیان/HumanChain @300dpi (MoManib).webp",
        "assets/زندانیان/HumanChain @300dpi (SabaSahar).webp",
        "assets/زندانیان/HumanChain @300dpi (Nazila).webp",
        "assets/زندانیان/HumanChain @300dpi (Mehran).webp",
        "assets/زندانیان/HumanChain @300dpi (Sina).webp",
        "assets/زندانیان/HumanChain @300dpi (Dorsa).webp",
        "assets/زندانیان/HumanChain @300dpi (Sahra).webp",
        "assets/زندانیان/HumanChain @300dpi (Fatemeh).webp",
        "assets/زندانیان/HumanChain @300dpi (Niloufar).webp",
        "assets/زندانیان/HumanChain @300dpi (MoEbrahim).webp",
        "assets/زندانیان/HumanChain @300dpi (Sarvenaz).webp",
        "assets/زندانیان/HumanChain @300dpi (Nousha).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeMahsa).webp",
        "assets/زندانیان/HumanChain @300dpi (Ahmad).webp",
        "assets/زندانیان/HumanChain @300dpi (Melika).webp",
        "assets/زندانیان/HumanChain @300dpi (Faezeh).webp",
        "assets/زندانیان/HumanChain @300dpi (Zeynab).webp",
        "assets/زندانیان/HumanChain @300dpi (Mohamadamin).webp",
        "assets/زندانیان/HumanChain @300dpi (Nazanin_Ardalan).webp",
        "assets/زندانیان/HumanChain @300dpi (Reza).webp",
        "assets/زندانیان/HumanChain @300dpi (SetarehKomeili).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeAmirMehdipour.webp",
        "assets/زندانیان/HumanChain @300dpi (FreeRosaEtemad)-1.webp",
        "assets/زندانیان/HumanChain @300dpi (FreeGhasemBodi).webp",
        "assets/زندانیان/HumanChain @300dpi (Kimia).webp",
        "assets/زندانیان/HumanChain @300dpi (Nima).webp",
        "assets/زندانیان/HumanChain @300dpi (Ayda).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeRosaEtemad)-2.webp",
        "assets/زندانیان/HumanChain @300dpi (Ayoub).webp",
        "assets/زندانیان/HumanChain @300dpi (Soheila).webp",
        "assets/زندانیان/HumanChain @300dpi (Vorya).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeAmirMehdipour-1.webp",
        "assets/زندانیان/HumanChain @300dpi (Rayeheh).webp",
        "assets/زندانیان/HumanChain @300dpi (Amirhossein Moradi).webp",
        "assets/زندانیان/HumanChain @300dpi (Armita 11x17).webp",
        "assets/زندانیان/HumanChain @300dpi (rouzbeh).webp",
        "assets/زندانیان/HumanChain @300dpi (Mohsin).webp",
        "assets/زندانیان/HumanChain @300dpi (Ali Younesi).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeNiloufar 02).jpg.webp",
        "assets/زندانیان/HumanChain @300dpi (Susan).webp",
        "assets/زندانیان/HumanChain @300dpi (Soran).webp",
        "assets/زندانیان/HumanChain @300dpi (MousaMotahari).webp",
        "assets/زندانیان/HumanChain @300dpi (Jadi 02).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeSinaYousefi).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeRosaEtemad).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeMiladPanahipour).webp",
        "assets/زندانیان/HumanChain @300dpi (Atrin).webp",
        "assets/زندانیان/HumanChain @300dpi (Zahra).webp",
        "assets/زندانیان/HumanChain @300dpi (Andisheh).webp",
        "assets/زندانیان/HumanChain @300dpi (Hossein Ronaghi 03).webp",
        "assets/زندانیان/HumanChain @300dpi (Hossein).webp",
        "assets/زندانیان/HumanChain @300dpi (Jadi 01).webp",
        "assets/زندانیان/HumanChain @300dpi (Hossein Ronaghi 01).webp",
        "assets/زندانیان/HumanChain @300dpi (Hossein Ronaghi 02).webp",
        "assets/زندانیان/HumanChain @300dpi (MoAbas).webp",
        "assets/زندانیان/HumanChain @300dpi (VahidMousavi).webp",
        "assets/زندانیان/HumanChain @300dpi (Toomaj 17x17).webp",
        "assets/زندانیان/HumanChain @300dpi (Sepideh).webp",
        "assets/زندانیان/HumanChain @300dpi (Rizaan).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeGelaleh).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeZahra.webp",
        "assets/زندانیان/HumanChain @300dpi (FreeElaheh).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeBabak).webp",
        "assets/زندانیان/HumanChain @300dpi (Mansoureh).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeJina).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeSheida).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeMelika).webp",
        "assets/زندانیان/HumanChain @300dpi (Rojan).webp",
        "assets/زندانیان/HumanChain @300dpi (Soraya).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeAtefeh).webp",
        "assets/زندانیان/HumanChain @300dpi (Shakiba).webp",
        "assets/زندانیان/HumanChain @300dpi (Narges).webp",
        "assets/زندانیان/HumanChain @300dpi (Mahrou).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeBahareh).webp",
        "assets/زندانیان/HumanChain @300dpi (Bahar).webp",
        "assets/زندانیان/HumanChain @300dpi (SepidehNavabi).webp",
        "assets/زندانیان/HumanChain @300dpi (Azadeh).webp",
        "assets/زندانیان/HumanChain @300dpi (Faranak).webp",
        "assets/زندانیان/HumanChain @300dpi (Bayan).webp",
        "assets/زندانیان/HumanChain @300dpi (Gashin).webp",
        "assets/زندانیان/HumanChain @300dpi (FreeNiloufar 01).webp",
    ]

    // shuffling the array

    if (category == "chain") {
        return human_chain
    }

    if (category == "help"){
        return help
    }

    if (category == "fa") {
        // return rev_aazar
        //  rev_azar * importantce + images
        let importance = 5

        let rev_repeated = []
        for (let i = 0; i < importance; i++) {
            rev_repeated = rev_repeated.concat(rev_aazar)
        }

        return rev_repeated.concat(images).sort(() => Math.random() - 0.5)
    }

    return images.sort(() => 0.5 - Math.random());
}