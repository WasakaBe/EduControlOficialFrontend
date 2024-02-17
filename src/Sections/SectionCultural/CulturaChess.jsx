import React from 'react'
import { Footer,Navbar } from '../../Components/Public'
import { Breadcrumbs } from '../../Constants'
import { logoajedres } from '../../Image'
export default function CulturalChess() {
  return (
    <div>
      <Navbar/>
      <Breadcrumbs path={'Seccion de Ajedrez'}/>
      <div className='container-cultural'>
            <h2>Seccion de Ajedrez</h2>
            <div className='info-text-img'>
                <img src={logoajedres} alt='futbol'/>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab! Et consectetur, ad cupiditate reiciendis nobis recusandae quisquam quis ullam id voluptates quaerat reprehenderit velit! Reprehenderit pariatur vitae cum quo.
                      Aperiam ipsum et ducimus voluptate accusantium distinctio officia recusandae pariatur explicabo qui asperiores laudantium iste corporis, architecto corrupti molestiae nulla. Reprehenderit voluptatum illum quidem mollitia. Sint veritatis nihil maiores harum.
                      Ipsam ducimus ipsa neque dignissimos, numquam repudiandae error cupiditate nostrum cum molestias dolorum enim et harum, inventore earum blanditiis hic atque! Nulla cupiditate expedita ab accusamus, dolores deleniti consectetur beatae!
                      Eveniet neque obcaecati doloremque nostrum dolorem labore impedit, maiores error, sunt fuga odio, aliquid veritatis quasi. Officiis, eos. Quisquam unde dignissimos repellat harum nihil ipsam rem nam. Eaque, illum. Nulla.
                      Optio esse quisquam earum vel numquam eligendi non porro sapiente eius, eaque ab sequi sunt ut enim fuga iste hic doloribus aliquid in corporis accusantium atque voluptas beatae dignissimos? Nemo?
                      Non minus consectetur libero maxime dolor unde voluptatibus harum tenetur, labore obcaecati exercitationem excepturi fuga amet, asperiores corrupti debitis praesentium, voluptate ut molestias. Blanditiis, recusandae accusantium dicta ipsam accusamus molestias.
                      Quidem architecto minus vel sequi, magni maiores quia voluptatum aliquam quod repellendus sed expedita, rem asperiores, autem quos tempora obcaecati iste atque quisquam quaerat cumque voluptatem modi. Deserunt, recusandae possimus?
                      Unde suscipit neque at amet et quasi tempore aut beatae. Suscipit voluptates consequatur ab odio, tempore corporis explicabo distinctio odit, fugit officia reprehenderit optio vero ipsam laboriosam porro perspiciatis magni.
                      Itaque vitae totam beatae similique. Dolores iste similique numquam odio, eius, illo unde magnam, excepturi quasi repudiandae sequi veritatis harum praesentium voluptas nobis laudantium. Nisi alias maiores autem cupiditate esse.
                      Sit, unde ducimus. Quam vel distinctio nostrum pariatur? Laudantium ex, eius ullam hic porro quod, labore inventore molestiae expedita sequi dolorem, enim doloribus impedit perferendis repudiandae! Enim ullam quisquam tempora?</p>
             </div>
             
             <div className='section-carousel-soccer'>
           
     
             </div>
      </div>
      
      <Footer/>
    </div>
  )
}
