export default function getQuestionBtn ({question}) {
    return (
        <div id="question-btn-div">
            <h2>Let's Play!</h2>
            <button className="question-btn"
            onClick={(e) => {
                question()
            }}
            >
                Get Question
            </button>

        </div>
    )
}