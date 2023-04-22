"use srtict"

const playList = [

    {
    
     author: "LED ZEPPELIN",
    
     song:"STAIRWAY TO HEAVEN"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"BOHEMIAN RHAPSODY"
    
    },
    
    {
    
     author: "LYNYRD SKYNYRD",
    
     song:"FREE BIRD"
    
    },
    
    {
    
     author: "DEEP PURPLE",
    
     song:"SMOKE ON THE WATER"
    
    },
    
    {
    
     author: "JIMI HENDRIX",
    
     song:"ALL ALONG THE WATCHTOWER"
    
    },
    
    {
    
     author: "AC/DC",
    
     song:"BACK IN BLACK"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"WE WILL ROCK YOU"
    
    },
    
    {

     author: "METALLICA",
    
     song:"ENTER SANDMAN"
    
    }
    
    ];


    const listOutput = function() {

        let ol = document.querySelector('.list');

        for (let track of playList) {

            let li = document.createElement('li');

                li.innerText = track.author + ": " + track.song;

            ol.appendChild(li);
        }
    }
    listOutput();