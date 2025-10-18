import { Bookmark } from "lucide-react";

const Card = (props) => {
  console.log(props);
  return (
    
      <div className="card">
        <div className="top">
          <img
            src={props.brandLogo}
            alt=""
          />
          <button>
            Save <Bookmark size={14} />
          </button>
        </div>

        <div className="center">
          <h3>
            {props.companyName} <span>{props.datePosted}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="btn">
            <button>{props.tag1}</button>
            <button>{props.tag2}</button>
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <h2>{props.pay}</h2>
            <span>{props.location}</span>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    
  );
};

export default Card;
