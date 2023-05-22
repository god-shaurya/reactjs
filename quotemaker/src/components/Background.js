
import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'


export default function Background() {
    const [quote, setquote] = useState("")
    const [author, setauthor] = useState("")
    const [color, setcolor] = useState("white")

    const url = "https://type.fit/api/quotes";
    const randomobject = (array) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }


    const updateQuote = async () => {
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata)
        setquote(randomobject(parsedata).text)
        setauthor(randomobject(parsedata).author)
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        setcolor("rgb(" + red + ", " + green + ", " + blue + ")")

    }


    useEffect(() => {
        updateQuote()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container px-4 text-center">
            <div className="row gx-5">

                <div className="col">
                    <div className="p-3" ><Card quote={quote} author={author?author:"Unknown"} update={updateQuote} color={color}/></div>
                    <div className="p-3" style={{"fontFamily": "'Pangolin', cursive",color:"white"}}>-Shaurya Gupta</div>

                </div>
            </div>
        </div>
    )
}
