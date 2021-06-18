import React from './Main';
import './Main.css';
import Card from './Card';
import data from './data'


const truncateOverview = (details) => {
  details = details.split(' ').slice(0, 15).join(' ');
  details = details + '...';
  return details;
}
const createCard = (movie) => {
  return( 
    <Card 
      key={movie.id}
      title={movie.title}
      overview={truncateOverview(movie.overview)}
      poster_path={movie.poster_path}
      popularity={movie.popularity}
      release_date={movie.release_date}
    />
  )
}

const Main = () => {
  return(
    <main>
      <div className="page-wrapper">
        <section className='card-container'>
          {data.map(movie => createCard(movie))}
        </section>
      </div>
    </main>
  )
}

export default Main
 