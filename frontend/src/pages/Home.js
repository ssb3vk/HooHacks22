import React, { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { addDoc } from 'firebase/firestore';

function Home() {

    // const [url, setUrl] = useState("");

    const articlesCollectionRef = collection(db, "articles")

    const readArticle = async () => {
        let info = {
            name: auth.currentUser.displayName,
            phone: auth.currentUser.phoneNumber, // Null?
            time: Date.now(),
            url: "https://en.wikipedia.org/wiki/Benjamin_Harrison" // Get url into here
        };
        await addDoc(articlesCollectionRef, info);
        window.open(info.url, '_blank');
    }

    return <div>
        Articles
        <div className="articles">
            <button onClick={readArticle}>Read article 1</button>
        </div>
    </div>;
}

export default Home;