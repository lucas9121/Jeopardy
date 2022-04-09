export default function getQuestionBtn ({question, setShow}) {
    return (
        <div id="question-btn-div">
            <h2 className="h2">Let's Play!</h2>
            <button className="question-btn"
            onClick={(e) => {
                question()
                setShow(false)
            }}
            >
                Get Question
            </button>

        </div>
    )
}