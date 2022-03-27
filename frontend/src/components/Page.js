import {ScrapeProvider} from './ScrapeContext';
import { useEffect, useState } from 'react';

function useScrapes(){
    const [scrapes, setScrapes] = useState({
        title: "",
        url: "",
        fk: 0,
        body: "",
    });

    useEffect(function (){

        (async () => {
            console.log("Mounting or updating");
            const link1 = "https://www.history.com/topics/japan/russo-japanese-war";
            const link2 = link1.replaceAll("/", "%2f")
            const res = await fetch('/data/' + link2);
            // await console.log(res);
            const data = await res.json();
            console.log(data);


            setScrapes(data);
        } )();

    }, [])

    return scrapes;
}


export default function Page({children}) {
    const scrapes = useScrapes();

    return (
        <ScrapeProvider value={scrapes}>
            <div className="page">{children}</div>
        </ScrapeProvider>
    );
}