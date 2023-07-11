function solution(name, yearning, photo) {
    let obj = {};       //이름, 추억점수 객체
    
    //객체에 이름 : 추억점수 형식으로 할당
    for (let i in name){
        obj[name[i]] = yearning[i]    
    }
    
    let sum = 0;    //추억점수 연산 변수
    let arr = [];   //연산 결과 저장 배열
    
    //이차원 배열 photo 접근
    for (let i in photo){
        for (let j in photo[i]){
            //obj에 정의된 값만 연산
            if(obj[photo[i][j]] != undefined){
                sum += obj[photo[i][j]]
            }
        }
        
        arr[i] = sum;   //연산 결과 배열에 추가
        sum = 0;        //연산 변수 초기화
    }
    
    
    var answer = arr;
    return answer;
}