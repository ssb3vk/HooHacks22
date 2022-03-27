import {ScrapeProvider} from './ScrapeContext';
import { useEffect, useState } from 'react';

function useScrapes(props){
    const [scrapes, setScrapes] = useState(props.article);

    useEffect(function (){

        (async () => {
            console.log("Mounting or updating");
            // const link1 = "https://www.history.com/topics/japan/russo-japanese-war";
            const link2 = props.article.link.replaceAll("/", "%2f")
            // console.log("accessing " + link2);

            fetch('/data/' + link2).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
            })
            .then((responseJson) => {
            // Do something with the response
                // console.log(JSON.stringify(responseJson));
                setScrapes({...props.article, "body": responseJson.body});
            })
            .catch((error) => {
            console.log(error)
            });


            // const res = await fetch('/data/' + link2);
            // // await console.log(res);
            // const data = await res.json();
            // console.log(data);


            // setScrapes({...props.article, body: data.body});
        } )();

    }, [props.article])

    return scrapes;
}


export default function Page(props) {
    const scrapes = useScrapes(props);

    return (
        <ScrapeProvider value={scrapes}>
            <div className="page">{props.children}</div>
        </ScrapeProvider>
    );
}