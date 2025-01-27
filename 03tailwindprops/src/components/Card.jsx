import React from 'react'

function Card() {
  return (
    <div>
        <img style={{height:'150px', width:'150px'}} alt="Silhouette of mountains" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
        <ion-card-header>
            <ion-card-title>Card Title</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            Here&apos;s a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
    </div>
  )
}

export default Card
