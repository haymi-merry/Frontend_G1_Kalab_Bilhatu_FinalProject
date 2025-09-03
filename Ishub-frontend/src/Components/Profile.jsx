import React from 'react'
function Profile(){
//    profile section
    const user={
    name: 'kalab Bilhatu',
    email:"kalexkalab@gmail.com",
    joined:"july 2025",
    Bio:" A masterpiece in progress"
    proflepic:""
   };
//   Achivements 
   const Achivements=[
    "HTML Hero",
    "CSS Challenger",
    "js Explorer",
    "React Rookie"
   ];
//    overview
   const overviewState =[
    {label:"Courses Enrolled",value:"4"},
    {label:"Quizzes Taken",value:"10"},
    {label:"quiz score",value:"85%"},
    {label:"Total Learning Time",value:" 10h 45m"}
   ]
//    saved lessons
const savedLessons =[
    {title:"responsive Design",subtitle:" css",duration:"21min"}
    {title:"",subtitle:"",duration:""}
    {title:"",subtitle:"",duration:""}
]
    return(
    <>
    <section user={user}/>
    <section className="overview">
        <h2>"overview"</h2>
        <stats={overviewState}>
    </section>
    <section className="achivements">
        <h2>Achivements  achivements={achivements} </h2>
    </section>
    <section className="savedlessons">
        <h2>Saved Lessons  items={savedLessons}</h2>
    </section>
    </>
    )
    }
    function ProfilePics({user}){
    return(
        <header>
            <div>
                <img src={user.ProfilePic} alt="profilepic" width='96' height="96" />
         
            <figcaption>
                {user.name}
            </figcaption>
            </div>
            <div>
                <h1>{user.name}</h1>
                <p><a href={user.email}></a></p>
                <p>Joined the bootcamp {user.joined}</p>
                <div>
                    <button>
                        Edit Profile
                    </button>
                </div>
            </div>
            <blockquote>
                <p>
                    {'${user.bio}'}
                </p>
            </blockquote>
        </header> 
    );
    function AchivementsSection({achievments})
    {
        return(
            <ul>

            </ul>
        )
    }
    function savedLessonsSection({items})
    {
        return()
    }}