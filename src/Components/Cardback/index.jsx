import '../Cardback/CardBack.sass';

export default function Cardback({cvc}) {
  return (
    <div className="container-back">
        <h4 className='nm-cvv'>{cvc}</h4>
    </div>
  )
}
