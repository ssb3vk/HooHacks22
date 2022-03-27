import {ScrapeProvider} from './ScrapeContext';
import { useEffect, useState } from 'react';

function useScrapes(){
    const [scrapes, setScrapes] = useState({
        title: "",
        url: "",
        fk: 0,
    });

    useEffect(function (){

        (async () => {
            console.log("Mounting or updating");
            const res = await fetch('/data');
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