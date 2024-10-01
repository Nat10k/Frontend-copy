import React, { FC, useReducer } from 'react'
import { BaseCard } from './BaseCard';
import { CardReducer, CardInitState } from '../../reducers/CardReducers';
import MarkdownParser from '../MarkdownParser';
import { BSO, BSOCardProps } from '../interface/AllInterfaceAndTypes';

const templateBSO: BSO = {
    singkatan: 'BSO',
    kepanjangan: 'Nama-panjang-BSO',
    penjelasan: `Penjelasan Singkat BSO. Lorem ipsum dolor sit amet consectetur. Nibh aliquet blandit ornare convallis interdum lacus mauris id. Tellus erat blandit mauris viverra dolor. Suscipit donec sed mattis duis. Scelerisque lacus id vitae risus et ac sit bibendum pellentesque.`,
};

    /**
     * BSOCard is a component that extends BaseCard to display data of a BSO.
     * It has a toggleable content section that can be controlled by the parent component.
     * The content section will be displayed when the component is clicked.
     * The content section will contain multiple sections, each section will have a title and a content.
     * The content will be rendered using MarkdownParser.
     * The component also accepts an initialContent prop that can be used to set the initial content of the component.
     * If the initialContent prop is not provided, the component will use the templateBSO as the initial content.
     * @param {BSOCardProps} props - The props of the component.
     * @returns {ReactElement} - The rendered component.
     */
const BSOCard: FC<BSOCardProps> = (props) => {
    const { bso: bso, initialContent = {}, ...restProps } = props;
    const [state, dispatch] = useReducer(CardReducer, {
        ...CardInitState,
        content: initialContent});
    const { singkatan = templateBSO.singkatan, kepanjangan = templateBSO.kepanjangan, penjelasan = templateBSO.penjelasan } = bso || {};

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

export default BSOCard
