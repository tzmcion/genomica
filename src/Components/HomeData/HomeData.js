import React from 'react'
import './HomeData.scss';
import PhotoCard from "../edCard/edCard"

import img1 from "../../Assets/past_editions/481077039_1151200236519087_5081532108870179981_n.jpg";
import img2 from "../../Assets/past_editions/482069004_1151200259852418_79356086366381026_n.jpg";
import img3 from "../../Assets/past_editions/482053366_1151200066519104_658439242551520061_n.jpg";
import img4 from "../../Assets/past_editions/482083519_1151200026519108_2775271662465460893_n.jpg";
import img5 from "../../Assets/past_editions/482200983_1151199446519166_1724202758256782127_n.jpg";
import img6 from "../../Assets/past_editions/482206145_1151201286518982_4235337224411554159_n.jpg";

import img_2019_1 from "../../Assets/past_editions/e2023_1.jpg";
import img_2019_2 from "../../Assets/past_editions/e2023_2.jpg";
import img_2019_3 from "../../Assets/past_editions/e_2023_3.jpg";
import img_2019_4 from "../../Assets/past_editions/e_2023_4.jpg";
import img_2019_5 from "../../Assets/past_editions/e_2023_5.jpg";
import img_2019_6 from "../../Assets/past_editions/e_2023_6.jpg";

export default function HomeData() {
  return (
    <div className='HomeData'>
        <div className='HomeData-Register'>
            <h1>Join us, let's spend this few days together!</h1>
            <div className='HomeData-Register-Fast'>
                <PhotoCard img={[img1,img2, img3, img4, img5, img6]} big_title={"Genomica 2024"} title={"Our edition from callendar year 2024"} />
                <PhotoCard img={[img_2019_1,img_2019_2,img_2019_3,img_2019_4,img_2019_5,img_2019_6]} big_title={"Genomica 2019"} title={"Far Far away in 2019 ;)"} />
            </div>
        </div>
    </div>
  )
}
