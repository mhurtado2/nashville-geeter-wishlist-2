import { useState } from "react"
import { AllGear } from "./AllGear"
import { GearSearch } from "./GearSearch"


export const GearContainer = () => {
   const [searchTerms, setSearchTerms] = useState("") 

   return <>
          <GearSearch setterFunction={setSearchTerms}/>
          <AllGear searchTermState={searchTerms}/>
   </>
}