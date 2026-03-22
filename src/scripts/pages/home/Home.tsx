import { useRef, useEffect } from 'react';


function Home() {

    const cardRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const cardRect = card.getBoundingClientRect();

            const x = e.clientX - cardRect.left;
            const y = e.clientY - cardRect.top;

            const centerX = cardRect.width / 2;
            const centerY = cardRect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((centerX - x) / centerX) * 10;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const handleMouseLeave = () => {
            card.style.transform = 'rotateX(0) rotateY(0)';
        };



        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return <>
        <div ref={cardRef} id="card">
            <div id="card_main-content">
                <div className="photo"></div>
                <div className="bio">
                    <span>
                        <h1>Adris Han</h1>
                        <h2>(Adriana Hanousková)</h2>
                    </span>
                    <span>
                        <p>ui/ux</p>
                        <p>design</p>
                        <p>development</p>
                    </span>

                </div>
            </div>
            <div id="card_socials">
                <a href="https://github.com/adris-h" target="_blank" data-text="github">github <span></span></a>
                <a href="https://www.instagram.com/adrriz_/" target="_blank" data-text="instagram">instagram</a>
                <a href="https://www.linkedin.com/in/adriana-hanouskov%C3%A1-7753a831a/" target="_blank" data-text="linkedin">linkedin</a>
                <a href="mailto:adrianahanouskova2007@gmail.com" data-text="mail">mail</a>
            </div>
        </div>

    </>
}



export default Home;