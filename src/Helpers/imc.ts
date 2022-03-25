
export type typeCategory = {
    title:string;
    cor: string;
    icon: 'down' | 'up';
    imc:number[];
    imcUser?:number;
}
//Esse imcUser vai ser usado quando eu manipular a categoria e usa-lo!

export const Category:typeCategory[] = [
    {title: 'Magreza', cor:'#96a3ab', icon:'down', imc:[0, 18.5]},
    {title:'Normal', cor:'#0ead69', icon:'up', imc:[18.6, 24.9] },
    {title: 'Sobrepeso', cor:'#e2b039', icon:'down', imc:[25, 30] },
    {title: 'Obesidade', cor:'#c3423f', icon:'down', imc:[30.1, 99]}
];


export const CalculateIMC = (height:number, weight:number) =>{
     let imc = weight/(height*height);
     
     for(let i=0; i<Category.length; i++){
        if(imc > Category[i].imc[0] && imc < Category[i].imc[1]){
           Category[i].imcUser = imc;
           return Category[i];
        } 
     }

     return null;
     
}

