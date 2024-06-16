import { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import Breadcrumb from './../../ui/breadcrumbs';
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import { useLocation } from "react-router-dom";

function Gigs() {
    const [sort, setSort] = useState("sales");
    const [open, setOpen] = useState(false);
    const minRef = useRef();
    const maxRef = useRef();

    const {search}=useLocation();
    console.log(location);

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['gigs'],
        queryFn: () =>
            newRequest.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then((res)=>{
                return res.data;
            })
    })
    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };
    console.log(data);

    useEffect(()=>{
        refetch();
    },[sort])

    const apply = () => {
        // console.log(minRef.current.value)
        // console.log(maxRef.current.value)
        refetch()
    }

    return (
        <div className="gigs">
            <div className="container">
                {/* <span className="breadcrumbs">TalentPro  Graphics & Design </span> */}
                <Breadcrumb />
                <h1>AI Artists</h1>
                <p>
                    Explore the boundaries of art and technology with TalentPro's AI artists
                </p>
                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input ref={minRef} type="number" placeholder="min" />
                        <input ref={maxRef} type="number" placeholder="max" />
                        <button onClick={apply}>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortBy">Sort by : </span>
                        <span className="sortType">
                            {sort === "sales" ? "Best Selling" : "Newest"}
                        </span>
                        <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
                        {open && (
                            <div className="rightMenu">
                                {sort === "sales" ? (
                                    <span onClick={() => reSort("createdAt")}>Newest</span>
                                ) : (
                                    <span onClick={() => reSort("sales")}>Best Selling</span>
                                )}
                                <span onClick={() => reSort("sales")}>Popular</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="cards">
                    {isLoading ? "loading" : error ? "somethign went wrong" : data.map((gig) => (
                        <GigCard key={gig._id} item={gig} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gigs;