import React from 'react'

const CardsInsideText = (props) => {
  return (
    <>
        <h5 className="card-title"><div style={{textDecoration:"underline"}}>{props.keys}</div><div className="insidetextofmap">{props.value}</div></h5>
    </>
  )
}

export default CardsInsideText
