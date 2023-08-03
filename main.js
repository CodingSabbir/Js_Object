// object
    // let sabbir={
    // fullName:'sabbir rahman',
    // id:100,
    // cgp:3.55,
    // sub:'cse'
    // };

    // console.log(sabbir);


// ami jodi knu akti jinis k nidisto kore dekte chai jemon ami sabbir er sudu cgp dekbo / 2ti upai a deka jai akta . r akta []
    // let sabbir={
    //     fullName:'sabbir rahman',
    //     id:100,
    //     cgp:3.55,
    //     sub:'cse'
    //     };

    //    console.log( sabbir.cgp);
    //    console.log(sabbir['cgp']);


//   ami jodi notun kore aro item add korte chai tahole amra add korte parbo  
    // let sabbir={
    //     fullName:'sabbir rahman',
    //     id:100,
    //     cgp:3.55,
    //     sub:'cse'
    //     };
    //     sabbir.job='student';
    //     sabbir.address='bogura';
    //     console.log(sabbir);


// ami jodi knu value k change korte chai setao korte parbo
    // let sabbir={
    //     fullName:'sabbir rahman',
    //     id:100,
    //     cgp:3.55,
    //     sub:'cse'
    //     };
    //   sabbir.fullName='sakib hasan';
    //   sabbir.id=102;
    //   console.log(sabbir);


// object er maje function k save kore rakha jai object er vitote function k item hisabe rakha 
    // let sabbir={
    //     fullName:'sabbir rahman',
    //     id:100,
    //     cgp:3.55,
    //     sub:'cse'
    //     };
    //  sabbir.welcome=function(){
    //     console.log('hello');
    //  };
    //  sabbir.welcome()


// object er sob gula item apni chaile dekte parben je ki ki item add kora hoice
    //   let sabbir={
    //     fullName:'sabbir rahman',
    //     id:100,
    //     cgp:3.55,
    //     sub:'cse',
    //     welcome:function(){
    //         console.log('hello');
    //      }
    //     };
     
    //     for(item in sabbir){
    //         console.log(item)
    //     };
      

// object er maje arry add korte parben and array moto kore index number diye dekteo parben
    // let object={
    //     name:['sabbir','sakib','rakib','shohan'],
    //     roll:[15,10,50,12],
    //     sub:['bangla','english','math','history']
    // };
    // console.log(object);
    // console.log(object.name[2]);


// object er maje arry  kore value change korte parben  index number diya
    // let objectArry={
    //     name:['sabbir','sakib','rakib','shohan'],
    //     roll:[15,10,50,12],
    //     sub:['bangla','english','math','history']
    // };
    // console.log(objectArry.name[3]='rafi');
    // console.log(objectArry);


// Array vitore apni chaile object oh rakte parben
// let arrObject=[

//     'sabbir',
//     {
//         name:'tamim',
//         id:100,
//         sub:'English'
//     },
//     'dark'
// ];
// console.log(arrObject[1]);
// console.log(arrObject);

// array maje object er value change oh korte parben add korte parben
let arrObject=[

    'sabbir',
    {
        name:'tamim',
        id:100,
        sub:'English'
    },
    'dark'
];
// add kora
arrObject[3]='rana'
arrObject[1].cgp=3.77
console.log(arrObject);

// change kora
arrObject[1].id=300;
console.log(arrObject)