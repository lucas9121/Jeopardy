export default function getQuestionBtn ({getQuestion}) {
    return (
        <button className="question-btn"
        onClick={(e) => {
            getQuestion()
        }}
        >
            Get Question
        </button>
    )
}