import React, { useEffect, useState } from 'react'

const StatCard = ({ item }) => {
    const [monster, setMonster] = useState(null);

    useEffect(() => {
        setMonster(item)
    }, [item])



    return (
        <div className="monster-container">
            <div className="monster-name-row">
                <strong>{monster?.name}</strong> | Challenge Rating: {monster?.challenge_rating}, {monster?.size} {monster?.type}, {monster?.alignment}
            </div>
            <div className="monster-hp-row">
                HP: {monster?.hit_points} ({monster?.hit_dice}) AC: {monster?.armor_class} SPD: SPEED
            </div>
            <div className="monster-stat-row">
                <ul>
                    <li>STR: {monster?.strength} ({calculateBonus(monster?.strength)})</li>
                    <li>DEX: {monster?.dexterity} ({calculateBonus(monster?.dexterity)})</li>
                    <li>CON: {monster?.constitution} ({calculateBonus(monster?.constitution)})</li>
                    <li>INT: {monster?.intelligence} ({calculateBonus(monster?.intelligence)})</li>
                    <li>WIS: {monster?.wisdom} ({calculateBonus(monster?.wisdom)})</li>
                    <li>CHA: {monster?.charisma} ({calculateBonus(monster?.charisma)})</li>
                </ul>
            </div>
            <div className="monster-sense-row">Senses: {monster?.senses} | Languages: {monster?.languages}</div>
            <div className="monster-skill-row">
                {<ul>
                    {monster?.special_abilities.map((item) => (
                        <li key={item.name}><strong>{item.name}:</strong> {item.desc}</li>
                    ))}
                </ul>}
            </div>
            <div className="monster-actions-row">Actions:
                <ul>
                    {monster?.actions.map((item) => (
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
}

function calculateBonus(stat) {
    return Math.floor((stat - 10) / 2);
}

export default StatCard