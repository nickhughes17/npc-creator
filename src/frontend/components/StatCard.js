import React, { useEffect, useState } from 'react'
import '../styles/StatCard.css'
import HeartIcon from '../assets/heart.png';
import ShieldIcon from '../assets/shield.png';
import ChallengeIcon from '../assets/challenge.png';

const StatCard = ({ item }) => {
    const [monster, setMonster] = useState(null);

    useEffect(() => {
        console.log(item);
        if (item !== null) {
            setMonster(item);
        }
    }, [item]);

    if (monster !== null) {

        return (
            <div className="monster-container">
                <div className="monster-name-row row">
                    <div className="monster-name">
                        <strong>{monster?.name}</strong>
                    </div>
                    <div className="monster-top-stats">
                        <div className="monster-health">
                            <img src={HeartIcon} alt="Heart" className='icon' />
                            <div>
                                HP: {monster?.hit_points} ({monster?.hit_dice})
                            </div>
                        </div>
                        <div className="monster-ac">
                            <img src={ShieldIcon} alt="Shield" className='icon' />
                            <div>
                                AC: {monster?.armor_class}
                            </div>
                        </div>
                        <div className="monster-cr">
                            <img src={ChallengeIcon} alt="Challenge" className='icon' />
                            <div>
                                CR: {monster?.challenge_rating}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="monster-hp-row row">
                    {monster?.size} {monster?.type}
                    SPD:
                    {<ul className='stat-list'>
                        {Object.entries(monster?.speed).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key}:</strong> {value}
                            </li>
                        ))}
                    </ul>}
                </div>
                <div className="monster-stat-row row">
                    <ul className='stat-list'>
                        <li className='stat list-item'>STR: {monster?.strength} ({calculateBonus(monster?.strength)})</li>
                        <li className='stat list-item'>DEX: {monster?.dexterity} ({calculateBonus(monster?.dexterity)})</li>
                        <li className='stat list-item'>CON: {monster?.constitution} ({calculateBonus(monster?.constitution)})</li>
                        <li className='stat list-item'>INT: {monster?.intelligence} ({calculateBonus(monster?.intelligence)})</li>
                        <li className='stat list-item'>WIS: {monster?.wisdom} ({calculateBonus(monster?.wisdom)})</li>
                        <li className='stat list-item'>CHA: {monster?.charisma} ({calculateBonus(monster?.charisma)})</li>
                    </ul>
                </div>
                <div className="monster-sense-row row">Senses: {monster?.senses} | Languages: {monster?.languages}</div>
                <div className="monster-skill-row row">
                    {<ul className='stat-list'>
                        {monster?.special_abilities?.map((item) => (
                            <li key={item.name}><strong>{item.name}:</strong> {item.desc}</li>
                        ))}
                    </ul>}
                </div>
                <div className="monster-actions-row row">Actions:
                    <ul className='stat-list'>
                        {monster?.actions?.map((item) => (
                            <li key={item.name}><strong>{item.name}:</strong> {item.desc}</li>
                        ))}
                    </ul>
                    <ul>
                        {monster?.bonus_actions?.map((item) => (
                            <li key={item.name}>Bonus Action: <strong>{item.name}:</strong> {item.desc}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

function calculateBonus(stat) {
    return Math.floor((stat - 10) / 2);
}

export default StatCard