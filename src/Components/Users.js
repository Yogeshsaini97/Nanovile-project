import moment from "moment";
import React, { useEffect, useState } from "react";
import "../CSSfolder/Users.css";
import 'antd/dist/antd.css';
import Loading from "./Loading";
import CardsInsideText from "./CardsInsideText";
import ReactPaginate from "react-paginate";
import "../CSSfolder/Pagination.css";
import { DatePicker } from 'antd';
const {RangePicker}=DatePicker;


const Users = () => {
  const [Array, setArray] = useState([1,2]);
  const [Loadings, setLoadings] = useState(false);
  const [page, setpage] = useState("1");
  const[serialnumber,setserialnumber]=useState("")
  const[query,setquery]=useState("")
  const[manufacturer,setmanufacturer]=useState("")
  const[color,setcolor]=useState("")
  const[distance,setdistance]=useState("")

  const[upgradeserial,setupgradeserial]=useState("")
  const[upgradequery,setupgradequery]=useState("")
  const[upgrademanufacturer,setupgrademanufacturer]=useState("")
  const[upgradecolor,setupgradecolor]=useState("")
  const[upgradedistance,setupgradedistance]=useState("")


  const[dates,setdates]=useState(["2001","2040"]);


  // function to  fetch data in start
  useEffect(() => {
    fetchmydata(upgradeserial,upgradequery,upgrademanufacturer,upgradecolor,upgradedistance);
  }, [page,upgradeserial,upgradequery,upgrademanufacturer,upgradecolor,upgradedistance]);

  // function to fetch data
  const fetchmydata = async (upgradeserial,upgradequery,upgrademanufacturer,upgradecolor,upgradedistance) => {

    setLoadings(true);

    const data = await fetch(
      `https://bikeindex.org:443/api/v3/search?page=${page}&per_page=7${upgradeserial}${upgradequery}${upgrademanufacturer}${upgradecolor}&location=IP${upgradedistance}&stolenness=stolen`
    );

    const recievedArray = await data.json();
    setArray(recievedArray.bikes);
    setLoadings(false);
  };

  // function to navigate and save data in application storage

  const handlePageClick = (data) => {
    setpage(data.selected + 1);
  };


const combinalldata=(e)=>
{

if(serialnumber)
{
  setupgradeserial(`&serial=${serialnumber}`)
}
if(query)
{
  setupgradequery(`&query=${query}`)
}
if(manufacturer)
{
  setupgrademanufacturer(`&manufacturer=${manufacturer}`)
}
if(color)
{
  setupgradecolor(`&colors=${color}`)
}
if(distance)
{
  setupgradedistance(`&distance=${distance}`)
}
 
}

if(!Array.length)
{
  return (<><div className="ifnofound"><strong>UPS!!! NO RECORDS FOUND</strong></div></>)
}


  return (
    <>
      <div className="heading h1 my-5">Police Department Of Berlin</div>

      {/* ternary condition for showing loading */}

  
      {!Loadings ? (
        <div>
          <div className="uppersearches">
          <div>
            <RangePicker
            picker="year"
            onChange={(values)=>{
             
              setdates(values.map((item=>
              {
                return moment(item).format("YYYY")
              })))
            }}
            />
          </div>
           
            <div>
              <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <div className="form">
                    <input
                      type="text"
                      onChange={(e)=>{setserialnumber(e.target.value)}}
                      value={serialnumber}
                      className="form-control form-input"
                      placeholder="Search Serialnumber..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <div className="form">
                    <input
                      type="text"
                      onChange={(e)=>{setquery(e.target.value)}}
                      value={query}
                      className="form-control form-input"
                      placeholder="search query..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <div className="form">
                    <input
                      type="text"
                      onChange={(e)=>{setmanufacturer(e.target.value)}}
                      value={manufacturer}
                      className="form-control form-input"
                      placeholder="search manufacturer..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <div className="form">
                    <input
                      type="text"
                      onChange={(e)=>{setcolor(e.target.value)}}
                      value={color}
                      className="form-control form-input"
                      placeholder="search color..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <div className="form">
                    <input
                      type="text"
                      onChange={(e)=>{setdistance(e.target.value)}}
                      value={distance}
                      className="form-control form-input"
                      placeholder="Search distance..."
                    />
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          
          <div className="row ">
          <div><button className="searchbtn my-5" onClick={combinalldata}>Search</button></div>
      
            {Array.filter((ele)=>
            {
              return (ele.year>=parseInt(dates[0],10) && ele.year<=parseInt(dates[1],10))
            }).map((e, i) => (
              <div className="card col-md-3 col-lg-2 col-sm-4 my-5 mx-5">
                <div className="card-body">
                  {/* use of single compnent many times */}
                  <div>{e.title}</div>
                  <div>{e.frame_model}</div>
                  <div>{e.serial}</div>
                  <div>{e.manufacturer_name}</div>
                  <div>{e.frame_colors}</div>
                  <div>{e.url}</div>
                  <div>{e.year}</div>
               

                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={25}
              marginPagesDisplayed={3}
              pageRangeDisplayed={6}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Users;
