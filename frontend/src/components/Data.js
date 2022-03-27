import { useContext } from "react";
import { ScrapeContext } from "./ScrapeContext";

export default function Data(){
    const scrapeData = useContext(ScrapeContext);
    // const {scrapeData} = useContext(ScrapeContext);
    console.log(scrapeData);
    return (
        <div>
            <h2>Your Data</h2>
            <h3>{scrapeData.title}</h3>
            <p>{scrapeData.url}</p>
            <p>{scrapeData.level}</p>
        </div>
    );
}