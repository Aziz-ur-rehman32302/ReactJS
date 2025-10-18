import Card from './Components/Card';

const App = () => {

  const jobsOpening = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "2 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "New York, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "1 day ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$100/hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$70/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    companyName: "Meta",
    datePosted: "4 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$90/hour",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "Deep Learning Researcher",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hour",
    location: "Boston, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    companyName: "Tesla",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "Palo Alto, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Contract",
    tag2: "Entry Level",
    pay: "$65/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    companyName: "OpenAI",
    datePosted: "3 weeks ago",
    post: "AI Policy Analyst",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hour",
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Adobe_Corporate_logo.svg",
    companyName: "Adobe",
    datePosted: "1 month ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "San Diego, USA"
  }
];



  
  return (
   
    <div id='parant2' >
      {
        jobsOpening.map(function(elem,idx) {
          return <div   key={idx}>
            <Card  companyName={elem.companyName} post={elem.post} datePosted={elem.datePosted} brandLogo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
          
          </div>
        })
      }
    </div>
    
  )
}

export default App