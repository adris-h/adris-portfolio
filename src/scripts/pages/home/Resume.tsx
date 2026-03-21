import resumeUrl from "/src/assets/resume.webp"
function Resume({showResume, setShowResume}: ResumeProps) {
    if (!showResume) {return null}
    function closeResume() {
        setShowResume(false);
    }

    return <>
        <div id="resume" onClick={closeResume}>
            <div>
                <img src={resumeUrl} alt=""/>
            </div>
        </div>
    </>
}


export default Resume;

interface ResumeProps {
    showResume: boolean,
    setShowResume: (showResume: boolean) => void
}