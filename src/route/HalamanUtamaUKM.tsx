import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { TextHeader1 } from '../components/text-header/TextHeaders'
import LinkList from '../components/lists/LinkList'

const HalamanUtamaUKM = () => {

    const links = [
        { name: 'RUMPUN AGAMA', url: '/ukm/rumpun agama' },
        { name: 'RUMPUN SENI', url: '/ukm/rumpun seni' },
        { name: 'OLAHRAGA DAN KESEHATAN', url: '/ukm/olahraga dan kesehatan' },
        { name: 'PENDIDIKAN', url: '/ukm/pendidikan' },
        { name: 'KAJIAN', url: '/ukm/kajian' },
        { name: 'MEDIA', url: '/ukm/media' }
    ]
    return (
        <div id="halaman-utama-ukm" className="min-h-screen w-screen text-black overflow-x-hidden">
            <div className='bg-[#F1F1F1] fixed left-0 top-0 h-screen w-screen z-[-2]'></div>
            <Header />
            <div className='z-[-1]'>
                <div className='flex flex-col w-full min-h-screen text-2xl md:text-4xl pt-[120px] px-[10%]'>
                    <div className='top-0 left-0'>
                        <TextHeader1 judul={`UNIT KEGIATAN MAHASISWA`} subjudul='Organisasi kemahasiswaan tingkat kampus yang bertujuan untuk mengembangkan minat, bakat dan keahlian tertentu' />
                        <div className='h-[3rem] sm:h-[6rem]' />
                        <div className='flex flex-col space-y-12'>
                            <h2 className='font-bold md:text-3xl text-xl'>RUMPUN KATEGORI UNIT KEGIATAN MAHASISWA</h2>
                            <LinkList links={links}/>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HalamanUtamaUKM
