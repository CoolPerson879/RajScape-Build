import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/rsg.png'
              text='RajScape Games - Games on iOS and Android'
              label='RajScape Games'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Raj Scape Website News '
              label='RajScape.com'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/yt-channel.webp'
              text='Our YouTube Channels'
              label='Social Media'
              path='/services'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Raj Scape Blog'
              label='RajScape.com'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='RajScape Docs'
              label='Projects'
              path='/products'
            />
            <CardItem
              src='images/image-0001.webp'
              text='Rabindra Sangeet Piano Academy'
              label='RS Piano'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text='My GitHub Account'
              label='Projects'
              path='/sign-up'
            />
            
            <CardItem
              src='images/img-4.jpg'
              text='Rabindra Sangeet Piano Sheet Music'
              label='RS Piano'
              path='https://rabindrasangeetpiano.bigcartel.com/product/rabindra-sangeet-piano-sheet-music'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='RajScapeReact GitHub'
              label='Projects'
              path='/products'
            />
            <CardItem
              src='images/img-3.jpg'
              text='GamePlanet, or inject.js'
              label='piracy?'
              path=''
            />
            <CardItem
              src='images/img-4.jpg'
              text='Email notifications'
              label='Sign Up'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Programming Languages used'
              label='Programming'
              path='https://github.com/CoolPerson879'
            />
            <CardItem
              src='images/img-4.jpg'
              text='RajScapeGames Privacy Policy'
              label='RajScape Games'
              path='/'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='RajScape Authentication'
              label='coming soon'
              path='/'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Sign Up'
              label='RajScape.com'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='COVID-19 Tracker'
              label='2020'
              path='/'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
