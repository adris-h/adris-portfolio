function PopUp() {
    return <>

        <section id="construction-popup">
            <h3>My portfolio is still under construction</h3>
            <p>Do you wish to continue?</p>
            <button id="confirm" onClick={(e) => e.currentTarget.parentElement?.remove()}>Yes, let me in.</button>
        </section>

    </>
}

export default PopUp;