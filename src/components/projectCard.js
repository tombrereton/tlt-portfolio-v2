import React from "react"
import matchThree from '../content/projects/matchThree/match-three-card.png';

export default function projectCard(props) {
    return (
        <div style={squareContainer}>
            <img style={imgStyles} src={matchThree} />
            <h5 style={projectTitleStyles}>Gem Island</h5>
        </div>
    )
}

var imgStyles = {
    minWidth: '100px',
    height: '100px',
    objectFit: 'scale-down',
    backgroundColor: 'black',
    margin: 'auto',
    borderRadius: '4px',
    filter: 'drop-shadow(2px 3px 3px #535353)',
}

var squareContainer = {
    display: 'flex',
    position: 'relative',
    marginLeft: '0.5em',
    marginRight: '0.5em',
}

var projectTitleStyles = {
    color: 'white',
    position: 'absolute',
    paddingLeft: '1em',
    paddingRight: '1em',
    top: '30%'
}
