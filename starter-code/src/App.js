import React, { Component } from 'react'

import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton'
import ClickablePicture from './components/ClickablePicture'
import Dice from "./components/Dice"
import Carousel from './components/Carousel'
import NumbersTable from './components/NumbersTable'
import FaceBook from './components/FaceBook'



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
          <IdCard
              picture='https://randomuser.me/api/portraits/men/44.jpg'
              firstName="John"
              lastName="Doe"
              gender="male"
              height="1.78 m"
              birth="Tue Jul 14 1992"
          />
          <IdCard 
              picture='https://randomuser.me/api/portraits/women/8.jpg'
              firstName="Obrien"
              lastName="Delores"
              gender="female"
              height="1.72 m"
              birth="Tue May 11 1993"
          />
    
        <h1>Greetings</h1>
            <Greetings
              lang='de'
              children='Ludwig'
            />
            <Greetings
              lang='fr'
              children='François'
            />  

        <h1>Random</h1>
            <Random
              min={1}
              max={6}
            />
            <Random
              min={1}
              max={100}
            />
          
          <h1>BoxColor</h1>
            <BoxColor 
              r={255} 
              g={0} 
              b={0}
              color="white"
            />      
            <BoxColor 
              r={128} 
              g={255} 
              b={0}
              color="black" 
            />

          <h1>CreditCard</h1>
          <CreditCard 
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white" />
            <CreditCard 
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
              bgColor="#eeeeee"
              color="#222222" />
            <CreditCard 
              type="Visa"
              number="0123456789016984"
              expirationMonth={12}
              expirationYear={2019}
              bank="Name of the Bank"
              owner="Firstname Lastname"
              bgColor="#ddbb55"
              color="white" 
           />

          <h1>Rating</h1>
              <Rating rating={0}/>
              <Rating rating={1.49}/>
              <Rating rating={1.5}/>
              <Rating rating={3}/>
              <Rating rating={4}/>
              <Rating rating={5}/>

          <h1>DriverCard</h1>
            <DriverCard 
              name="Travis Kalanick"
              rating={4.2}
              img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
              car={{
                model: "Toyota Corolla Altis",
                licensePlate: "CO42DE"
              }} 
            />
            <DriverCard 
              name="Dara Khosrowshahi"
              rating={4.9}
              img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
              car={{
                model: "Audi A3",
                licensePlate: "BE33ER"
              }} 
            />

            <h1>LikeButton</h1>
            <LikeButton /> <br />
            <LikeButton />

            <h1>ClickablePicture</h1>
            <ClickablePicture 
              initialImg="./img/persons/maxence.png"
              clickedImg="./img/persons/maxence-glasses.png"
            />

            <h1>Dice</h1>
            <Dice />

            <h1>Carousel</h1>
            <Carousel
                imgs={ ["https://randomuser.me/api/portraits/women/1.jpg", 
                        "https://randomuser.me/api/portraits/men/1.jpg",
                        "https://randomuser.me/api/portraits/women/2.jpg", 
                        "https://randomuser.me/api/portraits/men/2.jpg"] } 
            />

            <h1>NumbersTable</h1>
              <NumbersTable 
                limit={12}
                />

            <h1>FaceBook</h1>
            <FaceBook />

      </div>
    );
  }
}

export default App;