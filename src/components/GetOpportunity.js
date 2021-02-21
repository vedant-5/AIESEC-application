import React, {useEffect,useState} from  "react";

import { useQuery, gql} from "@apollo/client";
import {LOAD_OPPS} from "../GraphQL/Queries";

function GetOpportunity(){
    const {error,loading,data} = useQuery(LOAD_OPPS)
    const[opps, setOpps] = useState([]);

    useEffect(()=>{
        if(data){
            setOpps(data.allOpportunity.data);
        }
        console.log(data)
    }, [data])

    return <div>
        {opps.map((val)=>{
            return(
                <div>
                    <h1>{val.title}</h1>
                    <h2>{val.description}</h2>
                </div>
            )
        })}
    </div>
}

export default GetOpportunity;