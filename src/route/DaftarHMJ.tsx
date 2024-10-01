import React from 'react'
import HMJCard from '../components/cards/HMJCard'
import Footer from '../components/Footer';
import Header from '../components/Header';

const DaftarHMJ = () => {
    const dummyArray = () => {
        let array = Array(5);
        for (let i = 0; i < 5; i++) {
            array.push(0);
        }
        return array
    };

    return (
        <div id="daftar_hmj" className="min-h-screen w-screen text-black overflow-x-hidden">
            <div className='bg-[#F1F1F1] fixed left-0 top-0 h-screen w-screen z-[-2]'></div>
            <Header />
            <div className='z-[-1]'>
                <div className='flex flex-col w-full min-h-screen text-6xl pt-[120px] px-[10%]'>
                    
                    <img className='absolute top-[-25%] z-[-1] left-[-50%] w-full object-contain' src='../assets/icons/dot-bg-green.svg' alt="Background dot hejo" />
                    <div className='top-0 left-0'>
                        <div className='flex flex-col space-y-2'>
                            <h1 className='text-black text-2xl md:text-4xl font-bold '>
                                HIMPUNAN MAHASISWA PROGRAM STUDI
                            </h1>
                            <h2 className='text-black text-lg md:text-2xl'>
                                ORGANISASI KEMAHASISWAAN TINGKAT PROGRAM STUDI YANG TERBENTUK ATAS DASAR KEILMUAN YANG SAMA
                            </h2>
                        </div>
                        <div className='h-[50px]' />
                        <div className='flex flex-col space-y-12'>
                            {dummyArray().map((item, index) => (
                                <HMJCard size={'100%'} />
                            ))

                            }
                        </div>


                    </div>

                </div>
                
            <Footer/>
            </div>


        </div>
    )
}

export default DaftarHMJ
