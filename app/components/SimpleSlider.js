"use client"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className=''>
        <p className='font-bold  text-xl'> Most Demanded Products </p>
        <div className="py-10">
        <Slider {...settings}>
          <div>
          <div className="flex justify-center  "><Image className=" justify-center " src="/assets/one.png" width={140} height={176} /></div>
          </div>
          <div>
          <div className="flex justify-center "><Image className=" justify-center " src="/assets/two.png" width={178} height={129} /></div>
          </div>
          <div>
          <div className="flex justify-center "><Image className=" justify-center " src="/assets/three.png" width={140} height={146} /></div>
          </div>
          <div>
          <div className="flex justify-center "><Image className=" justify-center " src="/assets/four.png" width={186} height={164} /></div>
          </div>
          <div>
          <div className="flex justify-center "><Image className=" justify-center " src="/assets/five.png" width={182} height={176} /></div>
          </div>
          <div>
          <div className="flex justify-center "><Image className=" justify-center " src="/assets/six.png" width={172} height={180} /></div>
          </div>
          
        </Slider>
        </div>  
      </div>
    );
  }
}

// export default class AdaptiveHeight extends Component {
//   render() {
//     var settings = {
//       className: "",
//       dots: true,
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       adaptiveHeight: true
//     };
//     return (
//       <div>
//         <h2>Adaptive height</h2>
//         <Slider {...settings}>
//           <div >
//           <div className="flex justify-center "><Image className=" justify-center " src="/assets/one.png" width={140} height={146} /></div>

//           </div>
//           <div>
//           <div className="flex justify-center "><Image className=" justify-center " src="/assets/two.png" width={300} height={300} /></div>

//           </div>
//           <div>
//           <div className="flex justify-center "><Image className=" justify-center " src="/assets/three.png" width={191} height={95} /></div>

//           </div>
//           <div>
//           <div className="flex justify-center "><Image className=" justify-center " src="/assets/one.png" width={300} height={300} /></div>

//           </div>
//           <div>
//           <div className="flex justify-center "><Image className=" justify-center " src="/assets/one.png" width={300} height={300} /></div>

//           </div>
//           <div>
//           <div className="flex justify-center "><Image className=" justify-center " src="/assets/one.png" width={300} height={300} /></div>

//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
