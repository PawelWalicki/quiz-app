export default function Search() {
    return (
        <div>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
            <div className="relative">
                <input type="text"
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Search quiz..." />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-magnifying-glass text-gray-400"></i>
                </div>
            </div>
        </div>
    )
}