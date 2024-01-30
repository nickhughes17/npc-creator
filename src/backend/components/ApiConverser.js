import React, { useState, useEffect } from 'react';

const ApiConverser = ({setListOfMonsters}) => {
  const [data, setData] = useState(null);
//   const [currentLevel, setCurrentLevel] = useState(0);
//   const [challengeRating, setChallengeRating] = useState(0);
//   const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if(data){
            console.log(data);
            setListOfMonsters(data);
        }
    }, [data])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.open5e.com/monsters/?ordering=challenge_rating&type=Beast');
        const result = await response.json();
        setData(result.results);
       // console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setListOfMonsters]);
  
};

export default ApiConverser;