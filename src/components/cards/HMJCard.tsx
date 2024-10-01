import React from 'react'
import { BaseCard } from './BaseCard';
import { HMJ, HMJCardProps } from '../interface/AllInterfaceAndTypes';


const templateHMJ: HMJ = {
    singkatan: 'HMJ',
    kepanjangan: 'Nama-panjang-HMJ',
    penjelasan: `Penjelasan Singkat HMJ. Lorem ipsum dolor sit amet consectetur. Nibh aliquet blandit ornare convallis interdum lacus mauris id. Tellus erat blandit mauris viverra dolor. Suscipit donec sed mattis duis. Scelerisque lacus id vitae risus et ac sit bibendum pellentesque.`
};

const HMJCard: React.FC<HMJCardProps> = (props) => {
    const { hmj, ...restProps } = props;
    const { singkatan = templateHMJ.singkatan, kepanjangan = templateHMJ.kepanjangan, penjelasan = templateHMJ.penjelasan } = hmj || {};

    return <BaseCard
        {...restProps}
        singkatan={singkatan}
        kepanjangan={kepanjangan}
        penjelasan={penjelasan}
    />
}

export default HMJCard
