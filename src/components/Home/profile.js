function Profile() {
    return (
      <div className="bg-white rounded-lg shadow-md p-1 space-y-1">
        {/*Header */}
        <div className="bg-blue-950 h-10">            
        </div>
        {/*Body */}
        <div className=" p-4 space-y-4">
            {/* Tema de Reddit */}
            <div className="flex items-center space-x-3">
            <img
                src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png"
                alt="Icono de tema"
                className="w-8 h-8 rounded-full"
            />
            <div>
                <p className="font-semibold text-gray-900">r/programming</p>
                <p className="text-sm text-gray-500">Computer programming</p>
            </div>
            </div>
    
            {/* Fecha de creación */}
            <div className="flex items-center space-x-2 text-gray-500">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M4 4h16M4 4v16m16-16v16"
                />
            </svg>
            <span>Fecha de creación</span>
            </div>
    
            {/* Separador */}
            <div className="border-t border-gray-300"></div>
    
            {/* Información del tema */}
            <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center space-x-2">
                <span>5.7k Members</span>
                <span>3.4k Online</span>
                <div className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span>Top 1% Ranked by Size</span>
                </div>
            </div>
            </div>
    
            {/* Botón de unión */}
            <button className="w-full bg-orange-reddit text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200">
            Join
            </button>
    
            {/* Separador */}
            <div className="border-t border-gray-300"></div>
    
            {/* Comunidad y opciones */}
            <div className="flex justify-between items-center text-gray-600">
            <span>COMMUNITY OPINIONS</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
                />
            </svg>
            </div>
        </div>
        
      </div>
    );
  }
  
  export default Profile;
  