import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <div className="background">
        <Header />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Map</h1>
              <div className="filterHeader">FILTER BY</div>

              <div className="filter">
                <div className="headerSearchItem1">
                  <div className="spaceItem">HOTEL NAME</div>
                  <div className="filterSearchInput">
                    <input
                      type="text"
                      placeholder="Search Hotel Name or Brand"
                      className="headerSearchInput"
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                </div>

                <div className="headerSearchItem1">
                  <div className="spaceItem">DISTANCE TO CENTER</div>
                  <div className="backgroundItem">
                    <label class="form-control">
                      <input type="checkbox" name="checkbox" />
                      Inside city center
                    </label>

                    <label class="form-control">
                      <input type="checkbox" name="checkbox-checked" />
                      less than 2 km to center
                    </label>

                    <label class="form-control">
                      <input type="checkbox" name="checkbox-checked" />
                      2-5 km to center
                    </label>

                    <label class="form-control">
                      <input type="checkbox" name="checkbox-checked" />
                      5-10 km to center
                    </label>

                    <label class="form-control">
                      <input type="checkbox" name="checkbox-checked" />
                      more than 10 km to center
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="listResult">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
