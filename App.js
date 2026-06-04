const heading = React.createElement("h1" , {} , "Hello world from React ");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)


const title = React.createElement("h1",{id : "title"} , "CockRoach Janta Party")
     
const paragraph1 = React.createElement("p" , {id: "paragraph"} ,
    "The CJI Party you are referring to is officially known as the Cockroach Janta Party (CJP). It is a viral, satirical political movement in India that was formed in May 2026. The movement started after a major online controversy involving remarks made by the Chief Justice of India (CJI), Surya Kant, during a court hearing regarding student examination irregularities. The CJI reportedly used a comparison involving 'cockroaches' and 'parasites' when discussing societal issues, which sparked immense anger among students and young people online.");

const paragraph2 = React.createElement('p',{id: "paragraph2"} , 
    "What started as a joke quickly transformed into a massive digital protest movement against youth unemployment and systemic issues. The party playfully brands itself as the 'Voice of the Lazy and Unemployed,' using Gen-Z internet humor and memes to point out serious flaws in the country's education and job sectors. Surprisingly, within less than a week of its launch, its official Instagram account crossed 20 million followers, outrunning the social media metrics of mainstream political giants like the BJP and Congress.");

const container = React.createElement("div" , {id : "cjp-container"} ,[title,paragraph1,paragraph2])
const root1 = ReactDOM.createRoot(document.getElementById("headings"))
root1  .render(container)