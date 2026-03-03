import {ChevronDown, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HomePageForm = () => {
  const navigate = useNavigate();
  const onRegisterClick = () =>{
    navigate("/register")
  }
  const onAllClick = () =>{
    navigate("/all")
  }
  return (
    <>
      {/* Header */}
      <header className="px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl tracking-wider" style={{ fontFamily: 'serif' }}>EVENTURE</h1>
          </div>
          <nav className="flex items-center gap-8">
            <button className="flex items-center gap-2 text-base"
              onClick={onAllClick}>
              Все события
              <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#" className="text-base">Контакты</a>
            <div className="relative">
              <input
                type="text"
                placeholder="Søg..."
                className="pl-10 pr-4 py-2 rounded-full bg-white/40 border-none outline-none w-48"
                style={{ backdropFilter: 'blur(10px)' }}
              />
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-6xl mb-4" style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#2D5016',
                  fontWeight: '400'
                }}>
                  CULTUREBITE 2026
                </h2>
                <p className="text-xl" style={{ color: '#2D5016' }}>
                  По всему миру в Копенгагене                </p>
              </div>

              <div className="space-y-4">
                <p className="text-base leading-relaxed" style={{ color: '#1a1a1a' }}>
                  Быть новым студентом - значит иметь<br />
                  непредвзятое отношение. КУЛЬТУРНЫЙ УКУС - это ваша тренировка.
                </p>
                <p className="text-base" style={{ color: '#1a1a1a' }}>
                  <strong>Присоединяйтесь к нам в Reffen</strong> и чувствовать<br /> 
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  className="px-6 py-3 rounded-full text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: '#2D5016' }}
                >
                  Se program
                </button>
                <button 
                  className="px-6 py-3 rounded-full text-white transition-all hover:opacity-90"
                  onClick={onRegisterClick}
                  style={{ backgroundColor: '#2D5016' }}
                >
                  Регистрация
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzf_WZYRJ55EOW3v_7lgJ5NtT5PT2w3n6UA&s" 
                alt="Directional signs showing different cultures"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

