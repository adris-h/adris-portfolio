function Resume({showResume, setShowResume}: ResumeProps) {
    if (!showResume) {return null}
    function closeResume() {
        setShowResume(false);
    }

    return <>
        <div id="resume" onClick={closeResume}>
            <div>
                <img src="/src/assets/resume.webp" alt=""/>
            </div>
        </div>
    </>
}


export default Resume;

interface ResumeProps {
    showResume: boolean,
    setShowResume: (showResume: boolean) => void
}