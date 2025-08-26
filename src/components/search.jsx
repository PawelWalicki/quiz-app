export default function Search() {
    return (
        <div>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
            <div className="relative">
                <input type="text"
                    className="pl-10 pr-4 py-2 border rounded-lg w-full bg-white"
                    placeholder="Search quiz..." />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-magnifying-glass text-gray-400"></i>
                </div>
            </div>
        </div>
    )
}