const arr = [1, 2, 3, 4, 1, 0, 2, 2];
let size=arr.length;
let result=[[]];


const divide = (arr, n) => {
  // Write your code here
	for(let i=0; i<size; i++){
		let lastR=result[result.length-1]
		let sum=lastR.reduce((acc,a)=>acc+a,0)
		
		if(arr[i]>n){
			continue
		}
			
		if(sum+arr[i]<=n){
			lastR.push(arr[i]);
		}
		else{
			result.push([arr[i]]);
		}
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
