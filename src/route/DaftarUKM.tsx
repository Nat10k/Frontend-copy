import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import UKMCard from '../components/cards/UKMCard';
import { useParams } from 'react-router-dom';
import { TextHeader1 } from '../components/text-header/TextHeaders';

const DaftarUKM = () => {
    const {kategori} = useParams();
    const dummyArray = () => {
        let array = Array(5);
        for (let i = 0; i < 5; i++) {
            array.push(0);
        }
        return array
    };
    
    const initialContent = { 
        [`HARI JADI`]: `19 Agustus 2005`,
        'VISI': 'Lorem Ipsum Dolor sit Amet',
        'PROGRAM KERJA': '- Proker 1 Lorem Ipsum\n\n- Proker 2 Lorem Ipsum\n\n- Proker 3 Lorem Ipsum\n\n- Proker 4 Lorem Ipsum\n\n',
        'RUANG SEKRETARIAT': 'Lorem ipsum dolor sit amet consectetur. Nibh aliquet blandit ornare convallis interdum lacus mauris id.',
        'MEDIA SOSIAL': '- [Instagram](https://instagram.com)\n\n- [Twitter](https://twitter.com)\n\n- [Line](https://line.id)\n\n- [Whatsapp](https://web.whatsapp.com)\n\n- [Website](https://km.itb.ac.id)'
    }

    return (
        <div id="daftar_ukm" className="min-h-screen w-screen text-black overflow-x-hidden">
            <div className='bg-[#F1F1F1] fixed left-0 top-0 h-screen w-screen z-[-2]'></div>
            <Header />
            <div className='z-[-1]'>
                <div className='flex flex-col w-full min-h-screen text-2xl md:text-4xl pt-[120px] px-[10%]'>

                    <img className='absolute top-[-25%] z-[-1] left-[-50%] w-full object-contain' src='../assets/icons/dot-bg-green.svg' alt="Background dot hejo"/>
                    <div className='top-0 left-0'>
                        <TextHeader1 judul={`${kategori.toUpperCase()}`} subjudul={`Lorem ipsum dolor sit amet consectetur. Velit sed eget enim proin. Sit venenatis enim
                             convallis lorem amet nibh. Suspendisse fringilla mattis enim sodales sodales adipiscing eu. Tincidunt odio eget elementum gravida neque. Porttitor vestibulum risus 
                             velit luctus placerat enim fringilla elementum libero. Mi nunc sem velit et pretium. Fusce amet molestie mollis vestibulum purus diam commodo vel a. Cras pretium magna 
                             placerat porta. Sit ipsum semper hac id mus commodo quis duis tincidunt.`}/>
                        <div className='h-[3rem] sm:h-[6rem]' />
                        <div className='flex flex-col space-y-12'>
                            {dummyArray().map((item, index) => (
                                <UKMCard 
                                size={'100%'} 
                                key={index} 
                                initialContent={initialContent}  />
                            ))

                            }
                        </div>


                    </div>

                </div>
            </div>
            <Footer />

        </div>
    )
}

export default DaftarUKM
