import React, { useReducer } from 'react';
import { BaseCard } from './BaseCard';
import { CardInitState, CardReducer } from '../../reducers/CardReducers';
import MarkdownParser from '../MarkdownParser';
import { UKM, UKMCardProps } from '../interface/AllInterfaceAndTypes';

const templateUKM: UKM = {
    singkatan: 'UKM',
    kepanjangan: 'Nama-panjang-UKM',
    penjelasan: `Penjelasan Singkat UKM. Lorem ipsum dolor sit amet consectetur. Nibh aliquet blandit ornare convallis interdum lacus mauris id. Tellus erat blandit mauris viverra dolor. Suscipit donec sed mattis duis. Scelerisque lacus id vitae risus et ac sit bibendum pellentesque.`,
};

const UKMCard: React.FC<UKMCardProps> = (props) => {
    const { ukm, initialContent = {}, ...restProps } = props;
    const [state, dispatch] = useReducer(CardReducer, {
        ...CardInitState,
        content: initialContent});
    const { singkatan = templateUKM.singkatan, kepanjangan = templateUKM.kepanjangan, penjelasan = templateUKM.penjelasan } = ukm || {};

    return (
        <>
            <BaseCard
                {...restProps}
                singkatan={singkatan}
                kepanjangan={kepanjangan}
                penjelasan={penjelasan}
                onClick={()=>dispatch({type: 'TOGGLE'})}
            />
            {state.opened && (
                <div className='w-full justify-start space-y-4'>
                    {Object.keys(state.content).map(key => (
                        <div key={key}>
                            <h3 className='mb-2'>{key}</h3>
                            <MarkdownParser content={state.content[key]} />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default UKMCard;
