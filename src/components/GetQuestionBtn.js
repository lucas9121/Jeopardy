export default function getQuestionBtn ({question}) {
    return (
        <button className="question-btn"
        onClick={(e) => {
            question()
        }}
        >
            Get Question
        </button>
    )
}