import { useNavigate } from 'react-router-dom';

export const AllEvents = () => {
    const navigate = useNavigate();
    const onAllClick = () =>{
    navigate("/")
  }
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      {/* Back Link */}
      <button  
        className="text-sm mb-8 inline-block hover:opacity-70 transition-opacity"
        onClick={onAllClick}
        style={{ color: '#1a1a1a' }}
        >
        ← Вернуться к обзору
      </button>

      {/* What to Expect Section */}
      <section className="mb-20">
        <h2 
          className="text-4xl text-center mb-12"
          style={{ 
            fontFamily: 'Georgia, serif',
            color: '#1a1a1a'
          }}
        >
          Чего вам следует ожидать?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Music Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="h-48 overflow-hidden">
              {/* <ImageWithFallback
                src={musicImg}
                alt="Music and vinyl records"
                className="w-full h-full object-cover" */}
              {/* /> */}
            </div>
            <div className="p-6 text-center">
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#2D5016'
                }}
              >
                MUSIC
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
                Насладитесь энергичным вечером, полным музыкального разнообразия, где диджеи будут ставить музыку и саундтреки из разных уголков Азии, а также скандинавские ритмы, отдавая дань уважения культурному наследию..
              </p>
            </div>
          </div>

          {/* Food Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="h-48 overflow-hidden">
            </div>
            <div className="p-6 text-center">
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#2D5016'
                }}
              >
                MAD
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
                Порадуйте свои вкусовые рецепты изысканными блюдами из мира кулинарного искусства, от международных деликатесов до классических блюд, – все это с самыми благими намерениями.              </p>
            </div>
          </div>

          {/* Fun Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="h-48 overflow-hidden">
              {/* <ImageWithFallback
                src={funImg}
                alt="Fun activities and decorations"
                className="w-full h-full object-cover" */}
              {/* /> */}
            </div>
            <div className="p-6 text-center">
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#2D5016'
                }}
              >
                ВЕСЕЛЬЕ И ИГРА
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
                Благодаря впечатлениям людей со всего мира и праздничной атмосфере, культуре и международным традициям, вы сможете играть вместе.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            {/* <ImageWithFallback
              src={groupImg}
              alt="Happy diverse group of students"
              className="w-full h-auto"
            /> */}
          </div>

          {/* Content */}
          <div>
            <h2 
              className="text-4xl mb-6"
              style={{ 
                fontFamily: 'Georgia, serif',
                color: '#1a1a1a'
              }}
            >
              Почему вам стоит присоединиться?
            </h2>
            
            <p className="text-base leading-relaxed mb-6" style={{ color: '#1a1a1a' }}>
              CULTUREBITE предоставляет вам уникальную возможность попробовать современную кухню, послушать музыку со всего мира и узнать о различных традициях и языках. Вместе вы сможете расширить свой круг знакомств и поделиться замечательными впечатлениями в особой атмосфере.
            </p>

            <div className="bg-[#2D5016]/5 border-l-4 border-[#2D5016] p-6 rounded-r-xl mb-8">
              <p className="italic text-base leading-relaxed" style={{ color: '#1a1a1a' }}>
                «Быть ​​новым участником означает быть открытым для новых идей. CULTUREBITE — это ваше обучение».
              </p>
            </div>

            <button 
              className="px-8 py-3 rounded-full text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#2D5016' }}
            >
              Посмотреть программу
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-12 border-t-2" style={{ borderColor: '#E0D7C6' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4" style={{ 
              fontFamily: 'Georgia, serif',
              color: '#1a1a1a'
            }}>
              Контакты
            </h3>
            <div className="space-y-2 text-sm" style={{ color: '#1a1a1a' }}>
              <p>eventure@eventure.com</p>
              <p>+705 123 45 67</p>
              <p>Караганда, Казахстан</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4" style={{ 
              fontFamily: 'Georgia, serif',
              color: '#1a1a1a'
            }}>
              Genveje
            </h3>
            <div className="space-y-2 text-sm">
              <p><a href="#" className="hover:opacity-70 transition-opacity" style={{ color: '#1a1a1a' }}>Om os</a></p>
              <p><a href="#" className="hover:opacity-70 transition-opacity" style={{ color: '#1a1a1a' }}>Privatlivspolitik</a></p>
              <p><a href="#" className="hover:opacity-70 transition-opacity" style={{ color: '#1a1a1a' }}>Job</a></p>
            </div>
          </div>
        </div>

{/* Logo */}
        <div className="text-right">
          <h2 className="text-3xl tracking-wider" style={{ fontFamily: 'serif', color: '#1a1a1a' }}>
            EVENTURE
          </h2>
        </div>
      </footer>
      </div> 
    );
}