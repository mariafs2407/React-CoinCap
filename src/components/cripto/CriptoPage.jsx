import { useParams } from 'react-router-dom';

import './CriptoPage.css';
import usePetition from '../../hooks/usePetition';
import CriptoInfo from './info/CriptoInfo';
import CriptoHistorial from './info/CriptoHistorial';


const CriptoPage = () => {
    // nos devuelve los parametros que existen en la url
    const params = useParams();

    const cripto = usePetition(`assets/${params.id}`)
    const history = usePetition(`assets/${params.id}/history?interval=d1`)

    return (
        <div className='cripto-page-container'>
            { 
                (cripto) && <CriptoInfo cripto ={cripto}/>}

            <div className='history'>
                {
                    (history) && <CriptoHistorial history={history}/>}

            </div>
        </div>
    );
}

export default CriptoPage; 