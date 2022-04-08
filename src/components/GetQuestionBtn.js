export default function getQuestionBtn ({question}) {
    return (
        <button className="question-btn"
        onClick={(e) => {
            question(question)
        }}
        >
            Get Question
        </button>
    )
}