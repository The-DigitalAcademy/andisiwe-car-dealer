import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card';



function Home() {
  return (
    <div className='mb-5'>
    <Header name="Welcome to Our World - Toyota " />
    <div className='container'>
      <div className='row'>

        <Card 
        image='https://toyota-cms.azureedge.net/toyotacms/attachments/cki43v82l000p0gm6iwpr15jr-0101010247-front.mobile.png'
        name='Agya'
        price='R192 300'
        />

<Card 
        image='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200604105144_Toyota-Fortuner-facelift-2.jpg&w=373&h=245&q=75&c=1'
        name='Toyota Fortuner'
        price='R 3,989.00'
        />
 <Card 
        image='https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/CamryModelImage.jpg&w=872&h=578&q=75&c=1'
        name='Toyota Camry'
        price='R 482 320,00'
        />
 <Card 
        image='https://thenewswheel.com/wp-content/uploads/2016/02/Thermo-Tect-Lime-Green-Prius-1.jpg'
        name='Lime Green Toyota'
        price='R192 300'
        />
 <Card 
        image='https://global.toyota/pages/news/images/2021/08/02/1330/20210802_01_t_w610.jpg'
        name='Toyota Motor '
        price='R192 300'
        />

<Card 
        image='https://images.dealer.com/autodata/us/color/2022/USD20TOC021A0/1J9.jpg?impolicy=downsize_bkpt&imdensity=1&w=520'
        name='Camry XSE Sedan'
        price='R 509,120'
        />

<Card 
        image='https://preview.free3d.com/img/2020/03/2399388354278852300/x7kz3xd7-900.jpg'
        name='Toyota Yaris Hybrid'
        price='R287,520'
        />

<Card 
        image='https://www.ccarprice.com/products/Ford_Maverick_XL_Hybrid_2022.jpg'
        name='ford maverick'
        price='R 319,920'
        />



      
      </div>
    </div>

    

</div>
    
  );
}

export default Home;