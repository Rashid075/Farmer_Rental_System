import React from 'react'
import Rental from '../components/NavSection/Rental-nav'   
import Slider from './Slider'
import CardSlider from '../pages/Card/CardSlider'
import Tilage from './Tilage'
import Spray from './Spray'
import Irrigation from '../pages/Irrigation/Irrigation'
import Footer from '../components/Footer/Footer'
import details from './equip'
const HomeRent = () => {
//   const details=[
//     {
//         "id":"1",
//         "name": "Chicken Fried Rice",
//         "img": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//         "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
//     },
//     {
//         "id":"2",
//         "name": "Veg Fried Rice",
//         "img": "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//         "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
//     },
//     {
//         "id":"3",
//         "name": "Fish Biryani",
//         "img": "https://media.istockphoto.com/photos/king-fish-biryani-with-raita-served-in-a-golden-dish-isolated-on-dark-picture-id1409942571?b=1&k=20&m=1409942571&s=170667a&w=0&h=ozlMJf5hsDmS2sSdEdBWnoSZOEITef4qGMeWeq2lyTc=",
//         "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
//     },
//     {
//         "id":"4",
//         "name": "Chicken Biryani",
//         "img": "https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg",
//         "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
//     },
//     {
//         "id":"5",
//         "name": "Veg Biryani",
//         "img": "https://media.istockphoto.com/photos/veg-biryani-picture-id1363306527?b=1&k=20&m=1363306527&s=170667a&w=0&h=VCbro7CX8nq2kruynWOCO2GbMGCea2dDJy6O6ebCKD0=",
//         "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
//     },
//     {
//         "id":"6",
//         "name": "Prawns Fried Rice",
//         "img": "https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027__340.jpg",
//         "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
//     },
//     {
//         "id":"7",
//         "name": "Chilli Paneer",
//         "img": "https://media.istockphoto.com/photos/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-in-picture-id697316634?b=1&k=20&m=697316634&s=170667a&w=0&h=bctfHdYTz9q2dJUnuxGRDUUwC9UBWjL_oQo5ECVVDAs=",
//         "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
//     },
//     {
//         "id":"8",
//         "name": "Paneer 65",
//         "img": "https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y=",
//         "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
//     },
//     {
//         "id":"9",
//         "name": "Chicken Tikka",
//         "img": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//         "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
//     },
//     {
//         "id":"10",
//         "name": "Paneer Tikka",
//         "img": "https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU=",
//         "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
//     },
//     {
//         "id":"11",
//         "name": "Chicken Cheese Pizza",
//         "img": "https://media.istockphoto.com/photos/double-topping-pizza-on-the-wooden-desk-isolated-picture-id1074109872?k=20&m=1074109872&s=612x612&w=0&h=JoYwwTfU_mMBykXpRB_DmgeecfotutOIO9pV5_JObpk=",
//         "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
//     },
//     {
//         "id":"12",
//         "name": "Mix Veg Pizza",
//         "img": "https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0=",
//         "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
//     }
// ]
  return (
    <div>
        <Rental/>
        <Slider/>
       <CardSlider data={details}/>
       <Tilage data={details}/>
       <Spray data={details}/>
       <Irrigation data={details}/>
       <Footer/>
    </div>
  )
}

export default HomeRent