
import a from "../images/img1.jpg"
import b from "../images/img2.jpeg"
import c from "../images/img3.jpeg"
import d from "../images/img4.jpeg"
import f from "../images/img5.jpeg"
import g from "../images/img6.jpeg"

function Card(props) {
    return (
        <div style={{ backgroundColor: "white", color: "black", borderRadius: "5px", padding: "2px 20px", margin: "10px 5px", display: "flex" }}>

            <img src={props.img} style={{ width: "70px", margin: "0 20px", height: "70px", borderRadius: "100%" }}></img>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <div>
                    <h3>{props.name}</h3>
                    <span style={{ color: "#94a7c7" }}>{props.message}</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "end", alignItems: "end" }}>
                    <span style={{ color: "#b2c4de" }}>{props.time}</span>
                    <p>⭐</p>
                </div>



            </div>


        </div>
    );
}

var namelist=[
    {
        img:a,
        name:"jessica koel",
        message:"hey,joel i here to help you out please....",
        time:"11:26"

    },
    {
        img:b,
        name:"Komeial Bolger",
        message:"i will send you all document as soon ass.......",
       time:"12:00"

    },
    {
        img:c,
        name:"tamaraa suiale",
        message:"hey, are u going to bussines trip next week...",
        time:"8:34"

    },
    {
        img:d,
        name:"sam Nielson",
        message:"i suggest to start new bussiness soon..",
        time:"7:16"

    }
    ,{
        img:f,
        name:"Caroline nexom",
        message:"we need to start new bussiness soon...",
        time:"9:26"

    },
    {
        img:g,
        name:"patrick koeler",
        message:"may be yes..",
        time:"3:26"

    }
];
function Call(){
    return(
        <div>
{namelist.map(function(item){
return( <Card key={item.name} img={item.img} name={item.name} message = {item.message} time={item.time}></Card>
);
})}
</div>

    );
}



export default Call;

