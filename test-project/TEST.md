Module 변경 ( 신규 프로젝트 )
```typescript

//반환
//...qResult; 

// 기존 Q1 = DATA.find(d => d.NAME === "Q1") ...



let QNumber: { [key: string]: any } = {
    Q1 : null,
    Q2 : null,
    Q3 : null,
    Q4 : null,
    Q5 : null,
    Q6 : null,
    Q7 : null,
    DQ1 : null,
    DQ2 : null,
    DQ3 : null,
    DQ4 : null,
    DQ5 : null,
    Q5_1 : null,
    Q7_1 : null,
}



for(let key in QNumber){
    QNumber[key] =  DATA.find(d => d.NAME === key);
}

const {Q1,Q2,Q3,Q4,Q5,Q6,Q7,DQ1,DQ2,DQ3,DQ4,DQ5,Q5_1,Q7_1} = QNumber;

const qResult = {
  Q1 : Q1 ? Q1['1'] || null : null,
  Q2 : Q2 ? Q2['1'] || null : null,
  Q3 : Q3 ? Q3['1'] || null : null,
  Q4 : Q4 ? Q4['1'] || null : null,
  Q5 : Q5 ? Q5['1'] || null : null,
  Q6 : Q6 ? Q6['1'] || null : null,
  Q7 : Q7 ? Q7['1'] || null : null,
  Q5_1 : Q5_1 ? Q5_1['1'] || null : null,
  Q7_1 : Q7_1 ? Q7_1['1'] || null : null,
  DQ1 : DQ1 ? DQ1['1'] || null : null,
  DQ2 : DQ2 ? DQ2['1'] || null : null,
  DQ3 : DQ3 ? DQ3['1'] || null : null,
  DQ4 : DQ4 ? DQ4['1'] || null : null,
  DQ5 : DQ5 ? DQ5['1'] || null : null,

}


const MISSIONS = DATA.find(d => d.NAME === 'Q0');

//------------------------

//기존 enum
export const QUESTION_NUMBER : {[qNumberString:string]:any} = {
    GENERAL : 'Q2',
    UNDERSTAND : 'Q3',
    REJOIN : 'Q4',
    COMMUNICATION :'Q7',
    INFORMATIONROOT: 'Q1',

}

//기존 : enum을 통한 메소드 처리 ( async function 1 ~3 ) 


// async getChartData(param: IParam,questionNumber:string) {
//     try {
//         // console.time('a')
//         const client = await DB.MongoConn.getInstance.connect();
//         const missionsPromise = client.db(DB.MOFA_NAME).collection<IMissions>(DB.COLLECTIONS.MISSIONS).find({ code: { $ne: '999' } }).toArray();
//         const promises = Promise.all([
//             this.satisPromise(client, param, QUESTION_NUMBER[questionNumber]),
//             missionsPromise
//         ]);
//         const [general, missions] = await promises;
//
//         const totalObj = this.calcAnswer(general);
//         const scoreList = this.missionsJoin(general, missions);
//         // console.timeEnd('a')
//         return {
//             result: true,
//             totalObj,
//             scoreList,
//         }
//     } catch (e) {
//         throw e;
//     }
// }


```