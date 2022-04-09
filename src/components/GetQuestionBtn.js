export default function getQuestionBtn ({question, setShow}) {
    return (
        <div id="question-btn-div">
            <h2 className="h2">Let's Play!</h2>
            <button style={{backgroundColor: 'goldenrod'}}
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