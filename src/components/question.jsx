export const Question = ({ question, choseAnswers, setChoseAnswers, idx }) => {
    const setSelected = (answerIdx) => {
        setChoseAnswers(prev => {
            const temp = [...prev]
            temp[idx] = answerIdx 
            return temp
        })
    }
    return (
        <div className="h-55 bg-[#6D94C5] rounded-lg m-2 pt-3 mb-5">
            <h1 className="mb-4 pl-4 font-semibold">{question.title}</h1>

            <div>
                {question.options.map((e, answerIdx) => (
                    <div key={e.id} className="pl-4 pr-1 py-1 border rounded-lg bg-[#CBDCEB] m-2 flex content-center"> 
                        <input className="mr-2 hover:cursor-pointer" checked={answerIdx == choseAnswers[idx]} onChange={() => setSelected(answerIdx)} type="radio"></input>
                        {e} 
                    </div>
                ))}
            </div>
        </div>
    )
}