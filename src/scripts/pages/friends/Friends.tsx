import {useEffect, useState} from "react";
import * as React from "react";
import Draggable from "gsap/dist/Draggable";
import gsap from "gsap";
function Friends({showFriends, setShowFriends, zIndex}: FriendsProps) {
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [fullscreen, setFullScreen] = useState("");
    const [portfolio, setPortfolio] = useState<string | null>(null);
    const isMobile = window.innerWidth < 768;
    useEffect(() => {
        if(showFriends  && !isMobile){
            Draggable.create(".window", {
                bounds: "body"
            });
        }
    }, [showFriends]);
    if (!showFriends) {return null}
    const displayHoverInfo = (info: string) => setHoverText(info);
    const hideHoverInfo = () => setHoverText(null);

    function showPortfolio(url: string) {
        setPortfolio(url);
    }

    function hidePortfolio() {
        setPortfolio(null)
    }

    function makeFullScreen() {
        if (fullscreen != "fullscreen") {
            setFullScreen("fullscreen");
            gsap.to(".window", {
                x: 0,
                y: 0
            });
        } else {
            setFullScreen("");
        }
    }
    return <>
        <div id='friends' onMouseMove={debugMouse} className={"window " + fullscreen} style={{zIndex: zIndex}}>
            <div className="header">
               <span>
                    <button id="close" onClick={() => {setShowFriends(false); hideHoverInfo()}}
                            onMouseEnter={() => displayHoverInfo("close about me")}
                            onMouseLeave={hideHoverInfo}>
                    </button>
                    <button id="nothing" onClick={() => displayHoverInfo("really does nothing")}
                            onMouseEnter={() => displayHoverInfo("does nothing")}
                            onMouseLeave={hideHoverInfo}
                    ></button>
                    <button id="maximize"
                            onMouseEnter={() => displayHoverInfo("maximize about me")}
                            onMouseLeave={hideHoverInfo}
                            onClick={() => makeFullScreen()}>
                    </button>
               </span>
                <p>friends</p>
            </div>
            <div id="friends-content">
                <a href="https://izitaooo.github.io/Portfolio-2025/" target="_blank" data-friend="alex"
                   onMouseEnter={() => showPortfolio("assets/alex.webp")}
                   onMouseLeave={() => hidePortfolio()}
                >
                    <div></div>
                    <p>alex</p>
                </a>
                <a href="" target="_blank" data-friend="oskar"  >
                    <div></div><p>oskar</p>
                </a>
                <a href="" target="_blank" data-friend="maty">
                    <div ></div><p >maty</p>
                </a>
                <a  href="https://kriztovv.github.io/portfolio/" target="_blank" data-friend="kiki"
                    onMouseEnter={() => showPortfolio("assets/kiki.webp")}
                    onMouseLeave={() => hidePortfolio()}
                >
                    <div ></div><p >krystof</p>
                </a>
            </div>
            <p>
                All the icons were made by my friend and an awesome artist <a href="https://open.spotify.com/artist/6gclKPlpzyCCAzYaGDkgBX" target="_blank"
                onMouseEnter={() => showPortfolio("assets/jachym.webp")} onMouseLeave={() => hidePortfolio()}
            >Asphinal</a>
            </p>

        </div>
        {
            hoverText && (
            <div id="hoverText" style={{ left: mousePos.x, top: mousePos.y }}>
                {hoverText}
            </div>
        )}
        {
            portfolio && (
                <div id="friend-portfolio" style={{left: mousePos.x, top: mousePos.y}}>
                    <img src={portfolio} alt=""/>
                </div>
            )
        }
    </>

    function debugMouse(event: React.MouseEvent) {
        setMousePos({x: event.clientX - 10, y: event.clientY + 25})
    }
}
export default Friends;

interface FriendsProps {
    showFriends: boolean,
    setShowFriends: (showAbout: boolean) => void,
    zIndex: number,
}