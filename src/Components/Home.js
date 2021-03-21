import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className='home__section'>
                <Card 
                
                src="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=480"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
                />
                <Card 
                src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
                />
                <Card 
                src="https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=480"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
                />
            </div>
            
            <div className='home__info'>
                
                <h1>Your world is worth sharing </h1>
                <p>Turn your extra space into your next opportunity.</p>
            </div>

            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div>
            
        </div>
    )
}

export default Home;
