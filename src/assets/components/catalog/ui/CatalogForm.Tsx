// // import { ImageWithFallback } from './figma/ImageWithFallback';
// import { Instagram, Youtube, Facebook } from 'lucide-react';

// const musicImg = "https://images.unsplash.com/photo-1732950092748-04ee6e485bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBtdXNpYyUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MjE3NzExMnww&ixlib=rb-4.1.0&q=80&w=1080";
// const foodImg = "https://images.unsplash.com/photo-1766871139471-6d381e37b651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYm93bCUyMGludGVybmF0aW9uYWwlMjBjdWlzaW5lfGVufDF8fHx8MTc3MjE3NzExMnww&ixlib=rb-4.1.0&q=80&w=1080";
// const funImg = "https://images.unsplash.com/photo-1763879537802-18dd4a76b3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhcnR5JTIwZmxhZ3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzIxNzcxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080";
// const groupImg = "https://images.unsplash.com/photo-1758270705902-f50dde4add9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBmcmllbmRzJTIwaGFwcHklMjBzdHVkZW50c3xlbnwxfHx8fDE3NzIxNzcxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080";

// export const AllEvents = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-8 py-16">
//       {/* Back Link */}
//       <a 
//         href="#" 
//         className="text-sm mb-8 inline-block hover:opacity-70 transition-opacity"
//         style={{ color: '#1a1a1a' }}
//       >
//         ← Tilbage til oversigt
//       </a>

//       {/* What to Expect Section */}
//       <section className="mb-20">
//         <h2 
//           className="text-4xl text-center mb-12"
//           style={{ 
//             fontFamily: 'Georgia, serif',
//             color: '#1a1a1a'
//           }}
//         >
//           HVAD KAN DU FORVENTE?
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Music Card */}
//           <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
//             <div className="h-48 overflow-hidden">
//               <ImageWithFallback
//                 src={musicImg}
//                 alt="Music and vinyl records"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-6 text-center">
//               <h3 
//                 className="text-2xl mb-3"
//                 style={{ 
//                   fontFamily: 'Georgia, serif',
//                   color: '#2D5016'
//                 }}
//               >
//                 MUSIC
//               </h3>
//               <p className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
//                 Nyd en energifyldt nat af musikalsk mangfoldighed, hvor DJs spiller lyde og lydløb fra forskellige dele af Asien til nordiske beats, alt er en hyldest til kulturve arv.
//               </p>
//             </div>
//           </div>

//           {/* Food Card */}
//           <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
//             <div className="h-48 overflow-hidden">
//               <ImageWithFallback
//                 src={foodImg}
//                 alt="International cuisine"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-6 text-center">
//               <h3 
//                 className="text-2xl mb-3"
//                 style={{ 
//                   fontFamily: 'Georgia, serif',
//                   color: '#2D5016'
//                 }}
//               >
//                 MAD
//               </h3>
//               <p className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
//                 Forked dine smagsløg med kulte retter fra en verden af kokkekunst og bedre smag på at ble internationale delikatesser til klassiske specialiteter, hver rette hensigt er.
//               </p>
//             </div>
//           </div>

//           {/* Fun Card */}
//           <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
//             <div className="h-48 overflow-hidden">
//               <ImageWithFallback
//                 src={funImg}
//                 alt="Fun activities and decorations"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-6 text-center">
//               <h3 
//                 className="text-2xl mb-3"
//                 style={{ 
//                   fontFamily: 'Georgia, serif',
//                   color: '#2D5016'
//                 }}
//               >
//                 FUN AND PLAY
//               </h3>
//               <p className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
//                 Med oplevelsek menneske sig fra over hele verden og en festligste miljø, kulturelles og hefterne en internationalt. kulturhet for at sidstele novidades spilke samm.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Join Section */}
//       <section className="mb-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Image */}
//           <div className="rounded-2xl overflow-hidden shadow-lg">
//             <ImageWithFallback
//               src={groupImg}
//               alt="Happy diverse group of students"
//               className="w-full h-auto"
//             />
//           </div>

//           {/* Content */}
//           <div>
//             <h2 
//               className="text-4xl mb-6"
//               style={{ 
//                 fontFamily: 'Georgia, serif',
//                 color: '#1a1a1a'
//               }}
//             >
//               Hvorfor skal du være med?
//             </h2>
            
//             <p className="text-base leading-relaxed mb-6" style={{ color: '#1a1a1a' }}>
//               København er en smeltigdel af kulturer. CULTUREBITE giver dig en unik chance for at smage på nutidens rettet, lytte til musik fra hele verdenen, og lære om forskellige traditioner og sprog. Alksammen motta du udvide dit netværk og dele gode oplevelser med helt særlig atmosfære.
//             </p>

//             <div className="bg-[#2D5016]/5 border-l-4 border-[#2D5016] p-6 rounded-r-xl mb-8">
//               <p className="italic text-base leading-relaxed" style={{ color: '#1a1a1a' }}>
//                 "At være ny studerende betyder, at man skal have et åbent sind. CULTUREBITE er din træning."
//               </p>
//             </div>

//             <button 
//               className="px-8 py-3 rounded-full text-white transition-all hover:opacity-90"
//               style={{ backgroundColor: '#2D5016' }}
//             >
//               Se program
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="mt-20 pt-12 border-t-2" style={{ borderColor: '#E0D7C6' }}>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
//           {/* Contact */}
//           <div>
//             <h3 className="text-lg mb-4" style={{ 
//               fontFamily: 'Georgia, serif',
//               color: '#1a1a1a'
//             }}>
//               Kontakt
//             </h3>
//             <div className="space-y-2 text-sm" style={{ color: '#1a1a1a' }}>
//               <p>eventure@eventure.dk</p>
//               <p>+45 45 45 48 48</p>
//               <p>Fredsgade 18, 2600</p>
//               <p>Frederiksberg, DK</p>
//               <p>CVR: 00000000</p>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg mb-4" style={{ 
//               fontFamily: 'Georgia, serif',
//               color: '#1a1a1a'
//             }}>
//               Genveje
//             </h3>
//             <div className="space-y-2 text-sm">
//               <p><a href="#" className="hover:opacity-70 transition-opacity" style={{ color: '#1a1a1a' }}>Om os</a></p>
//               <p><a href="#" className="hover:opacity-70 transition-opacity" style={{ color: '#1a1a1a' }}>Privatlivspolitik</a></p>
//               <p><a href="#" className="hover:opacity-70 transition-opacity" style={{ color: '#1a1a1a' }}>Job</a></p>
//             </div>
//           </div>

//           {/* Social */}
//           <div>
//             <h3 className="text-lg mb-4" style={{ 
//               fontFamily: 'Georgia, serif',
//               color: '#1a1a1a'
//             }}>
//               SE MERE HER
//             </h3>
//             <div className="flex gap-4">
//               <a 
//                 href="#" 
//                 className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-70 transition-opacity shadow-sm"
//               >
//                 <Instagram className="w-5 h-5" style={{ color: '#1a1a1a' }} />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-70 transition-opacity shadow-sm"
//               >
//                 <Facebook className="w-5 h-5" style={{ color: '#1a1a1a' }} />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-70 transition-opacity shadow-sm"
//               >
//                 <Youtube className="w-5 h-5" style={{ color: '#1a1a1a' }} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Logo */}
//         <div className="text-right">
//           <h2 className="text-3xl tracking-wider" style={{ fontFamily: 'serif', color: '#1a1a1a' }}>
//             EVENTURE
//           </h2>
//         </div>
//       </footer>
//     </div>
//   );
// };
