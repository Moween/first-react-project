import React from './Main';
import './Main.css';
import Card from './Card';

const Main = () => {
  return(
    <main>
      <div className="page-wrapper">
        <section className='card-container'>
          <Card 
            name="Davido"
            imgUrl="https://notjustok.com/wp-content/uploads/2021/06/davido-640x395.jpeg"
            tel="90897905903"
            email="obo@gmail.com"
          />
          <Card 
            name="Wizkid"
            imgUrl="https://live.mrf.io/statics/i/ps/storage.googleapis.com/thisday-846548948316-wp-data/wp-media/2019/10/cfd5815b-wizkid.jpg?width=1200&enable=upscale"
            tel="05078904791"
            email="starboy@gmail.com"
          />
          <Card 
            name="Burna Boy"
            imgUrl="https://storage.googleapis.com/assets-pam-blog/2020/06/b86c5b00-burna-boy-wonderful.jpg"
            tel="090906769089"
            email="africngiant@gmail.com"
          />
        </section>
      </div>
    </main>
  )
}

export default Main
 