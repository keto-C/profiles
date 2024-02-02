import { useState } from 'react';
import './App.css';


const profiles = [
{
  id:1,
  name:'Susan Smith',
  job:'web developer',
  image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},
{ 
  id:2,
  name:'Anna Johnson',
  job:'web designer',
  image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
  text:'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
},
{
  id:3,
  name:'Peter Jones',
  job:'intern',
  image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
  text:'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
},
{
  id:4,
  name:'Bill Anderson',
  job:'the boss',
  image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  text:'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
},
]

function App() {
  const [curIndex, setIndex] = useState(0)

  const nextProf = () => {
    if(curIndex !== profiles.length-1){
        setIndex(curIndex + 1)
    } 
    else if (curIndex === profiles.length-1){
        setIndex(0)
    }
}

const prevProf = () => {
    if(curIndex !== 0){
        setIndex(curIndex-1)
    }
    else if (curIndex === 0){
        setIndex(profiles.length-1)
    }
}

const surpriseMe = () => {
  setIndex(Math.floor(Math.random()*profiles.length))
}


return (<div className='bod'>
<h2 className='reviews'>Our Reviews</h2>
<div className='underline'></div>
<div className='container'>
  <div className='circle'>
  <div className="imge">
    <img src={profiles[curIndex].image}></img>
  </div>
  </div>
  <div className="identifier">
    <h2 className="name">{profiles[curIndex].name}</h2>
    <h3 className="jobTitle">{profiles[curIndex].job}</h3>
  </div>
  <div className="text">
    <p>{profiles[curIndex].text}</p>
  </div>
  <div className="buttons">
    <div className='leftAndRight'>
      <button className="left" onClick={prevProf}><i className={IoIosArrowBack}></i>left arrow</button>
      <button className="right" onClick={nextProf}>right arrow</button>
    </div>
    <button className="surprise" onClick={surpriseMe}>surprise me</button>
  </div>
</div>
</div>
)
}

export default App;
