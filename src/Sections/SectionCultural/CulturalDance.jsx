import React from 'react'
import { Footer,Navbar } from '../../Components/Public'
import { Breadcrumbs } from '../../Constants'
import { logodance } from '../../Image'
export default function CulturalDance() {
  return (
    <div>
      <Navbar/>
      <Breadcrumbs path={'Seccion de Danza'}/>
      <div className='container-cultural'>
            <h2>Seccion de Danza</h2>
            <div className='info-text-img'>
                <img src={logodance} alt='futbol'/>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab! Et consectetur, ad cupiditate reiciendis nobis recusandae quisquam quis ullam id voluptates quaerat reprehenderit velit! Reprehenderit pariatur vitae cum quo.
                      Aperiam ipsum et ducimus voluptate accusantium distinctio officia recusandae pariatur explicabo qui asperiores laudantium iste corporis, architecto corrupti molestiae nulla. Reprehenderit voluptatum illum quidem mollitia. Sint veritatis nihil maiores harum.
                      Ipsam ducimus ipsa neque dignissimos, numquam repudiandae error cupiditate nostrum cum molestias dolorum enim et harum, inventore earum blanditiis hic atque! Nulla cupiditate expedita ab accusamus, dolores deleniti consectetur beatae!
                      Eveniet neque obcaecati doloremque nostrum dolorem labore impedit, maiores error, sunt fuga odio, aliquid veritatis quasi. Officiis, eos. Quisquam unde dignissimos repellat harum nihil ipsam rem nam. Eaque, illum. Nulla.
                  
                      </p>
             </div>
             
             <div className='section-carousel-soccer'>
           
     
             </div>
      </div>
      
      <Footer/>
    </div>
  )
}
