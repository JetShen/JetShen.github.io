"use client";
import React, { useState } from 'react';
import {ReactIcon, RustIcon, CSSIcon, PostgresIcon, SQLIcon, TauriIcon}  from '@/app/components/svg/icons';

const carouselBG = [
  { src: 'bg-1.png', name: 'Inicio', info: 'Seccion para publicar y ver post de usuarios' },
  { src: 'bg-2.png', name: 'Buscar', info: 'Buscar usuarios y post mediante una query' },
  { src: 'bg-3.png', name: 'Iniciar Sesion', info: 'Verificar datos de sesion comparando el hash de la contraseña ingresada con el hash almacenado' },
  { src: 'bg-4.png', name: 'Notificaciones', info: 'Busca y actualiza el estado de notificaciones del usuario' },
];

const carouselLibrary = [
  { src: 'library-1.png', name: 'Buscar Libro', info: 'Buscar en la base de datos el codigo ISBN del Libro' },
  { src: 'library-2.png', name: 'Generar Prestamo', info: 'Verificar e insertar los datos junto a una imagen del Libro' },
  { src: 'library-3.png', name: 'Buscar Prestamo', info: 'Buscar codigo unico de usuario/libro' },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState(carouselBG);
  const [projectName, setProjectName] = useState('BG Social Media');
  const [selectedProject, setSelectedProject] = useState<string | null>('BG');

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const selectCarousel = (name: string) => {
    setSelectedProject(name);
    setCurrentIndex(0);
    if (name === 'BG') {
      setCarouselImages(carouselBG);
      setProjectName('BG Social Media');
    } else if (name === 'Library') {
      setCarouselImages(carouselLibrary);
      setProjectName('Library App');
    }
  };

  return (
    <main className="bg-primary text-textPrimary min-h-screen p-4 sm:p-8 overflow-hidden">
      {/* Background shapes */}
      <div className='bg-blue-700 w-[200px] h-[150px] sm:w-[590px] sm:h-[400px] rounded-[100%] 
                          absolute z-[0] top-[20%] left-[20%] translate-x-[-50%] translate-y-[50%] blur-[50px] sm:blur-[90px] '></div>
      <div className='bg-purple-800 w-[200px] h-[150px] sm:w-[590px] sm:h-[400px] rounded-[100%] 
                          absolute z-[0] top-[40%] left-[80%] translate-x-[-100%] translate-y-[50%] blur-[50px] sm:blur-[90px] '></div>
      
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-9 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold">Fernando Thiele</h1>
          <p className="text-lg sm:text-xl mt-4 text-textSecondary">Programador con interés en el desarrollo BackEnd</p>
        </div>
      </div>

      <div className="sm:px-8 mt-16 md:mt-20">
        <div className="mx-auto max-w-8xl lg:px-8">
          <div className='flex flex-col sm:flex-row justify-around text-center sm:text-left'>
            <h1 className='text-xl sm:text-2xl font-bold'>Proyecto: {projectName}</h1>
            <h1 className='text-xl sm:text-2xl font-bold'>Proyectos</h1>
          </div>
          <div className="flex flex-col sm:flex-row mt-8 space-y-6 sm:space-y-0 sm:space-x-9">
            {/* Carousel Section */}
            <div id="carouselExampleCaptions" className="relative w-full sm:w-3/5 overflow-hidden" data-twe-carousel-init data-twe-ride="carousel">
              <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-twe-carousel-indicators>
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-twe-target="#carouselExampleCaptions"
                    data-twe-slide-to={index}
                    className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${index === currentIndex ? 'opacity-100' : ''}`}
                    aria-current={index === currentIndex ? 'true' : 'false'}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setCurrentIndex(index)}
                  ></button>
                ))}
              </div>
              <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${index === currentIndex ? 'block' : 'hidden'}`}
                    data-twe-carousel-item
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img src={image.src} className="block w-full" alt={`Slide ${index + 1}`} />
                    <div className="absolute bottom-5 hidden py-5 text-center text-white md:block w-full bg-opacity-70 bg-black">
                      <h5 className="text-xl">{image.name}</h5>
                      <p>{image.info}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-twe-target="#carouselExampleCaptions"
                data-twe-slide="prev"
                onClick={handlePrev}
              >
                <span className="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
              </button>
              <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-twe-target="#carouselExampleCaptions"
                data-twe-slide="next"
                onClick={handleNext}
              >
                <span className="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
              </button>
            </div>

            {/* List of Projects Section */}
            <div className="z-[2] w-full sm:w-2/5 h-[calc(85vh-320px)] overflow-y-scroll no-scrollbar">
              <div className="flex flex-col gap-5 p-4">
                <div className={`border-2 ${selectedProject === 'BG' ? 'neon' : 'border-gray-500'} 
                          hover:shadow-lg group rounded-2xl cursor-pointer relative 
                          transition duration-300 
                          z-[2]
                           h-40 sm:h-80 lg:col-span-3`} onClick={() => selectCarousel('BG')}>
                  <img src="bg-3.png" alt="Project" className="w-full h-full object-cover rounded" />
                  <div className='absolute bottom-5 hidden py-5 text-center text-white md:block w-full bg-opacity-70 bg-black'>
                    <h5 className="text-xl">Red Social Clon de Twitter</h5>
                    <div className='flex text-center justify-center flex-row gap-1 '>
                      <ReactIcon color="#ffffff" size={30} />
                      <CSSIcon color="#ffffff" size={30} />
                      <PostgresIcon color="#ffffff" size={30} />
                    </div>
                  </div>
                </div>
                <div className={`border-2 ${selectedProject === 'Library' ? 'neon' : 'border-gray-500'} 
                          hover:shadow-lg group rounded-2xl cursor-pointer relative
                          transition duration-300
                          z-[2]
                           h-40 sm:h-80 lg:col-span-3`} onClick={() => selectCarousel('Library')}>
                  <img src="library-1.png" alt="Project" className="w-full h-full object-cover rounded" />
                  <div className='absolute bottom-5 hidden py-5 text-center text-white md:block w-full bg-opacity-70 bg-black'>
                    <h5 className="text-xl">Aplicacion para Biblioteca</h5>
                    <p className='flex text-center justify-center flex-row gap-1 '>
                      <RustIcon color="#ffffff" size={30} />
                      <SQLIcon color="#ffffff" size={30} />
                      <TauriIcon color="#ffffff" size={30} />
                      <ReactIcon color="#ffffff" size={30} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:px-8 mt-24 md:mt-28 z-[2]">
        <div className="mx-auto max-w-7xl lg:px-8 ">
        
          <h2 className="text-2xl sm:text-3xl font-bold text-center">Frameworks and Tools</h2>
          <div className="flex justify-center mt-8 space-x-4">
            <div className="bg-cardBackground p-4 rounded-lg w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
              <ReactIcon color="#FFFFFF" size={50} />
            </div>
            <div className="bg-cardBackground p-4 rounded-lg w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
              <RustIcon color="#FFFFFF" size={50} />
            </div>
            <div className="bg-cardBackground p-4 rounded-lg w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
              <CSSIcon color="#FFFFFF" size={50} />
            </div>
            <div className="bg-cardBackground p-4 rounded-lg w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
              <PostgresIcon color="#FFFFFF" size={50} />
            </div>
            <div className="bg-cardBackground p-4 rounded-lg w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
              <SQLIcon color="#FFFFFF" size={50} />
            </div>
            <div className="bg-cardBackground p-4 rounded-lg w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
              <TauriIcon color="#FFFFFF" size={50} />
            </div>

            
          </div>
          <div className='bg-cyan-500 w-[2100px] h-[100px] rounded-[100%]
                          relative left-[50%] translate-x-[-50%] translate-y-[100%] blur-[90px] '></div>
        </div>
      </div>
      
    </main>
  );
}
