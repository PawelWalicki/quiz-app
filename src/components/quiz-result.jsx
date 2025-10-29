export default function QuizResult({quizResult, setShowDialogResult}) {
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
            {/* nakładka */}
            <div className="absolute inset-0 bg-black opacity-80"></div>
            {/* dialog */}
            <div className="relative bg-white bg-opacity-90 border-2 border-blue-400 shadow-lg rounded-lg p-8 max-w-sm w-full flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">Wynik</h2>
                <p className="mb-2">
                    Poprawne odpowiedzi: <span className="font-bold">{quizResult.numberOfCorrectAnswers}</span>
                </p>
                <p className="mb-6">
                    Liczba pytań: <span className="font-bold">{quizResult.numberOfQuestions}</span>
                </p>
                <button
                    className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                    onClick={() => setShowDialogResult(false)}
                >
                    Zamknij
                </button>
            </div>
        </div>
    )
}