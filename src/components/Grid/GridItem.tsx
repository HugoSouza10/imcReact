
import { typeCategory } from '../../Helpers/imc';
import styles from '../Grid/Grid.module.css';

import downImagem from '../../assets/down.png';
import upImagem from '../../assets/up.png';

//Tipando o item!
type props = {
    item:typeCategory; //Defina aqui a typagem
}

export const GridItem = ({item}:props)=>{
   
    return(
        <div className={styles.block} style={{backgroundColor:item.cor}}>
          <div className={styles.iconBlock}>
               <img src={item.icon==='down'? downImagem: upImagem} alt="" width={32} />
          </div>
          <div className={styles.blockInfo}>
                <h2>{item.title}</h2>
                <p>{`IMC está entre: ${item.imc[0]} e ${item.imc[1]}`}</p>
          </div>
        </div>
    )
}