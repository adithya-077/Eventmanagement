import "../Popular/Popular.css";

import React, { useEffect, useState } from "react";
import Navbar from "../../component/navbar/navbar";
import Searchbar from "../../component/Searchbar/Searchbar";
import { useUserAuth } from "../../context/Logincontext";
import imagea from "../../assest/lspic1.jpg";
import likeicon from "../../assest/thumbs-up.svg";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const url = "http://localhost:7000/getPost";


const Cardele = ({ ele }) => {
  const { cookie ,userstate} = useUserAuth();
  const notify = () => {            toast('liked', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });}
  return (
    <div className="each-card" onClick={() => {}}>
      <div className="card-image">
        <img src={imagea} alt="Event" />
      </div>
      <div className="details-div" id="title-card">
        <p className="card-title-name" id="locid">
          {ele.name && ele.name.charAt(0).toUpperCase() + ele.name.slice(1)}
        </p>
      </div>
      <div className="details-div" id="subtitle">
        <p className="card-title" id="priceid">
          {Date(ele.date).slice(0, 15)}
        </p>
      </div>
      <div className="details-div" id="subtitle">
        <p className="card-title">{ele.tags} </p>
      </div>
      <div className="details-div" id="subtitle">
        <p className="card-title">{ele.venue} </p>
      </div>
      <div className="details-div" id="subtitle">
        <p className="card-title">₹ {ele.price} onwards</p>
      </div>
      <div className="likebuttons">
      <img
        src={likeicon}
        alt="like"
        className="like-button"
        onClick={async () => {
          const urll = "http://localhost:7000/addLike";
          const finalres = await fetch(urll, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": cookie["token-eventm"],
            },
            body: JSON.stringify({
              item: ele._id,
            }),
          });
          console.log(finalres);
          notify();
          // setuserliked(finalres.liked)
        }}
      />
            <img
        src={likeicon}
        alt="like"
        className="dislike-button"
        onClick={async () => {
          const urll = "http://localhost:7000/removelike";
          const finalres = await fetch(urll, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": cookie["token-eventm"],
            },
            body: JSON.stringify({
              item: ele._id,
            }),
          });
            console.log('gg')

            // toast('res.statusText',
            // {position: toast.POSITION.BOTTOM_LEFT,autoClose:10000});
          
          
          console.log(finalres);
          // setuserliked(finalres.liked)
        }}
      />
      {/* {userliked.includes(ele._id) && <div>liked</div>} */}
      </div>
    </div>
  );
};

const Popular = () => {
  const [userevents, setuserevents] = useState([]);
  const { cookie } = useUserAuth();
  async function loadevents() {
    const finalres = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": cookie["token-eventm"],
      },
    });
    setuserevents(await finalres.json());
  }
  useEffect(() => {
    loadevents();
  }, []);

  const { tagdata } = useUserAuth();

  const tagslist = tagdata?.map((e) => <div className="tags">{e}</div>);

  const { searchbartext, setsearchbartext } = useUserAuth();

  const cards = userevents.map((e) => <Cardele ele={e} key={e.id} />);

  var cardss = userevents.map((e) => {
    console.log(searchbartext.searchtext);
    if (e.name === searchbartext.searchtext) {
      return <Cardele ele={e} key={e.id} />;
    }
  });

  function handlef(e) {
    const newdata = { ...searchbartext };
    newdata[e.target.name] = e.target.value;
    setsearchbartext(newdata);
    cardss = userevents.map((e) => {
      console.log(searchbartext.searchtext);
      if (e.name === searchbartext.searchtext) {
        return <Cardele ele={e} key={e.id} />;
      }
    });
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="popular-main">
        <div className="searchbar">
          <div className="search-bardiv">
            <form action="/" method="get" className="main-search">
              <label htmlFor="header-search">
                <span className="header-search">Search events</span>
              </label>
              <input
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="searchtext"
                value={searchbartext.searchtext}
                onChange={handlef}
              />

              <button
                type="submit"
                className="search-button"
                onClick={() => {}}
              >
                Search
              </button>
            </form>{" "}
          </div>
          <div className="tags-list">{tagslist}</div>

          {searchbartext.searchtext === undefined && (
            <div className="showallevnt">{cards}</div>
          )}
          {searchbartext.searchtext === "" && (
            <div className="showallevnt">{cards}</div>
          )}
          {searchbartext.searchtext !== "" && (
            <div className="showallevnt">{cardss}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Popular;
