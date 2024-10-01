import React from 'react'
import MainContainer from '../components/MainContainer'

const MWAWM = () => {
    return (
        <MainContainer>
            <div className='flex flex-row w-full'>
                <img className='absolute top-[-25%] z-[-1] left-[-20%] w-[80%] object-contain' src='../assets/icons/dot-bg-orange-real.svg' alt="Background dot orange" />
                <img className='absolute z-[-1] top-[20%] right-[7.5%] w-[35%] object-contain' src='../assets/icons/bg-decorations-a.png' alt="Background bunga-bunga" />
                <img className='absolute z-[-1] justify-self-center top-[100%] sm:top-[150%] right-0 w-[35%] object-contain' src='../assets/icons/dot-bg-green-tengah.png' alt="Background dot hijau tengah" />
                <div className='flex flex-col space-y-20 md:space-y-28 w-full'>
                    <div className='space-y-4 mt-10 md:mt-16'>
                        <h1 className='max-w-[60%]'>WMA WM ITB</h1>
                        <h2 className='font-medium max-w-[60%]'>MAJELIS WALI AMANAT - WAKIL MAHASISWA</h2>
                    </div>
                    <div className='space-y-4'>
                        <h1>Program Kerja</h1>
                        <ul className='list-disc pl-6'>
                            <li><p>Proker 1 Lorem ipsum dolor sit amet consectetur.</p></li>
                            <li><p>Proker 2 Lorem ipsum dolor sit amet consectetur.</p></li>
                            <li><p>Proker 3 Lorem ipsum dolor sit amet consectetur.</p></li>
                            <li><p>Proker 4 Lorem ipsum dolor sit amet consectetur.</p></li>
                        </ul>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between w-full space-y-20 md:space-y-0'>
                        <div className='space-y-4'>
                            <h1>Visi</h1>
                            <ul className='list-disc pl-6'>
                                <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <h1>Misi</h1>
                            <ul className='list-disc pl-6'>
                                <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div className='flex flex-row w-full items-center space-x-4'>
                            <div className='w-[20px] h-[20px] rounded-full bg-[#FD9419]'></div>
                            <h1>DEPARTEMEN WMA WM ITB</h1>
                        </div>
                        <div className='space-y-8'>
                            <div>
                                <h2 className='font-bold'>PSDT</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Elit pharetra scelerisque pellentesque purus aliquam pellentesque eros.
                                    Diam amet tortor mauris enim integer quisque nibh consectetur.
                                </p>
                            </div>
                            <div>
                                <h2 className='font-bold'>KESEKJENAN</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Elit pharetra scelerisque pellentesque purus aliquam pellentesque eros.
                                    Diam amet tortor mauris enim integer quisque nibh consectetur.
                                </p>
                            </div>
                            <div>
                                <h2 className='font-bold'>DEPARTEMEN KAJIAN</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Elit pharetra scelerisque pellentesque purus aliquam pellentesque eros.
                                    Diam amet tortor mauris enim integer quisque nibh consectetur.
                                </p>
                            </div>
                            <div>
                                <h2 className='font-bold'>MEDKOMINFO</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Elit pharetra scelerisque pellentesque purus aliquam pellentesque eros.
                                    Diam amet tortor mauris enim integer quisque nibh consectetur.
                                </p>
                            </div>
                            <div>
                                <h2 className='font-bold'>RELASI</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Elit pharetra scelerisque pellentesque purus aliquam pellentesque eros.
                                    Diam amet tortor mauris enim integer quisque nibh consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div className='flex flex-row w-full items-center space-x-4'>
                            <div className='w-[20px] h-[20px] rounded-full bg-[#FFDE17]'></div>
                            <h1>KONTAK</h1>
                        </div>
                        <div className='space-y-8'>
                            <ul>
                                <li>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div className='flex flex-row w-full items-center space-x-4'>
                            <div className='w-[20px] h-[20px] rounded-full bg-[#8EEBD8]'></div>
                            <h1>ALAMAT</h1>
                        </div>
                        <div className='space-y-8'>
                            <p>Lorem ipsum dolor sit amet consectetur. Elit pharetra scelerisque pellentesque purus aliquam pellentesque eros.
                                Diam amet tortor mauris enim integer quisque nibh consectetur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default MWAWM
