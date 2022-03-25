
import styles from './App.module.css';
import imagemLogo from './assets/logo.png';
import leftarrow from './assets/leftarrow.png';
import {GridItem } from './components/Grid';
import { ChangeEvent, useState } from 'react';
import { typeCategory, CalculateIMC, Category } from './Helpers/imc';


const App = () =>{

  const [heightFild, setFildHeight] = useState<number>(0);
  const [weightFild, setFildWeight] = useState<number>(0);
  const [resultCategory, setResultCategory] = useState<typeCategory | null>(null);
  const [disabledValue, setDisabled] = useState<boolean>(false);


  const handdleCalcule = () =>{
     if(heightFild && weightFild){
        setResultCategory(CalculateIMC(heightFild, weightFild));
        setDisabled(true);
        
     }else{
         alert('Informe os dados nos campos!');
     }
  }

  const handdleClean = () =>{
     setResultCategory(null);
     setFildWeight(0);
     setFildHeight(0);
     setDisabled(false);

  }




  return (
    <header>
        <div className={styles.headerContainer}>
            <img src={imagemLogo} alt="" width={120} />
        </div>
        <main>
          <div className={styles.mainContainer}>
              <div className={styles.leftSide}>
                  <div className={styles.info}>
                      <h1>Calcule o seu IMC.</h1>
                      <p>O índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal.</p>
                  </div>
                  <input type="number"
                      onChange={e=>setFildHeight(parseFloat(e.target.value))}
                      value={heightFild>0 ? heightFild: ''}
                      placeholder='Digite a sua altura Ex: 1.5(Metros)'
                      disabled={disabledValue}
                      
                  />
                  <input type="number" 
                      value={weightFild>0?weightFild:''}
                      onChange={e=>setFildWeight(parseFloat(e.target.value))}   
                      placeholder='Digite seu peso Ex: 75.3(kg/m²)'
                      disabled={disabledValue}
                      
                  />

                  <button  disabled={disabledValue} onClick={handdleCalcule}>Calcular</button>
              </div>
            

             {resultCategory === null &&
                <div className={styles.rightSide}>
                    <div className={styles.grid}>
                        {Category.map((item, key)=>
                           <GridItem key={key} item={item}/>
                        )}
                    </div>  
                   
                </div>
             }

             {resultCategory &&
                    <div className={styles.rightSide}>
                        <div onClick={handdleClean} className={styles.before}>
                            <img src={leftarrow} width={70} height={70}/>
                        </div>
                       <div className={styles.grid2}>
                          <GridItem item={resultCategory}/>
                       </div>  
                   </div>    
             }
              
          </div>
        </main>
    </header>
  )
}


export default App;