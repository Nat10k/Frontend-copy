import React from 'react'
import Header from '../components/Header'
import { TextHeader2 } from '../components/text-header/TextHeaders'
import LinkList from '../components/lists/LinkList'
import Footer from '../components/Footer'

const HalamanUtamaBSO = () => {
    const links = [
        { name: 'PAGUYUBAN', url: '/bso/paguyuban' },
        { name: 'KEPROFESIAN', url: '/bso/keprofesian' },
        { name: 'MASYARAKAT DAN LINGKUNGAN', url: '/bso/masyarakat dan lingkungan' },
        { name: 'KESEJAHTERAAN', url: '/bso/kesejahteraan' },
        { name: 'SELF-DEVELOPMENT', url: '/bso/self-development' },
    ]
    return (
        <div id="halaman-utama-bso" className="min-h-screen w-screen text-black overflow-x-hidden">
            <div className='bg-[#F1F1F1] fixed left-0 top-0 h-screen w-screen z-[-2]'></div>
            <Header />
            <div className='z-[-1]'>
                <div className='flex flex-col w-full min-h-screen text-6xl pt-[120px] px-[10%]'>
                    <div className='top-0 left-0'>
                        <TextHeader2 judul={`Badan Semi Otonom`} subjudul='Badan Semi Otonom (BSO) merupakan badan organisasi yang mengkoordinir pelaksanaan suatu kegiatan spesifik yang pernah dilaksanakan pada suatu kepengerusan Kabinet KM, memiliki urgensi yang tinggi untuk tidak terpengaruh oleh dinamika kepengurusan Kabinet KM ITB, dan secara konsep tidak menjalankan fungsi dasar Kabinet KM ITB' />
                        <div className='h-[3rem] sm:h-[6rem]' />
                        <div className='flex flex-col space-y-12'>
                            <h2 className='font-bold text-3xl'>KATEGORI BSO</h2>
                            <LinkList links={links}/>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HalamanUtamaBSO
