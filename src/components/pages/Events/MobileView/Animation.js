import * as React from 'react';
import EventCard from '../EventCard';
import data from '../Data/data';
import { Link } from 'react-router-dom';
import Footer from '../../../Footer';
import { ToastContainer } from 'react-toastify';
import WorkshopCard from '../WorkshopCard';
function Animation() {
  return (
    <div style={{ background: '#1D033E', overflow: 'hidden' }}>
      <ToastContainer
        draggable={true}
        toastClassName="toast-style"
        toastStyle={{ backgroundColor: '#FCC907', color: '#1D033E', fontWeight: 'bold' }}
      />
      <section className="section" style={{ padding: '10px' }}>
        <Link to="/events" className="back-btn" style={{ background: '#FE6263' }}>
          Back
        </Link>
        <div className="card-container" style={{ paddingLeft: '13%' }}>
          <div className="event-cards">
            {data.animationData.map((item, index) => {
              return (
                <EventCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  content={item.content}
                  item={item}
                  key={index}
                  color={item.color}
                  color2={item.color2}
                  left={'0px'}
                  width={'260px'}
                  height={'329px'}
                  contentLeft={'12px'}
                  contentTop={'64px'}
                  contentWidth={'230px'}
                  contentFont={'16px'}
                  titleLeft={'-60px'}
                  titleTop={'3px'}
                  imgLeft={'7px'}
                  viewStatementLeft={'50px'}
                  addToCartLeft={'6px'}
                  frontLeft={'20px'}
                  display={'none'}
                />
              );
            })}
          </div>
          {/* <div className="workshop-cards">
            {data.animationWorkshopData.map((item, index) => {
              return (
                <WorkshopCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  desc={item.desc}
                  date={item.date}
                  time={item.time}
                  item={item}
                  key={index}
                />
              );
            })}
          </div> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Animation;
