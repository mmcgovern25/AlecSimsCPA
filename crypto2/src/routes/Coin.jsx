import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DOMpurify from 'dompurify';
import './Coin.css';
import HistoryChart from '../components/HistoryChart';

const AboutSection = ({ description }) => {
  // Function to split the description into paragraphs
  const createParagraphs = (text) => {
    const sentences = text ? text.split('. ') : [];
    const paragraphs = [];
    let currentParagraph = '';
    sentences.forEach((sentence, index) => {
      currentParagraph += sentence + '. ';
      if ((index + 1) % 5 === 0 || index === sentences.length - 1) {
        paragraphs.push(currentParagraph);
        currentParagraph = '';
      }
    });
    return paragraphs;
  };

  // Create paragraphs from the description
  const paragraphs = createParagraphs(description);

  return (
    <div className='about content bg-blue-gradient'>
      <h3>About</h3>
      {paragraphs.map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(paragraph) }} style={{ marginTop: '1em', textIndent: '1em' }} />
      ))}
    </div>
  );
};

const Coin = () => {
  const [coin, setCoin] = useState({});
  const { coinId } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  // Conditional rendering to handle cases where coin data is not yet available
  if (Object.keys(coin).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='coin-container'>
        <div className='content bg-blue-gradient'>
          <h1>{coin.name}</h1>
        </div>
        <div className='content bg-blue-gradient'>
          <div className='rank'>
            <span className='rank-btn'>Rank #{coin.market_cap_rank}</span>
          </div>
          <div className='info'>
            <div className='coin-heading'>
              {coin.image ? <img src={coin.image.small} alt={coin.name} /> : null}
              <p>{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
            </div>
            <div className='coin-price'>
              {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
            </div>
          </div>
        </div>

        <div className='content bg-blue-gradient'>
          <table>
            <thead>
              <tr>
                <th className='bg-blue-gradient'>1h</th>
                <th className='bg-blue-gradient'>24h</th>
                <th className='bg-blue-gradient'>7d</th>
                <th className='bg-blue-gradient'>14d</th>
                <th className='bg-blue-gradient'>30d</th>
                <th className='bg-blue-gradient'>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</p> : null}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='content bg-blue-gradient'>
          <div className='stats'>
            <div className='left'>
              <div className='row'>
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
              </div>
              <div className='row'>
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
              </div>
            </div>
            <div className='right'>
              <div className='row'>
                <h4>Market Cap</h4>
                {coin.market_data.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
              </div>
              <div className='row'>
                <h4>Circulating Supply</h4>
                {coin.market_data ? <p>${coin.market_data.circulating_supply.toLocaleString()}</p> : null}
              </div>
            </div>
          </div>
        </div>

        <div className='content bg-blue-gradient'>
          <div className='chart'>
            <HistoryChart />
          </div>
        </div>

        <AboutSection description={coin.description ? coin.description.en : ''} />
      </div>
    </div>
  );
};

export default Coin;
